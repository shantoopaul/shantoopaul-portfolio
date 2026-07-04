import PortfolioCard from "@/components/shared/PortfolioCard";

const Portfolio: React.FC = () => {
  return (
    <div className="py-16">
      <h2 className="text-4xl md:text-5xl mb-12 text-center">
        Things I've <span className="text-primary">built</span> & maintained
      </h2>
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
