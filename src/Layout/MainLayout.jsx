import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Navbar/NavBar";
import NewsLetter from "../Shared/NewsLetter/NewsLetter";


const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
            <NavBar />

            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
