// init.js - حل مشکل localStorage در GitHub Pages
(function() {
    const REPO_NAME = 'your-repo-name'; // اسم ریپازیتوری خودت رو اینجا بذار
    const STORAGE_KEY = `barman_products_${REPO_NAME}`;
    const SETTINGS_KEY = `barman_settings_${REPO_NAME}`;
    
    // تابع برای تبدیل کلیدهای قدیمی به جدید
    function migrateOldData() {
        const oldProducts = localStorage.getItem('barman_products');
        const oldSettings = localStorage.getItem('barman_settings');
        
        if (oldProducts && !localStorage.getItem(STORAGE_KEY)) {
            localStorage.setItem(STORAGE_KEY, oldProducts);
            console.log('محصولات قدیمی به کلید جدید منتقل شدند');
        }
        
        if (oldSettings && !localStorage.getItem(SETTINGS_KEY)) {
            localStorage.setItem(SETTINGS_KEY, oldSettings);
            console.log('تنظیمات قدیمی به کلید جدید منتقل شدند');
        }
    }
    
    // ذخیره کلیدهای جدید در window تا همه جا قابل دسترسی باشه
    window.APP_STORAGE_KEY = STORAGE_KEY;
    window.APP_SETTINGS_KEY = SETTINGS_KEY;
    
    // مهاجرت داده‌های قدیمی
    migrateOldData();
    
    console.log(`✅ localStorage با کلید "${STORAGE_KEY}" راه‌اندازی شد`);
})();
