import React, { useEffect, useContext } from "react"
import { useImmer } from "use-immer"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function Results(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const quizData = props.quizData

  const [state, setState] = useImmer({
    percent: 0,
    scoreText: "",
    scoreImage: "",
  })

  console.log(state.percent, state.scoreText, state.scoreImage)

  useEffect(() => {
    const score = appState.score
    const total = quizData.length
    const decimal = score / total
    const finalScore = Math.round(decimal * 100)
    setState((draft) => {
      draft.percent = finalScore
    })
    switch (state.percent) {
      case 100:
        setState((draft) => {
          draft.scoreText = "you're the jazz master! Killin' em"
          draft.scoreImage = "https://billyanddad.files.wordpress.com/2011/12/30-irving-penn-duke-ellington-1971.jpg"
        })
        return
      case 80:
        setState((draft) => {
          draft.scoreText = "nice, we see you up there!"
          draft.scoreImage = "https://theroyalroomseattle.com/wp-content/uploads/2019/10/coupon-1558093340-1-1.jpg"
        })
        return
      case 60:
        setState((draft) => {
          draft.scoreText = "eh, could be better"
          draft.scoreImage = "https://images.squarespace-cdn.com/content/v1/5b969012a2772ce98cf09575/1552157164009-PLEVJYNJ22FSPXRZ0MQ6/ke17ZwdGBToddI8pDm48kEszLLvtNl8QidyH8Q9qkm97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USQWHM0FZ7G-w1xOdgIJngg9H5UdLJLiNe4snqQkppnzst5bHR_ieXZcSc96uHG9Cg/WROACM01_1500.jpg"
        })
        return
      case 40:
        setState((draft) => {
          draft.scoreText = "you really gotta get back to the woodshed"
          draft.scoreImage = "https://images.squarespace-cdn.com/content/5e7e21afd5867b7bafbf8cd6/1586903196225-UJQ3WEOEBB05L9RGX8FM/image-asset.jpeg?content-type=image%2Fjpeg"
        })
        return
      case 20:
        setState((draft) => {
          draft.scoreText = "You REALLY gotta get back to the shed, man"
          draft.scoreImage = "https://media.wnyc.org/i/1000/563/l/80/1/milesdavis_getty_wide.jpg"
        })
        return
      case 0:
        setState((draft) => {
          draft.scoreText = "just quit now"
          draft.scoreImage = "https://i.pinimg.com/originals/e0/93/a8/e093a8480061afc770a08043dd0a7fda.jpg"
        })
        return
      default:
        return
    }
  })

  function handleReset() {
    appDispatch({ type: "reset" })
  }

  return (
    <div className="results">
      <h1>We're done!</h1>
      <div className="score-box">
        <p className="score-text">
          You got {appState.score} correct out of {quizData.length}, which is {state.percent}% - {state.scoreText}.
        </p>
        <img className="results-image" src={state.scoreImage} alt="jazz musician" />
      </div>
      <h2>What you got right:</h2>
      <div className="right-and-wrong-box">
        {appState.score === 0 ? (
          <div className="fail-box">
            <h3 className="failure">Wow, you're not good at this...</h3>
          </div>
        ) : (
          <div className="right-and-wrong right-questions">
            {appState.rightQuestionList.map((question) => {
              return (
                <div className="result-q-cont">
                  <h3 className="question">{question}</h3>
                </div>
              )
            })}
          </div>
        )}
        <div className="right-and-wrong">
          {appState.rightAnswers.map((answer) => {
            return (
              <div className="result-a-cont">
                <h3 className="result-answer">{answer}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <h2>What you got wrong:</h2>
      {appState.score === props.quizData.length ? (
        <div className="flawless-box">
          <h3 className="flawless">Flawless Victory!</h3>
        </div>
      ) : (
        <div className="right-and-wrong-box">
          <div className="right-and-wrong">
            {appState.wrongQuestionList.map((question) => {
              return (
                <div className="result-q-cont">
                  <h3 className="question">{question}</h3>
                </div>
              )
            })}
          </div>
          <div className="right-and-wrong">
            {appState.wrongAnswers.map((answer) => {
              return (
                <div className="result-wa-cont">
                  <h3 className="result-answer wrong">{answer}</h3>
                </div>
              )
            })}
          </div>
          <div className="right-and-wrong">
            {appState.correctionArray.map((answer) => {
              return (
                <div className="result-container">
                  <h3 className="result-answer">{answer}</h3>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <button className="option start-over" onClick={handleReset}>
        START OVER
      </button>
    </div>
  )
}

export default Results
