<?php
$filename = "visitor_count.txt";

// Read the current count
if (file_exists($filename)) {
    $count = file_get_contents($filename);
} else {
    $count = 0;
}

// Increment the count
$count++;

// Save the updated count back to the file
file_put_contents($filename, $count);

// Return the count as a JSON response
echo json_encode(['count' => $count]);
?>
