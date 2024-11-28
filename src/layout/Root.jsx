import { Outlet } from "react-router-dom";
import NavBar from "../components/root/NavBar";
import Footer from "../components/root/Footer";

export default function Root() {
  return (
    <>
      <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <NavBar />
        <div className="container mx-auto">
          <Outlet />
        </div>


        
        <Footer />
      </div>
    </>
  );
}
