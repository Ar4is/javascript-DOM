// Your JavaScript goes here.
window.addEventListener('load', function () {

    var htmlName = document.querySelector('#greeting')
    const NAME_BAR = document.querySelector('#full_name')
    NAME_BAR.addEventListener('keyup', function (e) {
        htmlName.textContent = "Hello there, " + e.target.value + "!"
    })

})