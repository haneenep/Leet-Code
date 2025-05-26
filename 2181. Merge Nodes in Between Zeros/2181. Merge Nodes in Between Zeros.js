/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let curr = head.next;
    let modify = head;
    while (curr) {
        let sum = 0;
        while (curr && curr.val !== 0) {
            sum += curr.val;
            curr = curr.next;
        }
        modify.val = sum;
        modify.next = curr ? curr.next : null;
        modify = modify.next;
        if (curr) curr = curr.next;
    }
    return head;
};