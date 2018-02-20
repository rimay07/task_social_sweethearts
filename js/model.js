let Model = function(){
	this.questions = [
		{
			"question" : "When eating in a buffet do you eat first?",
			"options" : {
				"a" : {
					"answer":"salad",
					"range": {
						"min": 0,
						"max": 25
					}
				},
				"b" : {
					"answer":"pasta",
					"range": {
						"min": 26,
						"max": 50
					}
				},
				"c" : {
					"answer":"seafood",
					"range": {
						"min": 51,
						"max": 75
					}
				},
				"d" : {
					"answer":"steak and grill",
					"range": {
						"min": 76,
						"max": 100
					}
				}
			}
		},
		{
			"question" : "When you are sick with fever what do you want to eat?",
			"options" : {
				"a" : {
					"answer":"soup",
					"range": {
						"min": 0,
						"max": 25
					}
				},
				"b" : {
					"answer":"fruits",
					"range": {
						"min": 26,
						"max": 50
					}
				},
				"c" : {
					"answer":"hamburger and fries",
					"range": {
						"min": 51,
						"max": 75
					}
				},
				"d" : {
					"answer":"dimsum",
					"range": {
						"min": 76,
						"max": 100
					}
				}
			}
		},
		{
			"question" : "What spicy condiment do you go for?",
			"options" : {
				"a" : {
					"answer":"hot sauce",
					"range": {
						"min": 0,
						"max": 25
					}
				},
				"b" : {
					"answer":"chili oil",
					"range": {
						"min": 26,
						"max": 50
					}
				},
				"c" : {
					"answer":"wasabe",
					"range": {
						"min": 51,
						"max": 75
					}
				},
				"d" : {
					"answer":"ghost pepper",
					"range": {
						"min": 76,
						"max": 100
					}
				}
			}
		},
		{
			"question" : "What is your all time favorite snack?",
			"options" : {
				"a" : {
					"answer":"cereals and nuts",
					"range": {
						"min": 0,
						"max": 25
					}
				},
				"b" : {
					"answer":"chips and salsa",
					"range": {
						"min": 26,
						"max": 50
					}
				},
				"c" : {
					"answer":"donuts",
					"range": {
						"min": 51,
						"max": 75
					}
				},
				"d" : {
					"answer":"pizza",
					"range": {
						"min": 76,
						"max": 100
					}
				}
			}
		},
		{
			"question" : "What unlimited drink will you go for?",
			"options" : {
				"a" : {
					"answer":"bottomless ice tea or lemonade",
					"range": {
						"min": 0,
						"max": 25
					}
				},
				"b" : {
					"answer":"milkshake or fruit shake",
					"range": {
						"min": 26,
						"max": 50
					}
				},
				"c" : {
					"answer":"beer, beer and more beer",
					"range": {
						"min": 51,
						"max": 75
					}
				},
				"d" : {
					"answer":"cocktails",
					"range": {
						"min": 76,
						"max": 100
					}
				}
			}
		},
		{
			"question" : "What food will you bring in a potluck?",
			"options" : {
				"a" : {
					"answer":"apple pie and sundae",
					"range": {
						"min": 0,
						"max": 25
					}
				},
				"b" : {
					"answer":"lasagna",
					"range": {
						"min": 26,
						"max": 50
					}
				},
				"c" : {
					"answer":"bucket of chicken",
					"range": {
						"min": 51,
						"max": 75
					}
				},
				"d" : {
					"answer":"smoked ribs",
					"range": {
						"min": 76,
						"max": 100
					}
				}
			}
		},
		{
			"question" : "What is your dessert?",
			"options" : {
				"a" : {
					"answer":"candies and jellies",
					"range": {
						"min": 0,
						"max": 25
					}
				},
				"b" : {
					"answer":"fresh fruits",
					"range": {
						"min": 26,
						"max": 50
					}
				},
				"c" : {
					"answer":"ice cream",
					"range": {
						"min": 51,
						"max": 75
					}
				},
				"d" : {
					"answer":"cake and pastries",
					"range": {
						"min": 76,
						"max": 100
					}
				}
			}
		}
	];
	
	this.animals = [
		{
			"type": "clam",
			"range": {
						"min": 0,
						"max": 20
					},
			"message" : "Clam message",
			"image" : "../images/clam.png";
		},
		{
			"type": "eagle",
			"range": {
						"min": 21,
						"max": 40
					},
			"message" : "Eagle message",
			"image" : "../images/eagle.png";
		},
		{
			"type": "bat",
			"range": {
						"min": 41,
						"max": 60
					},
			"message" : "Bat message",
			"image" : "../images/bat.png";
		},
		{
			"type": "tamaraw",
			"range": {
						"min": 61,
						"max": 80
					},
			"message" : "Tamaraw message",
			"image" : "../images/tamaraw.png";
		},
		{
			"type": "pig",
			"range": {
						"min": 81,
						"max": 100
					},
			"message" : "Pig message",
			"image" : "../images/pig.png";
		}
	];
}