import { Outlet } from "react-router-dom";
import NavBar from "../components/root/NavBar";
import Footer from "../components/root/Footer";


export default function Root() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto h-screen">
        <Outlet />
      </div>

      <Footer />
    </>


  )
}
