let users = [
    { firstName: 'John', lastName: 'Sina', age: 21, hobby: 'singing' },
    { firstName: 'Faysal', lastName: 'Mahmud', age: 24, hobby: 'football' },
    { firstName: 'Ji', lastName: 'Smith', age: 21, hobby: 'singing' },
]

let singleUser = users.map((user) => {
    let fullName = user.firstName + ' ' + user.lastName;

    return `
        <h3>${fullName}</h3>
        <p>${user.age}</P>
    `
})

// #. map()সর্বদা একটি নতুন অ্যারে প্রদান করে, এমনকি যদি এটি একটি খালি অ্যারে হয়।
// #. এটি ফিল্টার পদ্ধতির তুলনায় মূল অ্যারের আকার পরিবর্তন করে না
// #. একটি নতুন তৈরি করার সময় এটি সর্বদা আপনার মূল অ্যারে থেকে মান ব্যবহার করে।





