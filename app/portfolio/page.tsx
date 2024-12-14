import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      <PortfolioHero />
      <PortfolioGrid />
    </main>
  );
}