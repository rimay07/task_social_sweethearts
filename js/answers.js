let Answers = function (){
	this.quizScores = [];
	this.totalScore = 0;
}

Answers.prototype = {
	constructor: Answers,
	
	//Get the scores from each selection and pushes the scores to the array
	getScore:function(min, max){
		let score = Math.floor(Math.random() * (max - min + 1)) + min;
		this.quizScores.push(score);
	},
	
	//Get the total score at the end of the game
	addScore:function(){
		let reducer = (total, currValue) => total + currValue;
		let scores = (this.quizScores.length > 0)? this.quizScores.reduce(reducer) : "No score yet";
		return scores/this.quizScores.length;
	}
}