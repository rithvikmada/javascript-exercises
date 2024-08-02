const sumAll = function(start, end) {
    
    if(
        start < 0 
        || end < 0 
        || typeof start !== "number"
        || typeof end !== "number"
        || !Number.isInteger(start)
        || !Number.isInteger(end)) {
            return "ERROR"
        }

    i = Math.min(start, end);
    n = Math.max(start, end);
    let sum = 0;

    for(i; i <= n; i++) {
        sum += i;
    }

    return sum;
};

// console.log(sumAll(2.5, 4));
// Do not edit below this line
module.exports = sumAll;
