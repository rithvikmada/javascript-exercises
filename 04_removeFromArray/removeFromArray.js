const removeFromArray = function(array, ...value) {

     for (let val of value) { /// For each value wanted to be removed

        function isValue(index) { /// Check if each array item is equal to value
            return index !== val;
        }
    
        array = array.filter(isValue); /// Filter array
    }   

    return array;
};

// console.log(removeFromArray([1, 2, 3, "Hi", "Bye"], "Hi", "Bye"));
// Do not edit below this line
module.exports = removeFromArray;
