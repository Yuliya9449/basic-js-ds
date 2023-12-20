const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

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

    function addNode(node, val) {
      if (!node) {
        node = new Node(val);
      }

      if (node.data > val) {
        node.left = addNode(node.left, val);
      }

      if (node.data < val) {
        node.right = addNode(node.right, val);
      }

      return node; // узел возвращается в вызвавшую функцию,
      // а т.к. она сама себя вызывала,
      // то он возвращается в предыдущий уровень рекурсии
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    return toFind(this.rootNode, data);

    function toFind(node, val) {
      if (!node) {
        return null;
      }

      if (node.data === val) {
        return node;
      }

      if (node.data > val) {
        return toFind(node.left, val);
      }

      if (node.data < val) {
        return toFind(node.right, val);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data); // в каком
    // поддереве нужно удалить узел и с каким значением

    function removeNode(node, val) {
      if (node.data > val) {
        node.left = removeNode(node.left, val);
        return node;
      }

      if (node.data < val) {
        node.right = removeNode(node.right, val);
        return node;
      }

      if (node.data === val) {
        if (!node.left && !node.right) {
          // если лист, то вместо него кладём null
          return null;
        }

        // если есть только правое поддерево
        if (!node.left && node.right) {
          node = node.right;
          return node;
        }

        // если есть только левое поддерево
        if (!node.right && node.left) {
          node = node.left;
          return node;
        }

        // если есть и левое и правое поддеревья
        if (node.right && node.left) {
          let maxLeft = node.left; // ищем максимальный элемент слева

          while (maxLeft.right) {
            maxLeft = maxLeft.right; // нашли максимальный элемент слева
          }

          node.data = maxLeft.data; // заменяем значение удаляемого узла на максимальное слева

          node.left = removeNode(node.left, maxLeft.data); // удаляем
          // этот максимальный элемент из поддерева

          return node;
        }
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

//!----------------------------

module.exports = {
  BinarySearchTree
};

// npm run test ./test/binary*