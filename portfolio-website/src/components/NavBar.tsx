import { House, Folder, BriefcaseBusiness, Wrench } from "lucide-react"


function NavBar(){
    return (
        <>
            <nav className="navbar sticky top-4 z-50 mx-auto mt-4 w-[calc(100%-1.5rem)] max-w-sm rounded-full px-4 py-3 shadow-lg backdrop-blur-sm sm:max-w-md md:max-w-lg" >
                <ul className="flex items-center justify-between gap-3">
                    <li>
                        <a href="#home" aria-label="Home" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60">
                            <House 
                                size={20} 
                                color={'white'}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#projects" aria-label="Projects" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60">
                            <Folder 
                                size={20} 
                                color={'white'}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#experience" aria-label="Experience" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60">
                            <BriefcaseBusiness 
                                size={20}  
                                color={'white'} 
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#skills" aria-label="Skills" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60">
                            <Wrench 
                                size={20} 
                                color={'white'}
                                />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar