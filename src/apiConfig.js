const getApiUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    // في بيئة التطوير المحلية، يمكن جلب البيانات من السيرفر المباشر لتسهيل العمل دون تشغيل PHP محلياً
    return 'https://algoldherbs.com/admin/api.php';
  }
  // في الإنتاج، نستخدم مساراً نسبياً يعمل تلقائياً على نفس الدومين
  return '/admin/api.php';
};

const getContactUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'https://algoldherbs.com/admin/contact.php';
  }
  return '/admin/contact.php';
};

const getUploadsUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'https://algoldherbs.com/admin/';
  }
  return '/admin/';
};

export const API_URL = getApiUrl();
export const CONTACT_URL = getContactUrl();
export const UPLOADS_URL = getUploadsUrl();
