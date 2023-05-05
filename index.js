document.addEventListener('DOMContentLoaded', function() {
	const questions = window['questions'] || {};
	let questionIndex;

	// DOM elements
	const $questionText = document.getElementById('question');

	const $buttonPrev = document.getElementById('button-prev');
	const $buttonNext = document.getElementById('button-next');
	const $buttonEnd = document.getElementById('button-end');

	function SetElementExistence(element, existence) {
		element.style.display = existence ? 'block' : 'none';
	}

	function ShowQuestionOfIndex(index) {
		const question = questions[index];
		$questionText.innerText = question.text;

		$buttonPrev.disabled = index == 0;
		const reachedEnd = index == questions.length - 1;
		SetElementExistence($buttonNext, !reachedEnd);
		SetElementExistence($buttonEnd, reachedEnd);
	}

	window.ShowPrev = function ShowPrev() {
		--questionIndex;
		ShowQuestionOfIndex(questionIndex);
	};

	window.ShowNext = function ShowNext() {
		++questionIndex;
		ShowQuestionOfIndex(questionIndex);
	};

	function SelectWithIndex(index) {
		const question = questions[questionIndex];
		question.chosen = question.options[index];
	}

	window.SelectA = function SelectA() {
		SelectWithIndex(0);
	};

	window.SelectB = function SelectB() {
		SelectWithIndex(1);
	};

	questionIndex = 0;
	ShowQuestionOfIndex(questionIndex);
});
