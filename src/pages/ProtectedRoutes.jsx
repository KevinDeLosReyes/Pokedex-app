import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import Banner from "../components/Banner"

const ProtectedRoutes = () => {
  const trainer = useSelector(store => store.trainer)

  if (trainer.length > 1) {
    return <>
      <Banner />
      <Outlet />
    </>
  } else {
    return <Navigate to="/" />
  }

}

export default ProtectedRoutes