
import Image from "next/image";

type GalleryImage = {
  src: string;
  caption: string;
};

export function ProjectGallery({
  images
}: {
  images?: GalleryImage[];
}) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="project-gallery">
      <div className="gallery-heading">
        <div>
          <span className="section-eyebrow">
            VISUAL SHOWCASE
          </span>
          <h2>Project Gallery</h2>
          <p>
            A closer look at the application and its features.
          </p>
        </div>

        <span className="gallery-count">
          {String(images.length).padStart(2, "0")} IMAGES
        </span>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <a
            key={image.src}
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-item"
          >
            <div className="gallery-image">
              <Image
                src={image.src}
                alt={image.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="gallery-img"
              />

              <span className="gallery-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p>{image.caption}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
