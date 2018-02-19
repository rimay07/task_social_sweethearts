var Answers = function (){
	this.quizScores = [];
}

Answers.prototype = {
	constructor: Answers,
	
	getScore:function(min, max){
		var score = Math.floor(Math.random() * max) + min;
		this.quizScores.push(score);
	},
	
	addScore:function(){
		var reducer = (total, currValue) => total + currValue;
		var scores = (this.quizScores.length > 0)? this.quizScores.reduce(reducer) : "No score yet";
		return scores/this.quizScores.length;
	}
}