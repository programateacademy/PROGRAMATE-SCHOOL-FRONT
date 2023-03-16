import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
    // login validation (Valid if the user is successful or not and redirects him to login)
    let Login = showPassword.getShowPassword("token", "true")
    if (!Login) {
        return <Navigate to="/Login"/>
    }


    return (
        <Outlet />
    )
}

export default ProtectedRoutes