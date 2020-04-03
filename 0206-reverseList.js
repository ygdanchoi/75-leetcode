// https://leetcode.com/problems/reverse-linked-list/

function reverseList(head) {
    if (!head) {
        return null;
    }
    
    let prev = null;
    let curr = head;
    let next = head.next;
    
    while (curr) {
        curr.next = prev;
        
        prev = curr;
        curr = next;
        next = (next !== null) ? next.next : null;
    }
    
    return prev;
}