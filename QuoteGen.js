let array = ["an eye for an eye, makes the whole world blind","if a tree falls in the forest, does it make a noise?" ];
function randMessage(Array) {
    let quote = Array[Math.floor(Math.random()*Array.length)];
    return quote;
}
console.log(randMessage(array));