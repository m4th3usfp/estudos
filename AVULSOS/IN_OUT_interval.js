
let lines = [10,20];
let inInterval = 0;
let outInterval = 0;

for(let i = 0; i < lines.length; i++) {
    if(lines[i] >= 10 && lines[i] <= 20) {
        inInterval++;
    } else {
        outInterval++;
    }

}
console.log(`${inInterval} in`);
console.log(`${outInterval} out`);




