import {
  create,
  play,
  getWinner,
} from './match'

import {
  ID_PLAYER_1,
  ID_PLAYER_2,
  ID_EMPTY,
} from './constants'

let initialState

beforeEach(() => {
  initialState = create()
})

test('creates an empty match state', () => {

  const emptyGrid = [
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
  ]

  expect(initialState.playerTurn).toEqual(ID_PLAYER_1)
  expect(initialState.grid).toEqual(emptyGrid)
})

test('player can\'t alter a part of the grid that is not empty', () => {
  const state = play(initialState, 0)
  const nextState = play(state, 0)

  expect(nextState.grid[0]).toEqual(ID_PLAYER_1)
  // shallow equally can be used to detect wrong moves
  expect(nextState).toBe(state)
})

test('player makes the proper changes to the grid on his turn', () => {
  const state = play(initialState, 0)

  const expectedGrid = [
    ID_PLAYER_1, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
  ]

  expect(state.grid).toEqual(expectedGrid)
})

test('player turn changes after some player move', () => {
  const state = play(initialState, 0)
  const nextState = play(state, 1)

  expect(state.playerTurn).toEqual(ID_PLAYER_2)
  expect(nextState.playerTurn).toEqual(ID_PLAYER_1)
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
