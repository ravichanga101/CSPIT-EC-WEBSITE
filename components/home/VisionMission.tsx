"use client";
import { useState } from "react";
import { useSite } from "@/context/SiteContext";
export default function VisionMission() {
  const { data } = useSite();
  const [modal, setModal] = useState<"peo"|"po"|null>(null);
  return (
    <section className="section-vision-mission">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Purpose</span>
          <h2 className="section-title">Vision &amp; Mission</h2>
        </div>
        <div className="vm-grid">
          <div className="vm-card">
            <i className="fa fa-eye vm-icon"></i>
            <h3 className="vm-heading">Vision</h3>
            <p className="vm-text">&ldquo;{data.vision}&rdquo;</p>
          </div>
          <div className="vm-card">
            <i className="fa fa-rocket vm-icon"></i>
            <h3 className="vm-heading">Mission</h3>
            <p className="vm-text">&ldquo;{data.mission}&rdquo;</p>
          </div>
        </div>
        <div className="vm-modal-buttons">
          <button className="btn-modal" onClick={() => setModal("peo")}>Program Education Objectives (PEOs)</button>
          <button className="btn-modal" onClick={() => setModal("po")}>Program Outcomes (POs)</button>
        </div>
      </div>
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-box-header">
              <h4>{modal === "peo" ? "Program Education Objectives (PEOs)" : "Program Outcomes (POs)"}</h4>
              <button className="modal-close" onClick={() => setModal(null)}>&times;</button>
            </div>
            {modal === "peo" ? (
              <ol className="modal-list">
                <li>Provide core competence in mathematical, scientific and engineering fundamentals to solve real-world problems.</li>
                <li>Train students with breadth of knowledge in core EC Engineering areas.</li>
                <li>Inculcate high professionalism, ethical standards and effective communication skills.</li>
                <li>Develop awareness of lifelong learning for a successful professional career.</li>
              </ol>
            ) : (
              <ol className="modal-list">
                <li>Apply engineering knowledge and skills to Electronics & Communication problems.</li>
                <li>Design components and processes within realistic constraints.</li>
                <li>Demonstrate effective English language communication skills.</li>
                <li>Understand professional and ethical responsibility.</li>
                <li>Recognize the need for lifelong learning and continuous professional development.</li>
              </ol>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
