/** @format */

const cercle = document.querySelector(".cercle");
const frames = document.querySelectorAll(".frame");

window.addEventListener("mousemove", (dets) => {
    gsap.to(cercle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.3,
        ease: Expo,
    });
});

frames.forEach((frame) => {
    frame.addEventListener("mousemove", function (dets) {
        let dims = frame.getBoundingClientRect();
        let xstart = dims.x;
        let xend = dims.x + dims.width;

        const zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

        let lerp;

        if (zeroOne < 0.5) lerp = true;
        else lerp = false;
        gsap.to(cercle, {
            scale: 6,
            duration: 0.4,
        });

        gsap.to(frame.children, {
            color: "white",
            duration: 0.4,
            y: "-5vw",
        });
        gsap.to(frame.children, {
            x: lerp ? "-15" : "15",
            duration: 0.5,
        });
    });
    frame.addEventListener("mouseleave", (dets) => {
        gsap.to(cercle, {
            scale: 1,
            duration: 0.4,
        });
        gsap.to(frame.children, {
            color: "black",
            duration: 0.4,
            y: "0",
        });
        gsap.to(frame.children, {
            x: 0,
            duration: 0.3,
        });
    });
});
