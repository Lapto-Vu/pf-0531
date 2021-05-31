const whiteBox = document.querySelector(".nav-inner__white-box");
const clickProject = document.querySelector(".click-project");

function moveToProject() {
    whiteBox.animate([
        {transform: "translateX(2.7rem)"},
        {transform: "translateY(2.7rem)"}
    ], {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards"
    });
}

clickProject.addEventListener('click', moveToProject);