var person1 ={name:"john",age:28}
var person2 = {name:"deo",age:34}

function sayHello(message,wish){
	return message + " ::"+this.name + " "+this.age+" "+wish
}

var msg1 = sayHello.bind(person1)
console.log(msg1("Hello"))

var msg2 = sayHello.bind(person2)
console.log(msg2("Hello"))

var msg3 = sayHello.call(person2,"Heloo")
console.log(msg3)
var msg4 = sayHello.apply(person1,["Heloo","Be Happy"])
console.log(msg4)
