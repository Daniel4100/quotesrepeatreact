import React from 'react'
import Button from './Button'

const QuoteCard = ({index, nextRandom, colorRandom}) => {
  return (
    <article className='quote'>
        <p className='quote-text' >"{index.quote}"</p>
        <p className='quote-author' >{index.author}</p>
        <Button 
        nextRandom={nextRandom}
        colorRandom={colorRandom}
        />
    </article>
  )
}

export default QuoteCard