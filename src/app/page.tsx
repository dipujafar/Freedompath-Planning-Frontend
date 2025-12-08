import BlogSection from "@/modules/home/blog/BlogSection";
import ContactUsSection from "@/components/shared/contactUs/ContactUsSection";
import Hero from "@/modules/home/hero/Hero";
import ServicesSection from "@/modules/home/services/ServicesSection";
import ToolsResourcesSection from "@/modules/home/toolsResources/ToolsResourcesSection";
import AboutPathPlanningSection from "@/components/shared/aboutUs/AboutPathPlanningSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPathPlanningSection />
      <ServicesSection />
      <BlogSection />
      <ToolsResourcesSection />
      <ContactUsSection />
    </>
  );
}
