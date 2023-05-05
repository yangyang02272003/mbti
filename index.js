const questions = window['questions'] || {};

function ShowQuestionOfIndex(index) {
	//
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
