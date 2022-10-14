// $(window).on("load", function () {
//     $(".preloader").fadeOut(1000);
// });

const loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    loader.style.display = "none";
});

// Sticky Header
window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("sticky", window.scrollY >= 100);
});

/* window.addEventListener("scroll", () => {
    if (window.scrollY >= 120) {
        document.querySelector("header").classList.add("sticky");
    } else {
        document.querySelector("header").classList.remove("sticky");
    }
}); */

let i = 0;
//Percentage Increasing function
const show_percentage = (skill, percentage, delay) => {
    i++;
    console.log(i);
    if (i <= 6) {
        let counter = 0;
        setInterval(() => {
            if (counter == percentage) {
                clearInterval();
            } else {
                counter += 1;
                skill.innerHTML = counter + "%";
            }
        }, delay);
    } else {
        return;
    }
};

// skill percentage load And animation JS
const observeOptions = {
    rootMargin: "0px 0px -10px 0px",
    trackVisibility: true,
    delay: 100,
};

const observerFunction = (progressBar, percentage, duration) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry.target);
            if (entry.isIntersecting) {
                // Adding ID for css animation
                entry.target.parentElement.setAttribute("id", `${entry.target.id}` + "-progress");

                // Percentage showing with
                show_percentage(entry.target, percentage, duration);
            }
            observer.unobserve;
        });
    }, observeOptions);

    observer.observe(progressBar);
};

const web_bar = document.getElementById("web");
observerFunction(web_bar, 80, 20);

const ui_bar = document.getElementById("ui");
observerFunction(ui_bar, 95, 15);

const graphics_bar = document.getElementById("graphics");
observerFunction(graphics_bar, 83, 20);

const marketing_bar = document.getElementById("marketing");
observerFunction(marketing_bar, 80, 20);

const development_bar = document.getElementById("development");
observerFunction(development_bar, 90, 20);

const logo_bar = document.getElementById("logo");
observerFunction(logo_bar, 87, 20);

// TESTIMONIAL SLIDER JS
var slider = tns({
    container: ".testimonial-slider",
    items: 1,
    slideBy: 1,
    nav: false,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: ".slider-controls",
    gutter: "30",
    responsive: {
        768: {
            edgePadding: 20,
            gutter: 40,
            items: 2,
        },
        992: {
            items: 2,
            gutter: 30,
        },
        1200: {
            items: 3,
            gutter: 30,
        },
    },
});

// banner animation
scrollToAnimate(".banner-subtitle", "translateX", "-100%", "0%", "transform 1s ease");
scrollToAnimate("h1", "translateX", "-100%", "0%", "transform 1s ease");
scrollToAnimate(".profession", "translateX", "-100%", "0%", "transform 1s ease");
scrollToAnimate(".banner-txt .btn-custom", "translateX", "-100%", "0%", "transform 1s ease");
scrollToAnimate(".banner-img", "translateX", "100%", "0%", "transform 1s ease");

// about animation
scrollToAnimate(".about-img", "translateY", "40%", "0%", "transform 1s ease");
scrollToAnimate(".about-txt", "translateX", "70%", "0%", "transform 1s ease");

// service animation
scrollToAnimate("#service-section .section-heading", "translateX", "-100%", "0%", "transform 1s ease");
scrollToAnimate(".single-service", "translateY", "70%", "0%", "transform 1s ease");

// experience animation
// scrollToAnimate(".single-experience.row", "translateY", "30%", "0%", "transform 1s ease");

// portfolio animation
// scrollToAnimate(".portfolio-img-container", "translateY", "30%", "0%", "transform 1s ease");

// contact animation
scrollToAnimate(".single-contact-info:first-child", "translateX", "-30%", "0%", "transform 1s ease ");
scrollToAnimate(".single-contact-info:nth-child(2)", "translateX", "-100%", "0%", "transform 1s ease .1s");
scrollToAnimate(".single-contact-info:last-child", "translateX", "-100%", "0%", "transform 1s ease .3s");

// back to top
const backToTop = () => {
    window.scrollTo(0, 0);
};

window.addEventListener("scroll", () => {
    if (scrollY >= 200) {
        document.querySelector(".back__to__top").classList.add("active");
    } else {
        document.querySelector(".back__to__top").classList.remove("active");
    }
});

const footerOptions = {
    rootMargin: "0px 0px 45px 0px",
};

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            document.querySelector(".back__to__top").classList.remove("active__override");
            return;
        } else {
            document.querySelector(".back__to__top").classList.add("active__override");
        }
    });
}, footerOptions);

const footer = document.querySelector("footer");
footerObserver.observe(footer);
