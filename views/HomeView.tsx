// Mirrors: view/home.php
// Each section corresponds to one include() from the original PHP file.

import HomeSlider from "@/components/home/HomeSlider";
import AboutUs from "@/components/home/AboutUs";
import BestPractices from "@/components/home/BestPractices";
import VisionMission from "@/components/home/VisionMission";
import Certifications from "@/components/home/Certifications";
import StudentChapter from "@/components/home/StudentChapter";
import CareerDevelopment from "@/components/home/CareerDevelopment";
import MajorRecruiters from "@/components/home/MajorRecruiters";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import ContactUs from "@/components/home/ContactUs";
// FacultySlider was commented out in home.php — import and add it when ready:
// import FacultySlider from "@/components/home/FacultySlider";

export default function HomeView() {
  return (
    <>
      <HomeSlider />        {/* include('include/home_slider.php') */}
      <AboutUs />           {/* include('include/about_us.php') */}
      <BestPractices />     {/* include('include/best_practices.php') */}
      <VisionMission />     {/* include('include/vision_mission.php') */}
      <Certifications />    {/* include('include/certifications.php') */}
      <StudentChapter />    {/* include('include/student_chapter.php') */}
      <CareerDevelopment /> {/* include('include/career_development.php') */}
      <MajorRecruiters />   {/* include('include/major_recruiters.php') */}
      <Testimonials />      {/* include('include/testimonials.php') */}
      <Gallery />           {/* include('include/gallery.php') */}
      <ContactUs />         {/* include('include/contact_us.php') */}
      {/* <FacultySlider /> */} {/* was commented out in original home.php */}
    </>
  );
}
