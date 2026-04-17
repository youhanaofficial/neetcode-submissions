class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s){
    const brackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };

    let bracketArray = [];

    for (let char of s){
        if(brackets[char]){
            bracketArray.push(char);
        } else if(char === ")" || char === "}" || char === "]") {
            let lastArryBracket = bracketArray.pop();
            if(brackets[lastArryBracket] !== char){
                return false;
            }
        }

    }
    return bracketArray.length === 0;
}
}
