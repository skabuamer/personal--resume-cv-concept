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

// skill percentage load And animation JS
let i = 0;
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Adding ID for css animation
            entry.target.setAttribute("id", `${entry.target.children[0].id}` + "-progress");

            // Making sure function gets called only once
            i++;
            if (i == 1) {
                let web_percentage = document.getElementById("web");
                let ui_percentage = document.getElementById("ui");
                let graphics_percentage = document.getElementById("graphics");
                let marketing_percentage = document.getElementById("marketing");
                let development_percentage = document.getElementById("development");
                let logo_percentage = document.getElementById("logo");

                //Percentage Increasing function
                const show_percentage = (skill, percentage, delay) => {
                    let counter = 0;
                    setInterval(() => {
                        if (counter == percentage) {
                            clearInterval();
                        } else {
                            counter += 1;
                            skill.innerHTML = counter + "%";
                        }
                    }, delay);
                };

                // Percentage showing with
                show_percentage(web_percentage, 80, 20);
                show_percentage(ui_percentage, 95, 15);
                show_percentage(graphics_percentage, 83, 20);
                show_percentage(marketing_percentage, 80, 20);
                show_percentage(development_percentage, 90, 20);
                show_percentage(logo_percentage, 87, 20);
            }
        }
    });
});
const progressBars = document.getElementsByClassName("custom-progress");
Array.from(progressBars).forEach((progressBar) => {
    observer.observe(progressBar);
});

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
scrollToAnimate(".single-experience.row", "translateY", "30%", "0%", "transform 1s ease");

// portfolio animation
scrollToAnimate(".portfolio-img-container", "translateY", "30%", "0%", "transform 1s ease");

// comntact animation
scrollToAnimate(".single-contact-info:first-child", "translateX", "-30%", "0%", "transform 1s ease ");
scrollToAnimate(".single-contact-info:nth-child(2)", "translateX", "-30%", "0%", "transform 1s ease .6s");
scrollToAnimate(".single-contact-info:last-child", "translateX", "-30%", "0%", "transform 1s ease .9s");

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
            console.log(entry.isIntersecting);
            return;
        } else {
            document.querySelector(".back__to__top").classList.add("active__override");
        }
    });
}, footerOptions);

const footer = document.querySelector("footer");
footerObserver.observe(footer);
