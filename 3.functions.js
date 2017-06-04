/**** Creating Functions **************/
/**********Self Invoking Function **********/

(function employee(message){
	console.log("new Hello world"+message)
})("Slef invoking message")



/**** Regular Functions **************/
function hello(){
	console.log("hello world")
	return "Hello........";
}

console.log(hello())

/*********Anonomyos function************/

var helloNew = function(){
	return "Good Morning"
}

console.log(helloNew())


/*************Constructor function ********/
function Person (name,age){
	this.name = name;
	this.age = age;
	
}

Person.prototype.details = function(){
	return this.name + " " +this.age
}

var newPerson = new Person("usha",25);
console.log(newPerson.name+ " "+newPerson.age+newPerson.details())

var newPerson = new Person("alekya",28);
console.log(newPerson.name+ " "+newPerson.age+newPerson.details())


