const questions = window['questions'] || {};
let questionIndex;

function ShowQuestionOfIndex(index) {
	const question = questions[index];
	const $questionText = document.getElementById('question');
	$questionText.innerText = question.text;
}

function ShowPrev() {
	--questionIndex;
	ShowQuestionOfIndex(questionIndex);
}

function ShowNext() {
	++questionIndex;
	ShowQuestionOfIndex(questionIndex);
}

function SelectA() {
	// TODO
}

function SelectB() {
	// TODO
}

document.addEventListener('DOMContentLoaded', function() {
	questionIndex = 0;
	ShowQuestionOfIndex(questionIndex);
});
