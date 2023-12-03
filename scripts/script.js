document.getElementById('growable-word').addEventListener('mouseover', function() {
    this.classList.add('grown');
});

document.getElementById('growable-word').addEventListener('mouseout', function() {
    this.classList.remove('grown');
});