var userLogin = {
	name: "Tim",
	password: "boo",
}

var responseName = prompt("enter name") 
	console.log("responseName")

if (responseName !== userLogin.name) {
 	alert("wrong user name") 
 } else {
 	var responsePassword = prompt("enter password") 
 	if (responsePassword !== userLogin.password) {
 		alert("wrong password") 
 	} else {
 		console.log("Welcome")
 	};
 }
