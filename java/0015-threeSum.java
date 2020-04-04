// https://leetcode.com/problems/3sum/

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        
        for (int a = 0; a < nums.length - 2; a++) {
            if (a > 0 && nums[a - 1] == nums[a]) {
                continue; // skip duplicates
            }
            
            int b = a + 1;
            int c = nums.length - 1;
            
            while (b < c) {
                if (nums[a] + nums[b] + nums[c] < 0) {
                    b++;
                } else if (nums[a] + nums[b] + nums[c] > 0) {
                    c--;
                } else {
                    result.add(Arrays.asList(
                        nums[a],
                        nums[b],
                        nums[c]
                    ));
                    
                    b++;
                    while (b < c && nums[b - 1] == nums[b]) {
                        b++; // skip duplicates
                    }
                    c--;
                }
            }
        }
        
        return result;
    }
}