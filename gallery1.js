function animationInit() {

    // ------------------------------------------------------

    let thumbnails = document.getElementsByClassName('thumbnail');
    let activeImages = document.getElementsByClassName('active');

    // click and show images
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function () {
            if (activeImages.length > 0) {
                activeImages[0].classList.remove('active')
            }

            this.classList.add('active')
            document.querySelector('.gallery-feature').src = this.src
        })
    }

    // thumbnail navigation
    const btnLeft = document.querySelector('.thumbnails-button-left');
    const btnRight = document.querySelector('.thumbnails-button-right');
    const thumbGallery = document.querySelector('.gallery-thumbnails-slider');
    thumbGallery.scrollLeft = 0

    btnLeft.addEventListener('click', function(){
        var activeElem = thumbGallery.querySelectorAll('.active');
        thumbGallery.scrollLeft -= 90

        console.log(activeElem[0]);
        if (activeElem[0].previousElementSibling != null) {
            activeElem[0].classList.remove('active');
            activeElem[0].previousElementSibling.classList.add('active');
            document.querySelector('.gallery-feature').src = activeElem[0].previousElementSibling.src
        }
    })
    
    btnRight.addEventListener('click', function(){
        thumbGallery.scrollLeft += 90
        
        var activeElem = thumbGallery.querySelectorAll('.active');
        console.log(activeElem[0]);
        if (activeElem[0].nextElementSibling != null) {
            activeElem[0].classList.remove('active');
            activeElem[0].nextElementSibling.classList.add('active');
            document.querySelector('.gallery-feature').src = activeElem[0].nextElementSibling.src
        }
    })
    // PAGE LOAD ANIMATIONS
    // ------------------------------------------------------

    // NAV HOVER Animation
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navServices = document.getElementById('nav-services');
    const navContact = document.getElementById('nav-contact');
    
    function hover(hoverElement) {
        hoverElement.addEventListener('mouseenter', function() {
            gsap.to([hoverElement], {duration:0.05, scale:1.1, transformOrigin:"center center"});
        })
        hoverElement.addEventListener('mouseleave', function() {
            gsap.to([hoverElement], {duration:0.05, scale:1, transformOrigin:"center center"});
        })
    } 
    hover(navHome);
    hover(navAbout);
    hover(navServices);
    hover(navContact);

    // ------------------------------------------------------

    // SCROLL TO SECTIONS
    navHome.addEventListener('click', function() {
        gsap.to(window, { duration: 2, scrollTo: "#hero-display" });
    })
    navAbout.addEventListener('click', function() {
        gsap.to(window, { duration: 2, scrollTo: "#about" });
    })
    navServices.addEventListener('click', function() {
        gsap.to(window, { duration: 2, scrollTo: "#services" });
    })
    navContact.addEventListener('click', function() {
        gsap.to(window, { duration: 2, scrollTo: "#contact-us" });
    })

    // ------------------------------------------------------
    
    // NAV MENU BUTTON
    // Look for initial width to set menu
    const initialWidth = window.innerWidth; 
    initialWidth > 500 ? gsap.set('#nav-menu', { autoAlpha: 0 }) & gsap.set('#nav-list li', { autoAlpha: 1 }) : gsap.set('#nav-menu', { autoAlpha: 1 }) & gsap.set('#nav-list li', { autoAlpha: 0 })

    // look for resize width to set menu
    function getWindowWidth() {
        let w = document.documentElement.clientWidth; 
        w > 500 ? gsap.set('#nav-menu', { autoAlpha: 0 }) & gsap.set('#nav-list li', { autoAlpha: 1 }) : gsap.set('#nav-menu', { autoAlpha: 1 }) & gsap.set('#nav-list li', { autoAlpha: 0 })
        return w
    }
    window.addEventListener("resize",getWindowWidth)

    // ANIMATE BETWEEN BURGER AND X
    const navMenu = document.getElementById('nav-menu');
    const tl = gsap.timeline({ defaults: { duration: 0.3 }, paused: true })
    tl
     .to('#nav-menu-dash-1', {rotate: -45, x:-6, y:2, transformOrigin:'top right'}, "sync")
     .to('#nav-menu-dash-3', {rotate: 45, x:-3, y:-1, transformOrigin:'top right'}, "sync")
     .to('#nav-menu-dash-2', {opacity:0}, "sync")
     .to('#nav-list li', {duration:0.3, autoAlpha:1, stagger:0.05}, "sync")

    navMenu.addEventListener('click', function(e) {
        e.preventDefault();
        tl.reversed() ? tl.play() : tl.reverse();
    })

    // ------------------------------------------------------
    
    // GALLERY REVEAL
    const galleryGal1Label = document.getElementById('gallery-main-gal1-label');
    // const galleryGal2Label = document.getElementById('gallery-main-gal2-label');
    // const galleryGal3Label = document.getElementById('gallery-main-gal3-label');
    const galleryGal1Img = document.getElementById('gallery-main-gal1-img');
    // const galleryGal2Img = document.getElementById('gallery-main-gal2-img');
    // const galleryGal3Img = document.getElementById('gallery-main-gal3-img');

    gsap.set(['.gallery-modal'], { y: '-100%' })
    galleryGal1Label.addEventListener('click', function(){
        gsap.to(['#gallery-modal1'], {duration:0.5, y:0})
    })
    
    // galleryGal2Label.addEventListener('click', function(){
    //     gsap.to(['#gallery-modal2'], {duration:0.5, y:0})
    // })
    
    const closeModalBtn = document.querySelector('.gallery-x')
    closeModalBtn.addEventListener('click', function(){
        gsap.to(['.gallery-modal'], {duration:0.5, y:'-100%'})
    })
    // const closeModalBtn2 = document.querySelector('.gallery-x2')
    // closeModalBtn2.addEventListener('click', function(){
    //     gsap.to(['.gallery-modal'], {duration:0.5, y:'-100%'})
    // })

    // GALLERY HOVER ANIMATION
    function galleryHover(hoverElement, hoverElement2) {
        hoverElement.addEventListener('mouseenter', () => {
            gsap.to([hoverElement], { duration: 1, scale: 1.2, transformOrigin: "center center" });
            gsap.to([hoverElement2], { duration: 5, scale: 1.2, ease:"none", transformOrigin: "center center"});
        })
        hoverElement.addEventListener('mouseleave', () => {
            gsap.to([hoverElement], { duration: 1, scale: 1, transformOrigin: "center center" });
            gsap.to([hoverElement2], { duration: 5, scale: 1, ease:"none", transformOrigin: "center center"});
        })
        
        hoverElement.addEventListener("mousedown", () => { 
            gsap.to([hoverElement], { duration: 1, scale: 1.2, transformOrigin: "center center", yoyo:true, repeat:1});
            gsap.to([hoverElement2], { duration: 5, scale: 1.2, ease:"none", transformOrigin: "center center", yoyo:true, repeat:1});
        });
    }
    galleryHover(galleryGal1Label,galleryGal1Img);
    // galleryHover(galleryGal2Label,galleryGal2Img);
    // galleryHover(galleryGal3Label,galleryGal3Img);
}

animationInit()