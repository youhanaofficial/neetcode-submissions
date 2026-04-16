class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let hashMap = new Map();
        for(let char of s){
            let count = hashMap.get(char);
            if(count === undefined){
                count=0;
            }
            hashMap.set(char, ++count);
        }
        for(let char of t){
            let count = hashMap.get(char);
            if(count === undefined){
                count=0;
            }
            hashMap.set(char, --count);
        }
        for(let [char, count] of hashMap){
            if(count != 0){
                return false;
            } 
        }
        return true;
}
}
