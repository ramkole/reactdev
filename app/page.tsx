import ConnectMe from "./components/ConnectMe";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import WorkExperience from "./components/WorkExperience";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex-1">
      <SkillsSection />
      <ProjectSection />
      <WorkExperience />
      <ConnectMe />
    </main>
  );
}
