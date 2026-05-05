# אתר יוגה לאסתר שטינברג

פרויקט React + TypeScript + Vite עבור אתר תדמית בעברית, בכיווניות מימין לשמאל, לשיעורי יוגה לנשים בפתח תקווה.

## מבנה הפרויקט

- `src/main.tsx` - נקודת הכניסה של React וחיבור הניתוב.
- `src/content/yogaContent.ts` - מקור התוכן המרכזי של האתר: פרטי עסק, טקסטים, המלצות ושאלות נפוצות.
- `src/Components/PageArea/Home` - עמוד הבית הראשי.
- `src/Components/PageArea/List` - עמוד יצירת קשר.
- `src/Components/LayoutArea/Routing` - הגדרת נתיבי האתר.
- `public/sitemap.xml` ו־`public/robots.txt` - קבצים עבור מנועי חיפוש.

## פקודות שימושיות

```bash
npm run dev
```

מריץ את האתר בסביבת פיתוח.

```bash
npm run build
```

בונה גרסת production לתיקיית `dist`.

```bash
npm run preview
```

מציג תצוגה מקדימה לגרסת הבילד.

## הערות תחזוקה

הטקסטים באתר מרוכזים בקובץ `src/content/yogaContent.ts`, ולכן עדיף לעדכן שם פרטי התקשרות ותוכן שיווקי במקום לפזר אותם בין קומפוננטות.

האתר מוגדר לעברית ול־RTL כבר ב־`index.html`, ובקומפוננטות המרכזיות נוסף `dir="rtl"` כדי לשמור על כיווניות נכונה גם בתוך העמודים.
