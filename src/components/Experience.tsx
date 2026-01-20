interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  date: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Community Builder, AI+ Smartphones",
    description: "Organized discussions to amplify brand presence and user engagement. Facilitated knowledge to drive awareness and adoption of AI-enhanced smartphone experiences.",
    icon: "/cards/card-1.png",
    date: "Oct 2025 - Present",
  },
  {
    id: 2,
    title: "Event Manager and Logistics Head, TedxBITD",
    description: "Managed end-to-end event planning and on ground logistics for high impact TEDx conferences. Coordinated with speakers, vendors, and organizing teams.",
    icon: "/cards/card-2.png",
    date: "May 2025 - Oct 2025",
  },
  {
    id: 3,
    title: "Python Developer, Techonet Automation",
    description: "Analyzes datasets using Python and SQL to uncover trends, improve decision-making. Created interactive dashboards and reports using Excel/Tableau.",
    icon: "/cards/card-3.png",
    date: "May 2025 - Jun 2025",
  },
  {
    id: 4,
    title: "Content Creator, ValoClub",
    description: "Edited and produced 50+ videos featuring titles, graphics, audio, and special effects. Curated scenes for optimal pacing, engagement, and continuity.",
    icon: "/cards/card-4.png",
    date: "Mar 2022 - Aug 2023",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Experience & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="object-contain"
                  style={{ width: "160px", height: "160px" }}
                />
              </div>
              <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">
                {card.date}
              </p>
              <p className="text-white/70 text-sm">
                {card.description}
              </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
