// Code your solutions in this file
const names = ["Mercy", "Jane", "SUzzy"];
const writeCards = function(names, event){
    let gifts  = [];
    for (let t = 0; t < names.length; t++){
        let gifts = `Thank you, ${names[t]}, for the wonderful ${event} gift!`
        gifts.push(gifts)
    }

    return gifts;
}
writeCards(names, "greetings")

const presents = function(k){
    let t = k;
    while(t >= 0){
        console.log(t);
        t--
    }
}

presents (6);
