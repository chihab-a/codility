// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
	// write your code in JavaScript (Node.js 4.0.0)



	//prefix sums 
	var prefixSums = [];
	var psum = {a:0,c:0,g:0};
	prefixSums.push(psum);
	for (var k = 1; k <= S.length; k++) {
		var letter = S[k-1];
		var prevPsum = prefixSums[k-1];
		psum = {a:prevPsum.a,c:prevPsum.c,g:prevPsum.g};
		if (letter === 'A') {
			psum.a += 1;
		} else if (letter === 'C') {
			psum.c += 1;
		} else if (letter === 'G') {
			psum.g +=  1;
		}
		prefixSums.push(psum);

	}
	//console.log(prefixSums)

	var retVal = [];
	var M = P.length;
	for (var i = 0; i <= M - 1; i++) {
		var p = P[i];
		var q = Q[i];

		var min = 4;
		if (p <= q) {
			if((prefixSums[q+1].a - prefixSums[p].a) > 0 ){
				min = 1;
			}
			else if((prefixSums[q+1].c - prefixSums[p].c) > 0 ){
				min = 2;
			}
			else if((prefixSums[q+1].g - prefixSums[p].g) > 0 ){
				min = 3;
			}
		} else {
			retVal.push(0);
			continue;
		}
		retVal.push(min);

	}
	return retVal;
}

console.log(solution('GT', [0, 0, 1], [0, 1, 1]))

console.log(solution('CAGCCTA', [2, 5, 6], [4, 5, 6]))