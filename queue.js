const maxSize = 4;

function Queue(){
  this.elements = []
}

  Queue.prototype.enqueue = function(names){
    this.elements.push(names);
  }

Queue.prototype.dequeue = function() {
  return this.elements.shift();
}


Queue.prototype.isEmpty = function() {
  return this.elements.length == 0;
}

Queue.prototype.isFull = function() {
  return this.elements.length == maxSize;
}

Queue.prototype.peek = function() {
  return this.elements[0];
}

const q = new Queue();
console.log("Array is empty? " + q.isEmpty());
q.enqueue("Ricardo");
q.enqueue("Ana");
q.enqueue("Carlos");
q.enqueue("Teresa");
console.log(q);
console.log("Array is full? " + q.isFull());
console.log("peek: " + q.peek());
console.log("dequeue: " + q.dequeue());
console.log("peek: " + q.peek());
console.log(q);