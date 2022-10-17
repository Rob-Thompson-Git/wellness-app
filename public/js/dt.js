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

    return `${hrConverter.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December", ];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
    const current = new Date();

    timeEl.textContent = formatTime(current);
    dateEl.textContent = formatDate(current);
}, 200);
