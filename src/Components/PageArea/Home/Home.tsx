import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export function Home() {
  const nav = useNavigate();

  const lines = useMemo(
    () => [
      "נשימה שקטה יוצרת יום חדש.",
      "תנועה נכונה מחזקת את הגוף והנפש.",
      "רוגע הוא מיומנות שאפשר לפתח.",
      "דיוק קטן – שינוי גדול.",
      "יוגה שמחזירה אותך לעצמך."
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 3500);
    return () => clearInterval(id);
  }, [lines.length]);

  return (
    <div className="home3">

      <aside className="left-panel">
        <button className="go-btn" onClick={() => nav("/contact")}>
          GO
        </button>
      </aside>

      <main className="main-content">
        <div className="background-animation"></div>

        <div className="hero-content">
          <h1 className="title animated-name">
  אסתר שטינברג
</h1>

          <p className="subtitle">
            שיעורי יוגה שמחזירים שקט, יציבות ואנרגיה.
          </p>

          <div className="quote-box">
            <div key={index} className="quote">
              {lines[index]}
            </div>
          </div>

          <button className="cta-btn" onClick={() => nav("/contact")}>
            התחילי עכשיו
          </button>
        </div>
      </main>
    </div>
  );
}



