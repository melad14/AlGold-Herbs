<?php
// السماح بالوصول من أي مكان (CORS) لتسهيل عمل الـ React محلياً وفي الإنتاج
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// التعامل مع طلبات Preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/config.php';

$type = isset($_GET['type']) ? $_GET['type'] : 'all';

$response = [];

if ($type === 'products' || $type === 'all') {
    if (file_exists(PRODUCTS_FILE)) {
        $response['products'] = json_decode(file_get_contents(PRODUCTS_FILE), true);
    } else {
        $response['products'] = [];
    }
}

if ($type === 'settings' || $type === 'all') {
    if (file_exists(SETTINGS_FILE)) {
        $response['settings'] = json_decode(file_get_contents(SETTINGS_FILE), true);
    } else {
        $response['settings'] = [];
    }
}

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
