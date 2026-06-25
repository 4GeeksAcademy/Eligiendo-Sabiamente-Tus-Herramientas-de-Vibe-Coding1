document.querySelectorAll('.rating-cell').forEach(cell => {
    const display = cell.querySelector('.rating-display');
    const input = cell.querySelector('.rating-input');

    display.addEventListener('click', () => {
        display.style.display = 'none';
        input.style.display = 'block';
        input.focus();
        input.select();
    });

    input.addEventListener('blur', () => updateRating(cell));
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            updateRating(cell);
        }
    });
});

function updateRating(cell) {
    const display = cell.querySelector('.rating-display');
    const input = cell.querySelector('.rating-input');
    const value = parseInt(input.value);

    if (value >= 1 && value <= 5) {
        display.textContent = value;
        display.className = 'score rating-display score-' + value;
    } else {
        display.textContent = '?';
        display.className = 'score rating-display score-unknown';
    }

    input.style.display = 'none';
    display.style.display = 'inline-block';
}