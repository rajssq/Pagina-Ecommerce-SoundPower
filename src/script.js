function slider(anything) {
    // Encontre a imagem principal (com a classe 'home') e altere o src
    const mainImage = document.querySelector('.hom');
    if (mainImage) {
        mainImage.src = anything;  // Substitui o src da imagem principal
        console.log(`Imagem alterada para: ${anything}`);  // Log para depuração
    } else {
        console.error('Elemento .home não encontrado!');
    }
}