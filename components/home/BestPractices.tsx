const practices = [
  { icon: "fa-industry",         label: "Industry Interaction Programme" },
  { icon: "fa-handshake-o",      label: "Periodic update of courses to match industry standards" },
  { icon: "fa-certificate",      label: "Project work for UG & PG students" },
  { icon: "fa-desktop",          label: "Laboratory Development" },
  { icon: "fa-comments",         label: "Group Discussion" },
  { icon: "fa-microphone",       label: "Expert Talk" },
  { icon: "fa-check-circle",     label: "Continuous Evaluation of Students" },
  { icon: "fa-users",            label: "Preparing students for Campus Recruitment" },
  { icon: "fa-user-circle",      label: "One-to-One Student Counseling" },
  { icon: "fa-bar-chart",        label: "Open Discussion of Internal Examination Results" },
];
export default function BestPractices() {
  return (
    <section className="section-practices">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Approach</span>
          <h2 className="section-title">Best Practices</h2>
        </div>
        <div className="practices-grid">
          {practices.map((p, i) => (
            <div className="practice-item" key={i}>
              <div className="practice-icon"><i className={`fa ${p.icon}`}></i></div>
              <h4 className="practice-title">{p.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
