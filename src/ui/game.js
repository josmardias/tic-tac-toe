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
      playing: true,
    }
  }

  getCurrentMatch() {
    return this.state.currentMatch
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

  updateCurrentWinner(winner) {
    if (!winner) {
      return
    }
    this.setState({ currentWinner: winner })
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

  render() {
    const currentWinner = this.getCurrentWinner()

    return(
      <div>
        <Board
          grid={this.getCurrentMatch().grid}
          onClick={this.handleBoardClick}
        />
        { currentWinner && (
          `Winner: ${currentWinner}`
        )}
      </div>
    )
  }
}
