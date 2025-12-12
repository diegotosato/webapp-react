import { Outlet } from "react-router-dom"
import AdminHeader from "../Components/Admin/AdminHeader"
export default function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <Outlet />
        </>
    )
}