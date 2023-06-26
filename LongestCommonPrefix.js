var longestCommonPrefix = function(strs) {
    let results = '';

    let current = strs[0];
    for(let n=1; n<strs.length; n++) {
        console.log("comparing", current, "to",strs[n])
        for(let j=0; j<strs[n].length; j++){
            if(current[j] == strs[n][j]) {
                results += current[j];
                console.log(results, current);
            }
            else {
                current = results;
                results = '';
                console.log("finally", current, results)
                break;
            }
        }
    }
    return current;
};
