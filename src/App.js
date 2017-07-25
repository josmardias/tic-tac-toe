import React from 'react'

import 'normalize.css'
import './App.css'

import Board from './ui/board'

const grid = [
  1, 0, 0,
  null, 1, 0,
  null, null, 1,
]

const App = () => (
  <div id="app">
    <Board grid={grid} />
  </div>
)

export default App
