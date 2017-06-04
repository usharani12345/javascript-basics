function hello(message){
	return function(firstName,lastName){
		console.log("Good Morning")
		return message+" "+firstName + " "+lastName
	}
}

var sendWish = hello("How r u");
console.log(sendWish())
console.log(sendWish("usha","rani"))