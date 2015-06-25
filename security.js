var securityQuestions = [{question:"What was your first pet's name?", expectedAnswer:"FlufferNutter"},{question:"What is Pat's last name", expectedAnswer:"Smith"}, {question:"What is Pat's middle name?", expectedAnswer:"Michael"}]


for (var i = 0 ; i <= securityQuestions.length - 1; i++) {
	var ask = prompt(securityQuestions[i].question)
	if(ask !== securityQuestions[i].expectedAnswer) {
		alert("done")
		break
	} 
};
