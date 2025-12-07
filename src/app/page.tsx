import AboutUsSection from "@/modules/home/aboutUs/AboutUsSection";
import BlogSection from "@/modules/home/blog/BlogSection";
import ContactUsSection from "@/modules/home/contactUs/ContactUsSection";
import Hero from "@/modules/home/hero/Hero";
import ServicesSection from "@/modules/home/services/ServicesSection";
import ToolsResourcesSection from "@/modules/home/toolsResources/ToolsResourcesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <BlogSection />
      <ToolsResourcesSection />
      <ContactUsSection />
    </>
  );
}
