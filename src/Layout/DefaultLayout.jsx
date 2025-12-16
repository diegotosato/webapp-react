import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"

import Loader from "../Components/Loader"

import { useCustom } from "../contexts/CustomContexts"

export default function DefaultLayout() {

    //import from custom context
    const { loading } = useCustom()

    return (
        <>
            {
                !loading && <Loader />
            }
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}