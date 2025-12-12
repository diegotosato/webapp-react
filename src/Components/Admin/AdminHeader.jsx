import { Link, NavLink } from "react-router-dom"

export default function AdminHeader() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5 mb-5">
                <a className="navbar-brand" href="#">MovieAPI</a>
                <button className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="text-decoration-none me-3" to="/">
                                Home
                            </NavLink>
                            <NavLink className="text-decoration-none" to="/admin/login">
                                Admin
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}