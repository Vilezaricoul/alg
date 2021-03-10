const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let center;
    let found = false
    let pos = -1
    while(found === false && start <= end){
        
        center = Math.floor((start +  end)/2)
        count += 1
        if (array[center] === item) {
            found = true
            pos = center
            return pos;
        }
        if (item < array[center]) {
            end = center - 1

        } else{
            start = center + 1
        }
    }
    return pos;
}
console.log(binarySearch(array, 5))
console.log(count)