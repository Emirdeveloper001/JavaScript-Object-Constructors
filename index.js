var me = { name: "Emir", age: "20", job: "programmer" };
// console.log(me);
console.log(me.name);

function Person(name, family, age, job) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.job = job;
}
var Michael = new Person("Michael", "scofield", "33", "Engineer");
console.log(Michael);