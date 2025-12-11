import { Link, NavLink, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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

          <main>Main</main>

          <footer>
            Footer
            <div className="contacts">
              Contatti
              <ul>
                <li>
                  <a href="#">Chi siamo</a>
                  <a href="#">La nostra mission</a>
                  <a href="#">Team</a>
                  <a href="#">Lavora con noi</a>
                  <a href="#">Storia</a>
                </li>
              </ul>
            </div>
            <div className="support">
              Supporto
              <ul>
                <li>
                  <a href="#">Supporto e assistenza</a>
                  <a href="#">FAQ</a>
                  <a href="#">Assistenza clienti</a>
                </li>
              </ul>
            </div>
          </footer>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
