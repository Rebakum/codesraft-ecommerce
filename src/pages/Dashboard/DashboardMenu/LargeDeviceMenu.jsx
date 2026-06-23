import { MdDashboard } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { FaProductHunt, FaSackDollar } from "react-icons/fa6";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const LargeDeviceMenu = () => {
  const role = "manager";

  const linkClass = "flex items-center gap-2 py-2 px-3 font-semibold rounded-lg dark:text-coffee-300 hover:bg-amber-50 dark:hover:bg-coffee-900 hover:text-amber-700 transition-colors";

  const userLinks = (
    <>
      <li><Link to="/dashboard/user-home" className={linkClass}><MdDashboard /> Dashboard</Link></li>
      <li><Link to="/dashboard/order-history" className={linkClass}><GrHistory /> Order History</Link></li>
      <li><Link to="/dashboard/order-history" className={linkClass}><FaRegHeart /> Wishlist</Link></li>
      <li><Link to="/dashboard/order-history" className={linkClass}><RiShoppingBagLine /> Shopping Cart</Link></li>
      <li><Link to="/dashboard/user-setting" className={linkClass}><IoSettingsOutline /> Setting</Link></li>
      <li><Link className={linkClass}><RiLogoutBoxLine /> Log-out</Link></li>
    </>
  );

  const managerLinks = (
    <>
      <li><Link to="/dashboard/manager-home" className={linkClass}><MdDashboard /> Dashboard</Link></li>
      <li><Link to="/dashboard/add-product" className={linkClass}><IoIosAddCircle /> Add A Product</Link></li>
      <li><Link to="/dashboard/manage-products" className={linkClass}><FaProductHunt /> Manage Products</Link></li>
      <li><Link to="/dashboard/manage-orders" className={linkClass}><MdOutlineLocalShipping /> Manage Orders</Link></li>
      <li><Link to="/dashboard/payment-history" className={linkClass}><FaSackDollar /> Payment History</Link></li>
      <li><Link to="/dashboard/manager-setting" className={linkClass}><IoSettingsOutline /> Setting</Link></li>
      <li><Link className={linkClass}><RiLogoutBoxLine /> Log-out</Link></li>
    </>
  );

  const adminLinks = (
    <>
      <li><Link to="/dashboard/admin-home" className={linkClass}><MdDashboard /> Dashboard</Link></li>
      <li><Link to="/dashboard/manage-products" className={linkClass}><FaProductHunt /> Manage Products</Link></li>
      <li><Link to="/dashboard/manage-users" className={linkClass}><IoIosPeople /> Manage Users</Link></li>
      <li><Link to="/dashboard/all-payments" className={linkClass}><FaSackDollar /> Payment History</Link></li>
      <li><Link to="/dashboard/admin-setting" className={linkClass}><IoSettingsOutline /> Setting</Link></li>
      <li><Link className={linkClass}><RiLogoutBoxLine /> Log-out</Link></li>
    </>
  );

  return (
    <div className="w-64 border border-coffee-200 dark:border-coffee-800 shadow rounded-2xl !h-auto bg-white dark:bg-[#2b1a0d]">
      <h3 className="text-xl font-semibold mt-5 px-3 dark:text-white">Navigation</h3>
      <div className="h-full p-2">
        <ul className="menu menu-vertical lg:menu-horizontal rounded-none w-full mt-4 px-0 py-0 space-y-1">
          {role === "user" && userLinks}
          {role === "manager" && managerLinks}
          {role === "admin" && adminLinks}
        </ul>
      </div>
    </div>
  );
};

export default LargeDeviceMenu;
