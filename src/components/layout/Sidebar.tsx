import { NavLink } from "react-router-dom";
import { ProductIcon } from "../icons/ProductIcon";
import { DashboardIcon } from "../icons/DashboardIcon";

function Sidebar({ isOpenSidebar }: { isOpenSidebar: boolean }) {
  return (
    <>
      <div
        className={`h-screen shadow-md ${
          isOpenSidebar
            ? "w-64 ease-in duration-100"
            : "w-0 overflow-hidden ease-in duration-100"
        }`}
      >
        <div className="flex justify-center items-center border-b shadow-md h-16">
          <h2 className="font-semibold text-lg flex items-center">
            <DashboardIcon className="h-6 w-6 mr-2" />
            Admin Dashboard
          </h2>
        </div>
        <ul className="mt-4 px-2">
          <li className="mt-2">
            <NavLink
              className={({ isActive }) =>
                `text-lg flex items-center hover:bg-gray-200 pl-6 py-2 rounded-md hover:cursor-pointer ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
              to="/product"
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
