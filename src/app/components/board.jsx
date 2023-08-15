'use client'

import { useState } from 'react';
import Cell from './cell'

const board = [...Array(9)]

export default function Board() {
  
  const [size, setSize] = useState(9)

  return (
    <div className="flex flex-row justify-center items-center">
      { 
        board.map( (rKey, cIndex) => {
          return (
            <div key={cIndex}>
                {
                  board.map( (cKey, rIndex) => {
                    return (
                      <div className="" key={rIndex + cIndex}>
                        <Cell key={rIndex} row={rIndex} col={cIndex}/>
                      </div>
                    ) 
                  })
                }
            </div>
            )
          })
        
      }
    </div>
  )
}

function nextEmptyCell(cells, index){
  for (let i = index; i < 81; i++){
    if (cells[i] == ''){ // or do we write null???
      return i;
    }
  }
  for (let i = 0; i < index + 1; i++){
    if (cells[i] == ''){ // or do we write null???
      return i;
    }
  }
  // no more empty cells
  return null
}
