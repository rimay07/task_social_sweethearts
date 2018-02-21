let Animal = function(){
	this.type = "";
	this.message = "";
}

Animal.prototype = {
	constructor: Animal,
	calculateAnimal:function(){
		var obj = animals.map(seekAnimalType).filter(function(n){ return n != undefined });
		return obj;
	}
};

//Find animal associated with the result
function seekAnimalType(ani){
	let min = ani.range.min;
	let max = ani.range.max;
	if(answers.totalScore > min && answers.totalScore < max){
		let animalObject = new Object();
		animalObject.type = ani.type;
		animalObject.messageLink = ani.messageLink;
		animalObject.message = ani.message;
		animalObject.imageURL = ani.imageURL;
		return animalObject;
	};
}