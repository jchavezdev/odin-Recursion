function mergeArrays(array){

    if(array.length <=1){
        return array;
    }

    let middle = Math.floor((array.length)/2);
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle,array.length);

    let sortedLeft = mergeArrays(leftArray);   
    let sortedRight = mergeArrays(rightArray); 

    return mergeSortedArrays(sortedLeft, sortedRight); 

}

function mergeSortedArrays(leftArray, rightArray){
    let array = []

    let i = 0, j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            array.push(leftArray[i]);
            i++;
        } else {
            array.push(rightArray[j]);
            j++;
        }
    }

    while (i < leftArray.length) {
        array.push(leftArray[i]);
        i++;
    }

    while (j < rightArray.length) {
        array.push(rightArray[j]);
        j++;
    }

    return array;
}

console.log(mergeArrays([1,5,7,4,2,3,8]));
