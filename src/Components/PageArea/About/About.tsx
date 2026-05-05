import { yogaContent } from "../../../content/yogaContent";
import "./About.css";

// עמוד אודות קצר שמציג את הטקסט המרכזי על אסתר.
export function About() {
  return (
    <div className="About" dir="rtl">
      <h2>אודות אסתר</h2>
      <p>{yogaContent.about}</p>
    </div>
  );
}
