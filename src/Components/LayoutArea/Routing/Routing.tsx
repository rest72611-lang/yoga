import { createHashRouter, Navigate } from "react-router-dom";
import { Home } from "../../PageArea/Home/Home";
import { Layout } from "../Layout/Layout";
import { Contact } from "../../PageArea/List/List";

// הגדרת כל נתיבי האתר תחת Hash Router, מתאים גם לפריסה ב-GitHub Pages.
export const router = createHashRouter([
  {
    // נתיב הבסיס של האתר.
    path: "/",
    element: <Layout />,
    children: [
      // עמוד הבית מוצג כברירת מחדל.
      { index: true, element: <Home /> },
      // עמוד יצירת הקשר.
      { path: "contact", element: <Contact /> },

      // מעבר חזרה לעמוד הבית לכל נתיב לא קיים.
      { path: "*", element: <Navigate to="/" replace /> }
    ]
  }
]);
