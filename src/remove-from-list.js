const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

//!-------------------
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(data) {
        if(this.length === 0) {
            this.head = new ListNode(data);
        } else {
            // получаем текущий узел. Т.к список начинается с головы,
            // то первый текущий узел - голова
            let current = this.head;

            while (current.next) {
                current = current.next;// передвигаемся в конец списка
            }

            // когда дошли до конца списка, добавляем туда новый элемент
            current.next = new ListNode(data);
        }

        this.length += 1;
    }

    remove(data) {

        if(data || this.length > 0 ) {

        let current = this.head;


        if(current.value === data) {

        this.head = current.next;

        this.length -= 1;
        this.remove(current.value);

        } else {
            let prev = null;

            while (current.next) {
                prev = current;
                current = current.next

                if(current.value == data) {
                    prev.next = current.next;
                    this.length -= 1;
                }
            }

            if(current.value === data) {
                prev.next = null
                this.length -= 1;
                }
            }
        }
    }
}
//!-----------
    // let l = [3, 1, 2, 3, 4, 5];
    // let k = 3;
    // // вывод должен быть[1, 2, 4, 5]
    // removeKFromList(l, k);

//!-----------

function removeKFromList(list, elemForRemove) {
    if(!list || !elemForRemove) {
        return;
    }
    // console.debug(list);
    let head = list;
    let current = list;
    let prev;

    while (current) {
        if(current.value === elemForRemove && current === head) {
            head = current.next;
            current = current.next;
        } else if(current.value === elemForRemove && current !== head) {

            prev.next = current.next;
            current = current.next;
            continue;
        }

        prev = current;
        current = current.next;
    }

    return head;
//!-------------------------------------
    // let list = new LinkedList()
    // array.forEach((elem) => {
    //     list.add(elem)
    // });
    // console.log(list);


    //     list.remove(elemForRemove);

    // console.log(list);
}

//!------------------------




module.exports = {
  removeKFromList
};

// npm run test ./test/remove-from-list*
