// Q4.
// Write a function `range` that takes in a Queue of numbers, returns the range (difference between the minimum and maximum).

class Queue {
  constructor() {
    this.array = []
  }

  isEmpty() {
    return this.array.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.array[0]
    }
  }

  enqueue(value) {
    this.array.push(value)
  }

  dequeue() {
    return this.array.shift()
  }
}

// Fill up the queue
let q = new Queue()
q.enqueue(-145)
q.enqueue(45)
q.enqueue(11)
q.enqueue(98)

// Write your function here
const range = (queue) => {
  let min = 0;
  let max = 0;
  

  while(!queue.isEmpty()) {
    if(queue.peek() > max) {
      max = queue.peek();
    }
    if(queue.peek() < min) {
      min = queue.peek()
    }
    queue.dequeue()
  }
  let answer = max-min;
  console.log(answer)
}

// Example
range(q) // should return 243
