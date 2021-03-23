window.addEventListener("load", function () {
    const HIDE_ME_ELEMNTS = document.querySelectorAll(".show_me")
    const BUTTON = document.querySelector("#button")

    BUTTON.addEventListener('click', function(e) {
        HIDE_ME_ELEMNTS.forEach(function(element) {
            element.style.display = "initial";
        })
    })
})