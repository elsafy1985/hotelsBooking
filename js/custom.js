let swichers = document.querySelectorAll(".switcher li");
let boxes = document.querySelectorAll(".boxes > .col-lg-6");
swichers.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageBoxes)
});
function removeActive() {
    swichers.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
function manageBoxes() {
    boxes.forEach((box) => {
        box.classList.remove("show-box")
        box.classList.add("hide-box");
    });
    document.querySelectorAll(this.dataset.cat).forEach((currentBoxes) => {
        currentBoxes.classList.remove("hide-box");
        currentBoxes.classList.add("show-box")
    })
}