const esfera = document.querySelector('.esfera');

esfera.addEventListener('mouseover', () => {
    // Gera uma cor aleatória
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const corAleatoria = `rgb(${r}, ${g}, ${b})`;

    // Aplica a cor à esfera
    esfera.style.backgroundColor = corAleatoria;
});