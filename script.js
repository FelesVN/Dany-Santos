let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.banner-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = 'block';  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

// Inicializa o banner ao carregar a página
window.onload = function() {
    showSlides();
};

ScrollReveal().reveal('#foto', {
    delay: 300,
    reset: false
})

ScrollReveal().reveal('#contatos',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 300, 
    reset: false 
});

ScrollReveal().reveal('#local',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 400, 
    reset: false 
});

ScrollReveal().reveal('#mapa',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 500, 
    reset: false 
});

