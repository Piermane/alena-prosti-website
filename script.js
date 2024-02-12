function createHearts() {
    const totalHearts = 20; // Количество седечек
    const pageHeight = document.documentElement.scrollHeight;

    for (let i = 0; i < totalHearts; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * pageHeight + 'px';
        document.body.appendChild(heart);
    }
}

window.onload = createHearts;
