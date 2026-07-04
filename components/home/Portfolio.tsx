import PortfolioCard from "@/components/shared/PortfolioCard";

const Portfolio: React.FC = () => {
  return (
    <div className="py-16">
      <hgroup className="flex flex-col gap-3 mb-10">
        <h2 className="text-secondary text-sm font-bold">
          <span className="text-primary">03 </span>
          SELECTED WORK
        </h2>
        <p className="heading-size leading-none">
          Things I've <span className="text-primary italic">built</span> & maintained
        </p>
      </hgroup>
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
