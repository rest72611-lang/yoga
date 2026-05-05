import { useNavigate } from "react-router-dom";
import { DeveloperBadge } from "../../DeveloperBadge/DeveloperBadge";
import { yogaContent } from "../../../content/yogaContent";
import "./Home.css";

// עמוד הבית המרכזי: מציג את הצעת הערך, תוכן השירות, המלצות ויצירת קשר.
export function Home() {
  // משמש למעבר לעמוד יצירת הקשר מתוך כפתורי הקריאה לפעולה.
  const navigate = useNavigate();
  // פירוק נתוני העסק והפתיח מתוך קובץ התוכן המרכזי.
  const { business, hero } = yogaContent;

  return (
    <div className="home" dir="rtl">
      {/* כפתור וואטסאפ צף שנשאר זמין בזמן גלילה. */}
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

      <aside className="home-left">
        <button className="go-btn" onClick={() => navigate("/contact")} aria-label="יצירת קשר">
          צור קשר
        </button>
      </aside>

      <main className="home-main">
        {/* אזור פתיחה ראשי עם כותרת, תיאור וכפתור יצירת קשר. */}
        <section className="hero">
          <div className="hero-image">
            <img src={hero.imageSrc} alt={hero.imageAlt} loading="eager" />
          </div>

          <p className="hero-kicker">{hero.kicker}</p>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-highlights" aria-label="עיקרי השירות">
            {hero.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="primary-btn" href={business.whatsappHref} target="_blank" rel="noreferrer">
              💬 וואטסאפ
            </a>
            <a className="secondary-btn" href={business.phoneHref}>
              📞 {business.phone}
            </a>
            <button className="secondary-btn" onClick={() => navigate("/contact")}>
              {hero.cta}
            </button>
          </div>
        </section>

        {/* מקטעים טקסטואליים שמסבירים על אסתר, השיטה וקהל היעד. */}
        <section className="section-block">
          <h2>אודות אסתר</h2>
          <p>
            {yogaContent.about} אסתר שטינברג היא מורה ליוגה בפתח תקווה ומורה ליוגה לנשים בגישה עדינה וברורה.
          </p>
        </section>

        <section className="section-block">
          <h2>שיטת בריגהו</h2>
          <p>{yogaContent.method}</p>
        </section>

        <section className="section-block">
          <h2>למי השיעורים מתאימים</h2>
          <p>{yogaContent.audience}</p>
          <p className="section-note">
            יוגה לנשים בפתח תקווה באווירה שקטה, נעימה ומותאמת לקצב האישי.
          </p>
        </section>

        {/* רשימת יתרונות מוצגת ככרטיסים חוזרים מתוך מערך התוכן. */}
        <section className="values" aria-labelledby="benefits-title">
          <div className="section-heading">
            <h2 id="benefits-title">יתרונות השיעורים</h2>
            <p>במה נתמקד בשיעורי יוגה בשיטת בריגהו:</p>
          </div>

          {yogaContent.services.map((service) => (
            <div className="value-card" key={service.title}>
              <div className="value-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </section>

        {/* המלצות לקוחות, כל המלצה מוצגת כציטוט נפרד. */}
        <section className="testimonials" aria-labelledby="testimonials-title">
          <div className="section-heading">
            <h2 id="testimonials-title">המלצות</h2>
          </div>

          {yogaContent.testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </section>

        {/* שאלות נפוצות נפתחות ונסגרות באמצעות תגית details מובנית. */}
        <section className="faq" aria-labelledby="faq-title">
          <div className="section-heading">
            <h2 id="faq-title">שאלות נפוצות</h2>
          </div>

          {yogaContent.faq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>

        {/* אזור יצירת קשר מסכם עם פעולות מהירות. */}
        <section className="contact-section" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">יצירת קשר</h2>
            <p>{yogaContent.trial}</p>
            <p>
              לקבלת פרטים על שיעורי יוגה בפתח תקווה ושיעור ניסיון, אפשר ליצור קשר בטלפון, בוואטסאפ או במייל.
            </p>
          </div>

          <div className="contact-actions">
            <a className="primary-btn" href={business.phoneHref}>
              📞 {business.phone}
            </a>
            <a className="secondary-btn" href={business.whatsappHref} target="_blank" rel="noreferrer">
              💬 וואטסאפ
            </a>
            <a className="secondary-btn" href={business.emailHref}>
              ✉️ {business.email}
            </a>
          </div>
        </section>

        {/* תחתית העמוד עם פרטי התקשרות ושעות פעילות. */}
        <footer className="site-footer">
          <div className="value-card">
            <h2>פרטי התקשרות</h2>
            <p>{business.name} - {business.tagline}</p>
            <p>📞 טלפון: <a href={business.phoneHref}>{business.phone}</a></p>
            <p>✉️ מייל: <a href={business.emailHref}>{business.email}</a></p>
            <p>אזור שירות: {business.area}</p>
          </div>

          <div className="value-card">
            <h2>שעות פעילות</h2>
            {business.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>
        </footer>

        {/* קישור נפרד לכרטיס הדיגיטלי הקיים, בלי לערבב אותו עם הפוטר. */}
        <section className="more-info-section" aria-labelledby="more-info-title">
          <div>
            <h2 id="more-info-title">מידע נוסף</h2>
            <p>אפשר לצפות גם בכרטיס הדיגיטלי של אסתר עם פרטים נוספים וקישורי התקשרות.</p>
          </div>

          <a
            className="secondary-btn"
            href={business.digitalCardHref}
            target="_blank"
            rel="noreferrer"
          >
            מעבר לכרטיס הדיגיטלי
          </a>
        </section>

        {/* קרדיט למפתח האתר בתחתית עמוד הבית. */}
        <DeveloperBadge />
      </main>
    </div>
  );

}
