<?php
$filename = "visitor_count.txt";
if (file_exists($filename)) {
    $count = file_get_contents($filename);
} else {
    $count = 0;
}
$count++;
if (file_put_contents($filename, $count) === FALSE) {
    die('Error writing to file');
}
echo json_encode(['count' => $count]);
?>