import './lesson_13.scss';


const fruites = [
   'oranges',
   'bananas',
   'apples'
];

fruites.push('tomatoes');
fruites.pop();


// // es6
class Persone {
    constructor(firstName, secondName, email, age) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.newField = 'humans';
        this.age = age;
    }

    greet() {
        return this._createGreetPhrase();
    }

    _createGreetPhrase() {
        return `Hello my name is ${this.firstname} ${this.secondName}`;
    }
}

class Developer extends Persone {
    constructor(firstName, secondName, email, age, lang) {
        super(firstName, secondName, email, age);
        this.lang = lang;
    }

    code() {
        console.log('Write code on' + this.lang);
    }
}

// Object
const users = [
    new Persone('Vasya', 'Ivanov', 'vasya@gmail.com', 20),
    new Developer('Jack', 'Daniel', 'vasya@gmail.com', 20, 'js'),
    new Persone('John', 'Snow', 'vasya@gmail.com', 20),
    new Developer('Tony', 'Smith', 'vasya@gmail.com', 20),
];

console.log(users[0]);

window.user = users[0];
window.user1 = users[1];

const body = document.querySelector('body');

for(const user of users) {
    const div  = document.createElement('div');
    div.innerHTML = `<h4>${user.greet()}</span>`
    body.appendChild(div);
}





