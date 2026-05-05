import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// הגדרות Vite עבור פרויקט React.
export default defineConfig({
  // הפעלת תוסף React של Vite.
  plugins: [react()],
  // נתיב בסיס לפריסה תחת תיקיית yoga, למשל ב-GitHub Pages.
  base: "/yoga/",
  // פתיחת הדפדפן אוטומטית בזמן פיתוח.
  server: { open: true }
})

