import type { Metadata } from "next";
import "./globals.css";
import { siteData, siteLinks } from "@/config/site";
import { SiteProvider } from "@/context/SiteContext";
import Header from "@/components/Header";
import MainMenu from "@/components/MainMenu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `CSPIT — ${siteData.name_of_dept}`,
  description: `V.T.Patel Department of ${siteData.name_of_dept}, CHARUSAT University`,
  icons: { icon: "/img/favicon.png", apple: "/img/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
      </head>
      <body id="body">
        <SiteProvider data={siteData} links={siteLinks}>
          <Header />
          <MainMenu />
          {children}
          <Footer />
        </SiteProvider>
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </body>
    </html>
  );
}
