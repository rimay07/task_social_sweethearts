let Quiz = function(){};

Quiz.prototype = {
	constructor: Quiz,
	
	getNextQuestion:function(quiz){
		if(tempValue !== null) {
			calculateScore(tempValue);
			tempValue = null;
		}else if(tempValue == null && counter != 0){
			alert('Please make a selection');
			return;
		}
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
	var html = "<ul id='selection'>";
	options = quiz[counter].options;
	Object.keys(options).forEach(function(prop){
		html += "<li>" + options[prop].answer + "</li>";
	})
	html += "</ul>"
	content.innerHTML = html;
	addClickListener();
}

function addClickListener(){
	var selectionList = document.getElementById("selection");
    var items = selectionList.getElementsByTagName("li");

	selectionList.addEventListener("click", function(e) {
		var evt = e || window.event,
		src = evt.target || evt.srcElement;
		var idx = findIndex(src);
		getScore(idx);
	});

	function findIndex( elem ) {
		var len = items.length; 
		var listIdx = 0;
		var selectedIdx = 0;
		for(listIdx; listIdx < len; listIdx++) {
			items[listIdx].style.backgroundColor = "#7e7618";
			if (items[listIdx] === elem) {
				items[listIdx].style.backgroundColor = "#b0a527";
				selectedIdx = listIdx;
			}
		}
		return selectedIdx;
	}
}

function getScore(idx){
	var keys = Object.keys( options );
	var rangeObj = new Object();
	rangeObj.min = options[keys[idx]].range.min;
	rangeObj.max = options[keys[idx]].range.max;
	tempValue = rangeObj;
}

function calculateScore(range){
	answers.getScore(range.min, range.max);
}

function finalScore(){
	answers.totalScore = Math.round(answers.addScore());
	animalObj = animal.calculateAnimal();
	btn.style.display = "none";
	content.innerHTML = "<div>" + animalObj[0].type + "</div>" +
						"<div>" + animalObj[0].message + "</div>" +
						"<div>" + answers.totalScore + "</div>";
}
	