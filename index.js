document.addEventListener('DOMContentLoaded', function() {
	const questions = window['questions'] || {};
	let questionIndex;

	// DOM elements
	const $questionText = document.getElementById('question');
	const $buttonPrev = document.getElementById('button-prev');

	function ShowQuestionOfIndex(index) {
		const question = questions[index];
		$questionText.innerText = question.text;

		if(index == 0) {
			$buttonPrev.disabled = true;
		}
		else {
			$buttonPrev.disabled = false;
		}
	}

	window.ShowPrev = function ShowPrev() {
		--questionIndex;
		ShowQuestionOfIndex(questionIndex);
	};

	window.ShowNext = function ShowNext() {
		++questionIndex;
		ShowQuestionOfIndex(questionIndex);
	};

	window.SelectA = function SelectA() {
		// TODO
	};

	window.SelectB = function SelectB() {
		// TODO
	};

	questionIndex = 0;
	ShowQuestionOfIndex(questionIndex);
});
