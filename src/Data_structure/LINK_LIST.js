/**
 * Created by SHENJO on 9/20/2017.
 */
/**
 * single link list
 */
const CREATE_NODE = Symbol('link list');
let NODELENGTH;
let HEAD;
class singleLinkList {
  constructor () {

    NODELENGTH = Symbol('link list length');
    HEAD = Symbol('link list head');
    this[HEAD] = null;
    this[NODELENGTH] = 0;
  }

  [CREATE_NODE] (data) {
    return {
      data,
      next: null
    }
  }

  append (ele) {
    let current = this[HEAD];
    let newNode = this[CREATE_NODE](ele);
    while (current && current.next !== null) {
      current = current.next;
    }
    current ? current.next = newNode : this[HEAD] = newNode;
    this[NODELENGTH]++;
  }

  remove (pos) {
    if (pos > -1 && pos < this[NODELENGTH]) {
      let preNode = this[HEAD];
      while (--pos > 0) {
        preNode = preNode.next;
      }
      if (preNode === this[HEAD]) {
        this[HEAD] = this[HEAD].next;
      } else {
        preNode.next = preNode.next.next;
      }
      this[NODELENGTH]--;
    } else {
      throw new Error(`exceed link list max length`);
    }
  }

  get (node) {
    return node.data;
  }

  next (node) {
    return node.next;
  }

  toString () {
    let result = '', currentNode = this[HEAD];
    while (currentNode) {
      result += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    return result;
  }
}
/* test


 let list = new singleLinkList();
 console.log(list.toString());

 list.append(1);
 list.append(2);
 list.append(3);
 list.append(4);
 console.log(list.toString());

 list.remove(3);
 console.log(list.toString());
 */


/**
 *
 */

module.exports = singleLinkList;
