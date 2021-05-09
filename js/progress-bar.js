const barLine = document.querySelectorAll('.progress__bar__line');
const barPercent = document.querySelectorAll('.progress__bar__percent ');

const progressBar = (percent, time, barID) => {
    const intervalTime = (time * 1000) / percent;
    let addPercent = 0;
    const barInterval = setInterval(() => {
        addPercent++;
        barLine[barID].style.width = `${addPercent}%`;
        barPercent[barID].style.width = `${addPercent}%`;
        barPercent[barID].textContent = `${addPercent}%`;
        if (addPercent === percent) {
            clearInterval(barInterval);
        }
    }, intervalTime);
}