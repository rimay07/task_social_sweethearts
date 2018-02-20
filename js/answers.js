let Answers = function (){
	this.quizScores = [];
	this.totalScore = 0;
}

Answers.prototype = {
	constructor: Answers,
	
	getScore:function(min, max){
		let score = Math.floor(Math.random() * (max - min + 1)) + min;
		this.quizScores.push(score);
	},
	
	addScore:function(){
		let reducer = (total, currValue) => total + currValue;
		let scores = (this.quizScores.length > 0)? this.quizScores.reduce(reducer) : "No score yet";
		return scores/this.quizScores.length;
	}
}