function solution(nums) {

    let n = nums.length / 2;
    let m = new Set([...nums]).size;

    return Math.min(n, m);
}

const nums = [3,3,3,2,2,4];
console.log(solution(nums))