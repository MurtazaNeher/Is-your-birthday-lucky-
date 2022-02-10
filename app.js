const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");
const outputBox = document.querySelector("#output-box");
const reset = document.querySelector("#reset");
const moreInfo = document.querySelector("#more-info");

checkButton.addEventListener('click', birthdayIsLucky);
reset.addEventListener('click', resetFunction);

moreInfo.style.display = "none";
outputBox.style.display = "none";


function birthdayIsLucky() {
    outputBox.style.display = "block";

    const luckyNumber1 = luckyNumber.value;
    const dOB = dateOfBirth.value;
    const sum = calculateSum(dOB);
    if (sum && dOB) {
        if (Number(sum % luckyNumber1) === 0) {
            outputBox.value = "Perfect! This number is lucky for you"
        } else {
            outputBox.value = "Ohh no!!! This number is not lucky for you"
            let userLuckyNumber = 2;
            const sum = calculateSum(dOB);

            // for (let i = 0; i < 3; i++) {
            while (sum % userLuckyNumber != 0) {
                userLuckyNumber = userLuckyNumber + 1;
            }

            moreInfo.style.display = "block";


            moreInfo.value = "Your lucky number as per your Date of birth will be : " + userLuckyNumber;
            console.log(userLuckyNumber);

        }
    } else {
        outputBox.value = "Please fill both the fields!"

    }

}

function calculateSum(dOB) {
    dOB = dOB.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dOB.length; i++) {
        sum = sum + Number(dOB.charAt(i));
    }

    return sum;
}

function getMoreInfo() {

}

function resetFunction() {
    dateOfBirth.value = "null";
    luckyNumber.value = "null";
    outputBox.value = "";
    moreInfo.value = "";
    moreInfo.style.display = "none";
    outputBox.style.display = "none";


}