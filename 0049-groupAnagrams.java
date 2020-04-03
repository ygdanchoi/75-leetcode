// https://leetcode.com/problems/group-anagrams/

class Solution {
    private static final int OFFSET = 'a';
    
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> anagrams = new HashMap<>();
        
        for (String str : strs) {
            String key = getKey(str);
            
            anagrams.putIfAbsent(key, new ArrayList<>());
            anagrams.get(key).add(str);
        }
        
        return new ArrayList<>(anagrams.values());
    }
    
    private String getKey(String str) {
        char[] counts = new char[26];
        
        for (char c : str.toCharArray()) {
            counts[c - OFFSET]++;
        }
        
        return String.valueOf(counts);
    }
}