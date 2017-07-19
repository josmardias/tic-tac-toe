import {
  create,
  play,
  getWinner,
} from './board'

import {
  ID_PLAYER_1,
  ID_PLAYER_2,
  ID_EMPTY,
} from './constants'

let initialState

beforeEach(() => {
  initialState = create()
})

test('creates an empty game state', () => {

  const emptyGrid = [
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
  ]

  expect(initialState.playerTurn).toEqual(ID_PLAYER_1)
  expect(initialState.grid).toEqual(emptyGrid)
})

test('player can\'t alter grid when it\'s not his turn', () => {
  const state = play(initialState, ID_PLAYER_2, 0)

  expect(state.grid[0]).toEqual(ID_EMPTY)
})

test('player makes the proper changes to the grid on his turn', () => {
  const state = play(initialState, ID_PLAYER_1, 0)

  const expectedGrid = [
    ID_PLAYER_1, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
  ]

  expect(state.grid).toEqual(expectedGrid)
})

test('no player is a winner', () => {
  const actualGrid = [
    ID_PLAYER_1, ID_PLAYER_1, ID_PLAYER_2,
    ID_PLAYER_1, ID_PLAYER_1, ID_PLAYER_2,
    ID_PLAYER_2, ID_PLAYER_2, ID_EMPTY,
  ]
  const actualState = {...initialState, grid: actualGrid}

  const winner = getWinner(actualState)

  expect(winner).toEqual(ID_EMPTY)
})

test('a player wins at horizontal', () => {
  const actualGrid = [
    ID_PLAYER_1, ID_PLAYER_1, ID_PLAYER_1,
    ID_PLAYER_2, ID_PLAYER_2, ID_EMPTY,
    ID_PLAYER_2, ID_PLAYER_2, ID_EMPTY,
  ]
  const actualState = {...initialState, grid: actualGrid}

  const winner = getWinner(actualState)

  expect(winner).toEqual(ID_PLAYER_1)
})

test('a player wins at vertical', () => {
  const actualGrid = [
    ID_PLAYER_1, ID_PLAYER_2, ID_PLAYER_2,
    ID_PLAYER_1, ID_PLAYER_2, ID_PLAYER_2,
    ID_PLAYER_1, ID_EMPTY, ID_EMPTY,
  ]
  const actualState = {...initialState, grid: actualGrid}

  const winner = getWinner(actualState)

  expect(winner).toEqual(ID_PLAYER_1)
})

test('a player wins at diagonal', () => {
  const actualGrid = [
    ID_PLAYER_1, ID_PLAYER_2, ID_PLAYER_2,
    ID_PLAYER_2, ID_PLAYER_1, ID_PLAYER_2,
    ID_PLAYER_2, ID_PLAYER_2, ID_PLAYER_1,
  ]
  const actualState = {...initialState, grid: actualGrid}

  const winner = getWinner(actualState)

  expect(winner).toEqual(ID_PLAYER_1)
})
