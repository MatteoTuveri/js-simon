const numbers = [];
const stamp = document.getElementById('numbers')
for(i=0;i<5;i++){
    numbers.push(getRndInteger(1,100));
}
stamp.innerHTML=`${numbers}`
setTimeout(myFunction, 30000);

function myFunction(){
    alert(`30 secondi`);
}

/* genera un numero casuale pescando da un campo di valori da min a max */
/**
*@param {number} min
*@param {number} max
*
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}