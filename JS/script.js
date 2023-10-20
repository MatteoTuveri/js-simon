const numbers = [];
const userList = [];
const wrong = [];
const checked = [];
const stamp = document.getElementById('numbers');

for (i = 0; i < 5; i++) {
    numbers.push(getRndInteger(1, 100));
}
stamp.innerHTML = `${numbers}`
let time1 = setTimeout(delet,30000);
let time2 = setTimeout(program,30050);

console.log(numbers);

/* genera un numero casuale pescando da un campo di valori da min a max */
/**
*@param {number} min
*@param {number} max
*
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delet(){
    stamp.innerHTML = ` `
}

function program(){

    let i= 0;
    while (i< numbers.length){
        let answer = prompt(`inserisci numero`);
        if(isNaN(parseInt(answer))){
            alert(`inserisci numero`);
        }
        else{

            if(numbers.includes( parseInt(answer))){
                checked.push( parseInt(answer));
            }
            else{
                wrong.push( parseInt(answer));
            }
        }
        i++;

    }
    console.log(wrong);
    console.log(checked);
    stamp.innerHTML = `wrong numbers : ${wrong} <br> correct numbers: ${checked}`
}
