
"use client";

import {
  type FormEvent,
  useEffect,
  useRef,
  useState
} from "react";

import {
  Bot,
  X,
  Send,
  LoaderCircle,
  Sparkles,
  RotateCcw
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const welcomeMessage: Message = {
  role: "assistant",
  content:
    "Hi! I'm Ask Emerson, an AI assistant for this portfolio. Ask me about Emerson's background, projects, research or technical skills."
};

const suggestions = [
  "Tell me about the COMUM project.",
  "What is Emerson's experience with Machine Learning?",
  "Which technologies has he used?",
  "Tell me about his academic background."
];

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    welcomeMessage
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);

    window.addEventListener("open-portfolio-chat", handler);

    return () =>
      window.removeEventListener("open-portfolio-chat", handler);
  }, []);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [messages, loading, open]);

  function startNewChat() {
    if (loading) return;

    setMessages([welcomeMessage]);
    setInput("");
  }

  async function sendMessage(
    e?: FormEvent,
    preset?: string
  ) {
    e?.preventDefault();

    const text = (preset ?? input).trim();

    if (!text || loading) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: text }
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: nextMessages.slice(-10)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "The assistant is unavailable."
        );
      }

      if (typeof data.answer !== "string") {
        throw new Error("The assistant returned an invalid response.");
      }

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: data.answer
        }
      ]);
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <div
          className="chat-backdrop"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`chat-panel ${open ? "chat-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="chat-top">
          <div className="chat-avatar">
            <Bot size={21} />
          </div>

          <div>
            <strong>Ask Emerson</strong>
            <span>
              <i /> Portfolio AI assistant
            </span>
          </div>

          <div className="chat-actions">
            <button
              className="icon-button"
              onClick={startNewChat}
              aria-label="Start a new conversation"
              title="New conversation"
              disabled={loading}
            >
              <RotateCcw size={17} />
            </button>

            <button
              className="icon-button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        <div
          className="chat-messages"
          aria-live="polite"
          aria-label="Chat conversation"
        >
          {messages.map((message, i) => (
            <div
              key={i}
              className={`chat-message ${message.role}`}
            >
              {message.role === "assistant" && (
                <span className="message-icon">
                  <Sparkles size={13} />
                </span>
              )}

              <p>{message.content}</p>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="chat-suggestions">
              <span>TRY ASKING</span>

              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() =>
                    sendMessage(undefined, suggestion)
                  }
                  disabled={loading}
                >
                  {suggestion} ↗
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="typing">
              <LoaderCircle
                size={15}
                className="spin"
              />
              Thinking...
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <form
          className="chat-input"
          onSubmit={(e) => sendMessage(e)}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about Emerson..."
            aria-label="Your question"
            maxLength={1200}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={!input.trim() || loading}
            aria-label="Send message"
          >
            {loading ? (
              <LoaderCircle size={17} className="spin" />
            ) : (
              <Send size={17} />
            )}
          </button>
        </form>

        <div className="chat-disclaimer">
          AI-generated answers based on the portfolio information.
          Verify important details with the linked sources.
        </div>
      </aside>
    </>
  );
}
