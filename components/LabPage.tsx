// Shared component that renders any lab page.
// Mirrors the <section id="services" class="wow fadeInUp"> structure from all lab_*.php files.

import { LabData } from "@/data/labs";

interface LabPageProps {
  lab: LabData;
}

export default function LabPage({ lab }: LabPageProps) {
  return (
    <section id="services" className="lab-section">
      <div className="container">
        {/* Section header — mirrors <div class="section-header"> */}
        <div className="section-header">
          <h2 className="lab-title">{lab.title}</h2>
          <p className="lab-description">{lab.description}</p>
        </div>

        {/* Three-column table — mirrors the <table> in each lab_*.php */}
        <div className="lab-table">
          {/* Header row */}
          <div className="lab-table-header">
            <div className="lab-col"><h3>Course Information</h3></div>
            <div className="lab-col"><h3>Resources and Configurations</h3></div>
            <div className="lab-col"><h3>Software</h3></div>
          </div>

          {/* Data row */}
          <div className="lab-table-row">
            <div className="lab-col">
              <ul>
                {lab.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>

            <div className="lab-col">
              <ul>
                {lab.resources.map((resource, i) => (
                  <li key={i}>{resource}</li>
                ))}
              </ul>
            </div>

            <div className="lab-col">
              {lab.software.length > 0 ? (
                <ul>
                  {lab.software.map((sw, i) => (
                    <li key={i}>{sw}</li>
                  ))}
                </ul>
              ) : (
                <p className="lab-no-software">—</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
