// https://leetcode.com/problems/largest-rectangle-in-histogram/

function largestRectangleArea(heights) {
    let best = 0;
    const stack = [{ height: 0, i: -1 }]

    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];
        
        while (height < last(stack).height) {
            step(i);
        }
        
        stack.push({ height, i });
    }

    while (stack.length > 1) {
        step(heights.length);
    }

    function step(i) {
        const h = stack.pop().height;
        const w = i - last(stack).i - 1;
        best = Math.max(best, w * h);
    }

    return best;
}

function last(stack) {
    return stack[stack.length - 1];
}