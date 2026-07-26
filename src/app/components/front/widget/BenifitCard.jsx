// components/BenefitCard.jsx
const BenefitCard = ({ benifit }) => {
  const { icon: Icon, title, description } = benifit;
  return (
    <div className="group bg-white rounded-xl p-8 border border-secondary/20 hover:shadow-xl transition-shadow duration-300">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-light text-secondary text-3xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
        <Icon />
      </div>

      <h3 className="text-secondary text-lg font-bold">{title}</h3>
      <p className="mt-2 text-dark">{description}</p>
    </div>
  );
};

export default BenefitCard;
