let shankard = document.querySelector('.flippable');

//shankard.onclick = function() {
//	shankard.classList.toggle('flipme');
//}

const dictionary = '{' +
  '"entries": [' +
    '{' +
      '"word": "爱",' +
      '"english": "love",' +
      '"pinyin": "ài",' +
      '"flat_pinyin": "ai",' +
      '"desc": "feeling",' +
      '"tones": [4],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "八",' +
      '"english": "eight",' +
      '"pinyin": "bā",' +
      '"flat_pinyin": "ba",' +
      '"pos": "number",' +
      '"tones": [1],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "爸爸",' +
      '"english": "dad",' +
      '"pinyin": "bàba",' +
      '"flat_pinyin": "baba",' +
      '"pos": "family",' +
      '"tones": [4, 5],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "杯子",' +
      '"english": "cup, glass",' +
      '"pinyin": "bēizi",' +
      '"flat_pinyin": "beizi",' +
      '"pos": "object",' +
      '"tones": [1, 5],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "北京",' +
      '"english": "Beijing",' +
      '"pinyin": "Běijīng",' +
      '"flat_pinyin": "Beijing",' +
      '"pos": "place",' +
      '"tones": [3, 1],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "本",' +
      '"english": "measure word for books",' +
      '"pinyin": "běn",' +
      '"flat_pinyin": "ben",' +
      '"pos": "mw",' +
      '"tones": [3],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "杯子",' +
      '"english": "cup, glass",' +
      '"pinyin": "bēizi",' +
      '"flat_pinyin": "beizi",' +
      '"pos": "object",' +
      '"tones": [1, 5],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "不客气",' +
      '"english": "you\'re welcome",' +
      '"pinyin": "bú kèqi",' +
      '"flat_pinyin": "by keqi",' +
      '"pos": "phrase",' +
      '"tones": [2, 4, 5],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "不",' +
      '"english": "not, no",' +
      '"pinyin": "bù",' +
      '"flat_pinyin": "bu",' +
      '"pos": "syntax",' +
      '"tones": [4],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "菜",' +
      '"english": "vegetables, dish of food",' +
      '"pinyin": "cài",' +
      '"flat_pinyin": "cai",' +
      '"pos": "food",' +
      '"tones": [4],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "茶",' +
      '"english": "tea",' +
      '"pinyin": "chá",' +
      '"flat_pinyin": "cha",' +
      '"pos": "food",' +
      '"tones": [2],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "吃",' +
      '"english": "to eat",' +
      '"pinyin": "chī",' +
      '"flat_pinyin": "chi",' +
      '"pos": "action",' +
      '"tones": [1],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "出租车",' +
      '"english": "taxi",' +
      '"pinyin": "chūzūchē",' +
      '"flat_pinyin": "chuzuche",' +
      '"pos": "object",' +
      '"tones": [1, 1, 1],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "打电话",' +
      '"english": "to call on a phone",' +
      '"pinyin": "dǎ diànhuà",' +
      '"flat_pinyin": "da dianhua",' +
      '"pos": "action",' +
      '"tones": [3, 4, 4],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "大",' +
      '"english": "big",' +
      '"pinyin": "dà",' +
      '"flat_pinyin": "da",' +
      '"pos": "description",' +
      '"tones": [4],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "的",' +
      '"english": "possesive",' +
      '"pinyin": "de",' +
      '"flat_pinyin": "de",' +
      '"pos": "syntax",' +
      '"tones": [5],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "点",' +
      '"english": "dot, spot, hour of the day",' +
      '"pinyin": "diǎn",' +
      '"flat_pinyin": "dian",' +
      '"pos": "object",' +
      '"tones": [3],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "电脑",' +
      '"english": "computer",' +
      '"pinyin": "diànnǎo",' +
      '"flat_pinyin": "diannao",' +
      '"pos": "object",' +
      '"tones": [4, 3],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "电视",' +
      '"english": "TV",' +
      '"pinyin": "diànshì",' +
      '"flat_pinyin": "dianshi",' +
      '"pos": "object",' +
      '"tones": [4, 4],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "电影",' +
      '"english": "movie",' +
      '"pinyin": "diànyǐng",' +
      '"flat_pinyin": "dianying",' +
      '"pos": "object",' +
      '"tones": [4, 3],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "东西",' +
      '"english": "thing, object",' +
      '"pinyin": "dōngxi",' +
      '"flat_pinyin": "dongxi",' +
      '"pos": "object",' +
      '"tones": [1, 5],' +
      '"hsk": 1' +
    '},' +
    '{' +
      '"word": "都",' +
      '"english": "all, each, both",' +
      '"pinyin": "dōu",' +
      '"flat_pinyin": "dou",' +
      '"pos": "syntax",' +
      '"tones": [1],' +
      '"hsk": 1' +
    '}' +
  ']' +
'}'

///////////////////// CONSTANTS ////////////////////////

let dealer = JSON.parse(dictionary); // Word Bank
let button = document.querySelector('.test-button');  // To be removed
let firstOption = document.querySelector('#first'); // First Answer
let secondOption = document.querySelector('#second'); // Second Answer
let thirdOption = document.querySelector('#third'); // Third Answer
let fourthOption = document.querySelector('#fourth'); // Fourth Answer
let translation = document.querySelector('.translation'); // English Text
let pinyin = document.querySelector('.pinyin'); // Latinized Text
let mainText = document.querySelector('.front-text'); // Chinese Text
let flipContainer = document.querySelector('.flip-container'); // mid flip container
let buttonContainer = document.querySelector('.button-container') // button container

///////////////////// MODE 1 ////////////////////////

// Clears the answer selectors
const clearAnswers = function() {
	let x = document.getElementsByClassName("choice");
	for (let i = 0; i < x.length; i++) {
    	x[i].innerHTML = "";
	}
}

// Fills correct answer; returns the placement integer
const fillCorrectAnswer = function(draw) {
	let correct = Math.floor(Math.random() * 4) + 1;
	if (correct === 1) {
		firstOption.innerHTML = '<div class="content">' + dealer.entries[draw].english + '</div>';
	}
	if (correct === 2) {
		secondOption.innerHTML = '<div class="content">' + dealer.entries[draw].english + '</div>';
	}
	if (correct === 3) {
		thirdOption.innerHTML = '<div class="content">' + dealer.entries[draw].english + '</div>';
	}
	if (correct === 4) {
		fourthOption.innerHTML = '<div class="content">' + dealer.entries[draw].english + '</div>';
	}
	return(correct);
}

// returns array of integers containing wrong answers
const findIncorrectAnswers = function(draw) {
	let out = [];
	while (out.length < 3) {
		let attempt = Math.floor(Math.random() * 21);
		if (draw === attempt) {
			continue;
		} else if (out.includes(attempt)) {
			continue;
		} else {
			out.push(attempt);
		}
	}
	return(out);
}

// Fills incorrect answers
const fillIncorrectAnswers = function(notBlank, wrongAnswers) {
	let choices = document.getElementsByClassName("choice");
	let counter = 0;
	for (let i = 0; i < choices.length; i++) {
		if (i === notBlank - 1) {
			continue;
		} else {
			choices[i].innerHTML = '<div class="content">' + dealer.entries[wrongAnswers[counter]].english + '</div>';
			counter++;
		}
	}
}

// Click the reset button
const reset = function() {
	let draw = Math.floor(Math.random() * 21);
	mainText.innerHTML = dealer.entries[draw].word;
	translation.innerHTML = dealer.entries[draw].english;
	pinyin.innerHTML = dealer.entries[draw].pinyin;
	clearAnswers();
	correct = fillCorrectAnswer(draw);
	let incorrectAnswers = findIncorrectAnswers(draw);
	fillIncorrectAnswers(correct, incorrectAnswers);
	let choices = document.getElementsByClassName("choice");
	for (let i=0; i<choices.length; i++) {
		choices[i].style.backgroundColor = '#f2feff';
	}
	return(draw)
}

const answerCheck = function() {
	if (enabled) {
		enabled = false;
		shankard.classList.toggle('flipme');
		isRight = (this.textContent === translation.textContent)
		if (isRight) {
			incrementScore();
			this.style.backgroundColor = '#e5fff2';
		} else {
			this.style.backgroundColor = '#ffd3d5';
		}
		setTimeout(reframe, 1500);
	}
}

const reframe = function() {
	shankard.classList.toggle('flipme');
	currentWord = setTimeout(reset, 320);
    enabled = true;
}

const incrementScore = function() {
	score = parseInt(document.getElementById('score-board').innerHTML);
	score++;
	document.getElementById('score-board').innerHTML = score;
}

///////////////////// MODE 2 ////////////////////////

const escalate = function() {
	if (enabled) {
		enabled = false;
		isRight = (this.textContent === translation.textContent)
		if (isRight) {
			incrementScore();
			this.style.backgroundColor = '#e5fff2';
			var domNode = anime({
  				targets: ".choice",
  				translateX: 800,
  				delay: 1000,
  				easing: 'easeInOutQuart'
			});
		} else {
			this.style.backgroundColor = '#ffd3d5';
		}
		setTimeout(reframeEscalate, 1500);
	}
}

const reframe2 = function() {
	shankard.classList.toggle('flipme');
	currentWord = setTimeout(reset2, 1500);
    enabled = true;
}

const reset2 = function() {
	shankard.classList.toggle('flipme');
	let draw = Math.floor(Math.random() * 21);
	mainText.innerHTML = dealer.entries[draw].word;
	translation.innerHTML = dealer.entries[draw].english;
	pinyin.innerHTML = dealer.entries[draw].pinyin;
	while (buttonContainer.firstChild) {
		buttonContainer.removeChild(buttonContainer.firstChild);
	}
	let fourth = document.createElement("div");
	fourth.className = "choice";
	fourth.idName = "fourth";
	buttonContainer.appendChild(fourth);
	let third = document.createElement("div");
	third.className = "choice";
	third.idName = "third";
	buttonContainer.appendChild(third);
	let second = document.createElement("div");
	second.className = "choice";
	second.idName = "second";
	buttonContainer.appendChild(second);
	let first = document.createElement("div");
	first.className = "choice";
	first.idName = "first";
	buttonContainer.appendChild(first);
	correct = fillCorrectAnswer(draw);
	let incorrectAnswers = findIncorrectAnswers(draw);
	fillIncorrectAnswers(correct, incorrectAnswers);
	return(draw)
}

const checkInput = function() {
	let textInputs = document.getElementsByTagName('input');
	userAnswer = '';
	for (let i=0;i<textInputs.length;i++) {
		userAnswer += textInputs[i].value;
	}
	if (userAnswer === dealer.entries[currentWord].flat_pinyin) {
		incrementScore();
	}
	setTimeout(reframe2, 600);
}

const reframeEscalate = function() {
    enabled = true;
	syllableCount = dealer.entries[currentWord].tones.length
	while (buttonContainer.firstChild) {
		buttonContainer.removeChild(buttonContainer.firstChild);
	}
	for (let i=0;i<syllableCount;i++) {
		let syllable = document.createElement('input');
		syllable.addEventListener('keyup',function(e){
    		if (e.keyCode === 13) {
    			checkInput()
  			}  
		});
		buttonContainer.appendChild(syllable);
	}
}

///////////////////// MAIN ////////////////////////

let answerButtons = document.getElementsByClassName('choice');
let enabled = true;

for (let i=0; i<answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', answerCheck, false);
}

currentWord = reset();

if (screen.width > 700) {
	var domNode = anime({
			targets: ".flip-container",
			translateY: 50,
			delay: 100,
			easing: 'easeInOutQuart'
	});
}