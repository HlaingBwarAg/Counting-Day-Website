
function calcTime(){
    const eventDate = new Date("Feb 21, 2021 00:00:00")
    const now = new Date()

    const eventYear = eventDate.getFullYear();
    const february = (eventYear % 4 === 0 && eventYear % 100 !==0) || eventYear % 400 === 0 ? 29 : 28 ;
    const daysInMonth = [31,february,31,30,31,30,31,31,30,31,30,31]

    // year
    var year = now.getFullYear() - eventDate.getFullYear() 

    // month
    var month = now.getMonth() - eventDate.getMonth()
        if(month < 0){
            year --;
            month +=12;
        }

        // day
    var day = now.getDate() - eventDate.getDate()
        if(day < 0){
            month --;
            day += daysInMonth[eventDate.getMonth()];
        }

        // for time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const days = hour * 24;

    const gap = now.getTime() - eventDate.getTime()

    var textDays = Math.floor( gap / days ) + 1
    var textHour = Math.floor(( gap % days) / hour )
        if ( textHour > 12){
                textHour -= 12 
        }
    var textMinute = Math.floor((gap % hour) / minute )
    var textSecond = Math.floor((gap % minute) / second )

    document.getElementById("year").innerText = year ;
    document.getElementById("month").innerText = month ;
    document.getElementById("day").innerText = day ;
    document.getElementById("hour").innerText = textHour ;
    document.getElementById("minute").innerText = textMinute ;
    document.getElementById("second").innerText = textSecond ;
    document.getElementById("days").innerText = textDays ;
}

setInterval(calcTime,1000)

