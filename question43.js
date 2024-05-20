// (task 43)
let Magicians = ["Ali zaman", "Abdul Hameed", "Waqar Pasha"];
function copyArray(arr) {
    return [...arr]; //  type [...arr] to make a copy of whole array
}
function show_magicians(magicians) {
    magicians.forEach(names => {
        console.log(names);
    });
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great Magician" + " " + magicianArray[i];
    }
}
let copyMagicianArray = copyArray(Magicians);
make_great(copyMagicianArray);
console.log("\nthis is the original answer of the array");
show_magicians(Magicians);
console.log("\nthis is the modified answer of the array");
show_magicians(copyMagicianArray);
export {};
