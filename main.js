// document.getElementById('orangediv').style.background = "black"

// method 1
// document.getElementById('orangedivtstfddffg').style.background = "#87CEEB"

// ES 5

// var seconddiv = document.getElementById('orangediv')

// poping an alert when clicked
// seconddiv.addEventListener('click', function () {
//     alert('orange div is clicked')
// })

// changing the element backgroud
// seconddiv.style.background = "blue"

//  Three simple ways we can make javascript display on our browser

// console
// console.log('welcome, Israel, this works!!!')

// console.log(document)

// alert
// alert('Welcome to my first day with javascript')

// innerHTML
// document.querySelector('.right-holder').innerHTML = "        Supper cool!! it works"


// Use of functions (ES5)

function popsomething() {
    alert('Welcome, box 1 is clicked')
}

// to call a function
// popsomething()


var rightdiv = document.querySelector('#right-holder')
// console.log(rightdiv)

// function changetoorange() {
//     rightdiv.style.background = "#FFA800"
// }
// function changetotomato() {
//     rightdiv.style.background = "tomato"
// }
// function changetoskyblue() {
//     rightdiv.style.background = "skyblue"
// }

// Method 2 --- using parameters & arguemnet

function printsomething(yourwriteup) {
    console.log(yourwriteup)
}

printsomething('say my name')
printsomething('call me zaddy')
printsomething('where is my agbado')

function ChangeColor(particularcolor) {
    rightdiv.style.background = particularcolor
}

// ChangeColor('red')
