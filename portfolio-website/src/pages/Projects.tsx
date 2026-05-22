import { ArrowLineUpRightIcon } from "@phosphor-icons/react";
import AitoManabiImage from "/src/assets/aitomanabi.png";
import Zento from "/src/assets/zento.png";

function Projects() {
  type ProjectType = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  };
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "AiToManabi (Thesis Project)",
      description:
        "Developed an AI-driven Japanese language learning platform featuring conversational AI, speech recognition (STT), text-to-speech (TTS), pronunciation feedback, and interactive lesson modules. Built to simulate real-time tutoring experiences for beginner-level Japanese learners (JLPT N5) using modern web technologies and AI integration.",
      image: AitoManabiImage,
      link: "https://aitomanabi.com/",
    },
    {
      id: 2,
      title: "Zento: E-Commerce Product Listing",
      description:
        "Built a responsive e-commerce product listing platform with dynamic product displays, category filtering, search functionality, and clean UI/UX design. Focused on creating a fast and user-friendly shopping experience using modern frontend technologies and reusable components.",
      image: Zento,
      link: "https://zento-ecommerce.markagbayanipersonal19.workers.dev/",
    },
  ];
  return (
    <div className="mx-auto my-20 flex w-full max-w-6xl flex-col px-1 text-center sm:px-4">
      <h2 className="text-5xl font-bold uppercase text-white md:text-6xl">
        Recent
      </h2>
      <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl">
        Projects
      </p>

      <div className="mt-8 flex flex-col gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex min-h-36 items-start gap-6 rounded-3xl bg-neutral-900 p-6 text-left transition hover:-translate-y-1 hover:scale-[1.01] sm:items-center sm:p-7"
          >
            <img
              src={project.image}
              alt="aitomanabi_picture"
              className="h-20 w-20 shrink-0 rounded-md object-cover sm:h-22 sm:w-22"
            />

            <div className="min-w-0 flex-1 text-white">
              <p className="text-xl font-bold sm:text-2xl mb-2">
                {project.title}
              </p>
              <p className="text-sm text-neutral-500 sm:text-base">
                {project.description}
              </p>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-orange-500 transition hover:scale-110 sm:self-center"
            >
              <ArrowLineUpRightIcon size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
