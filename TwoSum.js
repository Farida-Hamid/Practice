var twoSum = function(nums, target) {
    let table = {};
    let needs = 0;

    for(let i = 0; i < nums.length; i++){
        needs = target - nums[i];

        if(table[needs] !== undefined){
            return [table[needs], i]
        }
        else {
            table[nums[i]] = i;
        }
    }
};
