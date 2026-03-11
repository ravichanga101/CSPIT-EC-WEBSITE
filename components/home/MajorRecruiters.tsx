import { useSite } from "@/context/SiteContext";
export default function MajorRecruiters() {
  const { links } = useSite();
  const logos = Object.values(links.recruiter).filter(Boolean);
  return (
    <section className="section-recruiters">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Industry Partners</span>
          <h2 className="section-title">Major Recruiters</h2>
        </div>
      </div>
      <div className="recruiter-track-wrapper">
        <div className="recruiter-track">
          {[...logos, ...logos].map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} className="recruiter-logo" alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}
