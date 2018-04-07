function solution(K, A) {
    if (K === 1)
        return A.length;

    var count = 0;
    var sum = 0;

    for (var i = 0; i < A.length; i++) {
        sum += A[i];

        if (sum >= K) {
            sum = 0;
            count++;
        }
    }

    return count;
}
