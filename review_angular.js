	var app = angular.module('reviewModule',[]);

	app.controller('ReviewController',function(){
		this.question = data;
		this.currentQuestion = 1;

		this.testQuestion = function(guess){
			alert(guess === data[this.currentQuestion].correctAns);
		};

		this.nextQuestion = function(){
			if((this.currentQuestion + 1) === this.question.length){
				this.currentQuestion = 0;
			} else {
				this.currentQuestion++;
			}
		};

		this.lastQuestion = function(){
			if(this.currentQuestion - 1 < 0){
				this.currentQuestion = data.length-1;
			}else{
				this.currentQuestion--;
			}
		};

		this.randomQuestion = function(){
			randomQuestionID = RandomQuestionGenerator();
			if(this.currentQuestion === randomQuestionID){
				this.randomQuestion();
			}else{
				this.currentQuestion = randomQuestionID;
			}
			
		};


	});


	var RandomQuestionGenerator = function(){
		return Math.floor(Math.random()*data.length);
	};

	var data = [
		{
			id: 1,
		 	question: "Q1: What is Happening",
		 	answer1: "What",
		 	answer2: "Who",
		 	answer3: "Where",
		 	answer4: "Why",
		 	answer5: "How",
		 	correctAns: 3
		 },
		 {
			id: 2,
		 	question: "Q2: Why is Happening?",
		 	answer1: "I dunno",
		 	answer2: "Yes you do",
		 	answer3: "Seriously, I don't",
		 	answer4: "Why",
		 	answer5: "I dunno",
		 	correctAns: 2
		 },
		 {
			id: 3,
		 	question: "Q3: Where is Happening?",
		 	answer1: "I know",
		 	answer2: "NO you don't",
		 	answer3: "Seriously, I do",
		 	answer4: "Why",
		 	answer5: "I dunno",
		 	correctAns: 1
		 }
		 ];

