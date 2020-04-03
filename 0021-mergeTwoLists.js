// https://leetcode.com/problems/merge-two-sorted-lists/

function mergeTwoLists(l1, l2) {
    const sentinel = new ListNode(null);
    let curr = sentinel;
    
    while (l1 || l2) {
        if (!l1) {
            step2();
        } else if (!l2) {
            step1();
        } else if (l1.val < l2.val) {
            step1();
        } else {
            step2();
        }
    }
        
    function step1() {
        curr.next = l1;
        l1 = l1.next;
        curr = curr.next;
    }
    
    function step2() {
        curr.next = l2;
        l2 = l2.next;
        curr = curr.next;
    }
    
    return sentinel.next;
}