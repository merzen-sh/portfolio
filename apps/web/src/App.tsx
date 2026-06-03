import { Navbar, Footer } from "@wizard/ui";
import { HeroSection } from "./sections/hero";
import { ProjectsSection } from "./sections/projects";
import { SkillsSection } from "./sections/skills";
import { ContactSection } from "./sections/contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
