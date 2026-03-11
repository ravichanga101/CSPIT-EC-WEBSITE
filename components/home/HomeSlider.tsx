"use client";
import { useState, useEffect } from "react";
import { useSite } from "@/context/SiteContext";

const slides = [
  { src: "/img/intro-carousel/1.jpg" },
  { src: "/img/intro-carousel/2.jpg" },
  { src: "/img/intro-carousel/3.jpg" },
];

export default function HomeSlider() {
  const { data } = useSite();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="intro">
      <div className="intro-slider">
        {slides.map((s, i) => (
          <div key={i} className={`slider-item${i === current ? " active" : ""}`}
            style={{ backgroundImage: `url('${s.src}')` }} />
        ))}
        <div className="slider-content">
          <span className="slider-eyebrow">CHARUSAT University · CSPIT</span>
          <h1 className="slider-heading">
            V.T. Patel Department of<br />
            <span>{data.name_of_dept}</span>
          </h1>
          <p className="slider-sub">
            Estd. {data.dept_esta} · {data.dept_b_tech_seats} B.Tech Seats · Ph.D. Programme
          </p>
        </div>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button key={i} className={`slider-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
