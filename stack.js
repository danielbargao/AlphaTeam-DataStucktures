const maxSize = 5;

class Stack {
  constructor() {
    this.items = [];
  }

  isFull() {    
    return this.items.length === maxSize;
  }

  isEmpty() {    
    return this.items.length === 0;
  }

  push(item) {
    if (stack.isFull()){
      return console.log("stack is full");
    }
    this.items.push(item);
  }

  pop() {
    if (stack.isEmpty()){
      return console.log("stack is empty")
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }


}
const stack = new Stack;

console.log(stack.isEmpty()); 
console.log("Size = " + stack.size()); 
stack.push(5); 
stack.push(10);
stack.push(17);
stack.push(51);
console.log("peek = " + stack.peek());
stack.push(3);
stack.push(1000);
stack.push(10001);
stack.pop();
stack.pop();
console.log("peek = " + stack.peek());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.push(1);

console.log(stack)
