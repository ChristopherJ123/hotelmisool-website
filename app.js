document.addEventListener('DOMContentLoaded', function() {
    // Menu
    const menuItems = document.querySelectorAll('.header-sticky div');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to the clicked item
            this.classList.add('active');

            // Scroll the target section into view
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 200;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Optional: smooth scrolling animation
                });
            }

        });
    });

    
    const drpdwnmenu = document.getElementById('dropDownMenu');
    const menu = document.querySelector('.header-sticky');

    drpdwnmenu.addEventListener('click', (event) => {
        if (menu.style.display === 'grid') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'grid';
        }
    })

    const height = document.querySelector("#height span");
    const width = document.querySelector("#width span");

    // Function to update height and width
    function updateSize() {
        if (window.innerWidth > 1000) {
            menu.style.display = 'grid';
        } else {
            menu.style.display = 'none';
        }
    }

    // Add event listener for window resize
    window.addEventListener('resize', updateSize);

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doSomething(scrollPos) {

    }

    document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
        });

        ticking = true;
    }
    });

    // Container 1
    const container_1_slides = document.querySelector('.container-1-slides');
    const container_1_slideImages = document.querySelectorAll('.container-1-slide');
    const container_1_leftArrow = document.getElementById('container-1-left-arrow');
    const container_1_rightArrow = document.getElementById('container-1-right-arrow');
    let currentIndex1 = 0;

    function updateSlidePosition1() {
        container_1_slides.style.transform = `translateX(-${currentIndex1 * 100}%)`;
    }

    function showNextSlide1() {
        if (currentIndex1 < container_1_slideImages.length - 1) {
        currentIndex1++;
        } else {
        currentIndex1 = 0;
        }
        updateSlidePosition1();
    }

    function showPrevSlide1() {
        if (currentIndex1 > 0) {
        currentIndex1--;
        } else {
        currentIndex1 = container_1_slideImages.length - 1;
        }
        updateSlidePosition1();
    }

    container_1_rightArrow.addEventListener('click', showNextSlide1);
    container_1_leftArrow.addEventListener('click', showPrevSlide1);    


    // Container 2
    const container_2_slides = document.querySelector('.container-2-slides');
    const container_2_slideImages = document.querySelectorAll('.container-2-slide');
    const container_2_leftArrow = document.getElementById('container-2-left-arrow');
    const container_2_rightArrow = document.getElementById('container-2-right-arrow');
    const container_2_subtitle = document.querySelector('.container-2-content-subtitle')
    const container_2_description = document.querySelector('.container-2-content-description')
    let currentIndex2 = 0;

    function updateSlidePosition2() {
        container_2_slides.style.transform = `translateX(-${currentIndex2 * 100}%)`;
        if (currentIndex2 == 0) {
            container_2_subtitle.innerHTML = 'Twin Bed Room';
            container_2_subtitle.classList.remove('fade-in');
            container_2_description.classList.remove('fade-in');
            void container_2_subtitle.offsetWidth;
            void container_2_description.offsetWidth;
            container_2_subtitle.classList.add('fade-in');
            container_2_description.classList.add('fade-in');
        } else if (currentIndex2 == 1) {
            container_2_subtitle.innerHTML = 'Single Bed Room';
            container_2_subtitle.classList.remove('fade-in');
            container_2_description.classList.remove('fade-in');
            void container_2_subtitle.offsetWidth;
            void container_2_description.offsetWidth;
            container_2_subtitle.classList.add('fade-in');
            container_2_description.classList.add('fade-in');
        }
    }

    function showNextSlide2() {
        if (currentIndex2 < container_2_slideImages.length - 1) {
        currentIndex2++;
        } else {
        currentIndex2 = 0;
        }
        updateSlidePosition2();
    }

    function showPrevSlide2() {
        if (currentIndex2 > 0) {
        currentIndex2--;
        } else {
        currentIndex2 = container_2_slideImages.length - 1;
        }
        updateSlidePosition2();
    }

    container_2_rightArrow.addEventListener('click', showNextSlide2);
    container_2_leftArrow.addEventListener('click', showPrevSlide2);

    // Container 3
    const container_3_slides = document.querySelector('.container-3-slides');
    const container_3_slideImages = document.querySelectorAll('.container-3-slide');
    const container_3_leftArrow = document.getElementById('container-3-left-arrow');
    const container_3_rightArrow = document.getElementById('container-3-right-arrow');
    let currentIndex3 = 0;

    function updateSlidePosition3() {
        container_3_slides.style.transform = `translateX(-${currentIndex3 * 100}%)`;
    }

    function showNextSlide3() {
        if (currentIndex3 < container_3_slideImages.length - 1) {
        currentIndex3++;
        } else {
        currentIndex3 = 0;
        }
        updateSlidePosition3();
    }

    function showPrevSlide3() {
        if (currentIndex3 > 0) {
        currentIndex3--;
        } else {
        currentIndex3 = container_3_slideImages.length - 1;
        }
        updateSlidePosition3();
    }

    container_3_rightArrow.addEventListener('click', showNextSlide3);
    container_3_leftArrow.addEventListener('click', showPrevSlide3);
});