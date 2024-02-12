function createHearts() {
    const numberOfHearts = 30; // кол-во сердечек
    const pageHeight = Math.max(document.body.scrollHeight, window.innerHeight);
    for (let i = 0; i < numberOfHearts; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh'; 
        document.body.appendChild(heart);
    }
}

window.onload = createHearts;
