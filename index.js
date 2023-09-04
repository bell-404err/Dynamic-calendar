const date = new Date();
const currentTime = document.querySelector('.timer');

function renderCalendar() {

    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
        firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
        prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0);

    const fullDateString = document.querySelector('#full__date'),
        month = document.querySelector('#month'),
        currentDaysInMonth = document.querySelector('.current__month__days');


    let days = '';

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    month.innerHTML = ``;
    month.innerHTML = `
        <span id="month">${monthNames[date.getMonth()]}</span>
    `;

    fullDateString.innerHTML = `
        <span id="full__date">${date.toDateString()}</span>
    `;

    if (firstDayIndex === 0) {
        for (let i = 6; i > 0; i--) {
            days += `<div class="prev__date">${(new Date(prevLastDay).getDate()) - i + 1}</div>`;
        }
    } else {
        for (let i = firstDayIndex - 1; i > 0; i--) {
            days += `<div class="prev__date">${(new Date(prevLastDay).getDate()) - i + 1}</div>`;
        }
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()
        ) {
            days += `<div class="current__days today">${i}</div>`;
        } else {
            days += `<div class="current__days">${i}</div>`;
        }

    }
    currentDaysInMonth.innerHTML = days;

}

renderCalendar();
document.querySelector('.prev__month').addEventListener('click', () => {
    date.setMonth((date.getMonth()) - 1);
    renderCalendar();
});
document.querySelector('.next__month').addEventListener('click', () => {
    date.setMonth((date.getMonth()) + 1);
    renderCalendar();
});

function setClock() {
    const t = new Date();
    const h = document.querySelector('#hour'),
        m = document.querySelector('#minutes'),
        s = document.querySelector('#seconds');
    updateClock(t, h, m, s);
}

function updateClock(t, h, m, s) {
    h.innerHTML = `${getZero(t.getHours())}`;
    m.innerHTML = `${getZero(t.getMinutes())}`;
    s.innerHTML = `${getZero(t.getSeconds())}`;
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    }
    if (num < 0) {
        return 0
    } else {
        return num
    }
}

setInterval(setClock, 1000);