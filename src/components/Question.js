import React, { useContext } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function Question(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const appIndex = appState.index
  const quizData = props.quizData
  const dataProps = props.quizData[appIndex]

  function increasePoint(e) {
    if (dataProps.correctAnswer === e.target.value) {
      appDispatch({ type: "point" })
      appDispatch({ type: "rightAnswer", set: dataProps.options, right: dataProps.correctAnswer, value: e.target.value })
      appDispatch({ type: "rightQuestionLister", value: dataProps.question })
    } else {
      appDispatch({ type: "wrongAnswer", set: dataProps.options, value: e.target.value })
      appDispatch({ type: "correcting", value: dataProps.correctAnswer })
      appDispatch({ type: "wrongQuestionLister", value: dataProps.question })
    }
  }

  function handleClick(e) {
    if (quizData.length === appIndex + 1) {
      appDispatch({ type: "finish" })
      increasePoint(e)
    } else {
      appDispatch({ type: "test" })
      appDispatch({ type: "increase" })
      increasePoint(e)
    }
  }

  return (
    <div className="question-box">
      <h1 className="question-text brick-red">
        Question #{appState.index + 1} of {quizData.length}
      </h1>
      <p className="hint-prompt">(hover towards the top of the image for a hint)</p>
      <p className="hint-prompt-mobile">(tap the top of the image for a hint)</p>
      <div className="image-box">
        <img className="quiz-image" src={dataProps.image} alt="jazz musician" />
        <div className="hint">
          <p className="hint-text">
            {dataProps.hint}
            <span className="hint-close">(tap outside to close)</span>
          </p>
        </div>
      </div>
      <h1 className="initial-question">{dataProps.question}</h1>
      <ul className="option-box">
        {dataProps.options.map((option, index) => {
          return (
            <button className="option" onClick={(e) => handleClick(e)} key={index} value={option}>
              {option}
            </button>
          )
        })}
      </ul>
    </div>
  )
}

export default Question
