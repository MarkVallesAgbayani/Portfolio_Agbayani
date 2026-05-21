import Javascript from "/src/assets/javascript.webp";
import TypeScript from "/src/assets/typescript.webp";
import React from "/src/assets/react.webp";
import Vue from "/src/assets/vue.webp";
import Node from "/src/assets/node.webp";
import Express from "/src/assets/express.webp";
import PostgreSQL from "/src/assets/postgre.webp";
import Vite from "/src/assets/vite.webp";
import Postman from "/src/assets/postman.webp";

function Tool() {
  type Skills = {
    id: number;
    title: string;
    description: string;
    image: string;
  };

  const skills: Skills[] = [
    {
      id: 1,
      title: "JavaScript",
      image: Javascript,
      description: "Core web programming language",
    },
    {
      id: 2,
      title: "TypeScript",
      image: TypeScript,
      description: "Typed JavaScript for scalability",
    },
    {
      id: 3,
      title: "React.js",
      image: React,
      description: "Component-based UI library",
    },
    {
      id: 4,
      title: "Vue.js",
      image: Vue,
      description: "Component-based UI library",
    },
    {
      id: 5,
      title: "Node.js",
      image: Node,
      description: "Server-side JavaScript runtime",
    },
    {
      id: 6,
      title: "Express.js",
      image: Express,
      description: "Fast backend API framework",
    },
    {
      id: 7,
      title: "PostgreSQL",
      image: PostgreSQL,
      description: "Relational database management system",
    },
    {
      id: 8,
      title: "Vite",
      image: Vite,
      description: "Fast frontend build tool",
    },
    {
      id: 9,
      title: "Postman",
      image: Postman,
      description: "API testing and debugging tool",
    },
  ];

  return (
    <div className="mx-auto my-20 flex w-full max-w-6xl flex-col px-1 text-center sm:px-4">
      <h2 className="text-5xl font-bold uppercase text-white md:text-6xl">
        Technical
      </h2>
      <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl">
        Skills
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex min-h-28 items-center gap-5 rounded-3xl p-5 transition hover:scale-[1.01] hover:bg-neutral-900 sm:p-6"
          >
            <img
              src={skill.image}
              alt="JavaScript"
              className="h-16 w-16 rounded-md object-cover"
            />

            <div className="flex-1 text-left text-white">
              <p className="text-xl font-bold sm:text-2xl mb-2">
                {skill.title}
              </p>
              <p className="text-sm text-neutral-500 sm:text-base">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tool;
