class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
    if(s == s.split("").reverse().join("")){
        return true;
    } else {
    return false;
    }
}
}

