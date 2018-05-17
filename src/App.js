import React from 'react'

import 'normalize.css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'

import './App.css'

import Game from './ui/game'

const ForkMeOnGithub = () => (
  <a
    className="github-fork-ribbon fixed right-bottom"
    href="https://github.com/josmardias/tic-tac-toe"
    title="Fork me on GitHub"
  >
    Fork me on GitHub
  </a>
)

const App = () => (
  <div id="app">
    <ForkMeOnGithub />
    <Game />
  </div>
)

export default App
