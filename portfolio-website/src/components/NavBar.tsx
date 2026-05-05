import { Link } from "react-router-dom"
import { House, Folder, BriefcaseBusiness, Wrench } from "lucide-react"

function NavBar(){
    return (
        <>
            <nav className="navbar w-75 mx-auto my-3 p-3 rounded-2xl mt-5" >
                <ul className="flex flex-row gap-5 justify-evenly">
                    <li>
                        <Link to="/">
                            <House size={22} color={'white'}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Projects">
                            <Folder size={22} color={'white'}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Experience">
                            <BriefcaseBusiness size={22} color={'white'}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Tools">
                            <Wrench size={22} color={'white'}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar