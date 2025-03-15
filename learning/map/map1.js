const nums = [1,4,6,8,4,1000]
const pairs = nums.map((n) => n%2 == 0 && n > 6 )

console.log(pairs)//output -> [false, false, false, true, false, true]