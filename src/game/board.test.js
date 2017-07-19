import {
  create,
} from './board'

import {
  ID_PLAYER_1,
  ID_EMPTY,
} from './constants'

test('creates an empty game state', () => {
  const initialState = create()

  const emptyGrid = [
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
    ID_EMPTY, ID_EMPTY, ID_EMPTY,
  ]

  expect(initialState.playerTurn).toEqual(ID_PLAYER_1)
  expect(initialState.grid).toEqual(emptyGrid)
})
