// נקודת הכניסה הראשית של אפליקציית React.
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/LayoutArea/Routing/Routing";


// חיבור האפליקציה לאלמנט root והפעלת מערכת הניתוב.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
