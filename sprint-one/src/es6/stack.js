class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }
  push(value) {
    this.counter++;
    this.storage[this.counter] = value;
  }
  pop() {
    let value = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return value;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}