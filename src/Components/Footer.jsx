import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className="bg-dark mt-5 py-5">
                <div className="container d-flex">
                    <div className="me-5">
                        <a className="navbar-brand text-light fs-3" href="#">Contatti</a>
                        <ul className="d-flex flex-column">
                            <li className="nav-item">
                                <Link className="text-decoration-none" to="/">Chi siamo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none" to="/">La nostra mission</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none" to="/">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none" to="/">Lavora con noi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none" to="/">Storia</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a className="navbar-brand text-light fs-3" href="#">Supporto</a>
                        <ul className="d-flex flex-column">
                            <li className="nav-item">
                                <Link className="text-decoration-none" to="/">Supporto e assistenza</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none" to="/">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none" to="/">Assistenza clienti</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}