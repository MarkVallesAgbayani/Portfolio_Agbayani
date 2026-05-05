function Experience () {
    return(
        <div className="mx-auto my-20 flex w-full max-w-5xl flex-col px-1 text-center sm:px-4">
            <h2 className="text-5xl font-bold uppercase text-white md:text-6xl">
                Recent
            </h2>
            <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl">
                Experience
            </p>

            <div className="mt-8">
                <div className="flex min-h-36 items-start gap-5 rounded-3xl bg-neutral-900 p-5 text-left transition hover:-translate-y-1 hover:scale-[1.01] sm:items-center sm:p-6">
                <a
                    className="cursor-pointer"
                >
                    <div className="flex-1 p-1 text-white sm:p-2">
                            <p className="mb-4 text-lg font-bold sm:text-xl">Product Development Intern</p>
                        <p className="text-sm text-neutral-500 sm:text-base">
                            Full-stack development using Nuxt.js and Laravel, contributing to building scalable, user-friendly applications while ensuring system performance and reliability.
                        </p>

                        <p className="mt-3 text-sm text-neutral-500 sm:text-base">
                            Jan 2026 - Mar 2026
                        </p>
                    </div>
                </a>
            </div>
        </div>
       </div> 
        
    )

}

export default Experience