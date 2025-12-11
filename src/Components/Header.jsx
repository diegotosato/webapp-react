import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
                Header
                <nav>
                    <ul>
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/details">
                            Details
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}