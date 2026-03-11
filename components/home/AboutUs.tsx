import { useSite } from "@/context/SiteContext";

export default function AboutUs() {
  const { data } = useSite();
  const stats = [
    { value: data.total_publications,        label: "Publications" },
    { value: data.student_teacher_ratio,     label: "Student-Teacher Ratio" },
    { value: data.total_number_of_student,   label: "Students Enrolled" },
    { value: data.total_workshops_org,       label: "Workshops & Expert Talks" },
    { value: data.total_projects_and_grants, label: "Projects & Grants" },
    { value: data.placement_percent,         label: `Placement ${data.placement_year}` },
  ];
  return (
    <section id="about_us" className="section-about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">About the Department</h2>
        </div>
        <p className="about-intro">
          V.T.Patel Department of <strong>{data.name_of_dept}</strong> (Estd.&nbsp;
          {data.dept_esta}) offers {data.dept_b_tech_seats} seats in B.Tech and Ph.D. Programme —
          shaping engineers who lead, innovate, and build the future.
        </p>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
