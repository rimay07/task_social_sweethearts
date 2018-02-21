//Model object will contain the questions and animal array. 
//This is a scalable model that can be adjusted in size.
let Model = function(){
	this.questions = [
		{
			"question" : "When eating in a buffet what do you eat first?",
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
			"messageLink" : "CLAM Message",
			"message" : "Oh boy ... you eat a lot and all the time!\nJust like the clams who are bottom feeders\nand who eats everything in motion in the water,\nsaying NO to food is not an option! ",
			"imageURL" : "images/clam.png"
		},
		{
			"type": "eagle",
			"range": {
						"min": 21,
						"max": 40
					},
			"messageLink" : "EAGLE Message",
			"message" : "You can be opportunistic when eating \n- like you love to avail of all buy one take one food, \neat all you can and you love eating for free!",
			"imageURL" : "images/eagle.png"
		},
		{
			"type": "bat",
			"range": {
						"min": 41,
						"max": 60
					},
			"messageLink" : "BAT Message",
			"message" : "You are a picky eater!  \nJust like the bats who have specific diet, you have a \ntendency to stick to 1 diet like be a vegan, \nvegetarian or meat eater.",
			"imageURL" : "images/bat.png"
		},
		{
			"type": "monkey",
			"range": {
						"min": 61,
						"max": 80
					},
			"messageLink" : "MONKEY Message",
			"message" : "You are the healthiest of all \neating small quantities of healthy food like nuts, fruits, vegetables!",
			"imageURL" : "images/monkey.png"
		},
		{
			"type": "pig",
			"range": {
						"min": 81,
						"max": 100
					},
			"messageLink" : "PIG Message",
			"message" : "Food is life!  \nYou are never a picky eater because just like the pig, \nyou will eat everything in sight. ",
			"imageURL" : "images/pig.png"
		}
	];
}