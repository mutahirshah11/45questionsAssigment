// (task 1)
// installed node.js , typescript  and vs code 

//(task 2)  

let Name = ("mutahir");
console .log ( "Hello" + Name +"would you like to learn some python today ?")

//(task 3) 

let person1 = ("mahmood");

console.log("Lowercase:" + person1.toLowerCase());
console.log("Uppercase:" + person1.toUpperCase());
console.log("Titlecase:" +person1.replace(/\b\w/g, c => c.toUpperCase()));


// (task 4) 

// Name : Mutahir shah  , date 21/2/24
// this Program prints a famous quote said by Quiad-e-Azam , a famous person i admire . 
console.log ( 'Quaid-e-Azam once said, "No Power on Earth can undo Pakistan." ' )

// (task 5 )

let famous_person = "Quaid-e-Azam"; 
let message       =  '"No Power on Earth can undo Pakistan"' ; 

console.log (`${famous_person} once said, ${message}`); 


 
// (task 6) 

let person2 = "\t\n  mutahir shah \t\n " ; 
console.log ("Name with white spaces : " , person2) ;
let strippedname = person2.trim() ; 
console.log ("Strippped name : " , strippedname) ; 


// (tsak 7  and 8) 

// Name : Mutahir shah  , date 21/2/24
/* This program  prints addition,subtraction,multiplication & Division operations
and each opearion result is 8 */

console.log(7+1) ;   
console.log(10-2) ;  
console.log(8*1) ;   
console.log(80/10) ;  


// task 9  

let fav_number = 9 ; 
 console.log ("My favourite number is" ,`${fav_number}.`) ; 



 // ( task 10 {have commented on task 4 and 7} )


 // (task 11 )

 let names = ["Muhammad","Abubakar","Umar","Usman","Ali" ] ;
 console.log(names[0]);
 console.log(names[1]); 
 console.log(names[2]);
 console.log(names[3]);
 console.log(names[4]);


 // (task 12) 
 
 // let names = ["Muhammad","Abubakar","Umar","Usman","Ali" ] ;
let Message = " do you like icecream ?" ;  
console.log(names[0]+Message) ; 
console.log(names[1]+Message) ;
console.log(names[2]+Message) ;
console.log(names[3]+Message) ;
console.log(names[4]+Message) ;


// (task 13)
let motorcyclesBrand = ["Honda", "Yamaha","Kawasaki", "BMW"];

for(let i = 0 ; i < motorcyclesBrand.length ; i ++) {
    console.log(`I would like to own ${motorcyclesBrand[i]} motorcycle  `)
}

// (tasks 14)

let GuestArray = ["Ayaan","Muneeb","Ali","Zaman" ]; 

for(let i = 0 ; i < GuestArray.length ; i ++) {
    console.log (`Dear ${GuestArray[i]} today  you are invited for dinner at my place `)
}


// (tasks 15)

// let GuestArray = ["Ayaan","Muneeb","Ali" ];
let canNotAttend = "Ayaan";
console.log(`Sadly ${canNotAttend} would'nt be able to join us for dinner today `)

GuestArray.splice(0,1,"Mudasir") ; 
for(let i = 0 ; i < GuestArray.length ; i ++) {
    console.log(` Invitation : Dear ${GuestArray[i]} today you are invited for Dinner at my place`) ; 
}

// (task 16) 

console.log(`Dear Guests i have found a bigger dinner table , So 3 new guests are invited `)
GuestArray.unshift(`Zaryan`) ; // first guest 
GuestArray.splice(2,0,`Mohib`) ;  // second guest 
GuestArray.push(`Khizer`) ; // third guest 

for (let i = 0 ; i < GuestArray.length ; i++) {
    console.log(`invitaion : Dear ${GuestArray[i]} today you are invited for a dinner at my place`) ; 
}


// (task 17 )
// Updated GuestArray = [Zaryan , Mudasir , Mohib , Muneeb , Ali , Zaman , Khizer]
console.log(`Sorry to announce, i can invite only 2 guest becuase my new dinner table haven't arrived yet :()`)

for (let i = GuestArray.length -1 ; i >= 2 ; i-- ) {
   let removed :any = GuestArray.pop() ;
    console.log(`Sorry ${removed} you are not invited to the dinner today today`)
 }


for (let i = 0 ; i < GuestArray.length ; i ++){
    console.log(`Dear ${GuestArray[i]} you are still invited for dinner tonight.`)
}
GuestArray.splice(0,2) ;
console.log(GuestArray) ; 


// (task 18) 

let PlacesToVisit : string[] = ["Hunza" , "Chitral" , "Swat" , "Nathia gali" , "Neelum valley"] ;

console.log(PlacesToVisit) ; // original order 

let AlphabeticOrder :string[] = [...PlacesToVisit]
AlphabeticOrder.sort() ;
console.log(AlphabeticOrder) ;       // aplhabetic order

console.log(PlacesToVisit) ;
 
let ReverseAlphabeticOrder :string[] = [...AlphabeticOrder] ;
ReverseAlphabeticOrder.reverse()
console.log(ReverseAlphabeticOrder) ;  // reverse alphabetic order 

console.log(PlacesToVisit) ;

PlacesToVisit.reverse()
console.log(PlacesToVisit) ;   // Reseversing Original list 

PlacesToVisit.reverse()
console.log(PlacesToVisit) ;  // Again reversing to be original again 

PlacesToVisit.sort()
console.log(PlacesToVisit) ;  // original array to aplphabetic order 


PlacesToVisit.reverse()
console.log(PlacesToVisit) ; // orignal array is now converted into reverse aplhabetic form 


// (task 19) 

console.log(`Number of people invited at the dinner are ${GuestArray.length}` ) ; 

// (task 20) 
  
let Countries : string[] = ["Pakistan", "india", 'China', 'Iran', 'USA', 'UK','Afghanistan']

// (task 21 )

type user = {
    name : string ,
    price : number ,
    Tangible : boolean ,
}

let car = {
    name : 'Toyota Corolla' ,
    price : 4500000 ,
    Tangible :true
}

let fruit = {
    name : "Apple", 
    price : 150 , 
    Tangible : true , 
}

console.log(`My car name is ${car.name} and its price is ${car.price}`)
console.log(`My Favourite fruit is ${fruit.name} and it price is ${fruit.price} per kilo`)

// (task 22) 

 // error made =  console.log (PlacesToVisit[10]) ;  /*i am calling element with a index 10 but there are only index 4 available


// (task 23) 

let Fruit = "apple" ; 
let numberOne = 10 ;

console.log(`is Fruit === apple ? , i predict true`) ;
console.log(Fruit === "apple") ;                        // true

console.log(`is Fruit is == orange ? , i predict false`) ; 
console.log(Fruit == "orange") ;                           // false

console.log(`is Fruit !== grapes ? , i predict true`) ;
console.log(Fruit !== "grapes") ;                         // true

console.log(`is Fruit !== apple ? , i predict false`) ; 
console.log(Fruit !== "apple") ;                         // false 

console.log(`is Fruit !== pineapple ? , i predict true`) ; 
console.log(Fruit !== "pineapple") ;                     // true 

console.log(`is numberOne > 20 ? , i predict false  `) ; 
console.log(numberOne > 20 );                         // false 

console.log(`is numberOne === 10 ? , i predict true`) ; 
console.log(numberOne === 10 ) ;                         // true 

console.log(`is numberOne !== 10 ? , i predict false`);
console.log(numberOne !== 10);                       // false 

console.log(`is numberOne < 15 ? i predict true`); 
console.log(numberOne < 15);                     // true

console.log (`is numberOne <= 5 ? , i predict false`) ; 
console.log(numberOne <= 5 ) ;                    // false 


// (task 24 )

let myCar = "revo" ; 
let MyNumber = 20 ; 
let age = 17 ;
let Color : string[] = ["blue", "red", "yellow"]

// • Tests for equality and inequality with strings

console.log(`is myCar === revo ? , i predict true`)  ; 
console.log(myCar === "revo");                         // true

console.log(`is myCar !== "revo"? , i predict false `) ; 
console.log(myCar !== "revo");                         // false

// • Tests using the lower case function

console.log( `is myCar.toLowerCase() === revo ? , i predict true `)
console.log(myCar.toLocaleLowerCase() === "revo" ) ;         // true 

console.log( `is myCar.toLowerCase() !== revo ? , i predict false `)
console.log(myCar.toLocaleLowerCase() !== "revo" ) ;         // false

// • Numerical tests involving (=== , !== , < , > ,  <= , >= )

console.log(`is MyNumber === 20 ? , i predict true` ) ;
console.log(MyNumber === 20 );                            // true 

console.log(`is MyNumber !== 20 ? , i predict false` ) ;
console.log(MyNumber !== 20 );                         // false

console.log(`is MyNumber > 18 ? , i predict true` ) ;
console.log(MyNumber > 18 );                         // true    
 
console.log(`is MyNumber < 30 ? , i predict true` ) ;
console.log(MyNumber > 30 );                          // true 

console.log(`is MyNumber >= 20 ? , i predict true` ) ;
console.log(MyNumber >= 20 );                        // true 
 
console.log(`is MyNumber <= 19 ? , i predict true` ) ;
console.log(MyNumber <= 19 );                        // false 

//  • Tests using "and" and "or" operators

console.log(`is MyNumber === 20 && age === 17 ? , i predict true `)
console.log(MyNumber === 20 && age === 17);                 // true 

console.log(`is MyNumber !== 20 && age === 17 ? , i predict false `)
console.log(MyNumber !== 20 && age === 17);             // false 

console.log(`is MyNumber >= 20 || age === 18 ? , i predict true `)
console.log(MyNumber >= 20 || age === 18);                // true      

console.log(`is MyNumber > 25 || age !== 17  ? , i predict false `)
console.log(MyNumber > 25 || age !== 17);              // false        

// • Test whether an item is in a array

console.log(`is red included in the Color Array ? , i predict true`) ; 
console.log(Color.includes("red")); // true 
console.log(`is green included in the Color Array ? , i predict false`) ; 
console.log(Color.includes("green")); // false 

// • Test whether an item is not in a array
console.log(`is red ! included in the Color Array ? , i predict false`) ; 
console.log(!Color.includes("red")); // false 
console.log(`is green ! included in the Color Array ? , i predict true`)
console.log(!Color.includes("green")); // true 


// (task 25) 


// Passes if test 

let alien_color : string = "green"

if(alien_color === "green") {
    console.log("Player just earned 5 points !")
}

// fails if test 
let alien_color1 : string = "red"

if(alien_color === "green") {
    console.log("Player just earned 5 points !")
}

// (task 26) 

let alien_color2: string = "green";

if (alien_color === "green") {
    console.log("Player just earned 5 points!");
} else {
    console.log("Player just earned 10 points!");
}

// (task 27) 

// --->  first version
let AlienColor = "green" ; 

if(AlienColor === "green"){
    console.log("Player just earned 5 points!");
    
}else if(AlienColor === "yellow"){
    console.log("Player just earned 10 points!");
    
}else if (AlienColor === "red"){
    console.log("Player just earned 15 points!");
    
}else{}

// --->  second version
let AlienColor1 = "yellow" ; 

if(AlienColor1 === "green"){
    console.log("Player just earned 5 points!");
    
}else if(AlienColor1 === "yellow"){
    console.log("Player just earned 10 points!");
    
}else if (AlienColor1 === "red"){
    console.log("Player just earned 15 points!");
    
}else{}

// --->  third version
let AlienColor2 = "red" ; 

if(AlienColor2 === "green"){
    console.log("Player just earned 5 points!");
    
}else if(AlienColor2 === "yellow"){
    console.log("Player just earned 10 points!");
    
}else if (AlienColor2 === "red"){
    console.log("Player just earned 15 points!");
    
}else{}

// (task 28 )

let Age = 17 ; 

if (Age < 2){
    console.log(`Person is a Baby`);
    
}else if (Age >= 2 && Age < 4 ){
    console.log("Person is a Toddler.");
    
}else if (Age >= 4 && Age < 13){
    console.log("Person is a Kid");
    
}else if (Age >= 13 && Age < 20){
    console.log("Person is a Tennager");
    
}else if (Age >= 20 && Age < 65){
    console.log("Person is an Adult");
    
}else if(Age >= 65){
    console.log("Person is an Elder");
    
}else{}


// (task 29 )

let favorite_fruits : string[] = ['apple' , 'banana', 'orange', 'pineapple', 'kiwi']

if(favorite_fruits.includes("apple")){
    console.log("I really like apple !")
}
if(favorite_fruits.includes("banana")){
    console.log("I really like banana !")

}
if(favorite_fruits.includes("orange")){
    console.log("I really like orange !")

}
if(favorite_fruits.includes("kiwi")){
    console.log("I really like kiwi !")
}
if(favorite_fruits.includes("pineapple")){
    console.log("I really like pineapple !")
}else{}


// (task 30) 

let userNames = ['admin', 'Eric' , 'Jhon' ,'Sam', 'Frank' ]  ;

for (let i = 0 ; i < userNames.length ; i ++){
    if(userNames[i] === ("admin")){
        console.log("Hello admin, would you like to see a status report?");
        
    } else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again`);
        
    }
} ; 


// (task 31) 

let userName = ['admin', 'Eric' , 'Jhon' ,'Sam', 'Frank' ]  ;

if (userName.length === 0){
    console.log(` We need to find some users!`);
    
} else{
    userName = [] ;
    console.log(`All users have been removed ` + userName.length);
    

};

 
// (task 32)

let current_users = ["Hamza" , "Ali" , "Mutahir", "Mudasir" , "Hussain", "Zaman"];
let new_users = ["Mudasir", "Mutahir" , "Ayan" ,"Muhammad" , "Ali" ,"Ghulam"];



new_users.forEach(user => {
    let Lowercase :string = user.toLowerCase() ; 

    if(current_users.map(user1=> user1.toLowerCase()).includes(Lowercase)) {
        console.log(`The username ${user} is not available , please write a different username`)

    }else{
        console.log(`The user name ${user} is available.  `)
    }
})

// (task 33 )

let Ordinal: any[] = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ] ; 
for (let i =0 ; i< Ordinal.length ; i++) {
 let ordNum = Ordinal[i]

 let OrdinalEnding ;
    if (ordNum === 1 ){
         OrdinalEnding = 'st' ;
    } 
    else if (ordNum === 2){
         OrdinalEnding = 'nd' ;
    }
    else if (ordNum === 3){
        OrdinalEnding = 'rd'
    }
    else {
         OrdinalEnding = 'nd'
    }
    console.log(`${ordNum}${OrdinalEnding} `)
}

// (task 34 )

let Pizza : string [] = ["Cheese Pizza" , "Pepperoni Pizza" , "Malai Boti Pizaa" ] ; 

for (let i = 0 ; i < Pizza.length ; i++) {
    console.log(Pizza[i]) 
    
}; 
Pizza.forEach(Pizza2 =>{
    console.log(`I like ${Pizza2} !!`)
}) ; 

console.log("\nI really love pizza! Pizza is one of my favorite foods. It's delicious, versatile, and always satisfying. Whether it's classic Pepperoni, simple Margherita, or loaded Supreme, I enjoy every bite!"); 

// (task 35) 

let Animals : string[] = ["Cow", "Goat" , "Sheep" ] ; 
for (let i = 0 ; i <Animals.length  ; i++){
    console.log(Animals[i]) ;
} 
Animals.forEach(animal=> {
    console.log(`${animal} is a good livestock animal`)
});

console.log("All of these Animals are herbivore ") ; 

// (task 36) 

function make_shirt(size: string , message :string ) {
    console.log(`you have Ordered a shirt with ${size} size and has message : "${message}" on it`)
}
make_shirt("Small" , "Just Do it ") ;

// (task 37 )

function Make_shirt(Size = "large" , Message = "I Love Typescript"){
    console.log(`you have Ordered a shirt with ${Size} size and has message: "${Message}" on it`)
}
Make_shirt() ; 
Make_shirt("Medium") ;
Make_shirt("small","Pakistan Zindabad") ;

// (task 38) 

function describe_city(city:string, country = "Pakistan"){
    console.log(` ${city} is in ${country}`) ; 

}
describe_city("karachi") ; 
describe_city("lahore") ; 
describe_city("Mumbai","India")

// (task 39 )

function city_country(city:string , country: string){
    return `${city},${country}`;
    
}
console.log(city_country('"Lahore"','"Pakistan"')) ; 
console.log(city_country('"dehli"','"India"')) ;
console.log(city_country('"kabul"','"Afghanistan"')) ;

// (task 40)
function make_album(artistName:string , Title:string , tracks?:number){

  const MusicAlbum:{artistName:string , Title:string , tracks?: number }=
   {
    artistName:artistName ,
    Title:Title,

   }

   if (tracks !== undefined){
      MusicAlbum.tracks = tracks     
   }
    return MusicAlbum ;
    
}

let album1 = make_album("sajjadAali","Badal") ; 
let album2 = make_album("Ed Sheeran", "ShapeOfYou");
let album3 = make_album("ISPR","Tu Salamat Watan" , 4) ;

console.log(album1);
console.log(album2);
console.log(album3);

// (task 41 )

let Magicians : string[] = ["Ali zaman" ,"Abdul Hameed" ,"Waqar Pasha"] ; 

    function show_magicians(Magicians:string[]) {
     Magicians.forEach(names =>{
        console.log(names)
     }) 
         
    
};
show_magicians(Magicians) ;





