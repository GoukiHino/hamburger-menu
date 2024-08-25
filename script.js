const hamburgerBtn = document.querySelector(".hamburger_btn");
const hamburgerNav = document.querySelector(".hamburger_nav");

for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    hamburgerBtn.appendChild(span);
}

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    hamburgerNav.classList.toggle("active");

    if (document.body.style.overflow == "hidden") {
        document.body.style.overflow = "";
    } else {
        document.body.style.overflow = "hidden";
    }
});