function solution(genres, plays) {
    let answer = [];

    let total = {};
    let list = genres.map((v, i) => {
        let play = plays[i];
        let tmp = {
            id: i,
            genres: v,
            plays: play
        }
        total[v] = (total[v] || 0) + play
        return tmp;
    });

    let rankList = Object
        .entries(total)
        .sort((a, b) => b[1] - a[1])
        .map(v => v[0]);

    //console.log(list);
    //console.log(total);
    //console.log(rankList)

    answer = rankList.map((rank) => {
        let tmp = list
            .filter(v => v.genres == rank)
            .sort((a, b) => {
                let result = b.plays - a.plays
                return result === 0 
                    ? a.id -b.id
                    : result
            });
        //console.log(rank, tmp)

        return tmp.slice(0, 2).map(v => v.id);
    }).flat();

    return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));