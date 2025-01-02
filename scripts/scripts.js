document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle visibility of a section
    const experienceSection = document.getElementById('experience');
    experienceSection.addEventListener('click', function() {
        this.classList.toggle('hidden');
    });
});
