const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// function removeKFromList(/* l, k */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

//!------------------------

// function removeKFromList(list, elemForRemove) {
//   if (!list || !elemForRemove) {
//     return;
//   }
//   // console.debug(list);
//   let head = list;
//   let current = list;
//   let prev;

//   while (current) {
//     if (current.value === elemForRemove && current === head) {
//       head = current.next;
//       current = current.next;
//     } else if (current.value === elemForRemove && current !== head) {
//       prev.next = current.next;
//       current = current.next;
//       continue;
//     }

//     prev = current;
//     current = current.next;
//   }

//   return head;
// }

//!------------------------

function removeKFromList(current, k) {
  if (!current) { // выход из рекурсии
    return null;
  }

  if (current.value !== k) {
    current.next = removeKFromList(current.next, k);
  }

  if (current.value === k) {
    if (!current.next) { // выход из рекурсии
      return null;
    }

    if (current.next) {
      return removeKFromList(current.next, k);
    }
  }

  return current;
}

//!------------------------

module.exports = {
  removeKFromList
};

// npm run test ./test/remove*
