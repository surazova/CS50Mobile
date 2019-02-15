// like log on addition or create new methods

// Extends a set 
// First, run the original set's constructor
class MySet extends Set {
  constructor(arr) {
    super(arr)
    this.originalArray = arr
  }

  // Native implementation of add 
  // Console that we added that value to the set 
  add(val) {
    super.add(val)
    console.log('added ${val} to the set!')
  }
  // You want the array, not the set  
  toArray() {
    return Array.from(this)
  }
  // Gives the original set that you had (or a new set with equivalent value)
  reset() {
    return new MySet(this.originalArray)
  }
}
