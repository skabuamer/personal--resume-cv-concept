// PROGRESS BAR PERCENTAGE SHOW JS
let web_percentage = document.getElementById("web-percentage");
let ui_percentage = document.getElementById("ui-percentage");
let graphics_percentage = document.getElementById("graphics-percentage");
let marketing_percentage = document.getElementById("marketing-percentage");
let development_percentage = document.getElementById("development-percentage");
let logo_percentage = document.getElementById("logo-percentage");

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

show_percentage(web_percentage, 80, 45);
show_percentage(ui_percentage, 95, 35);
show_percentage(graphics_percentage, 83, 37);
show_percentage(marketing_percentage, 80, 45);
show_percentage(development_percentage, 90, 38);
show_percentage(logo_percentage, 87, 39);

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
