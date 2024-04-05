function showDateTime() {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    document.getElementById("currentDateTime").textContent = dateTimeString;
}

function showWorldClock() {
    const worldClock = `
        <p>New York: ${getFormattedTime(-5)}</p>
        <p>London: ${getFormattedTime(0)}</p>
        <p>Tokyo: ${getFormattedTime(9)}</p>
    `;
    document.getElementById("worldClock").innerHTML = worldClock;
}

function getFormattedTime(offset) {
    const currentDate = new Date();
    const utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
    const newDate = new Date(utc + (3600000 * offset));
    return newDate.toLocaleTimeString();
}

showWorldClock();