const array = [1,4,5,8,5,1,2,7,5,2,11];
let count = 0 ;
function LineSe(array, item){
    for (let i = 0; i <array.length; i++){
        count += 1;
        if(array[i] === item)
        {
            return i;
        }
    }
    return null;
}
console.log(LineSe(array, 11));
console.log('count = ', count);