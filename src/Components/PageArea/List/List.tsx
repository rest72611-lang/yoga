import { useNavigate } from "react-router-dom";
import "./List.css";

export function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact">

      <h1>השאירי פרטים</h1>

      <p className="contact-intro">
        הדרך לרוגע מתחילה בהחלטה אחת קטנה.
        ספרי מה את מחפשת — ואסתר תחזור אלייך.
      </p>

      <form className="contact-form">

        <input placeholder="שם מלא" />
        <input placeholder="טלפון" />
        <input placeholder="לאן לחזור (טלפון / אימייל)" />
        <textarea placeholder="הודעה (רשות)" rows={4} />

        <button type="submit">שלח</button>

      </form>

      <button className="back-btn" onClick={() => navigate("/")}>
        חזרה לדף הבית
      </button>

    </div>
  );
}



