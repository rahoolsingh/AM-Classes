import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Admission from "./Pages/Admission/Admission.jsx";
import Login from "./Pages/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "admission", element: <Admission /> },
            { path: "contact", element: <Contact /> },
            { path: "login", element: <Login /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
