// const { application, json } = require("express");

document.getElementById('shortenBtn').addEventListener('click', async () => {
    const originalUrl = document.getElementById('originalUrl').value;
    if (!originalUrl || !isValidUrl(originalUrl)) {
        alert('Please Entera Valid URL ');
        return;
    }
    try {
        const response = await fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ originalUrl })
        });
        const data = await response.json();
        document.getElementById('result').textContent = `shortened URL :${window.location.href}${data.shortUrl}`;
    } catch (err) {
        console.error('Error Shortening the URL :', err);
        alert('error shortening the URL PLEASE TRY AGAIN');
    }
});
function isValidUrl(string) {
    try {
        newURL(string);
        return true;
    } catch (_) {
        return false;
    }
}