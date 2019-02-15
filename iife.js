//IIFE: Immediately invoked function expressions: 
const counter = (function() {
    let count = 0
    
    return {
        inc: function() { count = count + 1 }, 
        get: function() { console.log(count) },
    }
})()

counter.get()
counter.inc()
counter.get()