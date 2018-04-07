function solution(A, B) {
    if (A.length === 0)
        return 0;

    var count = 1;
    var last = { left: A[0], right: B[0] };

    for (var i = 1; i < A.length; i++) {
        if (A[i] > last.right) {
            last.left = A[i];
            last.right = B[i];
            count++;
        }
    }

    return count;
}
