/*
kevin mora 
bingo
30/09/25
*/
let titulo = " B | I | N | G | O" ;
let bingo = [];
let numberOne;
let numberTwo;
let result;

for (numberOne = 1; numberOne <= 5; numberOne++) {
    let row = [];
    
    for (numberTwo = 1; numberTwo <= 5; numberTwo++) {
        result = (2 * numberOne) + (10 * (numberTwo - 1));
        row.push(result);
    }
    
    bingo.push(row);
}
console.log(titulo,bingo)
console.table(bingo)
// console.log I
console.log("I")

let i = []
for (let j = 0;j < 5; j++){

i.push(bingo[0][j]);
i.push(bingo[4][j]);
}
for (let t = 1;t < 4; t++){

i.push(bingo[t][2]);
}


console.log(i);
//consle.log(l) 
console.log("l");

let l = []
for (let j = 0;j < 5; j++){
l.push(bingo[j][0]);
}
for (let t = 1;t < 3; t++){
l.push(bingo[4][t]);
}
console.log(l);
//console.log(j);

console.log("j")
let j = []
for (let t = 2;t < 4; t++){
j.push(bingo[4][t]);
}
for (let t = 0;t < 5; t++){
j.push(bingo[t][4]);
}

console.log(j);

//console.log(x)
console.log("x")
let x = []
for (let t = 0;t < 5; t = t+1){
x.push(bingo[t][t]);
x.push(bingo[t][4-t]);
}
console.log(x);
//console.log(b)
console.log("B")
let b = []
for (let t = 0;t < 5; t++){
    b.push(bingo[t][0]);
}
console.log(b);







