document.addEventListener('DOMContentLoaded', (event) => {
    // Header animation
    const headerCanvas = document.createElement('canvas');
    headerCanvas.width = window.innerWidth;
    headerCanvas.height = 100;
    document.querySelector('#canvaswrapper').appendChild(headerCanvas);
    const headerCtx = headerCanvas.getContext('2d');

    function drawHeaderAnimation(ctx, progress) {
        ctx.clearRect(0, 0, headerCanvas.width, headerCanvas.height);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;

        const step = headerCanvas.width / 100;
        for (let i = 0; i < progress; i++) {
            ctx.beginPath();
            ctx.moveTo(i * step, 50 + Math.sin(i * 0.1) * 20);
            ctx.lineTo((i + 1) * step, 50 + Math.sin((i + 1) * 0.1) * 20);
            ctx.stroke();
        }
    }

    // Page-specific animation
    const pageCanvas = document.createElement('canvas');
    pageCanvas.width = window.innerWidth;
    pageCanvas.height = 100;
    document.querySelector('#pageAnimation').appendChild(pageCanvas);
    const pageCtx = pageCanvas.getContext('2d');

    function drawPageAnimation(ctx, progress) {
        ctx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.arc(pageCanvas.width / 2, 50, progress / 2, 0, Math.PI * 2);
        ctx.fill();
    }

    let progress = 0;
    function animate() {
        progress++;
        drawHeaderAnimation(headerCtx, progress);
        drawPageAnimation(pageCtx, progress);

        if (progress <= 100) {
            requestAnimationFrame(animate);
        }
    }

    animate();

    // Image changing functionality
    const images = ['images/imageeye.jpeg', 'images/line.jpeg'];
    let currentImageIndex = 0;

    const changeDrawingButton = document.getElementById('changeDrawing');
    const mainImage = document.getElementById('mainImage');

    // Function to change the image
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        if (mainImage) {
            mainImage.src = images[currentImageIndex];
        }
        progress = 0;
        animate();
    }

    // Set up event listener for the button
    if (changeDrawingButton) {
        changeDrawingButton.addEventListener('click', changeImage);
    }

    // Initialize the image on page load if we're on the home page
    if (mainImage) {
        mainImage.src = images[currentImageIndex];
    }

    // Project hover effect
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Resize event listener
    window.addEventListener('resize', () => {
        headerCanvas.width = window.innerWidth;
        pageCanvas.width = window.innerWidth;
        progress = 0;
        animate();
    });
});