function animationInit() {
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

    // animate between burger and X
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
    
}

animationInit()