const pessoa = {
    name: "Mariana",
    age: 28,
    job: "developer"
}

const andre: {name: string, age: number, job: string} = {
    name: "Andre",
    age: 25,
    job: "painter"
}

const paula: {name: string, age: number, job: string} = {
    name: "Andre",
    age: 25,
    job: "developer"
}

enum PossibleJobs {
    Professor,
    Actress,
    Developer,
    SoccerPlayer
}

interface Person {
    name: string,
    age: number,
    job?: PossibleJobs
}

interface Student extends Person {
    courses: string[]
}

const vanessa: Person = {
    name: "Vanessa",
    age: 27,
    job: PossibleJobs.Developer
}

const jessica: Student = {
     name: "Jessica",
     age: 28,
     job: PossibleJobs.Developer,
     courses: ["Math", "Programming", "Psichology"]
}

const maria: Person = {
    name: "Maria",
    age: 20,
    job: PossibleJobs.Developer
}

const monica: Student = {
    name: "monica",
    age: 28,
    courses: ["Programming", "Psichology", "Philosophy"]
}

function listCourses(list: string[]) {
    for (let course of list) {
        console.log("- " + course)
    }
}

listCourses(monica.courses)