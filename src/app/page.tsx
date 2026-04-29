import { AboutPreview } from "@/components/AboutPreview";
import { HomeHeroArchitect } from "@/components/HomeHeroArchitect";
import { ArchitecturePortfolioSection } from "@/components/ArchitecturePortfolioSection";

export default function Home() {
  return (
    <main>
      <HomeHeroArchitect />
      <ArchitecturePortfolioSection />
      <AboutPreview />
    </main>
  );
}
