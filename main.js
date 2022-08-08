// document.getElementById('orangediv').style.background = "black"

// method 1
// document.getElementById('orangedivtstfddffg').style.background = "#87CEEB"

// ES 5

var seconddiv = document.getElementById('orangediv')

// poping an alert when clicked
seconddiv.addEventListener('click', function () {
    alert('orange div is clicked')
})

// changing the element backgroud
seconddiv.style.background = "blue"