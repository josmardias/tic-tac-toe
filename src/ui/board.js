import React from 'react'
import chunk from 'lodash.chunk'

import Tile from './tile'
import './board.css'

const noop = () => {}

const Board = ({
  onClick = noop,
  grid = [],
  symbol = { 0: '', 1: 'X', 2: 'O' },
}) => (
  <div className="board">
    { chunk(grid || [], 3).map((row, gridIndex) => (
      <div className="board-row" key={gridIndex}>
        { row.map((tile, index) => (
          <Tile
            key={index}
            symbol={symbol[tile] || ''}
            className="board-tile-container"
            onClick={() => onClick(gridIndex*3 + index)}
          />
        ))}
      </div>
    ))}
  </div>
)

export default Board
