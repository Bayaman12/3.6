var birthday = new Date("September 16, 2024 00:00:00").getTime();

function updateCountdown() {
    
    var now = new Date().getTime();


    var distance = birthday - now;

    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    
    if (distance < 0) {
        document.getElementById("message").innerHTML = "Поздравляю c Днем Рождения!";
    } else {
        document.getElementById("message").innerHTML = ""; 
    }
}


setInterval(updateCountdown, 1000);