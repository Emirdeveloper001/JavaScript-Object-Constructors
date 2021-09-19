var me = { name: "Emir", age: "20", job: "programmer" };
// console.log(me);
console.log(me.name);

function Person(name, family, age, job) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.job = job;
}
var Michael = new Person("Michael", "Scofield", "33", "Engineer");
var Lincoln = new Person("Lincoln", "Borrows", "37", "killer");
//  yeah Im a prison break fan ! :)
console.log(Michael);
console.log(Lincoln);