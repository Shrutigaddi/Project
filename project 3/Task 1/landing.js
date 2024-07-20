document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('learn-more').addEventListener('click', () => {
        window.location.href = '#buildings';
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us!');
    });
});
