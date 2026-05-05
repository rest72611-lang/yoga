import { useNavigate } from "react-router-dom";
import { yogaContent } from "../../../content/yogaContent";
import "./List.css";

// עמוד יצירת קשר עם קישורים ישירים וטופס פנייה בסיסי.
export function Contact() {
  // מאפשר חזרה יזומה לעמוד הבית בלחיצת כפתור.
  const navigate = useNavigate();
  // פרטי העסק מגיעים מקובץ תוכן מרכזי כדי למנוע כפילויות.
  const { business } = yogaContent;

  return (
    <div className="contact" dir="rtl">
      {/* כפתור וואטסאפ צף שנשאר זמין גם בעמוד יצירת הקשר. */}
      <a
        className="whatsapp-sticky"
        href={business.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="פתיחת שיחה בוואטסאפ"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3.4 29l6.8-1.3c1.8.9 3.8 1.3 5.8 1.3 7.2 0 13-5.8 13-13S23.2 3 16 3Zm0 23.6c-1.8 0-3.5-.5-5-1.3l-.4-.2-4 .8.8-3.9-.3-.4c-1-1.6-1.6-3.5-1.6-5.5C5.5 10.2 10.2 5.5 16 5.5S26.5 10.2 26.5 16 21.8 26.6 16 26.6Zm5.8-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-.1.2-.2.2-.4.2-.7.1-2-.3-3.7-2.4-4.7-4.1-.4-.7.4-.7 1-1.8.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </a>

      <h2>יצירת קשר</h2>

      <p className="contact-intro">
        לקביעת שיעור ניסיון או לקבלת פרטים על שיעורי יוגה בפתח תקווה לנשים,
        אפשר ליצור קשר עם אסתר בטלפון, בוואטסאפ או במייל.
      </p>

      <div className="contact-links" aria-label="פרטי התקשרות">
        {/* קישורים מהירים ליצירת קשר בטלפון, וואטסאפ ומייל. */}
        <a href={business.phoneHref}>📞 {business.phone}</a>
        <a href={business.whatsappHref} target="_blank" rel="noreferrer">💬 וואטסאפ</a>
        <a href={business.emailHref}>✉️ {business.email}</a>
      </div>

      <form className="contact-form">
        {/* שדות הטופס עדיין חזותיים בלבד, ללא שליחה לשרת. */}
        <input placeholder="שם מלא" />
        <input placeholder="טלפון" />
        <input placeholder="לאן לחזור (טלפון / אימייל)" />
        <textarea placeholder="הודעה (רשות)" rows={4} />

        <button type="submit">שליחה</button>
      </form>

      <button className="back-btn" onClick={() => navigate("/")}>
        חזרה לדף הבית
      </button>
    </div>
  );
}
