import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"
import HomePage from "./Pages/HomePage"
import MovieDetailPage from "./Pages/MovieDetailPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<MovieDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
