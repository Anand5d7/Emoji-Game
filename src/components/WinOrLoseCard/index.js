// Write your code here.

import './index.css'

const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const isImgUrl = isWon ? WON_IMG : LOSE_IMG
  const isGameStatus = isWon ? 'You Won' : 'You Lose'
  const ScoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winOrLose-container">
      <div className="card-container">
        <h1 className="game-status">{isGameStatus}</h1>
        <p className="score-label">{ScoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button className="score-btn" type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={isImgUrl} alt="win or lose" className="win-lose-img" />
    </div>
  )
}

export default WinOrLoseCard
