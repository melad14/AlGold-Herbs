<?php
require_once __DIR__ . '/config.php';

// معالجة تسجيل الدخول
$error = '';
if (isset($_GET['action']) && $_GET['action'] === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    if ($password === ADMIN_PASSWORD) {
        $_SESSION['logged_in'] = true;
        header('Location: index.php');
        exit();
    } else {
        $error = 'كلمة المرور غير صحيحة!';
    }
}

// معالجة تسجيل الخروج
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    $_SESSION['logged_in'] = false;
    session_destroy();
    header('Location: index.php');
    exit();
}

// حماية الصفحة: إذا لم يكن مسجلاً يعرض صفحة الدخول
if (!is_logged_in()) {
    ?>
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>تسجيل الدخول - لوحة تحكم Al Gold Herbs</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Cairo', sans-serif;
                background-color: #f4f6f9;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .login-card {
                width: 100%;
                max-width: 400px;
                padding: 2rem;
                border-radius: 15px;
                background: white;
                box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                border: 1px solid rgba(25, 135, 84, 0.1);
            }
            .btn-success {
                background-color: #198754;
                border-color: #198754;
            }
            .btn-success:hover {
                background-color: #146c43;
            }
            .text-primary-custom {
                color: #198754;
            }
        </style>
    </head>
    <body>
        <div class="login-card text-center">
            <h3 class="mb-2 fw-bold text-primary-custom">Al Gold Herbs</h3>
            <p class="text-muted mb-4">لوحة تحكم إدارة محتوى الموقع</p>
            
            <?php if ($error): ?>
                <div class="alert alert-danger py-2" role="alert"><?php echo $error; ?></div>
            <?php endif; ?>
            
            <form action="index.php?action=login" method="POST">
                <div class="mb-3 text-start">
                    <label for="password" class="form-label">كلمة مرور لوحة التحكم</label>
                    <input type="password" class="form-control text-center" id="password" name="password" required placeholder="••••••••">
                </div>
                <button type="submit" class="btn btn-success w-100 py-2 fw-bold">تسجيل الدخول</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit();
}

// ----------------------------------------------------
// بعد تسجيل الدخول: معالجة الطلبات البرمجية (الأكشنز)
// ----------------------------------------------------

// دالة لقراءة المنتجات
function read_products() {
    if (!file_exists(PRODUCTS_FILE)) return [];
    return json_decode(file_get_contents(PRODUCTS_FILE), true) ?: [];
}

// دالة لحفظ المنتجات
function save_products($products) {
    file_put_contents(PRODUCTS_FILE, json_encode($products, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

// دالة لقراءة الإعدادات
function read_settings() {
    if (!file_exists(SETTINGS_FILE)) return [];
    return json_decode(file_get_contents(SETTINGS_FILE), true) ?: [];
}

// دالة لحفظ الإعدادات
function save_settings_data($settings) {
    file_put_contents(SETTINGS_FILE, json_encode($settings, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

// دالة لقراءة الرسائل
function read_messages() {
    if (!file_exists(MESSAGES_FILE)) return [];
    return json_decode(file_get_contents(MESSAGES_FILE), true) ?: [];
}

// دالة لحفظ الرسائل
function save_messages($messages) {
    file_put_contents(MESSAGES_FILE, json_encode($messages, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

$message_status = '';
$status_type = 'success';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action'])) {
    $action = $_GET['action'];

    // 1. إضافة أو تعديل منتج
    if ($action === 'save_product') {
        $products = read_products();
        $id = isset($_POST['id']) && !empty($_POST['id']) ? $_POST['id'] : uniqid('prod_');
        $title = isset($_POST['title']) ? $_POST['title'] : '';
        $scientificName = isset($_POST['scientificName']) ? $_POST['scientificName'] : '';
        $category = isset($_POST['category']) ? $_POST['category'] : '';
        $status = isset($_POST['status']) ? $_POST['status'] : '';
        
        // معالجة الأشكال المتاحة والـ Pesticides كـ المصفوفة
        $availableFormsInput = isset($_POST['availableForms']) ? $_POST['availableForms'] : '';
        $availableForms = array_filter(array_map('trim', explode(',', $availableFormsInput)));
        
        $pesticidesStatusInput = isset($_POST['pesticidesStatus']) ? $_POST['pesticidesStatus'] : '';
        $pesticidesStatus = array_filter(array_map('trim', explode(',', $pesticidesStatusInput)));

        // معالجة رفع الصورة
        $imageName = isset($_POST['existing_image']) ? $_POST['existing_image'] : '';
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['image']['tmp_name'];
            $fileName = $_FILES['image']['name'];
            $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
            
            // التحقق من نوع الملف
            $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
            if (in_array($fileExtension, $allowedExtensions)) {
                $newFileName = uniqid() . '.' . $fileExtension;
                $destPath = UPLOAD_DIR . $newFileName;
                if (move_uploaded_file($fileTmpPath, $destPath)) {
                    $imageName = $newFileName;
                }
            }
        }

        $product_data = [
            "id" => $id,
            "title" => $title,
            "scientificName" => $scientificName,
            "category" => $category,
            "status" => $status,
            "image" => $imageName,
            "availableForms" => array_values($availableForms),
            "pesticidesStatus" => array_values($pesticidesStatus)
        ];

        // تحديث أو إضافة المنتج في المصفوفة
        $found = false;
        foreach ($products as $key => $p) {
            if ($p['id'] === $id) {
                $products[$key] = $product_data;
                $found = true;
                break;
            }
        }
        if (!$found) {
            $products[] = $product_data;
        }

        save_products($products);
        $message_status = 'تم حفظ المنتج بنجاح!';
    }

    // 2. حذف منتج
    if ($action === 'delete_product') {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $products = read_products();
        $filtered = array_filter($products, function($p) use ($id) {
            return $p['id'] !== $id;
        });
        save_products(array_values($filtered));
        $message_status = 'تم حذف المنتج بنجاح!';
    }

    // 3. حفظ إعدادات المحتوى
    if ($action === 'save_settings') {
        $settings = read_settings();
        
        // تحديث نصوص ومعلومات الاتصال
        $settings['contact']['address'] = isset($_POST['contact_address']) ? $_POST['contact_address'] : '';
        $settings['contact']['email'] = isset($_POST['contact_email']) ? $_POST['contact_email'] : '';
        $settings['contact']['phone'] = isset($_POST['contact_phone']) ? $_POST['contact_phone'] : '';
        $settings['contact']['website'] = isset($_POST['contact_website']) ? $_POST['contact_website'] : '';
        
        // تحديث نصوص من نحن
        $settings['about']['vision'] = isset($_POST['about_vision']) ? $_POST['about_vision'] : '';
        $settings['about']['mission'] = isset($_POST['about_mission']) ? $_POST['about_mission'] : '';
        
        // تحديث الإحصائيات والعدادات
        $settings['counters']['countries'] = isset($_POST['count_countries']) ? $_POST['count_countries'] : '25';
        $settings['counters']['team'] = isset($_POST['count_team']) ? $_POST['count_team'] : '50';
        $settings['counters']['certificates'] = isset($_POST['count_certificates']) ? $_POST['count_certificates'] : '15';
        $settings['counters']['products'] = isset($_POST['count_products']) ? $_POST['count_products'] : '100';

        save_settings_data($settings);
        $message_status = 'تم حفظ الإعدادات بنجاح!';
    }

    // 4. حذف رسالة تواصل
    if ($action === 'delete_message') {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $messages = read_messages();
        $filtered = array_filter($messages, function($m) use ($id) {
            return $m['id'] !== $id;
        });
        save_messages(array_values($filtered));
        $message_status = 'تم حذف الرسالة!';
    }
}

// قراءة البيانات لعرضها في الواجهة
$products = read_products();
$settings = read_settings();
$messages = read_messages();
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة تحكم Al Gold Herbs</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Cairo', sans-serif;
            background-color: #f8f9fa;
        }
        .navbar-brand-custom {
            font-weight: 700;
            color: #198754 !important;
        }
        .card-custom {
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            border: none;
            margin-bottom: 1.5rem;
        }
        .nav-tabs-custom .nav-link {
            font-weight: 600;
            color: #495057;
            border: none;
            padding: 1rem 1.5rem;
        }
        .nav-tabs-custom .nav-link.active {
            color: #198754;
            border-bottom: 3px solid #198754;
            background: none;
        }
        .product-thumbnail {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 8px;
        }
        .badge-organic {
            background-color: #d1e7dd;
            color: #0f5132;
        }
        .badge-conventional {
            background-color: #e2e3e5;
            color: #41464b;
        }
        .badge-outofstock {
            background-color: #f8d7da;
            color: #842029;
        }
    </style>
</head>
<body>

    <!-- الهيدر -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div class="container">
            <span class="navbar-brand navbar-brand-custom fs-3 text-success"><i class="fa-solid fa-leaf me-2"></i>Al Gold Herbs</span>
            <div class="d-flex align-items-center">
                <span class="text-light me-3 d-none d-md-inline">مرحباً بك في لوحة الإدارة</span>
                <a href="index.php?action=logout" class="btn btn-outline-danger btn-sm"><i class="fa-solid fa-right-from-bracket me-1"></i>تسجيل الخروج</a>
            </div>
        </div>
    </nav>

    <div class="container py-4">
        <!-- رسائل التأكيد -->
        <?php if ($message_status): ?>
            <div class="alert alert-<?php echo $status_type; ?> alert-dismissible fade show card-custom p-3" role="alert">
                <strong><i class="fa-solid fa-circle-check me-2"></i></strong> <?php echo $message_status; ?>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        <?php endif; ?>

        <!-- التبويبات -->
        <ul class="nav nav-tabs nav-tabs-custom mb-4 bg-white rounded p-1 shadow-sm" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products-pane" type="button" role="tab"><i class="fa-solid fa-box-open me-2"></i>إدارة المنتجات</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings-pane" type="button" role="tab"><i class="fa-solid fa-sliders me-2"></i>محتوى ومعلومات الموقع</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages-pane" type="button" role="tab">
                    <i class="fa-solid fa-envelope me-2"></i>رسائل العملاء 
                    <?php if (count($messages) > 0): ?>
                        <span class="badge bg-danger rounded-pill ms-1"><?php echo count($messages); ?></span>
                    <?php endif; ?>
                </button>
            </li>
        </ul>

        <div class="tab-content" id="myTabContent">
            <!-- تبويب المنتجات -->
            <div class="tab-pane fade show active" id="products-pane" role="tabpanel" tabindex="0">
                <div class="card card-custom p-4">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h4 class="fw-bold m-0"><i class="fa-solid fa-list me-2 text-success"></i>قائمة المنتجات الحالية (<?php echo count($products); ?>)</h4>
                        <button class="btn btn-success fw-bold" onclick="showAddModal()"><i class="fa-solid fa-plus me-1"></i>إضافة منتج جديد</button>
                    </div>

                    <div class="table-responsive">
                        <table class="table align-middle table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>الصورة</th>
                                    <th>اسم المنتج</th>
                                    <th>الاسم العلمي</th>
                                    <th>الفئة</th>
                                    <th>الحالة</th>
                                    <th>إجراءات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if (empty($products)): ?>
                                    <tr>
                                        <td colspan="6" class="text-center py-4 text-muted">لا يوجد منتجات حالياً. أضف منتجاً جديداً للبدء!</td>
                                    </tr>
                                <?php else: ?>
                                    <?php foreach ($products as $p): ?>
                                        <tr>
                                            <td>
                                                <?php if (isset($p['image']) && !empty($p['image'])): ?>
                                                    <img src="uploads/<?php echo htmlspecialchars($p['image']); ?>" class="product-thumbnail" alt="">
                                                <?php else: ?>
                                                    <div class="bg-secondary text-white rounded d-flex align-items-center justify-content-center product-thumbnail"><i class="fa-regular fa-image"></i></div>
                                                <?php endif; ?>
                                            </td>
                                            <td><strong class="text-dark"><?php echo htmlspecialchars($p['title']); ?></strong></td>
                                            <td class="text-muted"><em><?php echo htmlspecialchars($p['scientificName']); ?></em></td>
                                            <td><span class="badge bg-light text-dark border"><?php echo htmlspecialchars($p['category']); ?></span></td>
                                            <td>
                                                <?php
                                                $statusClass = 'badge-organic';
                                                if ($p['status'] === 'Conventional') $statusClass = 'badge-conventional';
                                                if ($p['status'] === 'Out of Stock') $statusClass = 'badge-outofstock';
                                                ?>
                                                <span class="badge <?php echo $statusClass; ?>"><?php echo htmlspecialchars($p['status']); ?></span>
                                            </td>
                                            <td>
                                                <button class="btn btn-outline-primary btn-sm me-1" onclick="editProduct(<?php echo htmlspecialchars(json_encode($p)); ?>)"><i class="fa-solid fa-pen-to-square"></i> تعديل</button>
                                                <form action="index.php?action=delete_product" method="POST" class="d-inline" onsubmit="return confirm('هل أنت متأكد من حذف هذا المنتج؟')">
                                                    <input type="hidden" name="id" value="<?php echo $p['id']; ?>">
                                                    <button type="submit" class="btn btn-outline-danger btn-sm"><i class="fa-solid fa-trash"></i> حذف</button>
                                                </form>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- تبويب محتوى ومعلومات الموقع -->
            <div class="tab-pane fade" id="settings-pane" role="tabpanel" tabindex="0">
                <form action="index.php?action=save_settings" method="POST">
                    <div class="row">
                        <!-- معلومات الاتصال -->
                        <div class="col-lg-6">
                            <div class="card card-custom p-4">
                                <h5 class="fw-bold mb-4 text-success border-bottom pb-2"><i class="fa-solid fa-address-book me-2"></i>بيانات الاتصال والعناوين</h5>
                                <div class="mb-3">
                                    <label class="form-label">العنوان (Address)</label>
                                    <input type="text" class="form-control" name="contact_address" value="<?php echo htmlspecialchars(isset($settings['contact']['address']) ? $settings['contact']['address'] : 'Bani-suef-egypt'); ?>">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">البريد الإلكتروني (Mail Us)</label>
                                    <input type="email" class="form-control text-start" name="contact_email" value="<?php echo htmlspecialchars(isset($settings['contact']['email']) ? $settings['contact']['email'] : 'contact@algoldherbs.com'); ?>">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">رقم الهاتف (Telephone / WhatsApp)</label>
                                    <input type="text" class="form-control text-start" name="contact_phone" value="<?php echo htmlspecialchars(isset($settings['contact']['phone']) ? $settings['contact']['phone'] : '01204684565'); ?>">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">رابط الموقع الإلكتروني</label>
                                    <input type="text" class="form-control text-start" name="contact_website" value="<?php echo htmlspecialchars(isset($settings['contact']['website']) ? $settings['contact']['website'] : 'www.algoldherbs.com'); ?>">
                                </div>
                            </div>
                        </div>

                        <!-- إعدادات من نحن والعدادات -->
                        <div class="col-lg-6">
                            <div class="card card-custom p-4">
                                <h5 class="fw-bold mb-4 text-success border-bottom pb-2"><i class="fa-solid fa-circle-info me-2"></i>من نحن وإحصائيات الشركة</h5>
                                <div class="mb-3">
                                    <label class="form-label">رؤيتنا (Our Vision)</label>
                                    <textarea class="form-control" name="about_vision" rows="3"><?php echo htmlspecialchars(isset($settings['about']['vision']) ? $settings['about']['vision'] : ''); ?></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">رسالتنا (Our Mission)</label>
                                    <textarea class="form-control" name="about_mission" rows="3"><?php echo htmlspecialchars(isset($settings['about']['mission']) ? $settings['about']['mission'] : ''); ?></textarea>
                                </div>
                                <h6 class="fw-bold mt-4 mb-3"><i class="fa-solid fa-chart-simple me-2"></i>الإحصائيات والعدادات الرقمية</h6>
                                <div class="row g-2">
                                    <div class="col-6 mb-2">
                                        <label class="form-label font-monospace small">الدول المخدمة (Countries)</label>
                                        <input type="number" class="form-control" name="count_countries" value="<?php echo htmlspecialchars(isset($settings['counters']['countries']) ? $settings['counters']['countries'] : '25'); ?>">
                                    </div>
                                    <div class="col-6 mb-2">
                                        <label class="form-label font-monospace small">أعضاء الفريق (Team)</label>
                                        <input type="number" class="form-control" name="count_team" value="<?php echo htmlspecialchars(isset($settings['counters']['team']) ? $settings['counters']['team'] : '50'); ?>">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label font-monospace small">الشهادات الدولية (Certificates)</label>
                                        <input type="number" class="form-control" name="count_certificates" value="<?php echo htmlspecialchars(isset($settings['counters']['certificates']) ? $settings['counters']['certificates'] : '15'); ?>">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label font-monospace small">أنواع المنتجات (Products)</label>
                                        <input type="number" class="form-control" name="count_products" value="<?php echo htmlspecialchars(isset($settings['counters']['products']) ? $settings['counters']['products'] : '100'); ?>">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-success px-5 py-2 fw-bold"><i class="fa-solid fa-floppy-disk me-1"></i>حفظ كافة الإعدادات</button>
                    </div>
                </form>
            </div>

            <!-- تبويب رسائل التواصل -->
            <div class="tab-pane fade" id="messages-pane" role="tabpanel" tabindex="0">
                <div class="card card-custom p-4">
                    <h4 class="fw-bold mb-4"><i class="fa-solid fa-inbox me-2 text-danger"></i>صندوق الرسائل الواردة</h4>

                    <?php if (empty($messages)): ?>
                        <div class="text-center py-5 text-muted">لا توجد رسائل واردة حالياً.</div>
                    <?php else: ?>
                        <div class="row">
                            <?php foreach ($messages as $m): ?>
                                <div class="col-md-6 col-lg-4 mb-3">
                                    <div class="card border p-3 shadow-sm h-100 position-relative">
                                        <div class="d-flex justify-content-between mb-2">
                                            <h6 class="fw-bold text-success m-0"><?php echo htmlspecialchars($m['name']); ?></h6>
                                            <span class="text-muted font-monospace small"><?php echo htmlspecialchars($m['date']); ?></span>
                                        </div>
                                        <hr class="my-2">
                                        <p class="mb-1 font-monospace small"><strong>البريد:</strong> <?php echo htmlspecialchars($m['email']); ?></p>
                                        <?php if (!empty($m['phone'])): ?>
                                            <p class="mb-1 font-monospace small"><strong>التليفون:</strong> <?php echo htmlspecialchars($m['phone']); ?></p>
                                        <?php endif; ?>
                                        <?php if (!empty($m['project'])): ?>
                                            <p class="mb-1 font-monospace small"><strong>المشروع:</strong> <?php echo htmlspecialchars($m['project']); ?></p>
                                        <?php endif; ?>
                                        <?php if (!empty($m['subject'])): ?>
                                            <p class="mb-2 font-monospace small"><strong>الموضوع:</strong> <?php echo htmlspecialchars($m['subject']); ?></p>
                                        <?php endif; ?>
                                        <p class="bg-light p-2 rounded mb-3 small text-dark border" style="white-space: pre-wrap;"><?php echo htmlspecialchars($m['message']); ?></p>
                                        <div class="text-end mt-auto">
                                            <form action="index.php?action=delete_message" method="POST" onsubmit="return confirm('هل تريد حذف هذه الرسالة؟')">
                                                <input type="hidden" name="id" value="<?php echo $m['id']; ?>">
                                                <button type="submit" class="btn btn-outline-danger btn-sm"><i class="fa-solid fa-trash"></i> حذف الرسالة</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>

    <!-- نافذة إضافة / تعديل منتج (Modal) -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true" dir="rtl">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form action="index.php?action=save_product" method="POST" enctype="multipart/form-data">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title" id="productModalLabel">المنتج</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start">
                        <input type="hidden" name="id" id="prod_id">
                        <input type="hidden" name="existing_image" id="prod_existing_image">
                        
                        <div class="mb-3">
                            <label for="prod_title" class="form-label">اسم المنتج (Title)</label>
                            <input type="text" class="form-control" name="title" id="prod_title" required placeholder="مثال: Dehydrated Garlic">
                        </div>
                        <div class="mb-3">
                            <label for="prod_scientific" class="form-label">الاسم العلمي (Scientific Name)</label>
                            <input type="text" class="form-control" name="scientificName" id="prod_scientific" placeholder="مثال: Allium sativum">
                        </div>
                        <div class="mb-3">
                            <label for="prod_category" class="form-label">الفئة (Category)</label>
                            <select class="form-select" name="category" id="prod_category" required>
                                <option value="Dehydrated">Dehydrated</option>
                                <option value="Roots">Roots</option>
                                <option value="Herbs">Herbs</option>
                                <option value="Flowers">Flowers</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Leaves">Leaves</option>
                                <option value="Seeds">Seeds</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="prod_status" class="form-label">حالة التوفر (Status)</label>
                            <select class="form-select" name="status" id="prod_status" required>
                                <option value="Organic">Organic</option>
                                <option value="Conventional">Conventional</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="prod_image" class="form-label">صورة المنتج</label>
                            <input type="file" class="form-control" name="image" id="prod_image" accept="image/*">
                            <div class="form-text">اتركها فارغة في حال عدم التعديل لتظل الصورة القديمة.</div>
                            <div id="image_preview_container" class="mt-2 d-none">
                                <span class="small text-muted d-block mb-1">الصورة الحالية:</span>
                                <img src="" id="img_preview" class="product-thumbnail" alt="">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="prod_forms" class="form-label">الأشكال المتاحة للمنتج (Available Forms)</label>
                            <input type="text" class="form-control" name="availableForms" id="prod_forms" placeholder="افصل بينها بفاصلة , (مثال: Whole, Powder, Cut)">
                            <div class="form-text">افصل بفاصلة إنجليزية بين الأشكال.</div>
                        </div>
                        <div class="mb-3">
                            <label for="prod_pesticides" class="form-label">حالة المبيدات (Pesticides Status)</label>
                            <input type="text" class="form-control" name="pesticidesStatus" id="prod_pesticides" placeholder="افصل بينها بفاصلة , (مثال: Conventional, Organic)">
                            <div class="form-text">افصل بفاصلة إنجليزية بين الحالات.</div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                        <button type="submit" class="btn btn-success fw-bold">حفظ التغييرات</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        var productModal = new bootstrap.Modal(document.getElementById('productModal'));

        function showAddModal() {
            document.getElementById('productModalLabel').innerText = 'إضافة منتج جديد';
            document.getElementById('prod_id').value = '';
            document.getElementById('prod_existing_image').value = '';
            document.getElementById('prod_title').value = '';
            document.getElementById('prod_scientific').value = '';
            document.getElementById('prod_category').value = 'Dehydrated';
            document.getElementById('prod_status').value = 'Organic';
            document.getElementById('prod_forms').value = '';
            document.getElementById('prod_pesticides').value = '';
            document.getElementById('image_preview_container').classList.add('d-none');
            
            productModal.show();
        }

        function editProduct(product) {
            document.getElementById('productModalLabel').innerText = 'تعديل منتج: ' + product.title;
            document.getElementById('prod_id').value = product.id;
            document.getElementById('prod_existing_image').value = product.image || '';
            document.getElementById('prod_title').value = product.title || '';
            document.getElementById('prod_scientific').value = product.scientificName || '';
            document.getElementById('prod_category').value = product.category || 'Dehydrated';
            document.getElementById('prod_status').value = product.status || 'Organic';
            
            // تحويل المصفوفات إلى سلاسل نصية مفصولة بفواصل
            document.getElementById('prod_forms').value = product.availableForms ? product.availableForms.join(', ') : '';
            document.getElementById('prod_pesticides').value = product.pesticidesStatus ? product.pesticidesStatus.join(', ') : '';
            
            if (product.image) {
                document.getElementById('img_preview').src = 'uploads/' + product.image;
                document.getElementById('image_preview_container').classList.remove('d-none');
            } else {
                document.getElementById('image_preview_container').classList.add('d-none');
            }
            
            productModal.show();
        }
    </script>
</body>
</html>
