function loadclock() {
    const hourelement =document.getElementById('hours')
    const minuteelement = document.getElementById('minutes')
    const secondelement=document.getElementById('seconds') 
    
    let date = new Date() ;
    let hour = date.getHours();
    hours= hours > 12 ? hours - 12 : hours ;
    let minutes= date.getMinutes();
    let seconds = date.getSeconds();
    const AmPm = hours >= 12 ? 'PM' : 'AM'; 

    hourelement.innerHTML= hour ;
    minuteelement.innerHTML=minutes;
    secondelement.innerHTML=seconds;

}
loadclock();
