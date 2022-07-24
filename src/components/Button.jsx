import React from 'react'

const Button = ({nextRandom, colorRandom}) => {
  return (
    <button onClick={nextRandom} style={{backgroundColor: colorRandom}}>
        <i class="fas fa-arrow-right"></i>
    </button>
  )
}

export default Button