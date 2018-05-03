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
  var rooks = n;
  

  var buildValidOptionsBoard = function(n) {
    var validBoard = _.range(0, n).map(item => { return []; }); //[];

    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        validBoard[i][j] = [i, j];
        //validBoard.push([i, j]);
      }
    }
    return validBoard;
  }; 
  buildValidOptionsBoard(n);

  
  for(var i = 0; i < n; i++) {
    for(var j = 0; j < n; j++) {
      solution.attributes[i][j] = 1; 
      rooks--;
      if(solution.hasRowConflictAt(i) || solution.hasColConflictAt(j)){
        solution.attributes[i][j] = 0;
        rooks++;//add the rook back
      }
      //validBoard.splice(i, 1);
    }
  }

  //given an n-sized board start at 0,0...place a 1 at that location
  //creating another array to hold all possible placements.
  //as we add a piece take out the tuples that are invalid.
  // var searchForSpaces = function(x, y){
  //   if(x >= n || y >= n){
  //     return;
  //   }
    
  //   //create a listing of tuples that are invalid.
  //   //so if a place in the first spot then all row 0 and col 0 is invalid.

  //   validBoard.forEach(function(item, i){
  //     if(JSON.stringify(item) === JSON.stringify[x,y]){
  //       validBoard.splice(i, 1);//remove the item
  //     }
  //   }
  //   var result _.some(validBoard, function(element){

  //   })
  //   if(_.some(validBoard, function(element){

  //      }))

  //   for(var i = 0; i < n; i++) {
  //     for (var j = 0; j < n; j++){
  //       searchForSpaces(i, j);
  //     }
  //   }    
 
  // }
  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.attributes));
  return solution.attributes;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
