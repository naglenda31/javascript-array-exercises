var arr = [4,5,734,43,45];


for(let i = 0; i < 10; i++){
    function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    arr.push(getRndInteger(10, 20))
}
//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
// for(let i = 0; i<10;i++){
//         your loop content here   
// }
//*****************

console.log(arr);