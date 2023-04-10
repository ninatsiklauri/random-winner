const data = [
    { name: "nina", ticket:5 },
    { name: "shako", ticket:2 },
    { name: "nani", ticket:4 },
    { name: "lelako", ticket:7 },
    { name: "luka", ticket:10 },
];

let cylinder = [];
 
function pushNamesInCylinder() {
    if(cylinder){
        cylinder = [];
    }
    data.forEach(obj => {
        for (let i = 0; i < obj.ticket; i++) {
            cylinder.push(obj.name);
        }
    });
}
function getRandomName() {
    let random = cylinder[Math.floor(Math.random() * (cylinder.length - 1))];
    return random;
}

function checkProbability() { 
    let probabilityObj = {};
    let loopTime = 10;
    data.forEach(el => {
        [...Array(el.name).values()].map(x=>{
            probabilityObj[x] = 0
        });
    })
   
    for(let i = 0; i < loopTime; i++){
        let randomName = revealWinner();
        probabilityObj[randomName]++;
    } 

    return Object.keys(probabilityObj).map(x => {return {name: x, times: probabilityObj[x], percentage:((probabilityObj[x]*100) / loopTime).toFixed(1) + "%" }}) 
}


function revealWinner() {
    pushNamesInCylinder(data);
    var winner = getRandomName();
    return winner;
}

