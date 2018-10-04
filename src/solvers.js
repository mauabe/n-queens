/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such 
// that none of them can attack each other
window.findNRooksSolution = function(n) {
  // var solution = undefined; //fixme
  // var boardObj = new Board({n: 3});
  // var board = boardObj.rows();
  // var blacklist = [];
  // var startBlacklist = [];
  // var first = false;
  
  // for(var i = 0; i < n; i++) {
  //   for(var j = 0; j < n; j++) {
  //     board[i][j] = 1;
//var solution;

//hasAnyRowConflicts (board[i][j])
//if true -> toggle board[i] [0 - n] = 0
//              toggle board [0-n][j] =0

  // }  
  
  // console.log(board);
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

    var findSolution = function(row) {
      //if rows left = 0;
      if(row === n) {
        if(!board.hasAnyRooksConflicts()) {
          solutionCount++;
          return;
        }
      //increment solutionCount;
      //stop
        return;
      }
      
      //iterate over possible decisions
      for(var i = 0; i < n; i++) {
        //place a piece
        board.togglePiece(row, i);
        //recurse into remaining decisions for board
        findSolution(row + 1);
        //unplace a piece
        board.togglePiece(row, i)
      }
      return
    }
    
    findSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

    var findSolution = function(row) {
      //if rows left = 0;
      if(row === n) {
        if(!board.hasAnyQueensConflicts()) {
          solutionCount++;
          return;
        }
      //increment solutionCount;
      //stop
        return;
      }
      
      //iterate over possible decisions
      for(var i = 0; i < n; i++) {
        //place a piece
        board.togglePiece(row, i);
        //recurse into remaining decisions for board
        findSolution(row + 1);
        //unplace a piece
        board.togglePiece(row, i)
      }
      return
    }
    
    findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
