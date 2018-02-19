var Answers = function (){
	this.score = 0;
	this.quizScores = [];
}

Answers.prototype = {
	constructor: Answers,
	
	getScore:function(min, max){
		this.quizScores.push(Math.floor(Math.random() * max) + min);
	},
	
	addScore:function(){
		var scores = (this.quizScores.length > 0)? this.quizScores.reduce() : "No score yet";
		return scores;
	}
}