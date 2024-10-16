// задача 1
// const regex = /^\d+$/
// const containsOnlyDigits = (str) => {
//     return regex.test(str)
// }

// console.log(containsOnlyDigits("12345"))
// console.log(containsOnlyDigits("12a45"))


// задача 2

// const Timer = () => {
//     setInterval(() => {
//         console.log("Прошла секунда")
//     }, 1000)
// }

// Timer()


// задача 3

// const count = () => {
//     let i = 1
//     const interval = setInterval(() => {
//         console.log(i)
//         i++
//         if (i > 10) {
//             clearInterval(interval);
//         }
//     }, 1000)
// }

// count();



// задача 4


// const block = document.querySelector('.block')

// block.addEventListener('click', () => {
//     if (block.classList.contains("active")) {
//         block.classList.remove("active")
//     } else {
//         block.classList.add("active")
//     }
// })



// задача 5


// const request = new XMLHttpRequest()
// request.open("GET", "data.json")
// request.setRequestHeader("Content-type", "application/json")
// request.send()
// request.onload = () => {
// const data = JSON.parse(request.response)
// console.log(data);          
// }







