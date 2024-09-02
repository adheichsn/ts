// enum types
enum Role {
    ADMIN,
    AUTHOR,
    READ_ONLY
}

const person = {
    name: 'Adhe',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) error!!
}

if(person.role == Role.AUTHOR) {
    console.log('is author');
}