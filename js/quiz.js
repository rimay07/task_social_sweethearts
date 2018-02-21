let Quiz = function(){};

Quiz.prototype = {
	constructor: Quiz,
	
	//Dynamically change the question when the user interacts with the game
	getNextQuestion:function(quiz){
		questionElem = document.getElementById("question");
		btn = document.getElementById("nextBTN");
		content = document.getElementById("content");
		
		if(tempValue !== null) {
			calculateScore(tempValue);
			tempValue = null;
		}else if(tempValue == null && counter != 0 && (btn.value != "Play Again")){
			alert('Please make a selection');
			return;
		}else if(btn && (btn.value == "Play Again")){
			location.reload();
			return;
		}
		
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

//Fill up the selection options
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

//Adds click handler to each element and changes the appearance 
//base on the selected value
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
			items[listIdx].style.color = "#FFFFFF";
			if (items[listIdx] === elem) {
				items[listIdx].style.backgroundColor = "#b0a527";
				items[listIdx].style.color = "#7e7618";
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
	if(animalObj == null || animalObj.length == 0){
		finalScore();
		return;
	}
	btn.style.display = "none";
	content.innerHTML = "<div id='animalType'></div>" +
						"<div id='totalScore'></div>" +
						"<div id='message' onclick='showMessage()'></div>";
	questionElem.innerHTML = "You have an appetite equal to: ";
	displayResults();
}

//Displays final result on the screen
function displayResults(){
	var animal = document.getElementById('animalType');
	var score = document.getElementById('totalScore');
	var message = document.getElementById('message');
	var scoreTab = 0;
	for (var b = 0; b < answers.totalScore; b++){
		var timer = setTimeout(function(){
				score.innerHTML = scoreTab;
				scoreTab++;
				
				if (scoreTab == answers.totalScore){
					animal.innerHTML = "<img id='animalImg' src='" + animalObj[0].imageURL + "'>" ;
					message.innerHTML = "Click " + animalObj[0].messageLink;
					score.innerHTML += " " + animalObj[0].type + "s";
					btn.style.display = "block";
					btn.value = "Play Again";
				}
			}, b*50, b)
	}
}

function showMessage(){
	alert(animalObj[0].message);
}
	