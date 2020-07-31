function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    
    gradient.addEventListener('mousemove', mouseMove);
    gradient.addEventListener('mouseout', mouseOut);

    function mouseMove(e) {
        const mouseX = e.offsetX;
        const width = e.target.clientWidth - 1;
        const percentage = mouseX / width * 100; 
        result.textContent = Math.floor(percentage) + '%';
        console.log(width);
    }

    function mouseOut(){
        result.textContent = ''
    }
}