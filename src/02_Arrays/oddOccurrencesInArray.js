// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var result = 0;
    for (var i = A.length - 1; i >= 0; i--) {
    	result = A[i] ^ result;
    }
    return result;
}

console.log(solution([9,8,7,9,7,8,6]));

// my solution
function mySolution(A) {
    let N = A.length;
    if (N === 0 ||  N > 1000000) {
        return;
    }
    
    if (N===1){
        return A[0];
    }
    
    A.sort(function(a, b){
        return a - b;
    });
    console.log(A);
    
    for (let i=0; i < N-1 ; i+=2){
        if (A[i] < 1 || A[i] > 1000000000) {
            return;
        }
        
        if( A[i] !== A[i+1]){
            return A[i];
        }
    }
    return A[N-1];
}
