/* Sets ---> no duplicate items in a sets.
  sets ---> can't be created as literal rather as
  a constructor.
  sets --> can't be access in the same way we access
  array rather we access them using prototype method.
  sets --> sets don't have length property but they have size

*/

function mySet() {
    // the var collection will hold the set
    var collection = [];
    // this method (.has) will check for the presence of an element and return true
    // or false

    this.has = function(element) {
        // if the element index is -1 that means it is not there!
        return (collection.indexOf(element) !== -1);
    };
    // this (.values) method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this (.add) method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method (.remove) will remove an element from a set
    this.remove = function(element) {
      // if it is there find the index first
        if(this.has(element)){
            index = collection.indexOf(element);
            //splice method mean takeout an element in array starting
            // with index of element and going for one element.
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // All above method is in the ES6 implimentation of sets
    // Except remove == delete and size is not a method but property

    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        // return all the values in both sets
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
          return otherSet.has(value);
        });
    };
}
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

// this is the same as the above Except it is the built in set
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values()) //return iterator instead of sets
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
