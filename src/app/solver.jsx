import Board from "./components/board";
import { checkDuplicates } from "./components/board";

/* Starting off with brute force method
1. It navigates to empty cell space
2. Inputs 1 by default. Function that checks duplicate values is called to check if it's a valid input
3. If there is a duplicate, it attempts to input 2 and then 3 and so on until 9
4. If there are no valid responses accepted from 1-9, it sets the value of that cell to '' and 
   moves back to the previous cell it put input in and increments that number
5. Iterate 

*/

// Same function that was in board.jsx - might be better to have it here (?)
function nextEmptyCell(cells, index){
    for (let i = index; i < 81; i++){
      if (cells[i] == ''){ // or do we write null???
        return i;
      }
    }
    for (let i = 0; i < index; i++){
      if (cells[i] == ''){ // or do we write null???
        return i;
      }
    }
    // no more empty cells
    return null
  }

  //TODO
function backtrack(){
    return
}  

//TODO
// keep track of empty cells visited in order
function trackCells(){
    return
}

//TODO
function sudokuSolver(board){
    var blankCell = nextEmptyCell(cells, 0);
     cells[blankCell] = 1
     while (checkDuplicates(cells, blankCell)){
        cells[blankCell]++;
     }
     if (cells[blankCell] > 9){
        cells[blankCell] = '';
        backtrack();
     }

return
}