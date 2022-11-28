import React, { useContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useSeller from "../hooks/useSeller";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="max-w-[1440px] mx-auto">
          <div className="mx-10">
            <div className="drawer-side">
              <label
                htmlFor="dashboard-drawer"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 text-base-content">
                {isAdmin && (
                  <>
                    <li>
                      <Link to="/dashboard/allbuyers">All Buyers</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/allsellers">All Sellers</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/reporteditems">Reported Items</Link>
                    </li>
                  </>
                )}
                {isSeller && (
                  <>
                    <li>
                      <Link to="/dashboard/myproduct">My Products</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/addproduct">Add Products</Link>
                    </li>
                  </>
                )}
                {!isAdmin && !isSeller && (
                  <>
                    <li>
                      <Link to="/dashboard/myorder">My Orders</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
