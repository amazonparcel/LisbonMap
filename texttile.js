const dots = document.querySelectorAll('.mcdonalds, .hotel');
dots.forEach(dot => {
    dot.addEventListener('mouseover', () => {
        dot.querySelector('.tooltip').style.display = 'block';
    });
    dot.addEventListener('mouseout', () => {
        dot.querySelector('.tooltip').style.display = 'none';
    });
});