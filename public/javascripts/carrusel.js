

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const dotsContainer = document.querySelector('.dots-container');

    let currentIndex = 0;
    const intervalTime = 3000; // 3 segundos entre transiciones automáticas

    // Crear puntos de navegación
    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Función para mover el carrusel
    function moveCarousel(index) {
        currentIndex = index;
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        
        // Actualizar puntos activos
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === index);
        });
    }

    // Event listeners para botones
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        moveCarousel(currentIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        moveCarousel(currentIndex);
    });

    // Event listeners para puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveCarousel(index);
        });
    });

    // Carrusel automático
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        moveCarousel(currentIndex);
    }, intervalTime);
});