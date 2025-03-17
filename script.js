

// Display current date and time
function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const europeanFormat = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById('datetime').textContent = europeanFormat;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Run immediately

