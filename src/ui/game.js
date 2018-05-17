import React, { Component } from 'react'

import {
  create as createMatch,
  play as playOnMatch,
  getWinner as getMatchWinner,
} from '../game/match'

import Board from './board'

export default class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMatch: createMatch(),
      currentWinner: false,
      playing: true,
      statistics: [],
    }
  }

  getCurrentMatch() {
    return this.state.currentMatch
  }

  startNewMatch() {
    this.setState({
      currentMatch: createMatch(),
      currentWinner: false,
      playing: true,
    })
  }

  stopGame() {
    this.setState({ playing: false })
  }

  updateCurrentMatch(match) {
    this.setState({ currentMatch: match })
  }

  getCurrentWinner() {
    return this.state.currentWinner
  }

  getStatistics() {
    return this.state.statistics
  }

  updateCurrentWinner(winner) {
    if (!winner) {
      return
    }
    this.setState({ currentWinner: winner })
    this.setState((previousState) => ({ statistics: [...previousState.statistics, winner] }))
    this.stopGame()
  }

  playOnTile(tileIndex) {
    const newMatchState = playOnMatch(this.getCurrentMatch(), tileIndex)
    const winner = getMatchWinner(newMatchState)

    this.updateCurrentMatch(newMatchState)
    this.updateCurrentWinner(winner)
  }

  handleBoardClick = (tileIndex) => {
    if (!this.state.playing) {
      return
    }
    this.playOnTile(tileIndex)
  }

  handleStartNewMatchClick = (event) => {
    event.preventDefault()
    this.startNewMatch()
  }

  render() {
    const currentWinner = this.getCurrentWinner()
    const statistics = this.getStatistics()

    return(
      <div style={{ height: '100%' }}>
        <Board
          grid={this.getCurrentMatch().grid}
          onClick={this.handleBoardClick}
        />
        { currentWinner && (
          <div><a href="" onClick={this.handleStartNewMatchClick}>start new match</a></div>
        )}
        { currentWinner && (
          `Winner: ${currentWinner}`
        )}
        <p>Statistics:</p>
        { statistics.map((winner, index) => <p key={index}>{ winner }</p>) }
      </div>
    )
  }
}
