let foundDogs = [{
    breed: "Beagle", color: "white"
},

{
    breed: "Chihuahua", color: "yellow"
},

{
    breed: "Pug", color: "black"
},
]

let myDog = foundDogs.find(dog => {
    return dog.breed === "Chihuahua"
});

console.log(myDog);
