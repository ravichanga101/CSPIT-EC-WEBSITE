"use client";
// Mirrors: include/facutly_slider.php
// Original used OWL Carousel. Using a simple horizontal scroll here.
// For full carousel: npm install embla-carousel-react
import { useSite } from "@/context/SiteContext";
export default function FacultySlider() {
  const { links } = useSite();
  const facultyList = Object.values(links.faculty);
  return (
    <section id="team" className="wow fadeInUp">
      <div className="container">
        <div className="section-header"><h2 style={{ paddingTop: 20 }}>Faculties</h2></div>
        <div style={{ display: "flex", gap: 24, overflowX: "auto", paddingBottom: 16 }}>
          {facultyList.map((f, i) => (
            <div className="member" key={i} style={{ minWidth: 160, textAlign: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.photo} alt={f.name} style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover" }} />
              <div className="details" style={{ marginTop: 8 }}>
                <h4>{f.name}</h4>
                <span>Areas of Interest: {f.area_of_interest}</span>
                <div className="social" style={{ marginTop: 8, display: "flex", justifyContent: "center", gap: 8 }}>
                  <a href={f.profile} target="_blank" rel="noreferrer"><i className="fa fa-id-card"></i></a>
                  <a href={`mailto:${f.email}`}><i className="fa fa-envelope"></i></a>
                  <a href={f.linkedin} target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                  <a href={f.web_link} target="_blank" rel="noreferrer"><i className="fa fa-globe"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
