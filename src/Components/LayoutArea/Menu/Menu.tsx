import { NavLink } from "react-router-dom";
import "./Menu.css";

// תפריט ניווט ראשי בין עמוד הבית לעמוד יצירת הקשר.
export function Menu() {
  return (
    <nav className="Menu" aria-label="ניווט ראשי">
      <NavLink to="/">בית</NavLink>
      <span> | </span>
      <NavLink to="/contact">יצירת קשר</NavLink>
    </nav>
  );
}
