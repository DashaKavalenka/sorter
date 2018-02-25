class Sorter {
  constructor() {
      // your implementation
      this.arrayOfObjects = [];
  }

  add(element) {
      this.arrayOfObjects.push(element);
    // your implementation
  }

  at(index) {
      return this.arrayOfObjects[index];
    // your implementation
  }

  get length() {
    return this.arrayOfObjects.length;
    // your implementation
  }

  toArray() {
    return this.arrayOfObjects;
    // your implementation
  }

  sort(indices) {
    // your implementation
      var index, element, indexOfObjectToBeReplaced;
      indices.sort();
      this.sortedArray = [];

      for (var i = 0; i < indices.length; i++) {
          index = indices[i];
          element = this.arrayOfObjects[index];
          this.sortedArray.push(element);
      }

      if (this.customSort != null) {
          this.sortedArray.sort(this.customSort);
      } else {
          this.sortedArray.sort();
      }

      for (var i = 0; i < indices.length; i++) {
          indexOfObjectToBeReplaced = indices[i];
          this.arrayOfObjects[indexOfObjectToBeReplaced] = this.sortedArray[i];
      }
  }

  setComparator(compareFunction) {
    // your implementation
      this.customSort = compareFunction;
  }
}

module.exports = Sorter;