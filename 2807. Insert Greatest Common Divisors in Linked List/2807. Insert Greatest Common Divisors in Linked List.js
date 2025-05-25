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
var insertGreatestCommonDivisors = function (head) {
    if(!head || !head.next) return head;
    let curr = head;
    while (curr && curr.next) {
        const gcdValue = gcd(curr.val, curr.next.val);
        const gcdNode = new ListNode(gcdValue);
        gcdNode.next = curr.next;
        curr.next = gcdNode;
        curr = gcdNode.next;
    }
    return head;

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
};