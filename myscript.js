//array of questions

var questions = [{question: "How is Covid-19 passed on",
choices: ["Through dropplest that come from your mouth and nose when you cough or breath out","In sexual fluids","By drinking unclean water", "All of the above"],
correctAnswer: 0},
{question: "What are the common symptoms of COVID-19?",
choices: ["A new and continuous cough","Fever","Tiredness", "All of the above"],
correctAnswer: 3},
{question: "Can you always tell if someone has COVID-19? ",
choices: ["No,not everyone with Covid-19 has symptoms","Yes, it will be obvious,a person with covid coughs alot","Yes- you can tell by where a person comes from,their race and ethinicity"],
correctAnswer: 0},
{question: "Can washing your hands protect you from COVID-19?",
choices: ["Yes, but only if you use strong bleach","Yes, normal soap and water or hand sanitizer is enough","No- washing your hands is not enough"],
correctAnswer: 1},
{question: "Which of the following people is COVID-19 more dangerous for? ",
choices: ["Children","Older people >60","Men", "Women"],
correctAnswer: 1}
];

var currentQuestion=0;
var correctAnswers=0;
var quizOver =false;

//JQuery code
$(document).ready(function (){//check if page is fully loaded before loading code
	displayCurrentQuestion();
	$(this).find(".quizMessage").hide();
	$(this).find(".nextButton").on("click",function(){
	if( !quizOver){// if the quize is not over
		var value = $("input[type='radio']:checked").val();

		if(value==undefined){
			$(document).find(".quizMessage").text("Please select an answer");
			$(document).find(".quizMessage").show();
		}
		else{
			$(document).find(".quizMessage").hide();
			if(value== questions[currentQuestion].correctAnswer){
				correctAnswers++;
			}
			currentQuestion++;
			if(currentQuestion<questions.length){
				displayCurrentQuestion()
			}
			else{
				displayScore();
				$(document).find(".nextButton").text("Play Again?");
				quizOver=true;
			}
		}
	}else {
		quizOver=false;
		$(document).find(".nextButton").text("Next Question");
		resetQuiz();
		displayCurrentQuestion();
		hideScore();
	}	
	})
})

//java script code
function displayCurrentQuestion(){
	console.log("In display current Question");

	var question = questions[currentQuestion].question;
	var	questionClass = $(document).find(".quizContainer > .question");
	var choiceList = $(document).find(".quizContainer >.choiceList");
	var numChoices = questions[currentQuestion].choices.length;

	// set the questionClass text to the current question
	$(questionClass).text(question);
	

	//remove all current <li> elements (if any)
	$(choiceList).find("li").remove();
	
	var choice;
	for (i=0; i<numChoices;i++){
		choice = questions[currentQuestion].choices[i];
		$('<li><input type = "radio" value='+ i +'  name="dynradio" />' +choice + '</li>').appendTo(choiceList);

	}

}

function resetQuiz(){
	currentQuestion = 0;
	currentAnswer = 0;
	correctAnswers=0;
	hideScore();

}

function displayScore(){
	$(document).find(".quizContainer > .result").text("you scored: " + correctAnswers + " out of " + questions.length);
	$(document).find(".quizContainer > .result").show();
}

function hideScore(){
	$(document).find(".result").hide()
}