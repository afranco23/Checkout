"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const selectCountry = document.querySelector("#countries")

  fetch("https://restcountries.com/v2/all")
    .then((res) => {
      return res.json()
    })
    .then((countries) => {
      let output = ""
      countries.forEach((country) => {
        output += `<option>${country.name}</option>`
      })
      selectCountry.innerHTML = output
    })
    .catch((err) => console.error(err))
})

const decrementBtn = document.querySelectorAll("#decrement")
const quantityElem = document.querySelectorAll("#quantity")
const incrementBtn = document.querySelectorAll("#increment")
const priceElem = document.querySelectorAll("#price")
const totalElem = document.querySelector("#total")

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.textContent)
    increment++

    this.previousElementSibling.textContent = increment
    totalCalc()
  })

  decrementBtn[i].addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.textContent)
    decrement <= 1 ? 1 : decrement--

    this.nextElementSibling.textContent = decrement
    totalCalc()
  })
}

const totalCalc = function () {
  const ship = 19
  let subtotal = 0
  let total = 0

  for (let i = 0; i < quantityElem.length; i++) {
    subtotal +=
      Number(quantityElem[i].textContent) * Number(priceElem[i].textContent)
  }

  total = subtotal + ship
  totalElem.textContent = total.toFixed(2)
}

let form = document.getElementById('form');
function submitForm() {
  if (form.checkValidity()) {
    alert('Adding Succesful!')
  }
  else {
    alert('Please enter all required fields')
  }
}