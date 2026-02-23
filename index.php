<?php
/**
 * Meridian Impact Fund - PHP Entry Point
 * 
 * This file allows the application to be deployed on platforms that 
 * require a PHP index file to bootstrap the environment.
 */

// Basic routing for assets to avoid MIME type issues in PHP environments
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
$file = ltrim($path, '/');

if ($file && file_exists($file) && !is_dir($file)) {
    $extension = pathinfo($file, PATHINFO_EXTENSION);
    $mimetypes = [
        'js' => 'application/javascript',
        'tsx' => 'application/javascript',
        'ts' => 'application/javascript',
        'css' => 'text/css',
        'html' => 'text/html',
        'png' => 'image/png',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'gif' => 'image/gif',
        'svg' => 'image/svg+xml',
        'ico' => 'image/x-icon',
        'json' => 'application/json',
    ];

    if (isset($mimetypes[$extension])) {
        header('Content-Type: ' . $mimetypes[$extension]);
    }
    readfile($file);
    exit;
}

// Default to index.html
$file = 'index.html';

if (file_exists($file)) {
    header('Content-Type: text/html; charset=utf-8');
    readfile($file);
} else {
    header("HTTP/1.1 404 Not Found");
    echo "<h1>404 Not Found</h1>";
    echo "The application entry point is missing.";
}
exit;
?>