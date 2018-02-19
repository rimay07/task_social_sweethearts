var Quiz = function(){};

Quiz.prototype = {
	constructor: Quiz,
	
	getNextQuestion:function(quiz){
		var question = document.getElementById("question");
		var button  = document.getElementById("nextBTN");
		button.value = "Next";
		if(counter >= quiz.length){
			alert(counter);
			return;
		}else {
			if (counter == quiz.length -1){
				button.value = "Calculate";
			}
			question.innerHTML = quiz[counter].question;
			populateSelection(quiz, counter);
			counter ++;
		}
	}
}

function populateSelection(quiz, counter){
	var content = document.getElementById("content");
	var html = "";
	var options = quiz[counter].options;
	for (prop in options){
		html += "<input type='radio' name='testAnswers' value='" + options[prop].range.min + ", " + options[prop].range.max  + "'>" + options[prop].answer + "<br>";
	}
	html += ""
	content.innerHTML = html;
}
