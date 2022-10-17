const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

function getQuote() {
    fetch("http://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = data.author;
    });
};

getQuote();

//date and time funciton
const timeEl = document.querySelector('#time');
const dateEl = document.querySelector('#date');

/**
 * @param {Date} date
 */
function formatTime(date) {
    const hrConverter = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12;

    return `${hrConverter.toString()}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

    return `${Days[date.getDay()]}, ${Months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
    const current = new Date();

    timeEl.textContent = formatTime(current);
    dateEl.textContent = formatDate(current);
}, 200);

