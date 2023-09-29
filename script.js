// const countDrinks = +prompt("How many drinks would you like?");
const drinks = {
    "espresso": 2,
    "cappuccino": 3,
    "latte": 1,
    "hot chocolate": 2
};
// let order = [];

// for (let i = 0; i < countDrinks; i++) {
//     order[i] = prompt("Which drink would you like to order?");
// }

function writeCheck(...order) {
    let check = "";
    let total = 0;
    for (let i = 0; i < order.length; i++) {
        check += `${order[i]}: ${drinks[order[i]]}$<br>`;
        total += drinks[order[i]];
    }
    check += `<br>Total: ${total}$`;
    return check;
}

// document.write(writeCheck(order));
document.write(writeCheck("espresso", "latte"));


