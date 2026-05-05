import { ArrowLineUpRightIcon } from "@phosphor-icons/react";

function Projects() {
    return (
        <div className="mx-auto my-20 flex w-full max-w-6xl flex-col px-1 text-center sm:px-4">
            <h2 className="text-5xl font-bold uppercase text-white md:text-6xl">
                Recent
            </h2>
            <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl">
                Projects
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <div className="flex min-h-36 items-start gap-6 rounded-3xl bg-neutral-900 p-6 text-left transition hover:-translate-y-1 hover:scale-[1.01] sm:items-center sm:p-7">
                    <img 
                        src="/src/assets/aitomanabi.png" 
                        alt="aitomanabi_picture"
                        className="h-20 w-20 shrink-0 rounded-md object-cover sm:h-22 sm:w-22"
                    />

                    
                    <div className="min-w-0 flex-1 text-white">
                        <p className="text-xl font-bold sm:text-2xl">AiToManabi</p>
                        <p className="text-sm text-neutral-500 sm:text-base">
                            Learning Management SaaS
                        </p>
                    </div>

                    
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start text-orange-500 transition hover:scale-110 sm:self-center"
                    >
                        <ArrowLineUpRightIcon size={20} />
                    </a>

                </div>

                <div className="flex min-h-36 items-start gap-6 rounded-3xl bg-neutral-900 p-6 text-left transition hover:-translate-y-1 hover:scale-[1.01] sm:items-center sm:p-7">
                    <img 
                        src="/src/assets/aitomanabi.png" 
                        alt="aitomanabi_picture"
                        className="h-20 w-20 shrink-0 rounded-md object-cover sm:h-22 sm:w-22"
                    />

                    
                    <div className="min-w-0 flex-1 text-white">
                        <p className="text-xl font-bold sm:text-2xl">AiToManabi</p>
                        <p className="text-sm text-neutral-500 sm:text-base">
                            Learning Management SaaS
                        </p>
                    </div>

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start text-orange-500 transition hover:scale-110 sm:self-center"
                    >
                        <ArrowLineUpRightIcon size={20} />
                    </a>

                </div>
                <div className="flex min-h-36 items-start gap-6 rounded-3xl bg-neutral-900 p-6 text-left transition hover:-translate-y-1 hover:scale-[1.01] sm:items-center sm:p-7">
                    <img 
                        src="/src/assets/aitomanabi.png" 
                        alt="aitomanabi_picture"
                        className="h-20 w-20 shrink-0 rounded-md object-cover sm:h-22 sm:w-22"
                    />

                    
                    <div className="min-w-0 flex-1 text-white">
                        <p className="text-xl font-bold sm:text-2xl">AiToManabi</p>
                        <p className="text-sm text-neutral-500 sm:text-base">
                            Learning Management SaaS
                        </p>
                    </div>

                    
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start text-orange-500 transition hover:scale-110 sm:self-center"
                    >
                        <ArrowLineUpRightIcon size={20} />
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Projects;