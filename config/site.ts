// Mirrors: config/general_config.php
// Replace the placeholder values below with your real department data.

import { SiteData, SiteLinks } from "@/types/site";

export const siteData: SiteData = {
  name_of_dept: "Electronics & Communication Engineering",
  dept_esta: "2000",
  dept_b_tech_seats: 60,
  total_publications: 120,
  student_teacher_ratio: "15:1",
  total_number_of_student: 400,
  total_workshops_org: 50,
  total_projects_and_grants: 30,
  placement_percent: "85%",
  placement_year: "2023-24",
  vision: "To be a Centre of Excellence in Electronics & Communication Engineering education, research and innovation.",
  mission: "To impart quality education, foster research culture and develop competent engineers with ethical values.",
  contact_address: "CSPIT, CHARUSAT Campus, Changa, Anand - 388421, Gujarat, India",
  contact_phone: "+91-2697-265011",
  contact_email: "ec@charusat.ac.in",
};

export const siteLinks: SiteLinks = {
  brochure: "/files/ec_brochure.pdf",
  google_map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1764.2219437208332!2d72.81960473591157!3d22.599996854687056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1771326441834!5m2!1sen!2sin",

  // Replace with actual image paths under /public/
  gallery: {
    1: "/img/gallery/1.jpg",
    2: "/img/gallery/2.jpg",
    3: "/img/gallery/3.jpg",
    4: "/img/gallery/4.jpg",
    5: "/img/gallery/5.jpg",
    6: "/img/gallery/6.jpg",
    7: "/img/gallery/7.jpg",
    8: "/img/gallery/8.jpg",
    9: "/img/gallery/9.jpg",
    10: "/img/gallery/10.jpg",
    11: "/img/gallery/11.jpg",
    12: "/img/gallery/12.jpg",
    13: "/img/gallery/13.jpg",
    14: "/img/gallery/14.jpg",
    15: "/img/gallery/15.jpg",
    16: "/img/gallery/16.jpg",
    17: "/img/gallery/17.jpg",
    18: "/img/gallery/18.jpg",
  },

  // Replace with actual recruiter logo paths under /public/
  recruiter: {
    1: "/img/recruiters/1.png",
    2: "/img/recruiters/2.png",
    3: "/img/recruiters/3.png",
    4: "/img/recruiters/4.png",
    5: "/img/recruiters/5.png",
    6: "/img/recruiters/6.png",
    7: "/img/recruiters/7.png",
    8: "/img/recruiters/8.png",
    9: "/img/recruiters/9.png",
    10: "/img/recruiters/10.png",
    11: "/img/recruiters/11.png",
    12: "/img/recruiters/12.png",
    13: "/img/recruiters/13.png",
    14: "/img/recruiters/14.png",
    15: "/img/recruiters/15.png",
    16: "/img/recruiters/16.png",
    17: "/img/recruiters/17.png",
    18: "/img/recruiters/18.png",
  },

  // Replace with actual faculty data
  faculty: {
    1: {
      name: "Dr. Faculty Name",
      photo: "/img/faculty/1.jpg",
      area_of_interest: "Signal Processing",
      profile: "https://charusat.ac.in/faculty/1",
      email: "faculty1@charusat.ac.in",
      linkedin: "https://linkedin.com/in/faculty1",
      web_link: "https://charusat.ac.in/faculty/1",
    },
  },
};
