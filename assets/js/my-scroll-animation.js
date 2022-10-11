let collage = (param) => {
    const defaultStyle = () => {
        let toReveal = document.querySelectorAll(param.object);
        toReveal.forEach((item) => {
            item.style.transform = param.transformType + `(${param.startPoint})`;
            item.style.transitionProperty = "all";
            item.style.transitionDuration = param.transitionDuration;
            item.style.transitionTimingFunction = "ease";
            item.style.opacity = `0`;
        });
    };

    defaultStyle();

    // scroll effect
    window.addEventListener("scroll", () => {
        let toReveal = document.querySelectorAll(param.object);
        const windowHeight = window.innerHeight;
        const boxTop = toReveal[0].getBoundingClientRect().top;

        if (boxTop < windowHeight - 200) {
            toReveal.forEach((item) => {
                item.style.transform = param.transformType + `(${param.endPoint})`;
                item.style.opacity = `1`;
            });
        } else {
            // defaultStyle;
            let toReveal = document.querySelectorAll(param.object);
            toReveal.forEach((item) => {
                item.style.transform = param.transformType + `(${param.startPoint})`;
                item.style.opacity = `0`;
            });
        }

        // for (let i = 0; i < boxes.length; i++) {
        //     const windowHeight = window.innerHeight;
        //     const boxTop = boxes[i].getBoundingClientRect().top;
        //     const reviealPoint = 200;

        //     if (boxTop < windowHeight - reviealPoint) {
        //     } else {
        //         boxes[i].classList.remove("active");
        //     }
        // }
    });

    window.addEventListener("load", () => {
        let toReveal = document.querySelectorAll(param.object);
        const windowHeight = window.innerHeight;
        const boxTop = toReveal[0].getBoundingClientRect().top;

        if (boxTop < windowHeight - 250) {
            toReveal.forEach((item) => {
                item.style.transform = param.transformType + `(${param.endPoint})`;
                item.style.opacity = `1`;
            });
        } else {
            // defaultStyle;
            let toReveal = document.querySelectorAll(param.object);
            toReveal.forEach((item) => {
                item.style.transform = param.transformType + `(${param.startPoint})`;
                item.style.opacity = `0`;
            });
        }
    });
};
