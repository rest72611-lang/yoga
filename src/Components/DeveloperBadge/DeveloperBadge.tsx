// רכיב קרדיט למפתח האתר, כולל קישור לתיק עבודות.
import "./DeveloperBadge.css";

export function DeveloperBadge() {
  return (
    <div className="dev-badge">
      <div className="dev-content">

        {/* כותרת מקדימה שמסבירה שמדובר בקרדיט בנייה. */}
        <div className="dev-title">
          אתר זה נבנה על ידי
        </div>

        {/* שם המפתח מוצג בהדגשה ויזואלית. */}
        <div className="dev-name">
          אריה שטינברג
        </div>

        {/* פירוט קצר של תחומי הפיתוח והשירותים. */}
        <div className="dev-desc">
          פיתוח אתרי תדמית ומערכות Full Stack  
          React • Node.js • UX מדויק • ביצועים גבוהים
        </div>

        {/* קישור חיצוני נפתח בטאב חדש לתיק העבודות. */}
        <a
          className="dev-link"
          href="https://github.com/rest72611-lang"
          target="_blank"
          rel="noreferrer"
        >
          לצפייה בעבודות נוספות
        </a>

      </div>
    </div>
  );
}
