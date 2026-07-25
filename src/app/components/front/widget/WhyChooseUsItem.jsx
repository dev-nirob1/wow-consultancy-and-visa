// components/WhyChooseUsItem.jsx
const WhyChooseUsItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl shrink-0">
        <Icon />
      </div>
      <div>
        <h3>{title}</h3>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsItem;