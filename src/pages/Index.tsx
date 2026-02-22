import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
