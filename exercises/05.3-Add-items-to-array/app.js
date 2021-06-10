var arr = [4,5,734,43,45];

for(let i = 0; i < 2; i++){
    function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    arr.push(getRndInteger(1, 4))
}
// Your code here, use the push function and the random function.

console.log(arr);