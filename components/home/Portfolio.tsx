import PortfolioCard from "@/components/shared/PortfolioCard";

const Portfolio: React.FC = () => {
  return (
    <div className="py-16">
      <hgroup className="flex flex-col gap-3 mb-10">
        <h2 className="text-secondary text-xs font-bold">
          <span className="text-primary">03 </span>
          SELECTED WORK
        </h2>
        <p className="heading-size font-bold leading-none">
          Things I've <span className="text-primary">built</span> & maintained
        </p>
      </hgroup>
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
