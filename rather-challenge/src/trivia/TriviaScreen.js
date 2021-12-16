import React, { useState } from "react";
import "./TriviaScreen.css";
import trivia from "../data/data";

const TriviaScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const nextQuestion = currentQuestion + 1;

  
  const handleClick = (correct) => {
    if (correct) {
      setScore(score + 1);
    }
    if (nextQuestion < trivia.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  setInterval(() => {
    if (nextQuestion < trivia.questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }

  }, trivia?.questions[currentQuestion]?.lifetimeSeconds);

  return (
    <div className="container">
      {showScore ? (
        <h1 className="score">
          Acertaste {score} de {trivia?.questions?.length}
        </h1>
      ) : (
        <>
          <h1 className="title">TextShow</h1>
          <div className="questions">
            <div className="">
              {<h1>{trivia?.questions[currentQuestion]?.text}</h1>}
            </div>
            <div className="options">
              {trivia?.questions[currentQuestion]?.options.map(
                (option) => (
                  <h2
                    onClick={() =>
                        handleClick(option.correct)
                    }
                    className={option.correct ? 'isCorrect' : ''}
                  >
                    {option.text}
                  </h2>
                )
              )}
            </div>
            <div className="count">
              <span>Pregunta {currentQuestion + 1}</span>
              <span>de {trivia.questions.length}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TriviaScreen;
