import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyer from "../../Pages/Admin/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Admin/AllSeller/AllSeller";
import ReportedItem from "../../Pages/Admin/ReportedItem/ReportedItem";
import Blog from "../../Pages/Blog/Blog";
import MyOrder from "../../Pages/Buyer/MyOrder";
import Category from "../../Pages/Category/Category";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import Product from "../../Pages/Product/Product";
import AddProduct from "../../Pages/Seller/AddProduct/AddProduct";
import MyProduct from "../../Pages/Seller/MyProduct/MyProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Product></Product>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://phonehaat-server-ten.vercel.app/category/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("https://phonehaat-server-ten.vercel.app/users"),
      },
      {
        path: "/dashboard/myorder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reporteditems",
        element: (
          <AdminRoute>
            <ReportedItem></ReportedItem>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div className="text-center">404 PAGE NOT FOUND!</div>,
  },
]);

export default route;
