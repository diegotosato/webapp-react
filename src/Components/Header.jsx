import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
                Header
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/details">
                                Details
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}