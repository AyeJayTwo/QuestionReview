var app = angular.module('reviewModule',[]);

test_data = [];
data = [];

// var questionParser=function(datum){
// 	for(i=0; i < datum.length; i++){
// 		data = [];
// 		data.push(
// 		{
// 			question: datum[i].attributes.question,
// 			answers: datum[i].attributes.answers,
// 			correctAns: datum[i].attributes.correctAns
// 		}
// 		)
// 	}
// 	alert('Finished Parsing Data ' + data.length);
// }


// var getQuestions = function(questionParser){
// 	Parse.initialize("u5jBWTYJkgmfrJMvIsMloaJkeBTRReHuWH7x1ynJ", "D5rcBMkBVj1ecPOTq0SVC3oiohxu7lvApmt1rmna");
// 	var QuestionClass = Parse.Object.extend("QuestionClass");
// 	var questions = new Parse.Query(QuestionClass);
// 	questions.find({
// 		success: function(results){
// 			alert("Successfully retrieved " + results.length + " questions.");
// 				//console.log(results);
// 				test_data = results;
// 				console.log(test_data);
// 				this.questionParser(test_data);
// 			},
// 			error: function(error) {
// 				alert("You fucked up");
// 			}
// 		});
// 		//console.log($scope.test_data);
// 		questionParser(test_data);
// 	}


	app.controller('ReviewController',['$scope', function($scope){

		this.questionsLoaded = false;

		$scope.test_data = [];
		var review = this;

		if(data){this.question = data;}
		this.currentQuestion = 1;

		this.questionParser=function(datum){
			for(i=0; i < datum.length; i++){
				data.push(
				{
					question: datum[i].attributes.question,
					answers: datum[i].attributes.answers,
					correctAns: datum[i].attributes.correctAns
				}
				)
			}
			alert('Finished Parsing Data ' + data.length);
			review.questionsLoaded = true;
			alert(review.questionsLoaded);
		}


		this.getQuestions = function(questionParser){
			Parse.initialize("u5jBWTYJkgmfrJMvIsMloaJkeBTRReHuWH7x1ynJ", "D5rcBMkBVj1ecPOTq0SVC3oiohxu7lvApmt1rmna");
			var QuestionClass = Parse.Object.extend("QuestionClass");
			var questions = new Parse.Query(QuestionClass);
			questions.find({
				success: function(results){
					alert("Successfully retrieved " + results.length + " questions.");
				//console.log(results);
				$scope.test_data = results;
				console.log($scope.test_data);
				review.questionParser($scope.test_data);
			},
			error: function(error) {
				alert("You fucked up");
			}
		});
		//console.log($scope.test_data);
		//this.questionParser($scope.test_data)
	}

	this.getQuestions();

	this.testQuestion = function(guess){
		alert(guess === (data[this.currentQuestion].correctAns));
		console.log(guess);
	};

	this.nextQuestion = function(){
		if((this.currentQuestion + 1) === this.question.length){
			this.currentQuestion = 0;
		} else {
			this.currentQuestion++;
		}
		// this.getQuestions();
	};

	this.lastQuestion = function(){
		if(this.currentQuestion - 1 < 0){
			this.currentQuestion = data.length-1;
		}else{
			this.currentQuestion--;
		}
		// this.questionParser($scope.test_data);
	};

	this.randomQuestion = function(){
		randomQuestionID = RandomQuestionGenerator();
		if(this.currentQuestion === randomQuestionID){
			this.randomQuestion();
		}else{
			this.currentQuestion = randomQuestionID;
		}
	};

	var RandomQuestionGenerator = function(){
	return Math.floor(Math.random()*data.length);
};


}]); //End ReviewController



// data = [
// {
// 	question: "Q1: What is Happening",
// 	answers: ["What","Who","Where","Why","How"],
// 	correctAns: 2
// },
// {
// 	question: "Q2: Why is Happening?",
// 	answers: ["I dunno","Yes you do","Seriously, I don't","Why","meh"],
// 	correctAns: 1
// },
// {
// 	question: "Q3: Where is Happening?",
// 	answers: ["I know", "NO you don't", "Seriously, I do","Why","I dunno"],
// 	correctAns: 0
// }
// ];