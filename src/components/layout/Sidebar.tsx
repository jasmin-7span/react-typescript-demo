import { NavLink } from "react-router-dom";
import { IcOutlineHome } from "../icons/HomeIcon";
import { ProductIcon } from "../icons/ProductIcon";
import { DashboardIcon } from "../icons/DashboardIcon";

function Sidebar() {
  return (
    <>
      <div className="h-screen w-64 shadow-md">
        <div className="flex justify-center items-center border-b shadow-md h-16">
          <h2 className="font-semibold text-lg flex items-center">
            <DashboardIcon className="h-6 w-6 mr-2" />
            Admin Dashboard
          </h2>
        </div>
        <ul className="mt-4 px-2">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-lg flex items-center hover:bg-gray-200 pl-6 py-2 rounded-md hover:cursor-pointer ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
              to="/"
            >
              <IcOutlineHome className="mr-2 h-6 w-6" />
              Home
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink
              className={({ isActive }) =>
                `text-lg flex items-center hover:bg-gray-200 pl-6 py-2 rounded-md hover:cursor-pointer ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
              to="/product-form"
            >
              <ProductIcon className="mr-2 h-6 w-6" /> Product
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
