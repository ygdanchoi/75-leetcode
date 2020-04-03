// https://leetcode.com/problems/reorder-list/

function reorderList(head) {
    const length = getLength(head);
    
    if (length === 0) {
        return null;
    } else if (length === 1) {
        return head;
    }
    
    let [a, b] = split(head, length);
    b = reverse(b);
    return merge(a, b);
}

function getLength(head) {
    let length = 0;
    
    while (head) {
        length++;
        head = head.next;
    }
    
    return length;
}

function split(head, length) {
    let prev = null;
    let curr = head;
        
    for (let i = 0; i < Math.ceil(length / 2); i++) {
        prev = curr;
        curr = curr.next;
    }
    
    prev.next = null;
    return [head, curr];
}

function reverse(head) {
    let prev = null;
    let curr = head;
    let next = head.next;
    
    while (curr) {
        curr.next = prev;
        
        prev = curr;
        curr = next;
        next = (next !== null)
            ? next.next
            : null;
    }
    
    return prev;
}

function merge(a, b) {
    const sentinel = new ListNode(null);
    let curr = sentinel;
    
    while (a) {
        curr.next = a;
        curr = curr.next;
        a = a.next;
        
        if (b) {
            curr.next = b;
            curr = curr.next;
            b = b.next;
        }
    }
    
    return sentinel.next;
}