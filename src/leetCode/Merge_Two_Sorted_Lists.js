/**
 * Created by SHENJO on 10/24/2017.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val;
  this.next = null;
}


var mergeTwoLists = function(l1, l2) {
  let head = null, current = null;
  while (l1 && l2) {
    let v1 = l1.val, v2 = l2.val;
    if (v1 <= v2) {
      l1 = l1.next;
      addToHead( v1);
    } else {
      l2 = l2.next;
      addToHead(v2);
    }
  }
  while (l1) {
    addToHead(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    addToHead(l2.val);
    l2 = l2.next;
  }
  return head;

  function addToHead (val) {
    if (!head) {
      head = new ListNode(val);
      current = head;
    } else {
      current.next = new ListNode(val);
      current = current.next;
    }
    return { head, current };
  }
};

let l1 = new ListNode(5), l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(4)
console.log(mergeTwoLists(l1, l2))