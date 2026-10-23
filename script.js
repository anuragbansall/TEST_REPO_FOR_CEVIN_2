// script.js - Main JavaScript file for the project

document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello, World! JavaScript is loaded.');

    // Add a greeting message dynamically
    const container = document.querySelector('.container');
    if (container) {
        const message = document.createElement('p');
        message.textContent = 'JavaScript is working!';
        message.style.color = '#4299e1';
        container.appendChild(message);
    }
});
