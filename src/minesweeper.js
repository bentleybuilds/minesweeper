class Game{
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._board= new Board(numberOfRows, numberOfColumns, numberOfBombs)
  }
  .playMove()=function(rowIndex,columnIndex){
    this._board.flipTile(rowIndex,columnIndex):
    if(this._board.playerBoard[rowIndex][columnIndex]==='B'){
      console.log('BOOM! THE GAME IS OVER.')
      .print(this.board);
    }else if (.hasSafeTiles=0) {
      console.log('THIS BOARD IS CLEAR. CONGRATULATIONS!');
    }else{
      console.log('Current Board');
      .print{this.board}
    }


  }
}

class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows*numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns, numberOfBombs);}

    get playerBoard(
      return this._playerBoard
    );

    .flipTile = function(rowIndex,columnIndex){
      if(this._playerBoard[rowIndex][columnIndex]!==' '){
        console.log('This tile has been flipped!');
       return ;
     } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
      }
      else{
        this._playerBoard[rowIndex][columnIndex]= this.getNumberOfNeighborBombs(rowIndex,columnIndex);
      }
      this._numberOfTiles --;
  }
  .getNumberOfNeighborBombs = function(rowIndex,columnIndex){
//establishing all potential neighboring tiles
  const neighborOffsets =  [[-1.-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
  const numberOfRows = this._bombBoard.length;
  const numberOfColumns = this._bombBoard[0].length;
//not sure if  Var numberOfBombsshoud be changed since called earlier in different context
  let  numberOfBombs = 0;
//making sure that the neighboring tile isn't off of the board
  neighborOffsets.forEach(function(offset){
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if(neighborRowIndex >=0 && neighborRowIndex < numberOfRows && neighborColumnIndex>=0 && neighborColumnIndex<numberOfColumns){
//incrementing number of neighboring bombs as needed
      if (this._bombBoard[neighborRowIndex][neighborColumnIndex] ==='B') {
         numberOfBombs ++; }
      }
 });
  return numberOfBombs;}
 .hasSafeTiles = function(){
   return (this._numberOfTiles!==this._numberOfBombs)
 }
 print() = function(board){
   console.log(board.map(row => row.join(' | ')).join('\n'));
 };
 //this creates the board that the player sees to the specs they call
 static .generatePlayerBoard() = function(numberOfRows, numberOfColumns){
   let board = [];
   for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
     row=[];
     for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
       row.push(' ');
     };
     board.push(row);
   }
   return board;
 }//End of function
 //This creates the board that player guesses are compared to, not visible to players
 static .generateBombBoard() = function(numberOfRows, numberOfColumns, numberOfBombs){
   let board = [];
   for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
     row=[];
     for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
       row.push(null);
     };
     board.push(row);
   }

   //This populates the bombBoard with bombs
   let numberOfBombsPlaced = 0;

   while (numberOfBombsPlaced < numberOfBombs) {
     let randomRowIndex = Math.floor(Math.random() * numberOfRows);
     let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
     if (board[randomRowIndex][randomColumnIndex]!== 'B') {
       board[randomRowIndex][randomColumnIndex] = 'B';
       numberOfBombsPlaced ++; }
     }

     return board;
   }
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: ');
print(this._playerBoard);

console.log('Bomb Board: ');
print(this._bombBoard);
flipTile(playerBoard,bombBoard,0,0);
console.log('Updated Player Board:');
print(playerBoard);

const g= new Game(3,3,3)
g.playMove(2,2,2)
