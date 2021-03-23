// Your JavaScript goes here.
window.addEventListener('load', function () {

    const ELEMENTS = document.querySelectorAll(".second_five li")
    const BUTTON = document.querySelector('#toggle_button')

    var toggleStatus = false
    BUTTON.addEventListener('click', function (e) {
        ELEMENTS.forEach(function (element) {
            if (toggleStatus == false) {
                element.style.display = 'flex'
            }
            else
            {
                element.style.display = 'none'
            }
        })
        toggleStatus = !toggleStatus
    })
})