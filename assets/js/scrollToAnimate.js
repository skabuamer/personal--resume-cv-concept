const scrollToAnimate = (section, transformType, startPoint = "100%", endPoint = "0%", transition) => {
    const defaultStyle = () => {
        const items = document.querySelectorAll(section);
        items.forEach((item) => {
            item.style.transform = transformType + `(${startPoint})`;
            item.style.transition = transition;
            item.style.opacity = "0";
        });
    };

    defaultStyle();

    const options = {
        rootMargin: "0px 0px -175px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transform = transformType + `(${endPoint})`;
                entry.target.style.opacity = "1";
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, options);

    const sections = document.querySelectorAll(section);
    sections.forEach((section) => observer.observe(section));
};
