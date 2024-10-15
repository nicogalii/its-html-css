// JavaScript to show feedback alert
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('feedback').style.display = 'block';
});