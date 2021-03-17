function solve() {
    const [checkBtn, clearBtn] = document.querySelectorAll('button');
    const tbody = document.querySelector('tbody');
    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    function check(e) {
        const inputs = Array.from(document.querySelectorAll('input'));
        const rows = [];
        const cols = [];
        const currRow = [];
        const currCol = [];

        inputs.forEach(i => {
            if(currRow.length < 3){
                currRow.push(i.value);
            }else{
                rows.push(currRow.slice());
                currRow.splice(0, currRow.length);
                currRow.push(i.value);
            }
        })
        rows.push(currRow)
        
    };

    function clear() {

    };

    function horizontalCheck(rows) {

    };
}

