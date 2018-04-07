// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let aLength = A.length;
    
    if(aLength === 1){
        return A[0];
    }
    
    if (aLength === 0){
        return 0;
    }
    
    if (aLength < 2 || aLength > 100000) {
        return;
    }
    
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    const sumTotal = A.reduce(sum, 0);
    
    let minimalDifference = 100000;
    let leftSum = 0;
    
    for (let i=0; i < aLength-1; i++) {
        leftSum += A[i];
        const rightSum = sumTotal - leftSum;
        const absDiff = Math.abs(leftSum - rightSum);
        
        if(absDiff < minimalDifference) {
            minimalDifference = absDiff;
        }
    }
    
    return minimalDifference;
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([]));
