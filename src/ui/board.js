import React from 'react'
import classnames from 'classnames'

import Tile from './tile'
import './board.css'

const getClasses = (index) => classnames({
  'tile-container': true,
  'board-line-head': index % 3 === 0,
})

const noop = () => {}

const Board = ({
  onClick = noop,
  grid = [],
  symbol = { 0: '', 1: 'X', 2: 'O' },
}) => (
  <div className="board">
    <div className="board-inner">
      { (grid || []).map((tile, index) => (
        <div
          key={index}
          className={getClasses(index)}
          onClick={() => { onClick(index) }}
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
