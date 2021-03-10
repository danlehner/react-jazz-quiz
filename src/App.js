import React from "react"
import { useImmerReducer } from "use-immer"
import "./App.css"
import Question from "./components/Question"
import Results from "./components/Results"
import IntroScreen from "./components/IntroScreen"

import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

function App() {
  const quizData = [
    {
      index: 0,
      question: "What's Sonny Rollins's real first name?",
      options: ["Theodore", "John", "Kenneth", "Scott"],
      correctAnswer: "Theodore",
      image: "https://www.wallofsoundgallery.com/immagini_prodotti/arch/3126.jpg",
      hint: "Hint: it's a presidential name.",
    },
    {
      index: 1,
      question: "Who did NOT play saxophone in a Miles Davis ensemble?",
      options: ["George Coleman", "John Coltrane", "Art Pepper", "Kenny Garrett"],
      correctAnswer: "Art Pepper",
      image: "https://static01.nyt.com/images/2016/03/13/fashion/13MILES/13MILES-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      hint: "Hint: the correct answer DID, ironically, use Miles' rhythm section on a recording.",
    },
    {
      index: 2,
      question: "Thad Jones got his start in whose big band?",
      options: ["Duke Ellington", "Count Basie", "Fletcher Henderson", "Tommy Dorsey"],
      correctAnswer: "Count Basie",
      image: "https://thadjones.jazzgiants.net/wp-content/uploads/2015/05/thad_jones2.jpg",
      hint: "Hint: he was a Jersey boy...",
    },
    {
      index: 3,
      question: "How old was Miles Davis when he started playing with Charlie Parker?",
      options: ["17", "18", "19", "20"],
      correctAnswer: "18",
      image: "https://media.gq-magazine.co.uk/photos/5d13ac7f533a23557ac639b9/master/w_1280,c_limit/miles-davis-03-gq-26apr19_getty_b.jpg",
      hint: "Hint: he could buy a cigarette.",
    },
    {
      index: 4,
      question: "Who was frequently referred to as 'the Angry Man of Jazz'?",
      options: ["Charles Mingus", "Miles Davis", "Art Blakey", "Fats Waller"],
      correctAnswer: "Charles Mingus",
      image: "https://pbs.twimg.com/media/DqJP0pJXgAA3DpG.jpg",
      hint: "Hint: he infamously punched one of his musicians in the mouth!",
    },
  ]

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
        draft.rightSets = []
        draft.rightAnswers = []
        draft.wrongSets = []
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
