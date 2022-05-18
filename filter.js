let users = [
    { firstName: 'John', age: 14 },
    { firstName: 'Doe', age: 16 },
    { firstName: 'Dek', age: 56 },
    { firstName: 'Sam', age: 64 },
    { firstName: 'David', age: 56 },
    { firstName: 'Nails', age: 65 },
]
// for young people
const youngPeople = users.filter(user => {
    return user.age <= 15
}
);
// for old people
const oldPeople = users.filter(user => {
    return user.age >= 50
}
);
console.log(youngPeople);
console.log(oldPeople);

// #. The filter() method creates a new array filled with elements that pass a test provided by a function.

// #. The filter() method does not execute the function for empty elements.

// # .The filter() method does not change the original array.