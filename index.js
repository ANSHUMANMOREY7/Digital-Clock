function loadclock() {
    const hourelement = document.getElementById('hours')
    const minuteelement = document.getElementById('minutes')
    const secondelement = document.getElementById('seconds')

    let date = new Date();
    let hour = date.getHours();
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let AmPmours = AmPm > 12 ? 'PM' : 'AM';


    hourelement.innerHTML = hour;
    minuteelement.innerHTML = minutes;
    secondelement.innerHTML = seconds;
    AmPm.innerHTML =

}
setInterval(loadclock, 1000);
