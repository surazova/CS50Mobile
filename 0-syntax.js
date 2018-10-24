const val = 42    //This is a value, you don’t need quotes 
const arr = [
    'String', 
    42, 
    function() { console.log('hi') }, 
]

//to execute the function: 
arr[2]() //grabbign that function out of the array and executing it 

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); //print function 
}


//Types 
x= 42
console.log(typeof x)  //checks the type 
console.log(typeof null)  //returns object


//creating objects 
const o = new Object()
o.firstName = 'Sitora'
o.lastName = 'Urazova'
o.isLearning = true
o.greet = function() {
    console.log('hello')
}

//using an object literal, the prefered name 
const o2 = {}
o.firstName = 'Sitora'
o['lastName'] = 'Urazova' //inside the brackets is a value, which is the key of the object 
const key = 'isLearning'
o[key] = true 
o['greet'] = function() {
    console.log('hi')
}

//everything inline 
const o3 = {
    firstName: 'Sitora',
    lastName: 'Urazova',
    isLearning: true,
    greet: function() {
        console.log('hi')
    },
    //nesting objects 
    address: {
        street: 'Main st',
        number: 123,
    },
}

