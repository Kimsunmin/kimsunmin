function solution(clothes) {

    let obj = {};
    clothes.forEach(v => {
        let [name, type] = v;
        obj[type] = (obj[type] || 0) + 1;
    });

    

    return Object.entries(obj)
        .reduce((p, n) => p *= n[1] + 1, 1) -1;
}

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes))