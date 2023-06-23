let checkbox = document.getElementById('toggle');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})