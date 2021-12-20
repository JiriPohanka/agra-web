import navItems from "./navItems"
import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"


const Header = () => {

    const location = useLocation()
    const [isActive, setIsActive] = useState(location.pathname)

    return (
        <header className="flex bg-gray-300">
            <div className="p-4">Agra Řisuty</div>
            <nav className="ml-auto">
                <ul className="flex">
                    {navItems.map(item => <li className="p-4" key={item.id}><NavLink onClick={() => setIsActive(item.link)} to={item.link} className={`${isActive === item.link ? "text-red-600" : ""}`}>{item.title}</NavLink></li>)}
                </ul>
            </nav>

        </header >
    )
}

export default Header
