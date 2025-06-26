import { Outlet } from "react-router-dom";
;
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";



const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <ScrollToTop />
      {/* Navbar Here */}
  <Navbar/>
      <main className="flex-grow ">
     
        <Outlet />
        
      </main>
  <Footer/>
    </div>
  );
};

export default RootLayout;