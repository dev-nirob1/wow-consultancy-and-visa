import SectionHeader from "../common/SectionHeader";
import TeamMemberCard from "../widget/TeamMemberCard";


const team = [
  { image: "/team/profile-1.avif", name: "Rahim Uddin", role: "Senior Admissions Consultant" },
  { image: "/team/profile-2.avif", name: "Farzana Akter", role: "Visa Processing Specialist" },
  { image: "/team/profile-3.avif", name: "Shakil Ahmed", role: "Scholarship Advisor" },
  { image: "/team/profile-4.avif", name: "Nadia Islam", role: "Student Relations Manager" },
  { image: "/team/profile-5.avif", name: "Tanvir Hasan", role: "Document Processing Officer" },
  { image: "/team/profile-6.avif", name: "Mim Chowdhury", role: "Pre-Departure Coordinator" },
];

const Team = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          subTitle="Our Team"
          title="Meet the People Behind Your Success"
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMemberCard
              key={member.name}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;