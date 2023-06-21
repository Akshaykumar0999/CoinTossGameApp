// Write your code here
import {Component} from 'react'

import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {imgUrl: headsImgUrl, HeadsCount: 0, tailsCount: 0}

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult !== 0) {
      this.setState({imgUrl: tailsImgUrl})
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    } else {
      this.setState({imgUrl: headsImgUrl})
      this.setState(prevState => ({HeadsCount: prevState.HeadsCount + 1}))
    }
  }

  render() {
    const {imgUrl, tailsCount, HeadsCount} = this.state
    const total = tailsCount + HeadsCount
    return (
      <div className="app-container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="coin-image" src={imgUrl} alt="toss result" />
          <button type="button" className="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="coins-text">
            <p className="text">Total: {total}</p>
            <p className="text">Heads: {HeadsCount}</p>
            <p className="text">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
