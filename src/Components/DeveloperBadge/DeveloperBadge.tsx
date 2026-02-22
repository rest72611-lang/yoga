// src/components/DeveloperBadge/DeveloperBadge.tsx
import "./DeveloperBadge.css";

export function DeveloperBadge() {
  return (
    <div className="dev-badge">
      <div className="dev-content">

        <div className="dev-title">
          אתר זה נבנה על ידי
        </div>

        <div className="dev-name">
          אריה שטינברג
        </div>

        <div className="dev-desc">
          פיתוח אתרי תדמית ומערכות Full Stack  
          React • Node.js • UX מדויק • ביצועים גבוהים
        </div>

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
