const park = 	["OSO", "OOO", "OXO", "OOO"];
const routes = 	["E 2", "S 3", "W 1"];

function solution(park, routes) {
    let start = [];

    let park2 = park.map((v, i) => {
        let tmp = v.indexOf('S');

        if( tmp > -1) {
            start = [i, tmp]
        }

        return v.split('');
    });

    let maxH = park2.length - 1;
    let maxW = park2[0].length - 1;
    
    let pos = [...start];
    routes.forEach((v) => {
        const [d, n] = v.split(' ');
        
        let [h, w] = [...pos];
        for(let i=0; i<Number(n); i++){
            
            if(d === 'W') w -= 1
            else if(d === 'E') w += 1
            else if(d === 'N') h -= 1
            else if(d === 'S') h += 1
            
            if(
                h < 0 ||
                w < 0 ||
                h > maxH ||
                w > maxW ||
                park2[h][w] === 'X'
            ) {
                [h, w] = [...pos];
                break;
            }
            
        }
        pos = [h, w];
    });

    return pos;
}

console.log(solution(park, routes))