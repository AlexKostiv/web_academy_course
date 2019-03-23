import './lesson_13.scss';


const fruites = [
	'oranges',
	'bananas',
	'apples'
];

fruites.push('tomatoes');
fruites.pop();


// es6
class User {
	constructor(firstName, secondName, email, age) {
		this.firstName = firstName;
		this.secondName = secondName;
		this.email = email;
		this.newField = 'humans';
		this.age = age;
	}

	greet() {
		return `Hello my name is ${this.firstname} ${this.secondName}`;
	}

	test() {
		console.log('Hello world');
	}
}

// Object
const users = [
	new User('Vasya', 'Ivanov', 'vasya@gmail.com', 20),
	new User('Jack', 'Daniel', 'vasya@gmail.com', 20),
	new User('John', 'Snow', 'vasya@gmail.com', 20),
	new User('Tony', 'Smith', 'vasya@gmail.com', 20),
];
const body = document.querySelector('body');

for(const user of users) {
	const div  = document.createElement('div');
	div.innerHTML = `<h4>${user.greet()}</span>`
	body.appendChild(div);
}