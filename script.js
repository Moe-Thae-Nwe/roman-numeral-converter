const number = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
let output = document.getElementById("output")

convertBtn.addEventListener("click", function() {
    let numberValue = number.value
    let arabic = Number(numberValue)
    output.innerHTML = ""
    if (numberValue === "") {
        output.innerHTML = `<p>Please enter a valid number</p>`
    } else if (arabic < 1) {
        output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`
    } else if (arabic > 3999) {
        output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`
    } else {
        if (arabic >= 1000) {
            for (let i = 0; arabic >= 1000; i++) {
                output.innerHTML += "M"
                arabic -= 1000
            }
        }
        if (arabic >= 900) {
            output.innerHTML += "CM"
            arabic -= 900
        }
        if (arabic >= 500) {
            output.innerHTML += "D"
            arabic -= 500   
        }
        if (arabic >= 400) {
            output.innerHTML += "CD"
            arabic -= 400
        }
        if (arabic >= 100) {
            for (let i = 0; arabic >= 100; i++) {
                output.innerHTML += "C"
                arabic -= 100
            }
        }
        if (arabic >= 90) {
            output.innerHTML += "XC"
            arabic -= 90
        }
        if (arabic >= 50) {
            output.innerHTML += "L"
            arabic -= 50
        }
        if (arabic >= 40) {
            output.innerHTML += "XL"
            arabic -= 40
        }
        if (arabic >= 10) {
            for (let i = 0; arabic >= 10; i++) {
                output.innerHTML += "X"
                arabic -= 10
            }
        }
        if (arabic >= 9) {
            output.innerHTML += "IX"
            arabic -= 9
        }
        if (arabic >= 5) {
            output.innerHTML += "V"
            arabic -= 5
        }
        if (arabic >= 4) {
            output.innerHTML += "IV"
            arabic -= 4
        }
        if (arabic >= 1) {
            for (let i = 0; arabic >= 1; i++) {
                output.innerHTML += "I"
                arabic -= 1
            }
        }
    }
})
