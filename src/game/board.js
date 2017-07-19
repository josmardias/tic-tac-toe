import {
  ID_EMPTY,
  ID_PLAYER_1,
} from './constants'

export const create = () => {
  return ({
    playerTurn: ID_PLAYER_1,
    grid: Array(9).fill(ID_EMPTY),
  })
}

export const play = (state, playerId, gridPosition) => {
  if (playerId !== state.playerTurn) {
    return state
  }

  const changedGrid = Object.assign([], state.grid, {[gridPosition]: state.playerTurn})

  return { ...state, grid: changedGrid }
}
