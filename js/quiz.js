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
			counter ++;
		}
	}
}
