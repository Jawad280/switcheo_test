var sum_to_n_a = function(n) {
    // Summation formula = n(n+1)/2, O(1)
    return (n*(n+1))/2;
};

var sum_to_n_b = function(n) {
    // Recursion  -> Time complexity = O(n) Linear
    if (n == 1) {
        return n;
    }
    return n + sum_to_n_b(n-1);
};

var sum_to_n_c = function(n) {
    // Primary school methodish, O(1)
    var pairSum = n + 1;
    var pairs = Math.floor(n/2);
    
    if (n%2 == 0) {
        return pairs*pairSum;    
    }

    var middle = Math.ceil(n/2);
    return (pairs*pairSum) + middle;
};

console.log(sum_to_n_a(1234));
console.log(sum_to_n_b(1234));
console.log(sum_to_n_c(1234));