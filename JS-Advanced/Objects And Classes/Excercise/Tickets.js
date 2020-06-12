function tickets(input = [], criteria = '') {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = []

    input.forEach(el => {
        let [destination, price, status] = el.split('|')
        price = Number(price)
        const ticket = new Ticket(destination, price, status);
        result.push(ticket)
    })

    const output = result.sort((a, b) => {
        if (criteria === 'price') {
            return a - b;
        } else {
            return a[criteria].localeCompare(b[criteria])
        }
    })

    return output
}

// console.log(tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ))

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'));