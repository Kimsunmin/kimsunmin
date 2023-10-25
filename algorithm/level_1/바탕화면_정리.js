const wallpaper = ["..........", ".....#....", "......##..", "...##.....", "....#....."];

function solution(wallpaper) {

    let w = [];
    let h = [];

    wallpaper.forEach((v, i) => {
        v.split('').forEach((x, j)=>{
            if(x === '#') {
                w.push(i);
                h.push(j);
            }    
        })
    })

    w.sort((a, b) => a - b);
    h.sort((a, b) => a - b);

    return [w[0], h[0], w[w.length - 1] + 1, h[h.length - 1] + 1];
}

console.log(solution(wallpaper));