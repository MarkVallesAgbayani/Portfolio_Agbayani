function Experience() {
  return (
    <div className="mx-auto my-20 flex w-full max-w-5xl flex-col px-1 text-center sm:px-4">
      {/* Title */}
      <h2 className="text-5xl font-bold uppercase text-white md:text-6xl">
        Recent
      </h2>
      <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl">
        Experience
      </p>

      {/* Card */}
      <div className="mt-10">
        <div className="flex min-h-36 flex-col gap-4 rounded-3xl bg-neutral-900 p-6 text-left transition hover:-translate-y-1 hover:scale-[1.01] sm:p-8">
          {/* Header */}
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Product Development Intern
            </h3>

            <p className="mt-1 text-sm text-neutral-400 sm:text-base">
              Wizzard Technologies, Inc. · OJT
            </p>

            <p className="text-sm text-neutral-500">
              Jan 2026 – Mar 2026 · 3 mos · Pasig, NCR · On-site
            </p>
          </div>

          {/* Description */}
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300 sm:text-base">
            <li>
              Assisted in deploying enterprise systems such as HRIS and PTTC
              platforms using IIS configured via Ubuntu-based CLI environment.
            </li>

            <li>
              Supported server setup, deployment processes, and troubleshooting
              to ensure stable system performance.
            </li>

            <li>
              Designed and developed a Dental Clinic Management System (DCMS)
              using Nuxt.js (frontend) and PHP Laravel (backend).
            </li>

            <li>
              Built core modules including patient records, appointment
              scheduling, treatment tracking, and billing systems.
            </li>

            <li>
              Collaborated with the team to integrate front-end and back-end
              functionalities, ensuring efficient data flow and system
              reliability.
            </li>

            <li>
              Gained hands-on experience in full-stack development, system
              deployment, and real-world software engineering workflows.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
