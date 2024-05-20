// (task 42 )
let Magicians = ["Ali zaman", "Abdul Hameed", "Waqar Pasha"];
function show_magicians(magicians) {
    Magicians.forEach(names => {
        console.log(names);
    });
}
function make_great(magicianArray) {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = "The Great Magician" + " " + magicianArray[i];
    }
}
make_great(Magicians);
show_magicians(Magicians);
export {};
