import React, { useState } from 'react'

import { TableList, TableBlock } from './style.js'

const Table = ({ isActual, rightWord, guess }) => {
  
  const letters = guess != null ? guess.split('') : ['', '', '', '', '']
  

  function checkPosition(letter, position) {
    if(letter === "") return 'inactive'
   
    if(!rightWord.includes(letter)) return 'wrong'
    
    let indexes = rightWord.map((_, i) => i)
    let possiblePositions = indexes.filter((item) => rightWord[item] == letter)
    
    if(possiblePositions.includes(position)) {
      
      
      return 'correct'
    }
    else if(!possiblePositions.includes(position)) return 'otherPlace'
    else return 'wrong'
  }
  
  return (
    <TableList>
   
      {
        letters.map((letter, i) => (
          <TableBlock key={i} status={checkPosition(letter, i)}
            transition = { { type: "spring", duration: 0.3, stiffness: 200 } }
            whileTap = { { scale: 0.8 } }
          >
            {letter}
          </TableBlock>
        ))
      }
    </TableList>
  )
}

export { Table } 
