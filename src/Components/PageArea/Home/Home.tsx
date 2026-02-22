import { useNavigate } from "react-router-dom";
import "./Home.css";
import { DeveloperBadge } from "../../DeveloperBadge/DeveloperBadge";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <aside className="home-left">
        <button className="go-btn" onClick={() => navigate("/contact")}>
          GO
        </button>
      </aside>

      <main className="home-main">
        <section className="hero">
          <h1 className="hero-title">אסתר שטינברג</h1>

          <p className="hero-subtitle">
            יוגה שמחזירה לך שקט פנימי, יציבות וחיבור אמיתי לגוף.
          </p>

          <p className="hero-description">
            לא עוד אימון שעובר.
            <br />
            לא עוד מתיחה חטופה.
            <br />
            אלא תרגול עמוק, מדויק ומודע – שמלווה אותך גם הרבה אחרי שהשיעור מסתיים.
          </p>

          <button className="primary-btn" onClick={() => navigate("/contact")}>
            לקביעת שיעור ראשון
          </button>
        </section>

        <section className="values">
          <div className="value-card">
            <h3>דיוק שמורגש בכל תנועה</h3>
            <p>הדרכה ברורה, מקצועית וקשובה לגוף שלך — ללא לחץ וללא השוואות.</p>
          </div>

          <div className="value-card">
            <h3>התקדמות בקצב שלך</h3>
            <p>כל אחת מתחילה מהמקום שבו היא נמצאת. הגוף לומד בהדרגה, בביטחון.</p>
          </div>

          <div className="value-card">
            <h3>רוגע שנשאר איתך</h3>
            <p>נשימה נכונה ויציבה נכונה משנות לא רק את השיעור — אלא את היום כולו.</p>
          </div>
        </section>

        <section className="closing">
          <h2>מוכנה להרגיש אחרת?</h2>
          <p>השאירי פרטים, ואסתר תחזור אלייך לשיחה אישית והתאמת תרגול.</p>

          <button className="secondary-btn" onClick={() => navigate("/contact")}>
            מעבר ליצירת קשר
          </button>
        </section>

        {/* ✅ כאן זה חייב להיות כדי שיופיע */}
        <DeveloperBadge />
      </main>
    </div>
  );
}





