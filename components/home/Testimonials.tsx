"use client";
import { useState } from "react";
const items = [
  { quote: "I regularly talk to my son and he always says that college is good and we are learning every day. I'm pleased that you guys are making our children socially responsible and shaping them for future.", img: "/img/testimonial-1.jpg", name: "Dr. Hitesh B. Patel", role: "Parent of Ishan Patel" },
  { quote: "The faculties are always enthusiastic to help us in all means. Apart from polishing us for industry, they also arrange many technical and non-technical events for the overall development of students.", img: "/img/testimonial-2.jpg", name: "Aishwarya Biju", role: "Student, 3rd Year B.Tech" },
  { quote: "The quality of students from EC Engineering at CHARUSAT is outstanding. Those we have employed from campus recruitment are truly an asset to our organisation.", img: "/img/testimonial-3.jpg", name: "Mr. Nilesh Ranpura", role: "Project Manager, eInfochip" },
  { quote: "My 2 years of M.Tech at CHARUSAT were very fruitful. EC department gave me the platform to improve different facets of my personality and a sound technical foundation.", img: "/img/testimonial-6.jpg", name: "Pinal Patel", role: "Sr. Team Leader ASIC, eInfochip · Batch 2008" },
];
export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = items[idx];
  return (
    <section className="section-testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Voices</span>
          <h2 className="section-title">Testimonials</h2>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>
          <div className="testimonial-author">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.img} className="testimonial-img" alt={t.name} />
            <div>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-batch">{t.role}</p>
            </div>
          </div>
          <div className="testimonial-nav">
            {items.map((_, i) => (
              <button key={i} className={`t-dot${i === idx ? " active" : ""}`} onClick={() => setIdx(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
