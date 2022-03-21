const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(){
//    return cats.push('Ralph');
// }
const destructivelyAppendCat = () => cats.push('Ralph');

// function destructivelyRemoveLastCat(){
//     return cats.pop();
// }

const destructivelyRemoveLastCat = () => cats.pop();

// function destructivelyPrependCat(){
//     return cats.unshift('Bob');
// }

const destructivelyPrependCat = () => cats.unshift('Bob');

// function destructivelyRemoveFirstCat(){
//     return cats.shift();
// }
const destructivelyRemoveFirstCat = () => cats.shift();

function appendCat() {
    const newCats = [...cats, 'Broom'];
    return newCats;
}

function prependCat(){
    const newCatsAdd = ['Arnold', ...cats];
    return newCatsAdd;
}

function removeLastCat(){
    const newCatsEdit = cats.slice(0, 2);
    return newCatsEdit;
}

function removeFirstCat(){
    const newCatsChange = cats.slice(1, 3);
    return newCatsChange;
}