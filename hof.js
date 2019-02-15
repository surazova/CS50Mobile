//Javscript Higher Order Functions

function map(arr,fn) {  //map function takes an array, applies a function to it, and returns a new array
    const newArr = [ ]
    
    //using a for each loop instead of a for loop 
    arr.forEach(function(val) {
        newArr.push(fn(val))
    })
    return newArr
}

function addOne(num) {return num + 1}

const x = [0,1,2,3]

console.log(map(x, addOne))