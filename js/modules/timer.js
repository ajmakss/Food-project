function timer(id, deadline) {
    
    function getTimeRemove(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor((t / (1000 * 60 * 60 * 24)) % 24),
              hours = Math.floor((t / (1000 * 60 * 60)) % 60),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function zero(num) {
        if (num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }
    function showTime(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(time, 1000);

        time();


        function time() {
            const t = getTimeRemove(endtime);

            if( t.total <= 0) {
                clearInterval(timeInterval);
            }
            days.innerHTML = zero(t.days);
            hours.innerHTML =zero(t.hours);
            minutes.innerHTML = zero(t.minutes);
            seconds.innerHTML = zero(t.seconds);
        }
    }

    showTime(id, deadline);
}

export default timer;