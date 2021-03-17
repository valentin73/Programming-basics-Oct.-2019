function solve() {
    const onScreenBtn = document.querySelector('#container > button');
    const clearBtn = document.querySelector('#archive > button')
    onScreenBtn.addEventListener('click', addMovie);
    clearBtn.addEventListener('click', clearArchive);

    const moveisOnScreen = document.querySelector('#movies').querySelector('ul');
    const archivedMovies = document.querySelector('#archive').querySelector('ul');

    function addMovie(e) {
        e.preventDefault();
        const name = document.getElementsByTagName('input')[0];
        const hall = document.getElementsByTagName('input')[1];
        const price = document.getElementsByTagName('input')[2];

        const nameValue = name.value;
        const hallValue = hall.value;
        const priceValue = Number(price.value);

        if (name.value && hall.value && price.value && (typeof priceValue === 'number')) {

            const archiveBtn = el('button', 'Archive');
            archiveBtn.addEventListener('click', archive);

            function archive(e) {
                const ticketsSold = e.target.previousSibling;
                const ticketsNumber = Number(ticketsSold.value);
    
                if (ticketsNumber) {
                    moveisOnScreen.removeChild(newMovie);

                    const deleteBtn = el('button', 'Delete');
                    deleteBtn.addEventListener('click', deleteMovie);  

                    const archivedMovie = el('li',[
                        el('span', nameValue),
                        el('strong', `Total amount: ${(ticketsNumber * priceValue).toFixed(2)}`),
                        deleteBtn
                    ]);
                    archivedMovies.appendChild(archivedMovie)

                    function deleteMovie(){
                        archivedMovies.removeChild(archivedMovie)
                    }
                }
            }
            const newMovie = el('li', [
                el('span', nameValue),
                el('strong', `Hall: ${hallValue}`),
                el('div', [
                    el('strong', `${priceValue.toFixed(2)}`),
                    el('input', '', { placeholder: "Tickets Sold" }),
                    archiveBtn
                ])
            ]);
            moveisOnScreen.appendChild(newMovie);
        };

        name.value = '';
        hall.value = '';
        price.value = '';

    };
    function clearArchive() {
        Array.from(archivedMovies.querySelectorAll('li')).forEach( ch => ch.remove())
    }


    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }

            result.appendChild(node);
        }

        return result
    };


}