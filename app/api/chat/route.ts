
import { NextRequest, NextResponse } from "next/server";
import { profile, projects, research } from "@/lib/portfolio";

export const runtime = "nodejs";

const formatList = (items?: string[]) =>
  Array.isArray(items) && items.length > 0
    ? items.join("; ")
    : "Not specified in the portfolio.";

const knowledge = `
PROFILE
Name: ${profile.name}
Role: ${profile.role}
Location: ${profile.location}
Summary: ${profile.summary}
About: ${profile.about}

EDUCATION
${(profile.education ?? [])
  .map(
    (e) =>
      `${e.institution}: ${e.program}. ${e.detail}`
  )
  .join("\n")}

INTERESTS
${formatList(profile.interests)}

PROJECTS
${projects
  .map(
    (p) => `
Project: ${p.title}
Year: ${p.year ?? "Not specified"}
Category: ${p.category}
Status: ${p.status}
Summary: ${p.summary}
Description: ${p.description}
Problem: ${p.problem ?? "Not specified"}
Approach: ${formatList(p.approach)}
Technologies: ${formatList(p.technologies)}
Contributions: ${formatList(p.contributions)}
Limitations: ${p.limitations ?? "Not specified"}
`
  )
  .join("\n")}

RESEARCH
${research
  .map(
    (r) => `
Title: ${r.title}
Type: ${r.type}
Status: ${r.status}
Description: ${r.description}
`
  )
  .join("\n")}
`;

const systemPrompt = `
You are Ask Emerson, the AI portfolio assistant for Emerson Sousa.

YOUR PURPOSE
Help recruiters, developers, researchers and visitors understand Emerson's academic background, professional experience, technical skills, projects and research.

SOURCE OF TRUTH
Use only the portfolio information provided below.
Do not invent or assume facts.
Never fabricate employers, responsibilities, dates, degrees, awards, publications, metrics, technologies or project results.
If information is missing, explain that it is not specified in the portfolio.

HOW TO ANSWER
- Respond in the same language as the visitor: Portuguese or English.
- Do not use bold in the text formatting.
- Be friendly, natural, professional and confident without exaggerating.
- Prefer direct answers over generic introductions.
- When discussing a project, explain its purpose, technical approach and relevant technologies when that information is available.
- For technical questions, provide enough detail to demonstrate understanding, but avoid unnecessary jargon.
- When useful, connect related projects or experiences.
- Distinguish completed projects from work in progress and planned features.
- Do not describe a planned feature as already implemented.
- Do not claim that COMUM has demonstrated learning improvements unless the portfolio provides evaluation evidence.
- Do not describe academic research as a published paper unless its status explicitly says so.
- If asked about a skill, distinguish practical project experience from general interest or familiarity.
- If a visitor asks something unrelated to Emerson's portfolio, politely redirect the conversation.

IDENTITY
You are an assistant representing the information published in Emerson's portfolio. Do not claim to be Emerson himself.

PORTFOLIO INFORMATION:
${knowledge}
`;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "The portfolio assistant is not configured yet. Please add GROQ_API_KEY to .env.local and restart the server."
        },
        { status: 503 }
      );
    }

    let body: { messages?: unknown };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request. Please try again." },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "Invalid message format." },
        { status: 400 }
      );
    }

    const safeMessages = body.messages
      .filter(
        (message: any) =>
          message &&
          ["user", "assistant"].includes(message.role) &&
          typeof message.content === "string" &&
          message.content.trim().length > 0
      )
      .slice(-10)
      .map((message: any) => ({
        role: message.role as "user" | "assistant",
        content: message.content.trim().slice(0, 1200)
      }));

    if (
      safeMessages.length === 0 ||
      safeMessages[safeMessages.length - 1].role !== "user"
    ) {
      return NextResponse.json(
        { error: "Please send a question." },
        { status: 400 }
      );
    }

    const model =
      process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          temperature: 0.3,
          max_tokens: 700,
          messages: [
            {
              role: "system",
              content: systemPrompt
            },
            ...safeMessages
          ]
        })
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Groq API error:", data?.error?.message);

      return NextResponse.json(
        {
          error:
            "The assistant could not generate a response right now. Please try again."
        },
        { status: 502 }
      );
    }

    const answer = data?.choices?.[0]?.message?.content;

    if (typeof answer !== "string" || !answer.trim()) {
      return NextResponse.json(
        { error: "I couldn't generate an answer. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { answer: answer.trim() },
      {
        headers: {
          "Cache-Control": "no-store"
        }
      }
    );
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong while contacting the assistant. Please try again."
      },
      { status: 500 }
    );
  }
}
