const certifications = [
  { logo: "/img/certifications/nptel.jpg", text: "18 faculties from EC department have cleared the NPTEL certification exam — a testament to our commitment to continuous learning." },
];
export default function Certifications() {
  return (
    <section className="section-certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Industry Recognized Certifications</h2>
        </div>
        <div className="cert-list">
          {certifications.map((c, i) => (
            <div className="cert-item" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.logo} className="cert-logo" alt="NPTEL Certification" />
              <p className="cert-contact">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
