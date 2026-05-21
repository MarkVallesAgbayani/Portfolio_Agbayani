import { useState } from "react";

function Certifications() {
  type Award = {
    id: number;
    img: string;
    title: string;
    desc: string;
  };
  const [activeAward, setActiveAward] = useState<Award | null>(null);
  const awards: Award[] = [
    {
      id: 1,
      img: "/src/assets/Best Lead Programmer.jpg",
      title: "Best Lead Programmer",
      desc: "Recognized as Best Lead Programmer for leading the development of AiToManabi.",
    },
    {
      id: 2,
      img: "/src/assets/Best Research.jpg",
      title: "Best Research",
      desc: "Awarded for an outstanding undergraduate thesis.",
    },
    {
      id: 3,
      img: "/src/assets/CODEFEST.jpg",
      title: "Most Promising Thesis",
      desc: "Recognized for its innovation, technical implementation, and potential impact in enhancing language learning through AI.",
    },
    {
      id: 4,
      img: "/src/assets/CODEFEST.jpg",
      title: "CODEFEST - 1st Runner Up",
      desc: "Participated in a timed app development challenge requiring rapid planning, teamwork, and problem-solving.",
    },
    {
      id: 5,
      img: "/src/assets/Publication.jpg",
      title: "Publication - IJRISS",
      desc: "Evaluating the Effectiveness of AiToManabi: An AI-Powered Japanese Language Learning Management System Utilizing LLaMA 3.1 8B",
    },
    {
      id: 6,
      img: "/src/assets/Publication.jpg",
      title: "Spark-A-Change",
      desc: "A Pitching Competition Fueling MSMEs with Innovation (DOST)",
    },
    {
      id: 7,
      img: "/src/assets/Intermediate SQL.jpg",
      title: "Intermediate SQL",
      desc: "PostgreSQL Certification (DataCamp)",
    },
    {
      id: 8,
      img: "/src/assets/Introduction to SQL.jpg",
      title: "Introduction to SQL",
      desc: "PostgreSQL Certification (DataCamp)",
    },
  ];

  return (
    <>
      <div className="mx-auto my-16 w-full max-w-6xl px-1 sm:px-4">
        <h2 className="text-5xl font-bold uppercase text-white md:text-6xl text-center">
          Certifications
        </h2>
        <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl text-center">
          Awards
        </p>

        <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {awards.map((award) => (
            <button
              key={award.id}
              onClick={() => setActiveAward(award)}
              className="group overflow-hidden rounded-2xl bg-neutral-900 p-3 text-left transition hover:scale-[1.02] focus:outline-none"
            >
              <div className="h-32 w-full overflow-hidden rounded-md bg-neutral-800">
                <img
                  src={award.img}
                  className="h-full w-full object-fit transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-white">
                <p className="font-semibold text-lg">{award.title}</p>
                <p className="text-sm text-neutral-400">{award.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeAward && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
          <div className="relative max-w-2xl w-full mx-4">
            {/* Close button */}
            <button
              onClick={() => setActiveAward(null)}
              className="absolute -top-4 -right-4 z-10 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full w-9 h-9 flex items-center justify-center transition focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>

            <figure className="rounded-2xl overflow-hidden">
              <img
                src={activeAward.img}
                alt={activeAward.title}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      )}
    </>
  );
}

export default Certifications;
