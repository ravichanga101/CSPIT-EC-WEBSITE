import { useSite } from "@/context/SiteContext";
export default function ContactUs() {
  const { data, links } = useSite();
  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-block">
            <i className="ion-ios-location-outline contact-icon"></i>
            <h3>Address</h3>
            <address className="contact-address">{data.contact_address}</address>
          </div>
          <div className="contact-block">
            <i className="ion-ios-telephone-outline contact-icon"></i>
            <h3>Phone</h3>
            <a href={`tel:${data.contact_phone}`}>{data.contact_phone}</a>
          </div>
          <div className="contact-block">
            <i className="ion-ios-email-outline contact-icon"></i>
            <h3>Email</h3>
            <a href={`mailto:${data.contact_email}`}>{data.contact_email}</a>
          </div>
        </div>
        <div className="map-wrapper">
          <iframe src={links.google_map} width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy" title="Map" />
        </div>
      </div>
    </section>
  );
}
