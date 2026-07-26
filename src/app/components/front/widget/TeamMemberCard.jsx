// components/TeamMemberCard.jsx
import Image from "next/image";

const TeamMemberCard = ({ image, name, role }) => {
  return (
    <div className="group relative bg-white rounded-xl border border-dark/30 py-6 text-center overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <span className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />

      <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
        <Image
          src={image}
          alt={name}
          fill
          sizes="1160px"
          className="object-cover "
        />
      </div>

      <h4 className="relative mt-6">{name}</h4>
      <p className="relative text-sm text-primary font-medium mt-1">{role}</p>

      <span className="relative block w-10 h-0.5 bg-primary/30 mx-auto mt-4 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
    </div>
  );
};

export default TeamMemberCard;