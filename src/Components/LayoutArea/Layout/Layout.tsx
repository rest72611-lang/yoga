// רכיב מעטפת כללי שמחזיק את אזור התוכן המשתנה של הניתוב.
import { Outlet } from "react-router-dom";
import "./Layout.css";

export function Layout() {
  return (
    <div className="layout">
      {/* כאן React Router מציב את העמוד הפעיל לפי הנתיב הנוכחי. */}
      <Outlet />
    </div>
  );
}
