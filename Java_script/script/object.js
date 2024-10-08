let cat = { name: "lucky", color: "golden brown", age: 3};
let dog = new Object();
dog.breed = "husky";
dog.name = "jacky";
dog.isVaccinated = true;


document.getElementById("para1").innerHTML = "breed: " + dog.breed  +  "<br>name: " + dog["name"];
console.log(dog);
delete dog.isVaccinated;
console.log (dog);
dog.age = 5;
console.log(dog);

const person = {
    fname: "singye",
    lname: "lhadon",
    age: 20,
    fullname: function () {
        return this.fname + " " + this.lname
    }
};
document.getElementById("para1").innerHTML = person.fullname();
console.log(person);

let x = 5;
let y = "5";
document.getElementById("para1").innerHTML = x==y