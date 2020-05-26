function partyTime(guests = []) {
    let reservationList = new Set();

    let currentLine = guests.shift();

    while (currentLine !== 'PARTY') {
        reservationList.add(currentLine);
        currentLine = guests.shift();
    }

    guests.forEach(guest => {
        if (reservationList.has(guest)) {
            reservationList.delete(guest)
        }
    })

    let nonComing = Array.from(reservationList)

    let VIP = [];
    let normal = [];

    nonComing.forEach(guest =>{
        if(guest.charCodeAt(0) >='0'.charCodeAt(0) && 
            guest.charCodeAt(0) <='9'.charCodeAt(0) ){
                VIP.push(guest)
        }else{
            normal.push(guest)
        }
    })
    console.log(nonComing.length);
    VIP.forEach(guest => console.log(guest))
    normal.forEach(guest => console.log(guest))

}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'810FThqG',
'MDzcM9ZK',
'8W0FThqG',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
]

)