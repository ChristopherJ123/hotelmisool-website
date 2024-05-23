document.addEventListener('DOMContentLoaded', function() {
    // Menu
    const menuItems = document.querySelectorAll('.header-top-2-bottom div');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to the clicked item
            this.classList.add('active');
        });
    });

    function menuItemClick() {

    }

    // Container 1



    // Container 2
    const slides = document.querySelector('.container-2-slides');
    const slideImages = document.querySelectorAll('.container-2-slide');
    const leftArrow = document.getElementById('container-2-left-arrow');
    const rightArrow = document.getElementById('container-2-right-arrow');
    let currentIndex = 0;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        if (currentIndex < slideImages.length - 1) {
        currentIndex++;
        } else {
        currentIndex = 0;
        }
        updateSlidePosition();
    }

    function showPrevSlide() {
        if (currentIndex > 0) {
        currentIndex--;
        } else {
        currentIndex = slideImages.length - 1;
        }
        updateSlidePosition();
    }

    rightArrow.addEventListener('click', showNextSlide);
    leftArrow.addEventListener('click', showPrevSlide);    
});