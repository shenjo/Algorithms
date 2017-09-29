/**
 * Created by SHENJO on 9/21/2017.
 */
const mergeSort = require('../Sort-Algorithm/MERGE_SORT');
class treeNode {
  constructor (val) {
    this.data = val;
  }
}

class BSTree {
  constructor () {
    this.root = null;
  }

  insert (val) {
    let node = new treeNode(val);
    if (this.root === null) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (val < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  //后继
  findSuccessor (val) {

  }

  remove (val) {
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode && currentNode.data !== val) {
      parentNode = currentNode;
      if (val < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right
      }
    }
    if (!currentNode) {
      return false;
    }
    if (!currentNode.left || !currentNode.right) {
      if (!parentNode) {
        this.root = currentNode.left ? currentNode.left : currentNode.right;
      } else if (parentNode.left === currentNode) {
        parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
      }else{
        parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
      }
      return true;
    }else{
      //用后继元素填充当前元素，then 将后继元素的右节点放到后继元素父节点的右节点
      let temp = currentNode.right;
      parentNode = currentNode;
      while(temp&& temp.left){
        parentNode = temp;
        temp = temp.left;
      }
      currentNode.data = temp.data;
      if(parentNode.left === temp){
        parentNode.left = temp.right;
      }else{
        parentNode.right = temp.right;
      }
    }
    return true;

  }

  findNode (val) {
    function find (node) {
      if (!node) {
        return undefined;
      }
      if (node.data === val) {
        return node;
      } else if (val < node.data) {
        return find(node.left)
      } else {
        return find(node.right);
      }
    }

    return find(this.root);
  }

  minEle () {
    let currentNode = this.root;
    while (currentNode && currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  maxEle () {
    let currentNode = this.root;
    while (currentNode && currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

//几种遍历
//1 中序遍历
  inorder () {
    function order (node) {
      let result = '';
      if (node) {
        result += order(node.left) + ' ';
        result += node.data + ' ';
        result += order(node.right) + ' ';
      }
      return result;
    }

    return order(this.root);
  }

  //2 前序
  preOrder () {
    function order (node) {
      let result = '';
      if (node) {
        result += node.data + ' ';
        result += order(node.left) + ' ';
        result += order(node.right) + ' ';
      }
      return result;
    }

    return order(this.root);
  }

//3 后序
  postOrder () {
    function order (node) {
      let result = '';
      if (node) {
        result += order(node.left) + ' ';
        result += order(node.right) + ' ';
        result += node.data + ' ';
      }
      return result;
    }

    return order(this.root);
  }


}


let bstree = new BSTree();
let array = [];
var temp;
for (let i = 0; i < 10; i++) {
  let val = Math.floor(Math.random() * 100);
  // let val = i;
  bstree.insert(val);
  if (i === 5) {
    temp = val;
  }
  array.push(val)
}
console.log(`input array is ${array.toString()}`)
console.log(`merge sort ... result is ======== ${mergeSort(array)}`);
console.log(`min element in BSTree is ${bstree.minEle()}`);
console.log(`max element in BSTree is ${bstree.maxEle()}`);
console.log(`inorder element in BSTree is ${bstree.inorder()}`);
console.log(`preorder element in BSTree is ${bstree.preOrder()}`);
console.log(`postOrder  element in BSTree is ${bstree.postOrder()}`);
console.log(`find node in BSTree is ${bstree.findNode(temp)} val = ${temp}`);
console.log(`remove ele in BSTree is ${bstree.remove(temp)} val = ${temp}`);
console.log(`after remove node in BSTree is ${bstree.inorder(temp)} val = ${temp}`);