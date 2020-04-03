// https://leetcode.com/problems/merge-k-sorted-lists/

function mergeKLists(lists) {
    const sentinel = new ListNode(null);
    let curr = sentinel;
    
    while (lists.some(list => !!list)) {
        let minI = -1;
        
        for (let i = 0; i < lists.length; i++) {
            if (!lists[i]) {
                continue;
            }
            
            if (minI === -1 || lists[i].val < lists[minI].val) {
                minI = i;
            }
        }
        
        curr.next = lists[minI];
        curr = curr.next;
        lists[minI] = lists[minI].next;
    }
    
    return sentinel.next;
}