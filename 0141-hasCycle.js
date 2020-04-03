// https://leetcode.com/problems/linked-list-cycle/

function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }
    
    let slow = head.next;
    let fast = head.next.next;
    
    while (slow) {
        if (slow === fast) {
            return true;
        }
        
        slow = slow.next;
        fast = (fast && fast.next)
            ? fast.next.next
            : null;
    }
    
    return false;
}