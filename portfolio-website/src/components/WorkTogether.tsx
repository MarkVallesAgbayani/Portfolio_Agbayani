function WorkTogether(){
    return (
    <div className="mx-auto my-20 flex w-full max-w-5xl flex-col px-1 text-center sm:px-4">
            <h2 className="text-5xl font-bold uppercase text-white md:text-6xl">
                Open for
            </h2>
            <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl">
                Opportunities
            </p>
        <form action="/submit" method="post" className="mx-auto mt-8 w-full max-w-5xl">
            <div className="grid gap-5 text-sm text-neutral-500 md:grid-cols-2">
                <div className="flex flex-col text-left">
                    <label htmlFor="name" className="my-1">Name</label>
                    <input type="text" id="name" name="name" className="h-12 rounded-md bg-neutral-800 p-3 text-base text-white placeholder:text-zinc-400" placeholder="Your Name" required/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="email" className="my-1">Email</label>
                    <input type="email" id="email" name="email" className="h-12 rounded-md bg-neutral-800 p-3 text-base text-white placeholder:text-zinc-400" placeholder="Your Email Address" required/>
                </div>
            </div>

            <div className="mt-5 flex flex-col text-left text-sm text-neutral-500">
                <label htmlFor="message" className="my-1">Message</label>
                <textarea name="message" id="message" className="min-h-40 rounded-md bg-neutral-800 p-3 text-base text-white placeholder:text-zinc-400" placeholder="Message" required></textarea>
            </div>

            <button type="submit" className="mt-6 w-full rounded-md bg-amber-600 p-3 font-semibold text-white transition-all duration-300 hover:bg-amber-700 sm:w-auto sm:px-8">Submit</button>
        </form>

    </div> 
    
    )
}

export default WorkTogether