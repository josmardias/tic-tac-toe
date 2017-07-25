import React from 'react'

import './tile.css'

const Tile = ({
  symbol = '',
}) => (
  <span
    className="tile"
  >
    { symbol }
  </span>
)

export default Tile
