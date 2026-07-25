// components/ContactInfoBlock.jsx
const ContactInfo = ({ icon: Icon, title, lines }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary text-lg shrink-0">
        <Icon />
      </div>
      <div>
        <h6>{title}</h6>
        {lines.map((line) => (
          <p key={line} className="text-base text-dark/80 font-medium">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;