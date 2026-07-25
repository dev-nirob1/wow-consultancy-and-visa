// components/ProcessStepCard.jsx
const ProcessStep = ({ icon: Icon, number, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center">
      <div
        className={`hidden lg:flex w-1/2 ${
          isEven ? "order-1 justify-end pr-8" : "order-3 justify-start pl-8"
        }`}
      >
        <div className="bg-white rounded-xl border border-dark/20 p-6 max-w-sm">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl mb-4">
            <Icon />
          </div>
          <h3>{title}</h3>
          <p className="mt-2">{description}</p>
        </div>
      </div>

      <div className="absolute lg:static lg:order-2 left-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-heading font-bold shrink-0 z-10 lg:mx-6">
        {number}
      </div>

      <div className="lg:hidden pl-20">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl mb-4">
          <Icon />
        </div>
        <h3>{title}</h3>
        <p className="mt-2">{description}</p>
      </div>

      <div className={`hidden lg:block w-1/2 ${isEven ? "order-3" : "order-1"}`} />
    </div>
  );
};

export default ProcessStep;