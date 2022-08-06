"use strict";
const pessoa = {
    name: "Mariana",
    age: 28,
    job: "developer"
};
const andre = {
    name: "Andre",
    age: 25,
    job: "painter"
};
const paula = {
    name: "Andre",
    age: 25,
    job: "developer"
};
var PossibleJobs;
(function (PossibleJobs) {
    PossibleJobs[PossibleJobs["Professor"] = 0] = "Professor";
    PossibleJobs[PossibleJobs["Actress"] = 1] = "Actress";
    PossibleJobs[PossibleJobs["Developer"] = 2] = "Developer";
    PossibleJobs[PossibleJobs["SoccerPlayer"] = 3] = "SoccerPlayer";
})(PossibleJobs || (PossibleJobs = {}));
const vanessa = {
    name: "Vanessa",
    age: 27,
    job: PossibleJobs.Developer
};
const jessica = {
    name: "Jessica",
    age: 28,
    job: PossibleJobs.Developer,
    courses: ["Math", "Programming", "Psichology"]
};
const maria = {
    name: "Maria",
    age: 20,
    job: PossibleJobs.Developer
};
const monica = {
    name: "monica",
    age: 28,
    courses: ["Programming", "Psichology", "Philosophy"]
};
function listCourses(list) {
    for (let course of list) {
        console.log("- " + course);
    }
}
listCourses(monica.courses);
