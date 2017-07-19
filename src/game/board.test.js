import {
  create,
  play,
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
