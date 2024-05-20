// (task 42 )
let Magicians : string[] = ["Ali zaman" ,"Abdul Hameed" ,"Waqar Pasha"] ; 

    function show_magicians(magicians:string[]) {
     Magicians.forEach(names =>{
        console.log(names)
     })  
         
    }

function make_great(magicianArray:string[]){
    for (let i=0 ; i <Magicians.length ; i++) {
        Magicians[i] = "The Great Magician" +" "+ magicianArray[i]  
    }
}

    
 make_great(Magicians) ;
show_magicians(Magicians)
