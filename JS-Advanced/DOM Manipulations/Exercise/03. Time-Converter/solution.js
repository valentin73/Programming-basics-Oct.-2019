function attachEventsListeners() {
    const ratio = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    document.querySelector('body main').addEventListener('click', onClick);

    function onClick(e) {
        const target = e.target;
        if (target.type === 'button') {
            const input = target.previousElementSibling;
            const value = input.value;
            const unitType = input.id;

            const convertedValues =converter(value, unitType);
            display(convertedValues)
        }
    }

    function converter(value, unit) {
        const inDays = value / ratio[unit];
        return{
        days: inDays * ratio.days,
        hours:inDays * ratio.hours,
        minutes : inDays * ratio.minutes,
        seconds: inDays * ratio.seconds,
        }
    };
    function display(convertedValues){
        days.value = convertedValues.days;
        hours.value =  convertedValues.hours;
        minutes.value = convertedValues.minutes;
        seconds.value = convertedValues.seconds;
    }
}