const o = {
    a: 'a',
    b: 'b',
}


const o2 = Object.assign({}.oo //mutating/updating the objects key, this is a shallow copy 
//change it to something else 
o.a = 'new value'

console.log(o2.a)

//deep copy 
function deepCopy(obj) {
    //check if vals are objects 
    //if so, copy that object  (deep copy)
    //else return the value 
    
    const keys = Object.keys(obj) //creates an array of the string values of the object 
    const newObject = {} 
    for ( let i = 0, i < keys.length, i++) {
        const key = keys[i]
        if(typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject//shallow copy workd if we know that there are no things inside of the object
}

const o3 = deepCopy(o)

o.obj.key = 'new Key'
console.log(o3.obj.key)