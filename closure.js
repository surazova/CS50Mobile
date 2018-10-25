function makeFunctionArray() {
    const arr = []  //creates an array 
    
    for (var i = 0; i < 5; i++) {   //invokes the array
        arr.push(function() {console.log(i) })
    }
return arr
}
const arr = makeFunctionArray()

arr[0]()