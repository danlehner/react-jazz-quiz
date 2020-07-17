import React, { useContext } from "react"
import DispatchContext from "../DispatchContext"
// import StateContext from "../StateContext"

function IntroScreen() {
  const appDispatch = useContext(DispatchContext)
  // const appState = useContext(StateContext)

  function beginGame() {
    appDispatch({ type: "gameStarter" })
  }

  return (
    <div className="intro-screen-box">
      <div className="intro-screen">
        <h1 className="brick-red txt-shd-wt">Welcome to the Jazz Quiz!</h1>
        <h2 className="darker-sea-blue txt-shd-wt">Are you ready to test your jazz knowledge?</h2>
        <img className="intro-image" src="https://i.redd.it/dqtks77lzdgz.jpg" />
        <button className="play-button" onClick={beginGame}>
          Let's play!
        </button>
      </div>
    </div>
  )
}

export default IntroScreen
