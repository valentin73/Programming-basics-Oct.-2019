function encodeAndDecodeMessages() {
    const sentMessage = document.querySelector('textarea[placeholder="Write your message here..."]');
    const recievedMessage = document.querySelector('textarea[placeholder="No messages..."]');

    const sentButton = document.getElementsByTagName('button')[0];
    const recieveButton = document.getElementsByTagName('button')[1];

    sentButton.addEventListener('click', sent);
    recieveButton.addEventListener('click', recieve);

    function sent(e) {
        let codedMessage = '';

        for (const letter of sentMessage.value) {
            const newCode = (letter.charCodeAt(0) + 1);
            const newLetter = String.fromCharCode(newCode);
            codedMessage += newLetter;
        };

        recievedMessage.value = codedMessage;
        sentMessage.value = '';
    }

    function recieve(e) {
        let decodedMessage = '';
        for (const letter of recievedMessage.value) {
            const newCode = (letter.charCodeAt(0) - 1);
            const newLetter = String.fromCharCode(newCode);
            decodedMessage += newLetter;
        };

        recievedMessage.value = decodedMessage;
        decodedMessage = '';
        codedMessage = '';
    }
}