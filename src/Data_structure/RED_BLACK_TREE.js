/**
 * Created by SHENJO on 9/27/2017.
 */
const COLOR = {
  RED: 'red',
  BLACK: 'black'
};

class treeNode {
  constructor (val, parent = null, color = COLOR.RED) {
    this.data = val;
    this.parent = parent;
    this.color = color;
    this.left = null;
    this.right = null;
  }
}

class RBTree {
  constructor () {
    this.root = null;
  }

  insert (val) {
    let node = new treeNode(val);
    if (this.root === null) {
      node.color = COLOR.BLACK;
      this.root = node;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (val < currentNode.data) {
          if (!currentNode.left) {
            node.parent = currentNode;
            currentNode.left = node;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            node.parent = currentNode;
            currentNode.right = node;
            break;
          }
          currentNode = currentNode.right
        }
      }
      this.fixUp(node);
    }
  }

  leftRotate (node) {
    // base on assumption, node has right child
    let rightChild = node.right;
    rightChild.parent = node.parent;
    node.right = rightChild.left;
    rightChild.left ? rightChild.left.parent = node : '';

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node.parent.left === node) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }
    node.parent = rightChild;
    rightChild.left = node;
  }

  rightRotate (node) {
    let leftChild = node.left;
    leftChild.parent = node.parent;
    node.left = leftChild.right;
    leftChild.right ? leftChild.right.parent = node : '';


    if (node.parent === null) {
      this.root = leftChild;
    } else if (node.parent.left === node) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    node.parent = leftChild;
    leftChild.right = node;
  }

  order (node, preOrder, inOrder, postOrder, result) {
    if (node === null) {
      return;
    }
    if (preOrder) {
      result.push(node.data);
    }
    this.order(node.left, preOrder, inOrder, postOrder, result);
    if (inOrder) {
      result.push(node.data);
    }
    this.order(node.right, preOrder, inOrder, postOrder, result);
    if (postOrder) {
      result.push(node.data);
    }
  }

  preOrder () {
    let result = [];
    this.order(this.root, true, false, false, result);
    return result;
  }

  inOrder () {
    let result = [];
    this.order(this.root, false, true, false, result);
    return result;
  }

  postOrder () {
    let result = [];

    this.order(this.root, false, false, true, result);
    return result;
  }

  fixUp (node) {
    let parentNode = node.parent;
    // if(parentNode.)
    if (parentNode && parentNode.color === COLOR.RED) {
      let gParentNode = parentNode.parent;
      if (parentNode === gParentNode.left) {
        let uncleNode = gParentNode.right;
        if (uncleNode && uncleNode.color === COLOR.RED) {
          uncleNode.color = COLOR.BLACK;
          parentNode.color = COLOR.BLACK;
          gParentNode.color = COLOR.RED;
          this.fixUp(gParentNode);
        } else {
          if (node === parentNode.left) {
            parentNode.color = COLOR.BLACK;
            gParentNode.color = COLOR.RED;
            this.rightRotate(gParentNode);
          } else if (node === parentNode.right) {
            this.leftRotate(parentNode);
            this.fixUp(parentNode);
          }
        }
      } else {
        let uncleNode = gParentNode.left;
        if (uncleNode && uncleNode.color === COLOR.RED) {
          uncleNode.color = COLOR.BLACK;
          parentNode.color = COLOR.BLACK;
          gParentNode.color = COLOR.RED;
          this.fixUp(gParentNode);
        } else {
          if (node === parentNode.left) {
            this.rightRotate(parentNode);
            this.fixUp(parentNode);
          } else if (node === parentNode.right) {
            parentNode.color = COLOR.BLACK;
            gParentNode.color = COLOR.RED;
            this.leftRotate(gParentNode);
          }
        }
      }
    }
    this.root.color = COLOR.BLACK;
  }
}

module.exports = RBTree;

