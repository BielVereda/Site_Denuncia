document.addEventListener('DOMContentLoaded', () => {
    const teamItems = document.querySelectorAll('.team-list li');
    teamItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('highlight');
        });
    });
});