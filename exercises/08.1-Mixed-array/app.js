var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let newArray = []

function myFunc(){
    for(let i = 0; i < mix.length; i++){
        newArray.push(typeof mix[i])
    }
   
    return newArray
}
    console.log(myFunc())
    