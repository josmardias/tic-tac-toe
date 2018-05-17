import React from 'react'
import classnames from 'classnames'

import './tile.css'

const Tile = ({
  className = '',
  symbol = '',
  onClick,
}) => (
  <span
    className={classnames('tile', className)}
    onClick={onClick}
  >
    { symbol }
  </span>
)

export default Tile
