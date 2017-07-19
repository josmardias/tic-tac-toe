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
