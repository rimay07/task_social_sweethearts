var Quiz = function(){};

Quiz.prototype = {
	constructor: Quiz,
	
	getNextQuestion:function(quiz){
		if(tempValue !== null) calculateScore(tempValue);
		var question = document.getElementById("question");
		var btn  = document.getElementById("nextBTN");
		btn.value = "Next";
		if(counter >= quiz.length){
			alert(Math.round(answers.addScore()));
			var content = document.getElementById("content");
			btn.style.display = "none";
			content.innerHTML = "";
			return;
		}else {
			if (counter == quiz.length -1){
				btn.value = "Calculate";
			}
			question.innerHTML = quiz[counter].question;
			populateSelection(quiz, counter);
			counter ++;
		}
	}
}

var tempValue = null;

function populateSelection(quiz, counter){
	var content = document.getElementById("content");
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
	