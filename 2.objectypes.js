//objects in javascript
//creating object with new key word
var object1=new Object();
//creating object with object literals
var object2={};
//creating object with Object,create
var object3= Object.create(null);
//creating object with contructor fun
function Employee(){

}
var object4=new Employee();
//by object literals

var obj1 = {
	id:1
};
obj1["name"] ="usha";
obj1.city="hyderabad";
Object.defineProperty(obj1,'state', {value:'telangana'})
Object.defineProperty(obj1,'pincode',{value:'500061'})

delete obj1.city;
console.log(obj1)
/*console.log(obj1)

var obj2 = Object.create(obj1)
console.log(obj2)

 function Person(){
}

var obj3 = new Person();
console.log(obj3)*/
//allow to modify and delete existing but cannot add new property
var person1 = {name:"john",age:'25'}
person1.city="hyderabad";
Object.preventExtensions(person1)

delete person1.age
person1.age=20;
person1.name="john gault";

//allow to modify  existing but cannot add or delete  property
var person2 = {name:"john",age:'25'}
person2.city="hyderabad";
Object.seal(person2)

delete person2.age
person2.id=20;
person2.name="john deo";
/*console.log(person2)*/

//cannot modify delete add property
var person3 = {name:"john",age:'25'}
person3.city="hyderabad";
Object.freeze(person3)

delete person3.age
person3.id=20;
person3.name="john deo";
console.log(person3)

//adding peroperties and methods to object

var person={
	firstName :'john',
	lastName:'deo',
	fullName : function(){
		return this.firstName + " , "+this.lastName;
	}
}

console.log(person.fullName() + "  "+person.firstName)

var Employee ={
	name:"usha",
	email:"usha@gmail.com",
	mobile:"9090897865",
	id:1,
	salary:"1000"
}

var keys = Object.keys(Employee);
console.log(keys)

var value = Object.values(Employee)
console.log(value)

console.log(keys[0] + ":"+value[0])