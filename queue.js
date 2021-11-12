const maxSize = 3;

function Queue(){
  this.elements = []
}

Queue.prototype.isEmpty = function() {
    return this.elements.length == 0;
}
  
Queue.prototype.isFull = function() {
    return this.elements.length == maxSize;
}

Queue.prototype.enqueue = function(item){
    if (queue.isFull()){
        return console.log("queue is full");
    }
    else{
    this.elements.push(item);
    }
}

Queue.prototype.dequeue = function() {
    if (queue.isEmpty()){
        return console.log("queue is empty");
    }
  return this.elements.shift();
}


Queue.prototype.peek = function() {
  return this.elements[0];
}

const queue = new Queue();
console.log("Array is empty? " + queue.isEmpty());
queue.enqueue("1");
queue.enqueue("2");
console.log("peek: " + queue.peek());
queue.enqueue("3");
queue.enqueue("4");
console.log(queue);
console.log("Array is full? " + queue.isFull());
console.log("peek: " + queue.peek());
console.log("dequeue: " + queue.dequeue());
console.log("peek: " + queue.peek());   
console.log(queue);
console.log("dequeue: " + queue.dequeue());
console.log("dequeue: " + queue.dequeue());
console.log("dequeue: " + queue.dequeue());


