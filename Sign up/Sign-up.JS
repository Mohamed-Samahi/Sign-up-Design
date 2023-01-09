// selecting the input type password element
let inputPass = document.getElementById("pass");

let submit = document.querySelector("button[type='submit]");

let firstSpan = document.querySelector('form .test span:first-child');
let secondSpan = document.querySelector('form .test span:nth-child(2)');
let thirdSpan = document.querySelector('form .test span:nth-child(3)');
let fourthSpan = document.querySelector('form .test span:last-child');


let allSpans = [firstSpan, secondSpan, thirdSpan, fourthSpan]

let specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '/'];

let abc = 'abcdefghijklmnopqrstuvwxyz';

inputPass.addEventListener("input", () => {

    let val = inputPass.value;

    let valArray = val.split("")

    let hasSymbols = valArray.some(item => specialSymbols.includes(item));

    let hasUpperCase = valArray.some(item => abc.toUpperCase().split("").includes(item));

    let hasNumbers = valArray.some(item => !isNaN(item));

    let perfectLength = val.length >= 8;

    console.log(valArray)

    if (perfectLength) {

        if (hasSymbols && hasUpperCase && hasNumbers) {

            allSpans.forEach(e => {

                e.style.backgroundColor = "#41aa4f"

            });

        } else if (hasSymbols === false || hasUpperCase === false || hasNumbers === false) {

            if ((hasNumbers && hasSymbols) || (hasNumbers && hasUpperCase) || (hasSymbols && hasUpperCase)) {

                allSpans.pop();

                allSpans.forEach(e => {

                    e.style.backgroundColor = "#fbf30a"

                });

            }

        }

    } else {
        // firstSpan.style.backgroundColor = 'red';
        // allSpans.shift();
        // allSpans.forEach(e => {
        //     e.style.backgroundColor = 'transparent';
        // })
    }

    // if (hasSymbols && hasUpperCase && hasNumbers && perfectLength) {

    //     allSpans.forEach(e => {

    //         e.style.backgroundColor = "#41aa4f"

    //     });

    // } else if (hasNumbers && hasUpperCase) {

    //     firstSpan.style.backgroundColor = 'red'

    // }

});
