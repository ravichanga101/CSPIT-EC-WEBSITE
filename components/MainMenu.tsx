"use client";

// Mirrors: include/main_menu.php
// Uses CSS classes from app/globals.css

import { useState } from "react";
import Link from "next/link";
import { useSite } from "@/context/SiteContext";

const labLinks = [
  { href: "/?view=lab_MASC", label: "Microwave and Satellite" },
  { href: "/?view=lab_AP",   label: "Application Package I & II" },
  { href: "/?view=lab_PL",   label: "Project Lab I & II" },
  { href: "/?view=lab_PGL",  label: "Post Graduate Lab" },
  { href: "/?view=lab_NA",   label: "Network Analysis" },
  { href: "/?view=lab_EDC",  label: "Electronic Circuit Design" },
  { href: "/?view=lab_PE",   label: "Power Electronics" },
  { href: "/?view=lab_COS",  label: "Communication Systems" },
];

const studentLinks = [
  { href: "https://www.charusat.ac.in/Downloads/Academic%20Calenders/CSPIT/", label: "Academic Calendar" },
  { href: "https://drive.google.com/drive/folders/10T2O40JtsVkJKebmZ5px0msGly78VR-K", label: "Syllabus" },
  { href: "https://www.charusat.ac.in/Downloads/Question-Papers/CSPIT/", label: "Question Papers" },
  { href: "https://charusat.edu.in:912/eGovernance/home.aspx", label: "e-Governance Link" },
  { href: "https://charusat.edu.in:912/UniExamResult/", label: "Exam Result" },
];

export default function MainMenu() {
  const { data, links } = useSite();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobOpen, setMobOpen] = useState<string | null>(null);

  const toggleGroup = (name: string) =>
    setOpenGroup((prev) => (prev === name ? null : name));

  const toggleMob = (name: string) =>
    setMobOpen((prev) => (prev === name ? null : name));

  return (
    <>
      {/* ── Top Bar ── */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="contact-info">
            <i className="fa fa-envelope-o"></i>
            <a href={`mailto:${data.contact_email}`}>{data.contact_email}</a>
            &nbsp;&nbsp;
            <i className="fa fa-phone"></i>
            {data.contact_phone}
            &nbsp;|&nbsp;
            <i className="fa fa-download"></i>
            <a href={links.brochure}>Brochure</a>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/cspitec" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/CspitEc" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="https://www.instagram.com/ec_cspit_charusat/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="skype:live:.cid.47a464178ad442e4" target="_blank" rel="noreferrer"><i className="fa fa-skype"></i></a>
            <a href="https://in.linkedin.com/school/department-of-ec-engineering-charusat-university/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className="site-header">
        <div className="nav-container">

          {/* Logo */}
          <Link href="/?view=home" className="nav-logo">
            <span className="nav-logo-sub">V.T.Patel Department of</span>
            <span className="nav-logo-main">{data.name_of_dept}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            <ul className="nav-list">

              {/* About */}
              <li className="nav-group">
                <Link href="/?view=home#about_us" className="nav-link">About</Link>
              </li>

              {/* Research Labs dropdown */}
              <li className={`nav-group${openGroup === "labs" ? " open" : ""}`}>
                <button className="nav-toggle" onClick={() => toggleGroup("labs")}>
                  Research Labs <span className="nav-caret">▾</span>
                </button>
                {openGroup === "labs" && (
                  <ul className="dropdown">
                    {labLinks.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="dd-item" onClick={() => setOpenGroup(null)}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Lab Equipments */}
              <li className="nav-group">
                <a href="/files/ec_equipments.pdf" target="_blank" rel="noreferrer" className="nav-link">
                  Lab Equipments
                </a>
              </li>

              {/* Admission */}
              <li className="nav-group">
                <a href="https://charusat.ac.in/admission/" target="_blank" rel="noreferrer" className="nav-link">
                  Admission
                </a>
              </li>

              {/* Student Corner dropdown */}
              <li className={`nav-group${openGroup === "student" ? " open" : ""}`}>
                <button className="nav-toggle" onClick={() => toggleGroup("student")}>
                  Student Corner <span className="nav-caret">▾</span>
                </button>
                {openGroup === "student" && (
                  <ul className="dropdown">
                    {studentLinks.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noreferrer" className="dd-item" onClick={() => setOpenGroup(null)}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

            </ul>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger${mobileOpen ? " is-open" : ""}`}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* ── Mobile Nav ── */}
        {mobileOpen && (
          <nav className="nav-mobile">
            <Link href="/?view=home#about_us" className="mob-link" onClick={() => setMobileOpen(false)}>About</Link>

            <button className="mob-toggle" onClick={() => toggleMob("labs")}>
              Research Labs <span className={`mob-caret${mobOpen === "labs" ? " up" : ""}`}>▾</span>
            </button>
            {mobOpen === "labs" && (
              <div className="mob-children">
                {labLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="dd-item" onClick={() => setMobileOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <a href="/files/ec_equipments.pdf" className="mob-link" target="_blank" rel="noreferrer">Lab Equipments</a>
            <a href="https://charusat.ac.in/admission/" className="mob-link" target="_blank" rel="noreferrer">Admission</a>

            <button className="mob-toggle" onClick={() => toggleMob("student")}>
              Student Corner <span className={`mob-caret${mobOpen === "student" ? " up" : ""}`}>▾</span>
            </button>
            {mobOpen === "student" && (
              <div className="mob-children">
                {studentLinks.map((l) => (
                  <a key={l.href} href={l.href} className="dd-item" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </nav>
        )}
      </header>
    </>
  );
}
