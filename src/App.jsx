function App() {
  return (
    <>
      <header>
        Header
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Details</a>
            </li>
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
    </>
  )
}

export default App
