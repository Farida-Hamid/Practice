/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackets = [];
    let table = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    console.log(table)

    for(let i = 0; i<s.length; i++){
        //if currrent char is an openning bracket push to brackets
        // console.log('beginning', brackets);
        if('{[('.includes(s[i])){
            brackets.push(s[i]);
        }
        else {
            let popped = brackets.pop();
            if(table.get(popped) != s[i]){
            // else check if the closing bracket = bracket.pop
                return false;
            }
        }
    }
    return true
};
