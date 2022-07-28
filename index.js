// Code your solutions in this file
function writeCards(name, event) {
    let card = []
    for (let i = 0; i < name.length; i++) {
        card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    
    return card;

}

console.log(writeCards(['Ada', 'Brendan', 'Ali'], 'birthday'));

function countDown(n) {
    let count = n;
    while (count >= 0) {
        console.log(count--);
    }
}

countDown(10);