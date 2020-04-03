// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function removeNthFromEnd(head, n) {
    const sentinel = new ListNode(null);
    sentinel.next = head;
    
    let length = 0;
    let curr = sentinel.next;
    
    while (curr) {
        length++;
        curr = curr.next;
    }
    
    curr = sentinel;
    for (let i = 0; i < length - n; i++) {
        curr = curr.next;
    }
    
    curr.next = curr.next.next;
    return sentinel.next;
}

function removeNthFromEnd(head, n) {
    function step(node) {
        if (!node) {
            return null;
        }
        
        node.next = step(node.next);  
        n--;

        return (n === 0)
            ? node.next
            : node;
    }
    
    return step(head);
}