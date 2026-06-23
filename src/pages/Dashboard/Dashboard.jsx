import { Outlet } from "react-router-dom";
import Nav_Banner from "../Shared/Nav_Banner";
import LargeDeviceMenu from "./DashboardMenu/LargeDeviceMenu";

const Dashboard = () => {
  return (
    <div className="dark:text-coffee-100">
      <Nav_Banner name="Dashboard" path="/dashboard" />
      <div className="flex items-start gap-5 max-w-7xl mx-auto mt-10 px-4">
        <LargeDeviceMenu />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
