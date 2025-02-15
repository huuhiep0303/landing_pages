document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        let header = document.querySelector(".header");
        
        if (scrollPosition > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    let animatedElements = document.querySelectorAll(".animate-on-scroll");
    function checkScroll() {
        animatedElements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                element.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll(); 

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    let menuToggle = document.querySelector(".menu-toggle");
    let menu = document.querySelector(".menu");
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false
    }).init();

    
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
