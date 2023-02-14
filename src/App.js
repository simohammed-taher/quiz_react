import React from 'react';
import { useState } from 'react';
import './App.css';
import question from './question';
function App() {
	const [questionIdx, setQuestionIdx] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const selectOption = (idx) => {
		if (currQuestion.answer === idx) {
			setScore(score + 1);
		}
		const nextQ = questionIdx + 1;
		if (nextQ < question.length) {
			setQuestionIdx(questionIdx + 1);
		} else {
			setShowScore(true);
		}
	};
	const reset = () => {
		setQuestionIdx(0);
		setScore(0);
		setShowScore(false);
	};
	const currQuestion = question[questionIdx];
	return (
		<div className='quiz-container'>
			{showScore ? (
				<>
					<h1>your score is : {score}</h1>
					<button onClick={reset}>Restart Quiz</button>
				</>
			) : (
				<div className='quiz-container__question'>
					<p>{currQuestion.question}</p>
					<div className='quiz-container__options'>
						<ul className='quiz-container__ul'>
							{currQuestion.options.map((option, i) => {
								return (
									<li
										className='quiz-container__li'
										onClick={() => selectOption(i)}
									>
										{option}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
