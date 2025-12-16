import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./Layout/DefaultLayout"
import HomePage from "./Pages/HomePage"
import MovieDetailPage from "./Pages/MovieDetailPage"
import NotFoundPage from "./Pages/NotFoundPage"
import AdminLogin from "./Pages/AdminLogin"
import AdminLayout from "./Layout/AdminLayout"
import AdminDevPage from "./Pages/AdminDevPage"
import { CustomProvider } from "./contexts/CustomContexts"

function App() {
  return (
    <>
      <BrowserRouter>

        <CustomProvider>
          <Routes>


            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:id" element={<MovieDetailPage />} />
            </Route>

            <Route element={<AdminLayout />}>
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dev" element={<AdminDevPage />} />
            </Route>

            <Route path="/*" element={<NotFoundPage />} />


          </Routes>
        </CustomProvider>

      </BrowserRouter>
    </>
  )
}

export default App
