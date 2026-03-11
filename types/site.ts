// Mirrors the PHP $data and $links associative arrays from general_config.php
// Fill these in from your config file and pass them via React context or props.

export interface SiteData {
  name_of_dept: string;
  dept_esta: string;               // e.g. "2000"
  dept_b_tech_seats: number;
  total_publications: number;
  student_teacher_ratio: string;   // e.g. "15:1"
  total_number_of_student: number;
  total_workshops_org: number;
  total_projects_and_grants: number;
  placement_percent: string;       // e.g. "85%"
  placement_year: string;          // e.g. "2023-24"
  vision: string;
  mission: string;
  contact_address: string;
  contact_phone: string;
  contact_email: string;
}

export interface Faculty {
  name: string;
  photo: string;
  area_of_interest: string;
  profile: string;
  email: string;
  linkedin: string;
  web_link: string;
}

export interface SiteLinks {
  brochure: string;
  google_map: string;                     // Google Maps embed src URL
  gallery: Record<number, string>;        // 1-indexed image URLs
  recruiter: Record<number, string>;      // 1-indexed logo URLs
  faculty: Record<number, Faculty>;       // 1-indexed faculty objects
}
