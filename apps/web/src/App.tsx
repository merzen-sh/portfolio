import { Navbar, Footer } from "@portfolio/ui";
import { HeroSection } from "./sections/hero";
import { ProjectsSection } from "./sections/projects";
import { SkillsSection } from "./sections/skills";
import { SpaceBackground } from "./sections/SpaceBackground";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SpaceBackground />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
