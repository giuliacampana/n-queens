/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n}); 

    for(var i = 0; i < n; i++) { //rows 
      for(var j = 0; j < n; j++) {  //columns
        solution.togglePiece(i, j); //toggle to 1
        if(solution.hasAnyRooksConflicts()) {
          solution.togglePiece(i, j); //toggle back to 0
        }
      }
    }
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
}


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0
  var starterBoard = new Board({'n': n});

  var findAllSolutions = function(board, currRow){
    if (currRow === n) {
      solutionCount++;
      return;
    }
    for(var i = 0; i < n; i++) { // i is column
      board.togglePiece(currRow, i); // place piece
      if(!board.hasAnyRooksConflicts()) { // if no conflicts
        findAllSolutions(board, currRow + 1) // go to next row
      }
      board.togglePiece(currRow, i); // else un-place piece
    }
  }
  findAllSolutions(starterBoard, 0)    

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n': n});
  var master = new Board({'n': n});
  var returnArray;

  
  if (n === 1) {
    solution.togglePiece(0,0);
    return solution.rows();
  } 
  if ( n === 2 || n === 3) {
    return solution.rows();
  } 
  if (n == 0) {
    return [];
  }

  
  //initiate master 
  master.togglePiece(0,0);
  
  var findAllSolutions = function(board, currRow){
    if (currRow === n) {
    //debugger;
      // this gives us number of pieces on the board:
      var numPieces = _.reduce(board.rows(), function(memo, row) {
        return memo + _.reduce(row, function(memo, col) {
          return memo + col;
        }, 0);
      }, 0);
      if (numPieces < n) {
        //debugger;
        var starter = master.rows()[0][0].indexOf(1); // get index of previous starter
        master.togglePiece(0, starter); // turn off
        master.togglePiece(0, starter + 1); // turn on next starter
        currRow = 1;
        board = new Board({'n': n});
        board.togglePiece(0, starter + 1);
        findAllSolutions(board, currRow);
      }
      //console.log(board.rows())
      returnArray = board.makeCopyOfBoard();
      return;
    }

    for(var i = 0; i < n; i++) { // i is column
      board.togglePiece(currRow, i); // place queen
      if(!board.hasAnyQueensConflicts()) { // if no conflicts
        findAllSolutions(board, currRow + 1) // go to next row
      }
      board.togglePiece(currRow, i); // else un-place piece
    }
  }
  findAllSolutions(solution, 0) 
  //debugger;
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(returnArray));
  return returnArray;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  if (n === 1) {
    return 1;
  } else if ( n === 2 || n === 3) {
    return 0;
  } else if (n == 0) {
    return 1;
  }


  var solutionCount = 0;
  var solution = new Board({'n': n});
  var master = new Board({'n': n});
  var returnArray;
    //initiate master 
  master.togglePiece(0,0);

  var findAllSolutions = function(board, currRow){
    if (currRow === n) {
    //debugger;
      // this gives us number of pieces on the board:
      var numPieces = _.reduce(board.rows(), function(memo, row) {
        return memo + _.reduce(row, function(memo, col) {
          return memo + col;
        }, 0);
      }, 0);
      if (numPieces < n) {
        //debugger;
        var starter = master.rows()[0][0].indexOf(1); // get index of previous starter
        master.togglePiece(0, starter); // turn off
        master.togglePiece(0, starter + 1); // turn on next starter
        currRow = 1;
        board = new Board({'n': n});
        board.togglePiece(0, starter + 1);
        findAllSolutions(board, currRow);
      }
      //console.log(board.rows())
      //returnArray = board.makeCopyOfBoard();
      solutionCount++;
      return;
    }

    for(var i = 0; i < n; i++) { // i is column
      board.togglePiece(currRow, i); // place queen
      if(!board.hasAnyQueensConflicts()) { // if no conflicts
        findAllSolutions(board, currRow + 1) // go to next row
      }
      board.togglePiece(currRow, i); // else un-place piece
    }
  }
  findAllSolutions(solution, 0) 
  //debugger;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

// var Tree = function(value, depth) {
//   var newTree = {};

//   newTree.value = value;
//   newTree.depth = depth;
//   newTree.children = [];  

//   _.extend(newTree, treeMethods)

//   return newTree;
// };

// var treeMethods = {};

// treeMethods.addChild = function(value, depth) {
//    this.children.push(Tree(value, depth))
// };

// treeMethods.contains = function(target) {
//   var found = false;
//   function searchForTarget(obj){
//     if(obj.value === target){
//       found = true;
//     }
//     if(obj.children.length === 0) {
//       return;
//     }
 
//     for (var i = 0; i < obj.children.length; i++){
//       searchForTarget(obj.children[i])
//     }
//   };
//   searchForTarget(this);
//   return found;
  
// };

// treeMethods.removeChild = function(value) {

// };
