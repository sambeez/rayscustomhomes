function animationInit() {
    // PAGE LOAD ANIMATIONS
    gsap.from(["h1"], {duration:1, opacity:0, ease:"none"});


    // HOVER ANIMATIONS
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
    gsap.to(window, { duration: 2, scrollTo:"#nav-services" });

    hover(navHome);
    hover(navAbout);
    hover(navServices);
    hover(navContact);
}

animationInit()