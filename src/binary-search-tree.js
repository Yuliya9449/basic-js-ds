const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

// /**
// * Implement simple binary search tree according to task description
// * using Node from extensions
// */

//!---------------------------

// node.left, node.right - это узлы (объекты)
// node.data - это цифра

class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
        if (!node) {
            node = new Node(data);
            return node;
            // return new Node(data);
        }

        if (node.data === data) {
            return node;
        }

        if (node.data > data) {
            node.left = addNode(node.left, data)
        } else if (node.data < data) {
            node.right = addNode(node.right, data)
        }

        return node;//узел возвращается в вызвавшую функцию, а т.к. она сама себя вызывала,
        // то он возвращается в предыдущий уровень рекурсии
    }
  }

  has(data) {

    function toSearchNode(node, data) {
        if (!node) {
            return false;
        }

        if (node.data === data) {
            return true;
        }

        if (node.data > data) {
            return toSearchNode(node.left, data)
        } else if (node.data < data) {
            return toSearchNode(node.right, data)
        }
    }

    return toSearchNode(this.rootNode, data)

  }

  find(data) {

    if (!this.has(data)) {
        return null
    }

    // if (this.has(data)) {
        return toFind(this.rootNode, data);
    // }

    function toFind(node, data) {
        if (node.data === data) {
            return node;
        }

        if (node.data > data) {
            return toFind(node.left, data);
        }

        if (node.data < data) {
            return toFind(node.right, data)
        }

    }
  }

  remove(data) {
    if (!this.has(data)) {
        return null
    }

    this.rootNode = removeNode(this.rootNode, data);// в каком поддереве нужно удалить узел и с каким значением

    function removeNode(node, data) {
        if (node.data > data) {
            node.left = removeNode(node.left, data);
            return node;
        } else if (node.data < data) {
            node.right = removeNode(node.right, data);
            return node;
        } else if (node.data === data) {

            if(!node.left && !node.right) {
                return null;//если лист, то вместо него кладём null
            }
            // если есть только правое поддерево
            if(!node.left && node.right) {
                node = node.right;
                return node;
            }
            // если есть только левое поддерево
            if(!node.right && node.left) {
                node = node.left;
                return node;
            }
            // если есть и левое и правое поддеревья
            if(node.right && node.left) {
                // ищем максимальный элемент слева
                let maxLeft = node.left;

                while(maxLeft.right) {
                    maxLeft = maxLeft.right;// нашли максимальный элемент слева
                }

                node.data = maxLeft.data;//заменяем значение удаляемого узла на максимальное слева

                node.left = removeNode(node.left, maxLeft.data);//удаляем этот максимальный элемент из поддерева

                return node;
            }
        }
    }

  }

  min() {
    if (!this.rootNode) {
        return null
    }

    let node = this.rootNode;

    while (node.left) {
        node = node.left;
    }

    return node.data;


  }

  max() {
    if (!this.rootNode) {
        return null
    }

    let node = this.rootNode;

    while (node.right) {
        node = node.right
    }

    return node.data;

  }
}



//!----------------------------

// //!
// console.log(tree.root());

module.exports = {
  BinarySearchTree
};

// npm run test ./test/binary-search-tree*