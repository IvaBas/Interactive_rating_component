let divWrapper = document.querySelector(".wrapper");
let divThanks = document.querySelector(".thanks");

const rating = document.getElementById("rating")  // span element
const rates = document.querySelectorAll(".circle")

function submit() {
    divWrapper.style.display = "none";
    divThanks.style.display = "block";
}

function rateAgain() {
    divWrapper.style.display = "block";
    divThanks.style.display = "none";
}

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
