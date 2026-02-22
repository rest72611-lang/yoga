// src/app/routes.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../../PageArea/Home/Home";
import { Layout } from "../Layout/Layout";
import { Contact } from "../../PageArea/List/List";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },

      // fallback לכל נתיב לא קיים:
      { path: "*", element: <Navigate to="/" replace /> }
    ]
  }
]);

