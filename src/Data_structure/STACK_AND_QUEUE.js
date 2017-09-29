/**
 * Created by SHENJO on 9/14/2017.
 */


class STACK {
  constructor () {
    this.elements = [];
  }

  isEmpty () {
    return this.elements.length === 0;
  }

  push (ele) {
    this.elements.push(ele);
  }

  pop () {
    if (this.isEmpty()) {
      return new Error('Your STACK has already empty.');
    } else {
      this.elements.pop();
    }
  }
}

class QUEUE {
  constructor () {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  size () {
    return this.head - this.tail;
  }

  isEmpty () {
    return this.size() === 0;
  }

  enqueue (value) {
    this.elements[this.tail++] = value;
  }

  dequeue () {
    if (this.isEmpty()) {
      console.log('queue is empty');
    } else {
      delete this.elements[this.head++];
    }
  }
}

var stack = new STACK();
stack.pop();
stack.push(2);
stack.push(5);
stack.pop();
console.log(stack.elements);


var queue = new QUEUE();

queue.dequeue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
console.log(queue);
