document.addEventListener("DOMContentLoaded", function() {
    const elemenFade = document.querySelectorAll('.fade-in');
    
    elemenFade.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, 300 * index);  // Menambahkan efek fade-in bertahap
    });
});