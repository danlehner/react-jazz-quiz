import React from "react"
import { useImmerReducer } from "use-immer"
import "./App.css"
import Question from "./components/Question"
import Results from "./components/Results"
import IntroScreen from "./components/IntroScreen"

import quizData from "./data/quiz-data"

import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

function App() {

  const initialState = {
    score: 0,
    index: 0,
    isIntroUp: true,
    quizDone: false,
    rightAnswers: [],
    wrongAnswers: [],
    correctionArray: [],
    rightQuestionList: [],
    wrongQuestionList: [],
  }

  function gameReducer(draft, action) {
    switch (action.type) {
      case "gameStarter":
        draft.isIntroUp = false
        return
      case "point":
        draft.score++
        break
      case "increase":
        draft.index++
        break
      case "finish":
        draft.quizDone = true
        return
      case "rightAnswer":
        draft.rightAnswers.push(action.value)
        return
      case "wrongAnswer":
        draft.wrongAnswers.push(action.value)
        return
      case "correcting":
        draft.correctionArray.push(action.value)
        return
      case "rightQuestionLister":
        draft.rightQuestionList.push(action.value)
        return
      case "wrongQuestionLister":
        draft.wrongQuestionList.push(action.value)
        return
      case "reset":
        draft.score = 0
        draft.index = 0
        draft.isIntroUp = true
        draft.quizDone = false
        draft.rightAnswers = []
        draft.wrongAnswers = []
        draft.correctionArray = []
        draft.rightQuestionList = []
        draft.wrongQuestionList = []
        return
      default:
        return
    }
  }

  const [state, dispatch] = useImmerReducer(gameReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {state.isIntroUp ? (
          <IntroScreen />
        ) : (
          <div className="App">
            {!state.quizDone ? (
              <div className="gameplay">
                <Question quizData={quizData} />
              </div>
            ) : (
              <Results quizData={quizData} />
            )}
          </div>
        )}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
