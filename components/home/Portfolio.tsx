import PortfolioCard from "@/components/shared/PortfolioCard";

const Portfolio: React.FC = () => {
  return (
    <div className="py-16">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">
          My Projects
        </h2>
        <PortfolioCard />
    </div>
  );
};

export default Portfolio;
