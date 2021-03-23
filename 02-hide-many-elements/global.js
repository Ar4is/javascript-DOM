window.addEventListener("load", function () {
    const HIDE_ME_ELEMENTS = document.querySelectorAll(".hide_me")
    const BUTTON = document.querySelector("#button")

    BUTTON.addEventListener('click', function(e) {
        HIDE_ME_ELEMENTS.forEach(function(element) {
            element.style.display = "none";
        })
    })
});
