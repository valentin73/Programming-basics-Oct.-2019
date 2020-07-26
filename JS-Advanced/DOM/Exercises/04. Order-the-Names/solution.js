function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', onClick);

    const list = Array.from(document.getElementsByTagName('ol')[0].getElementsByTagName('li'));

    const namesObject = {};

    list.forEach(el => {
        const currName = el.textContent;
        if (currName.length !== 0) {
            const currLetter = currName[0].toUpperCase();
            namesObject[currLetter] = currName;
        }
    });

    function onClick() {
        const input = document.querySelector('#exercise article input');
        let inputValue = input.value;
        inputValue = inputValue[0].toUpperCase() + inputValue.substr(1).toLowerCase();
        const firstLetter = inputValue[0].toUpperCase();

        if (namesObject.hasOwnProperty(firstLetter)) {
            namesObject[firstLetter] =  namesObject[firstLetter] + ', ' + inputValue
        }else{
            namesObject[firstLetter] = inputValue;
        }

        const index = firstLetter.charCodeAt(0) - 65;
        list[index].textContent = namesObject[firstLetter];

        console.log(namesObject);
        input.value = '';

    }

}