const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

// class Queue {

//   getUnderlyingList() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   enqueue(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   dequeue() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

// !========================

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    // если есть голова, то есть и хвост; если головы нет, то и хвоста нет
    this.head ? this.tail.next = newNode : this.head = newNode;

    this.tail = newNode;
  }

  dequeue() {
    const temp = this.head.value;

    this.head = this.head.next;

    return temp;
  }
}

// !========================

module.exports = {
  Queue
};

// npm run test ./test/queue*
