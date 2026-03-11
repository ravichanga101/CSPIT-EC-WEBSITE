import { useSite } from "@/context/SiteContext";
export default function Gallery() {
  const { links } = useSite();
  const ids = Array.from({ length: 18 }, (_, i) => i + 1);
  return (
    <section className="section-gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Campus Life</span>
          <h2 className="section-title">Gallery</h2>
        </div>
      </div>
      <div className="container">
        <div className="gallery-grid">
          {ids.map((id) => (
            <a key={id} href={links.gallery[id]} className="gallery-item" target="_blank" rel="noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={links.gallery[id]} className="gallery-img" alt="" />
              <div className="gallery-overlay" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
