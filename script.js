function createHearts() {
    const numberOfHearts = 50; // кол-во сердцек
    for (let i = 0; i < numberOfHearts; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * (document.body.scrollHeight + window.innerHeight) / window.innerHeight * 100 + 'vh'; 
        document.body.appendChild(heart);
    }
}

window.onload = createHearts;
window.onscroll = createHearts;
