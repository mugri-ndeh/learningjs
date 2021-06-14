const student = {
    name: "Maestro",
    matricule: "Chrome",
    age: 20,
    address:"Street 8",
    greet: function(){
        console.log("Hello "+student["name"]);
    }
};
 student.greet();

 function Student(name, matricule, sex, age, address) {
     this.name = name;
     this.matricule = matricule;
     this.sex = sex;
     this.age = age;
     this.address = address;
}

const student1 = new Student("Mugri", "FE19A042", "M", 20, "Street 8");

console.log(typeof(student1));
console.log(student1.name);
console.log(student1.matricule);
console.log(student1.sex);
console.log(student1.age);
console.log(student1.address);