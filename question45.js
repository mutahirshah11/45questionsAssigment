// (task 45)
function Mycar(manufacturer, modelName, optional) {
    return {
        manufacturer,
        modelName,
        ...optional
    };
}
let Car1 = Mycar("Toyota", "Prius", { color: "red", OptionalFeature: "MoreAirbags" });
console.log(Car1);
export {};
