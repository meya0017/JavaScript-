
let person = {
    name:"Sumeya",
    Age: 24,
    city: "Nairobi"
}

for (const key in person) {
    console.log("the key is"+" "+ key + " "+"and the value is"+" "+person[key]);
}