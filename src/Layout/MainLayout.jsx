import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-[#1a0f08] text-coffee-900 dark:text-coffee-100 transition-colors duration-300">
      <Navbar />
      <main className="w-full transition-colors duration-300">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
