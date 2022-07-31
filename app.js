let btrbutton = document.getElementById("betterbutton")
let suprbutton = document.getElementById("supremebutton")
let rbutton = document.getElementById("robertsbutton")
let choice = "."

btrbutton.addEventListener('click', function(){
    choice = "A Better Image Beauty"
})

suprbutton.addEventListener('click', function(){
    choice = "Supreme Cuts Barber Shop and Salon"
})

rbutton.addEventListener('click', function(){
    choice = "Mr. Roberts Barber Shop"
    console.log(choice)
})

// hairstyle.html

let nbutton = document.getElementById("nextbutton")
let input = document.getElementById("inputting").value

nbutton.addEventListener('click', function(){
    let hairStyle = input
    console.log(input)
})
