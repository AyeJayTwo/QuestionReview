var app = angular.module('questionModule',[]);

function questionButton(ans) {
			//Initialize the Parse API
			Parse.initialize("u5jBWTYJkgmfrJMvIsMloaJkeBTRReHuWH7x1ynJ", "D5rcBMkBVj1ecPOTq0SVC3oiohxu7lvApmt1rmna");

        	//Create Question Class, with attributes for question and several answers
        	var QuestionClass = Parse.Object.extend("QuestionClass");
        	var questionClass = new QuestionClass();
        	questionClass.set("question",document.questions.question.value);
        	questionClass.set("answers",[
                document.questions.answer1.value,
                document.questions.answer2.value,
                document.questions.answer3.value,
                document.questions.answer4.value,
                document.questions.answer5.value]);
        	questionClass.set("correctAns",ans); //correctAns is an index value of the answers

		// Save the Question to the CLoud
		questionClass.save(null, {	success: function(questionClass) {
    // Execute any logic that should take place after the object is saved.
    //alert('New object created with objectId: ' + questionClass.id);
},
error: function(questionClass, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.code + error.message);
    console.log(error)
}
});

		document.getElementById("questions").reset();
	}

function scrollBottom(){
    window.scrollTo(0,document.body.scrollHeight);
};

