function loadclock() {
    const hourelement = document.getElementById('hours')
    const minuteelement = document.getElementById('minutes')
    const secondelement = document.getElementById('seconds')
    const ampm =document.getElementById("ampm")
    let date = new Date();
    let hour = date.getHours();
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    let minutes = date.getMinutes();
    minutes = minutes <= 9 ? "0" + minutes : minutes;
    let seconds = date.getSeconds();
    seconds = seconds <= 9 ? "0" + seconds : seconds;

    hourelement.innerHTML = hour;
    minuteelement.innerHTML = minutes;
    secondelement.innerHTML = seconds;
    ampm.innerText = date.getHours() >= 12 ? "PM" : "AM";


}
setInterval(loadclock, 1000);
