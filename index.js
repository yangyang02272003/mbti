document.addEventListener('DOMContentLoaded', function() {
	const questions = window['questions'] || {};
	questions.splice(3);
	let questionIndex = 0;

	// DOM elements
	const $questionContainer = document.querySelector('.question.container');
	const $resultContainer = document.querySelector('.result.container');

	const $questionIndex = document.getElementById('index');
	const $questionText = document.getElementById('question');

	const $optionB = document.getElementById('option-B');
	const $optionA = document.getElementById('option-A');

	const $buttonPrev = document.getElementById('button-prev');
	const $buttonNext = document.getElementById('button-next');
	const $buttonEnd = document.getElementById('button-end');

	const $resultImage = document.getElementById('result-image');
	const $result = document.getElementById('result');

	function SetElementExistence(element, existence) {
		if(existence)
			element.classList.remove('hidden');
		else
			element.classList.add('hidden');
	}

	function ShowQuestionOfIndex(index) {
		const question = questions[index];
		$questionText.innerText = question.text;
		$questionIndex.innerText = `${index + 1} / ${questions.length}`;

		$optionA.checked = question.chosen == question.options[0];
		$optionB.checked = question.chosen == question.options[1];

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

	window.End = function End() {
		const dict = {};
		for(const question of questions) {
			for(const option of question.options) {
				if(!(option.bias in dict))
					dict[option.bias] = 0;
			}
			++dict[question.chosen.bias];
		}
		function Compare(x, y) {
			return dict[x] > dict[y] ? x : y;
		}
		const result = [
			Compare('I', 'E'),
			Compare('S', 'N'),
			Compare('T', 'F'),
			Compare('P', 'J'),
		];

		// 结算
		$buttonPrev.disabled = $buttonNext.disabled = $buttonEnd.disabled = true;
		$buttonEnd.innerText = '结算中';
		$result.innerHTML = result.map(char => `<span>${char}</span>`).join('');
		function OnImageLoad() {
			SetElementExistence($questionContainer, false);
			SetElementExistence($resultContainer, true);
		}
		$resultImage.addEventListener('load', OnImageLoad);
		$resultImage.addEventListener('error', OnImageLoad);
		$resultImage.src = `./img/${result.join('')}.jpg`;
	};

	ShowQuestionOfIndex(questionIndex);
});
