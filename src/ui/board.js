import React from 'react'
import classnames from 'classnames'

import './board.css'
import Tile from './tile'

const getClasses = (index) => classnames({
  'tile-container': true,
  'board-line-head': index % 3 === 0,
})

const Board = ({
  grid = [],
  symbol = { 0: '', 1: 'X', 2: 'O' },
}) => (
  <div className="board">
    <div className="board-inner">
      { (grid || []).map((tile, index) => (
        <div
          key={index}
          className={getClasses(index)}
        >
          <Tile
            symbol={symbol[tile] || ''}
          />
        </div>
    ))}
    </div>
  </div>
)

export default Board
