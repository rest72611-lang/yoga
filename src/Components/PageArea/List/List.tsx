// src/pages/Contact/Contact.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./List.css";

export function Contact() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("ערב");
  const [returnTo, setReturnTo] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit() {
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName,
          phone,
          preferredTime,
          returnTo,
          note: message,
          contactedAt: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error();

      setStatus("sent");

      setFullName("");
      setPhone("");
      setPreferredTime("ערב");
      setReturnTo("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-page">
      <h2>השארת פרטים לאסתר שטינברג</h2>

      <div className="contact-form">

        <label>
          שם מלא
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>

        <label>
          טלפון
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>

        <label>
          שעה מועדפת לשיחה
          <select value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}>
            <option value="בוקר">בוקר</option>
            <option value="צהריים">צהריים</option>
            <option value="ערב">ערב</option>
          </select>
        </label>

        <label>
          לאן לחזור
          <input value={returnTo} onChange={(e) => setReturnTo(e.target.value)} />
        </label>

        <label>
          הודעה
          <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>

        <div className="buttons-row">
          <button
            className="send-btn"
            onClick={handleSubmit}
            disabled={status === "loading"}
          >
            {status === "loading" ? "שולח..." : "שלח"}
          </button>

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            חזרה לדף הבית
          </button>
        </div>

        {status === "sent" && <p className="success">הפנייה נשלחה בהצלחה ✅</p>}
        {status === "error" && <p className="error">אירעה שגיאה בשליחה ❌</p>}
      </div>
    </div>
  );
}


