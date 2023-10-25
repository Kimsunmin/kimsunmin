function solution(n, lost, reserve) {

    let rReserve = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b);
    let rLost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);

    const notSave = rLost.filter((lost) => {

        const save = rReserve.find((reserve) => {
            console.log(`reserve: ${reserve}, lost: ${lost}, val: ${Math.abs(reserve - lost)}`);
            return Math.abs(reserve - lost) === 1
        });

        if(!save) return lost;

        rReserve = rReserve.filter((reserve) => save !== reserve);
    });

    return n - notSave.length;
}


const n = 5;
const lost = [2, 3];
const reserve = [5];

console.log(solution(n, lost, reserve));