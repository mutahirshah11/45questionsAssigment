// (task 44)
let SandwichItems = ['cheese', 'tomato', 'ham', 'mayo', 'onions', 'white bread', 'mustard sauce'];
function Sandwich(...items) {
    console.log("\n--Summary of the sandwitch being Ordered--");
    console.log("Sandwitch with" + " " + items.join(","));
}
Sandwich("cheese", "white bread", "olives", "extra cheese");
Sandwich('peanut butter', 'black pepper', "cheese");
Sandwich("oninons", "pepper", "tomato");
export {};
