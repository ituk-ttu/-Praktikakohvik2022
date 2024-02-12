const countDate = new Date("2024-03-12T12:00:00+02:00");
const animationDuration = 1000;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const animateValue = (className: string, end: number, duration: number) => {
    if (end >= 100 || end <= 0) return;
    let startTimestamp: number = 0;
    const obj = document.querySelectorAll<HTMLElement>(className);
    const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(...[(timestamp - startTimestamp) / duration, 1]);
        const text = Math.floor(progress * end);
        if (isNaN(text) || text > end) return;
        obj.forEach(element => element.innerText = text.toString());
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
const countdown = () => {
    const now = new Date().getTime();
    const gap = countDate.valueOf() - now;

    if (gap < 0) {
        clearInterval(myInterval)
    } else {
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.querySelectorAll<HTMLElement>(".dayNr").forEach(element => element.innerText = textDay.toString());
        document.querySelectorAll<HTMLElement>(".hourNr").forEach(element => element.innerText = textHour.toString());
        document.querySelectorAll<HTMLElement>(".minuteNr").forEach(element => element.innerText = textMinute.toString());
        document.querySelectorAll<HTMLElement>(".secondNr").forEach(element => element.innerText = textSecond.toString());
    }
}
const myInterval = setInterval(countdown, 1000);

export const animateCountdown = () => {
    const now = new Date().getTime();
    const gap = countDate.valueOf() - now;
    const dayRange = Math.floor(gap / day);
    const hourRange = Math.floor((gap % day) / hour);
    const minuteRange = Math.floor((gap % hour) / minute);
    const secondRange = Math.floor((gap % minute) / second);

    animateValue('.dayNr', dayRange, animationDuration);
    animateValue('.hourNr', hourRange, animationDuration);
    animateValue('.minuteNr', minuteRange, animationDuration);
    animateValue('.secondNr', Math.floor(secondRange - animationDuration / 1000), animationDuration);
    setTimeout(() => myInterval, animationDuration);
}
