// (task 45)

type car = { 
    manufacturer : string , 
    modelName : string , 
    [key : string] : any , 
}

function Mycar (manufacturer:string , modelName : string , optional : Record<string,any>) : car {
    return{
        manufacturer,
        modelName, 
        ...optional
    }
}

let Car1 = Mycar("Toyota" , "Prius" , {color : "red" , OptionalFeature : "MoreAirbags" }) ; 
console.log(Car1) ;