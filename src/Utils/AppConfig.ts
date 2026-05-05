// מחלקת הגדרות מרכזית לערכים שמשותפים לכל האפליקציה.
class AppConfig {
    // כתובת API עתידית, אם האתר יתחבר לשרת חיצוני.
    public readonly apiUrl = "";
}

// מופע יחיד לשימוש מכל מקום בפרויקט.
export const appConfig = new AppConfig();
