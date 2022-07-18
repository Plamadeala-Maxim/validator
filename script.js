// //Variabile
// const nextSlide = document.querySelector(".nextSlide")
// const emailErr =document.getElementById("emailErr")
// const emailInput = document.getElementById("emailInput")
// //Functii
// const showError = (message,where) => {
//     where.textContent = message
// }
//
//
// // const showError = (input, message) => {
// //     const parent = input.parentElement
// //     parent.classList.add("error")
// //
// //     const small = parent.querySelector("small")
// //     small.textContent = message
// // }
//
// const checkLenth = (input,min,max) => {
//     if (input.value.length < min){
//         showError(`${getFieldName(input)} is small , need to be more than ${min} characters`,)
//     }else if(input.value.length > max){
//         showError(input,`${getFieldName(input)} is big , need to be more than ${max} characters`)
//     }
// }
//
// /////////////
//
//
//
//
//
// nextSlide.addEventListener("click",e =>{
//     let fcheck = true
//     let scheck = true
//     let tcheck = true
//     ////////////
//     const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     if(reg.test(emailInput.value) === false) {
//
//         showError("Scieti email valid",emailErr)
//         fcheck =false
//     }
//
//     if (fcheck === true && scheck === true && tcheck === true){
//         console.log("Ultramegaharos")
//     }
// })

////////////////////////////////////////////////

let first = 0
const formF = document.getElementById("formF")
const one = document.getElementById("one")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")





const showError = (input, message) => {
    const parent = input.parentElement
    parent.classList.remove("success")
    parent.classList.add("error")

    const small = parent.querySelector("small")
    small.textContent = message
}

const confirmPassword = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, `${getFieldName(input2)}does not resemble the first`)
        first += 1
    } else {
        showSuccess(input2)
    }
}

const showSuccess = (input) => {
    const parent = input.parentElement
    parent.classList.remove("error")
    parent.classList.add("success")
}


const checkLenth = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} is small , need to be more than ${min} characters`)
        first += 1
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} is big , need to be more than ${max} characters`)
        first += 1
    } else {
        showSuccess(input)
    }
}
const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
const checkRequired = (inputArr) => {

    let isRequired = false
    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is Required `)
            isRequired = true
            first += 1
        } else {
            showSuccess(input)
        }
    })
}

const checkEmail = (input) => {
    const val = input.value
    if (val.indexOf("@") <= 0 || val.indexOf(".") <= 0 || val.indexOf(".") - val.indexOf("@") <= 1 || val.lastIndexOf(".") === val.length-1) {
        showError(input, `This ${getFieldName(input)} is invalid`)
        first += 1
    } else {
        showSuccess(input)
    }
    // console.log(val.indexOf("." ) - val.indexOf("@" ))
    // console.log(val.indexOf("@"))
}


/////////////////////////////////////////////
const firstDivComun = document.querySelector(".firstDivComun")
const allthr = document.querySelector(".allthr")
const lineGF = document.querySelector(".lineGF")
const lineGT = document.querySelector(".lineGT")
const iconTw = document.querySelector(".iconTw")
const iconThr = document.querySelector(".iconThr")


one.addEventListener("click", (ev) => {
    ev.preventDefault()

    if (checkRequired([password])) {
    }
    confirmPassword(password, password2)
        // checkLenth(email, 3, 35)
        checkEmail(email)
    checkLenth(password, 6, 25)
    if (first === 0) {
        console.log("Previi div class")
        firstDivComun.classList.add("divComunn")
        firstDivComun.classList.remove("firstDivComun")
allthr.style.marginLeft = "-360px"
        lineGF.style.width = "200px"
        iconTw.classList.toggle("iconO")
        iconTw.classList.toggle("iconTw")
    }
    first = 0

})




////////////////////////////
const two = document.getElementById("two")
const three = document.getElementById("three")
const twitter  = document.getElementById("twitter")
const facebook = document.getElementById("facebook")
const googleP  = document.getElementById("googleP")
const seconddivComun = document.querySelector(".seconddivComun")



two.addEventListener("click" ,ev =>{
    ev.preventDefault()

    firstDivComun.classList.remove("divComunn")
    firstDivComun.classList.add("firstDivComun")
    allthr.style.marginLeft = "-30px"
    lineGF.style.width = "0px"
    iconTw.classList.toggle("iconO")
    iconTw.classList.toggle("iconTw")
})








three.addEventListener("click", (ev) => {
    ev.preventDefault()

    if (checkRequired([twitter,facebook,googleP])) {
    }
if (first === 0) {
        console.log("vtoroi div class")

    seconddivComun.classList.add("divComunn")
    seconddivComun.classList.remove("seconddivComun")
    allthr.style.marginLeft = "-740px"

    lineGT.style.width = "200px"
    iconThr.classList.toggle("iconG")
    iconThr.classList.toggle("iconThr")
    }
    first = 0

})


/////////////////////////////////////////////////////////////
const four = document.getElementById("four")
const five = document.getElementById("five")
const firstName = document.getElementById("firstName")
const lastName  = document.getElementById("lastName")
const phone     = document.getElementById("phone")
const address   = document.getElementById("address")

four.addEventListener("click" ,ev =>{
    ev.preventDefault()

    seconddivComun.classList.remove("divComunn")
    seconddivComun.classList.add("seconddivComun")
    allthr.style.marginLeft = "-360px"

    lineGT.style.width = "0px"
    iconThr.classList.toggle("iconG")
    iconThr.classList.toggle("iconThr")
})

five.addEventListener("click", (ev) => {
    ev.preventDefault()

    checkLenth(firstName , 3, 15)
    checkLenth(lastName  , 5, 20)
    checkLenth(phone     , 9, 9)
    checkLenth(address   , 8, 50)

    if (first === 0) {
        console.log("tretii div class")
        alert("finish,bravo,gata,caput")
    }
    first = 0

})
