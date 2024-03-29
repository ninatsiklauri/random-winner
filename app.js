function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}

let dieSides = 3;


function rollDie() {
  return getRandomNumber(dieSides);
}


function CalculateStatistics() {
  let data = {};
  let loopTime = 4;
  [...Array(dieSides).keys()].map(x=>{
    data[x + 1] = 0
  });
  
  for(let i = 0; i < loopTime; i++){
    let dice = rollDie();
    console.log(data[dice]++)
  } 

  return Object.keys(data).map(x => {return { side:x, times: data[x], percentage: (data[x]*100) / loopTime + "%"}});
}


console.log(CalculateStatistics());
