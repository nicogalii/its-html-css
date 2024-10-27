/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @description 
 */

// JavaScript to show feedback alert
document.querySelector('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('feedback').style.display = 'block';
});