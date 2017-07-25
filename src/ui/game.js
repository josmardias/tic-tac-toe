import React, { Component } from 'react'

import {
  create as createMatch,
  play as playOnMatch,
} from '../game/match'

import Board from './board'

export default class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMatch: createMatch(),
    }
  }

  getCurrentMatch() {
    return this.state.currentMatch
  }

  updateCurrentMatch(match) {
    this.setState({ currentMatch: match })
  }

  playOnTile(tileIndex) {
    const newMatchState = playOnMatch(this.getCurrentMatch(), tileIndex)
    this.updateCurrentMatch(newMatchState)
  }

  handleBoardClick = (tileIndex) => {
    this.playOnTile(tileIndex)
  }

  render() {
    return(
      <div>
        <Board
          grid={this.getCurrentMatch().grid}
          onClick={this.handleBoardClick}
        />
      </div>
    )
  }
}
