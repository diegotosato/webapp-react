import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"
import HomePage from "./Pages/HomePage"
import MovieDetailPage from "./Pages/MovieDetailPage"
import NotFoundPage from "./Pages/NotFoundPage"

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<MovieDetailPage />} />
          </Route>

          <Route path="/*" element={<NotFoundPage />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
