<?php
/**
 * Meridian Impact Fund - PHP Entry Point
 * 
 * This file allows the application to be deployed on platforms that 
 * require a PHP index file to bootstrap the environment.
 */

// If a direct request for a file that exists is made, the server usually handles it.
// This script specifically serves the main application entry point.
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