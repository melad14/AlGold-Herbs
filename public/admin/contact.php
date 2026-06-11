<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

require_once __DIR__ . '/config.php';

// قراءة البيانات سواء كانت مرسلة كـ JSON أو Form-Data
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

$name = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : '';
$project = isset($input['project']) ? strip_tags(trim($input['project'])) : '';
$subject = isset($input['subject']) ? strip_tags(trim($input['subject'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields (Name, Email, Message)"]);
    exit();
}

// قراءة الرسائل الحالية
$messages = [];
if (file_exists(MESSAGES_FILE)) {
    $messages = json_decode(file_get_contents(MESSAGES_FILE), true);
    if (!is_array($messages)) {
        $messages = [];
    }
}

// تجهيز الرسالة الجديدة
$new_message = [
    "id" => uniqid(),
    "name" => $name,
    "email" => $email,
    "phone" => $phone,
    "project" => $project,
    "subject" => $subject,
    "message" => $message,
    "date" => date('Y-m-d H:i:s')
];

// إدراج في البداية لتظهر الرسائل الأحدث أولاً
array_unshift($messages, $new_message);

// حفظ في الملف
if (file_put_contents(MESSAGES_FILE, json_encode($messages, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT))) {
    echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to save message on server."]);
}
