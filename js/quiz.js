let Quiz = function(){};

Quiz.prototype = {
	constructor: Quiz,
	
	getNextQuestion:function(quiz){
		if(tempValue !== null) calculateScore(tempValue);
		questionElem = document.getElementById("question");
		btn = document.getElementById("nextBTN");
		content = document.getElementById("content");
		btn.value = "Next";
		if(counter >= quiz.length){
			finalScore();
			return;
		}else {
			if (counter == quiz.length -1){
				btn.value = "Calculate";
			}
			questionElem.innerHTML = quiz[counter].question;
			populateSelection(quiz, counter);
			counter ++;
		}
	}
}

let tempValue = null
let animalObj;

function populateSelection(quiz, counter){
	var html = "";
	var options = quiz[counter].options;
	for (prop in options){
		html += "<input type='radio' name='testAnswers' onclick='getScore(this.value)' value='" + options[prop].range.min + ", " + options[prop].range.max  + "'>" + options[prop].answer + "<br>";
	}
	html += ""
	content.innerHTML = html;
}

function getScore(val){
	tempValue = val;
}

function calculateScore(tmp){
	var range = tmp.split(',');
	answers.getScore(parseInt(range[0]), parseInt(range[1]));
}

function finalScore(){
	answers.totalScore = Math.round(answers.addScore());
	animalObj = animal.calculateAnimal();
	btn.style.display = "none";
	content.innerHTML = "<div>" + animalObj[0].type + "</div>" +
						"<div>" + animalObj[0].message + "</div>" +
						"<div>" + answers.totalScore + "</div>";
}
	