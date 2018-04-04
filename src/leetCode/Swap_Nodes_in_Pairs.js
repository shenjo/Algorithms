/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    if(!head || !head.next) return head;
    let v1 = head, v2 = head.next, v3 = v2.next;
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};

function ListNode(val){
    this.val = val;
    this.next = null;
}


var removeDuplicates = function(nums) {
    return [...new Set(nums)];
};

console.log(removeDuplicates([1,1,2]))
