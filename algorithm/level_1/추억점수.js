const param = {
    name: ["may", "kein", "kain", "radi"],
    yearning: [5, 10, 1, 3],
    photo: [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]],
};

function solution(name, yearning, photo) {
    let answer = [];

    answer = photo.map((v, i) => {
        return v.reduce((p, n) => {
            return p + (yearning[name.findIndex(x => x === n)] ?? 0)
        }, 0)
    });

    return answer;
};

console.log(solution(
    param.name,
    param.yearning,
    param.photo,
));