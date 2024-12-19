document.addEventListener('DOMContentLoaded', (event) => {
    const dayButton = document.getElementById('dayButton');
    const nightButton = document.getElementById('nightButton');
    const body = document.body;

    dayButton.addEventListener('click', () => {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
    });

    nightButton.addEventListener('click', () => {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
    });
});