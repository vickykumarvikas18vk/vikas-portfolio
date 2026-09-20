/* =====================================================
   MOBILE NAVIGATION
   ===================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}
/* =====================================================
   ABOUT SECTION SCROLL ANIMATION
   ===================================================== */

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {

    const aboutObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    aboutSection.classList.add("show");

                    aboutObserver.unobserve(aboutSection);

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    aboutObserver.observe(aboutSection);

}
/* =====================================================
   PREMIUM TECHNOLOGY SLIDER
   ===================================================== */

const slides = document.querySelectorAll(".tech-slide");
const dots = document.querySelectorAll(".slider-dot");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");

let currentSlide = 0;
let sliderTimer;


/* Show Slide */

function showSlide(index) {

    if (!slides.length) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } 
    else if (index < 0) {
        currentSlide = slides.length - 1;
    } 
    else {
        currentSlide = index;
    }


    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    slides[currentSlide].classList.add("active");


    if (dots[currentSlide]) {

        dots[currentSlide].classList.add("active");

    }

}


/* Next */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* Previous */

function previousSlide() {

    showSlide(currentSlide - 1);

}


/* Next Button */

if (nextBtn) {

    nextBtn.addEventListener("click", function () {

        nextSlide();

        restartSlider();

    });

}


/* Previous Button */

if (prevBtn) {

    prevBtn.addEventListener("click", function () {

        previousSlide();

        restartSlider();

    });

}


/* Dots */

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        showSlide(index);

        restartSlider();

    });

});


/* Automatic Slider */

function startSlider() {

    sliderTimer = setInterval(function () {

        nextSlide();

    }, 5000);

}


/* Restart after manual interaction */

function restartSlider() {

    clearInterval(sliderTimer);

    startSlider();

}


/* Start */

if (slides.length > 0) {

    showSlide(0);

    startSlider();

}
/* =====================================================
   SKILLS PROGRESS ANIMATION
   ===================================================== */

const skillCards = document.querySelectorAll(".skill-card");

if (skillCards.length > 0) {

    const skillObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const progress =
                        entry.target.querySelector(".skill-progress");

                    if (progress) {

                        const targetWidth =
                            progress.style.width;

                        progress.style.width = "0%";

                        setTimeout(function () {

                            progress.style.width =
                                targetWidth;

                        }, 150);

                    }

                    skillObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.25
        }
    );


    skillCards.forEach(function (card) {

        skillObserver.observe(card);

    });

}
/* =====================================================
   EDUCATION SCROLL ANIMATION
   ===================================================== */

const educationItems =
    document.querySelectorAll(".education-item");

if (educationItems.length > 0) {

    educationItems.forEach(function (item) {

        item.style.opacity = "0";
        item.style.transform = "translateY(35px)";
        item.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });


    const educationObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const item = entry.target;

                    const index =
                        Array.from(educationItems)
                        .indexOf(item);

                    setTimeout(function () {

                        item.style.opacity = "1";
                        item.style.transform =
                            "translateY(0)";

                    }, index * 180);

                    educationObserver.unobserve(item);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    educationItems.forEach(function (item) {

        educationObserver.observe(item);

    });

}
/* =====================================================
   PROJECTS SCROLL REVEAL
   ===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");

if (projectCards.length > 0) {

    projectCards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(45px) scale(0.96)";

        card.style.transition =
            "opacity 0.8s ease, " +
            "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

    });


    const projectObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const card = entry.target;

                    const index =
                        Array.from(projectCards)
                        .indexOf(card);


                    setTimeout(function () {

                        card.style.opacity = "1";

                        card.style.transform =
                            "translateY(0) scale(1)";

                    }, index * 180);


                    projectObserver.unobserve(card);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    projectCards.forEach(function (card) {

        projectObserver.observe(card);

    });

}
/* =====================================================
   CONTACT SCROLL REVEAL
   ===================================================== */

const contactCards =
    document.querySelectorAll(".contact-card");

const contactMessage =
    document.querySelector(".contact-message");

if (contactCards.length > 0 || contactMessage) {

    contactCards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateX(-35px)";

        card.style.transition =
            "opacity 0.7s ease, " +
            "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";

    });


    if (contactMessage) {

        contactMessage.style.opacity = "0";

        contactMessage.style.transform =
            "translateX(35px)";

        contactMessage.style.transition =
            "opacity 0.8s ease, " +
            "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

    }


    const contactSection =
        document.querySelector(".contact-section");


    const contactObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        contactCards.forEach(
                            function (card, index) {

                                setTimeout(function () {

                                    card.style.opacity = "1";

                                    card.style.transform =
                                        "translateX(0)";

                                }, index * 130);

                            }
                        );


                        if (contactMessage) {

                            setTimeout(function () {

                                contactMessage.style.opacity = "1";

                                contactMessage.style.transform =
                                    "translateX(0)";

                            }, 250);

                        }


                        contactObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    if (contactSection) {

        contactObserver.observe(contactSection);

    }

}
/* =====================================================
   ACTIVE NAVBAR LINK
   ===================================================== */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(
    'nav a[href^="#"]'
);

if (sections.length > 0 && navLinks.length > 0) {

    const activeSectionObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const currentId =
                            entry.target.getAttribute("id");


                        navLinks.forEach(function (link) {

                            link.classList.remove("active");

                        });


                        const activeLink =
                            document.querySelector(
                                'nav a[href="#' +
                                currentId +
                                '"]'
                            );


                        if (activeLink) {

                            activeLink.classList.add("active");

                        }

                    }

                });

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach(function (section) {

        activeSectionObserver.observe(section);

    });

}
/* =====================================================
   PAGE LOADER
   ===================================================== */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("page-loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hide");

        }, 700);

    }

});
/* =====================================================
   DAY / NIGHT MODE
   ===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    const themeIcon =
        themeToggle.querySelector("i");


    /* Saved theme */

    const savedTheme =
        localStorage.getItem("website-theme");


    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }


    /* Toggle */

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");


        const isLight =
            document.body.classList.contains("light-mode");


        if (isLight) {

            themeIcon.classList.remove("fa-moon");

            themeIcon.classList.add("fa-sun");

            localStorage.setItem(
                "website-theme",
                "light"
            );

        } else {

            themeIcon.classList.remove("fa-sun");

            themeIcon.classList.add("fa-moon");

            localStorage.setItem(
                "website-theme",
                "dark"
            );

        }

    });

}