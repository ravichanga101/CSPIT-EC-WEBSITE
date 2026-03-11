const chapters = [
  { logo: "/img/logo/ieee.jpg",  stats: [{ l: "Members", v: "20+" }, { l: "Events", v: "34+" }] },
  { logo: "/img/logo/acm.jpg",   stats: [{ l: "Members", v: "50+" }, { l: "Events", v: "15+" }] },
  { logo: "/img/logo/csi.png",   stats: [{ l: "Graduates", v: "300+" }] },
  { logo: "/img/logo/nptel.png", stats: [{ l: "Members", v: "1000+" }] },
];
export default function StudentChapter() {
  return (
    <section className="section-chapters">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Community</span>
          <h2 className="section-title">Student Chapters</h2>
        </div>
        <div className="chapters-grid">
          {chapters.map((c, i) => (
            <div className="chapter-card" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.logo} className="chapter-logo" alt="" />
              <p className="chapter-stats">
                {c.stats.map((s, j) => (
                  <span key={j}><strong>{s.l}:</strong> {s.v}<br /></span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
