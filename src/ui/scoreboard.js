import React from 'react'

const isEqual = (x) => (n) => n === x

const Scoreboard = ({ statistics }) => (
  <div style={{ fontSize: '36px', textAlign: 'center' }}>
    <span style={{ fontStyle: 'italic' }}>Player 1</span>
    <span style={{ marginLeft: '25px' }}>{statistics.filter(isEqual(1)).length || 0}</span>
    <span style={{ margin: '0 10px' }}>x</span>
    <span style={{ marginRight: '25px' }}>{statistics.filter(isEqual(2)).length || 0}</span>
    <span style={{ fontStyle: 'italic' }}>Player 2</span>
  </div>
)
export default Scoreboard
