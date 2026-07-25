// components/BenefitCard.jsx
const BenefitCard = ({benifit}) => {
   const { icon: Icon, title, description } = benifit;
  return (
    <div className="group bg-white rounded-xl p-8 border border-dark/20 hover:shadow-xl transition-shadow duration-300">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon />
      </div>

      <h3>{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

export default BenefitCard;