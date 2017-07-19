import {
  ID_EMPTY,
  ID_PLAYER_1,
  ID_PLAYER_2,
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

const winPossibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export const getWinner = (state) => {
  const grid = state.grid

  /* adapted from
   * https://github.com/israelhenrique/my-app/blob/40bd2d8fd5d6999a1eeac11ca3e6f2c0157876dc/src/index.js
   */
  for (let i = 0; i < winPossibilities.length; i++) {
    const [a, b, c] = winPossibilities[i]
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      return grid[a]
    }
  }
  return ID_EMPTY
}
