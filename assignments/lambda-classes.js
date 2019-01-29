// CODE here for your Lambda Classes
class Person {
	constructor(traits) {
		this.name = traits.name;
	    this.age = traits.age;
	    this.location = traits.location;
	    this.gender = traits.gender;
	}

	speak() {
		console.log(`Hello my name is ${this.name} I am from ${this.location}`);
	}
}

class Instructor extends Person {
	constructor(traits) {
		super(traits);
		this.specialty = traits.specialty;
	    this.favLanguage = traits.favLanguage;
	    this.catchPhrase = traits.catchPhrase;
	}

	demo(subject) {
    	console.log(`Today we are learning about ${subject}`);
  	}

  	grade(student, subject) {
    	console.log(`${student.name} receives a perfect score on ${subject}`);
  	}
}

class Student extends Person {
  constructor(traits) {
    super(traits);
    this.previousBackground = traits.previousBackground;
    this.className = traits.className;
    this.favSubjects = traits.favSubjects;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(`${this.name} <3's ${this.favSubjects[i]}`);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} begins working hard on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(traits) {
    super(traits);
    this.gradClassName = traits.gradClassName;
    this.favInstructor = traits.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const aaron = new Instructor({
  name: 'Aaron',
  location: 'Austin',
  age: 22,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Servers',
  catchPhrase: `Get this done!`
});

const james = new Student({
  name: 'James',
  location: 'Seattle',
  age: 21,
  gender: 'male',
  previousBackground: 'Comp Sci Student',
  className: 'WEBPT4',
  favSubjects: ['Python', 'C', 'JavaScript']
});

const joe = new ProjectManager({
  name: 'Joe',
  location: '???',
  age: 20,
  gender: 'male',
  gradClassName: 'WEBFT#',
  favInstructor: '???',
  favLanguage: '???',
  specialty: '???',
  catchPhrase: 'Good job!'
});

fred.speak();
fred.grade(james, 'python')
james.speak();
james.listsSubjects();
james.sprintChallenge('JavaScript');
joe.speak();
joe.demo('python');
joe.debugsCode(james, 'JavaScript');