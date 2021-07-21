const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// const studentCopy = {...student}
// const studentCopy2 = {...student, scores: {...student.scores}}
// const studentCopy3 = {
//     ...student
//     scores: { ...student.scores },
//     goodstudent: true,
// }
// console.log(student, studentCopy, studentCopy2, studentCopy3);

//Analyse the code below. Display the type of each rabbit and make them speak
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
console.log(killerRabbit.type,blackRabbit.type);
killerRabbit.speak("hi there!");
blackRabbit.speak("lol");