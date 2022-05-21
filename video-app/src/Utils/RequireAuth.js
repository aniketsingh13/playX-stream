import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"



export const RequireAuth = ({children}) => {
    const location= useLocation()
    const {encodedToken} = useAuth()

  return encodedToken ? children : <Navigate to="/login" state={{from: location}} replace />
}