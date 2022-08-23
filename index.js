// myMap 
Array.prototype.myMap = function(callback) {
    let res = [];
    let 
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, array))
    };
    return res;
}

// myReduce
Array.prototype.myReduce = function(callback, initialVal) {
    let previousVal = initialVal === undefined ? this[0] : initialVal;
    let index = initialVal === undefined ? 1 : 0;
    for(let i = index; i < this.length; i++) {
        previousVal = callback(previousVal, this[i], this);
    }
    return previousVal;
}

