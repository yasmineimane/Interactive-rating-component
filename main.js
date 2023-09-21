const submit = document.getElementById("submit");
const rate = document.getElementById("Rating_container");
const thanks = document.getElementById("Thanks_container");

thanks.style.display = "none";

submit.addEventListener('click', () => {
    thanks.style.display = "block";
    rate.style.display = "none";
});