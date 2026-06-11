<?php
// ملف إعدادات لوحة التحكم

// كلمة المرور للدخول إلى لوحة التحكم (يمكنك تعديلها من هنا)
define('ADMIN_PASSWORD', 'admin123'); 

// مسارات ملفات البيانات
define('PRODUCTS_FILE', __DIR__ . '/data/products.json');
define('SETTINGS_FILE', __DIR__ . '/data/settings.json');
define('MESSAGES_FILE', __DIR__ . '/data/messages.json');

// مسار رفع الصور
define('UPLOAD_DIR', __DIR__ . '/uploads/');
define('UPLOAD_URL_PATH', 'uploads/');

// بدء الجلسة (Session)
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// دالة للتحقق من تسجيل الدخول
function is_logged_in() {
    return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
}

// تهيئة الملفات إذا لم تكن موجودة
if (!file_exists(__DIR__ . '/data')) {
    mkdir(__DIR__ . '/data', 0755, true);
}
if (!file_exists(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

// تهيئة الملفات الافتراضية من مجلد defaults
if (!file_exists(PRODUCTS_FILE) && file_exists(__DIR__ . '/defaults/products.json')) {
    copy(__DIR__ . '/defaults/products.json', PRODUCTS_FILE);
}
if (!file_exists(SETTINGS_FILE) && file_exists(__DIR__ . '/defaults/settings.json')) {
    copy(__DIR__ . '/defaults/settings.json', SETTINGS_FILE);
}
if (!file_exists(MESSAGES_FILE)) {
    file_put_contents(MESSAGES_FILE, '[]');
}

// تهيئة الصور الافتراضية
if (file_exists(__DIR__ . '/defaults/uploads')) {
    $default_images = glob(__DIR__ . '/defaults/uploads/*');
    foreach ($default_images as $file) {
        $filename = basename($file);
        $dest = UPLOAD_DIR . $filename;
        if (!file_exists($dest)) {
            copy($file, $dest);
        }
    }
}
