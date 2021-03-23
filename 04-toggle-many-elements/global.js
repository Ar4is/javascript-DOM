// Your JavaScript goes here.
window.addEventListener("load", function () {

    const ELEMENTS = document.querySelectorAll('.toggle_me')
    const BUTTON = document.querySelector('#button')

    var toggleStatus = false
    BUTTON.addEventListener('click', function(e) {
        if (toggleStatus == false)
        {
            ELEMENTS.forEach(function(element) {
                element.style.display = 'initial'
                toggleStatus = true
            })
        }
        else
        {
            ELEMENTS.forEach(function (element) {
                element.style.display = 'none'
                toggleStatus = false
            })
        }
    })

})