import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Portal from "./components/portal/Portal.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import About from "./components/about/About.jsx";
import Search from "./components/search/Search.jsx";
import Admin from "./components/Admin/Admin.jsx";
import { AuthProvider } from "./api/AuthContext.jsx";
import Login from "./components/Auth/Login.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "news",
        element: <Portal></Portal>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/result",
        element: <Search/>,
      },
      {
        path: "/admin/*",
        element: <PrivateRoute><Admin/></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
