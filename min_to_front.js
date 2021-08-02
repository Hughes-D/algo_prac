// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any 
// elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it 
// to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    var min = arr[0];
    var idx = 0;
    //Loop through arr and find min
    for(var i=0; i<arr.length-1; i++){
        if(arr[i] < min){
            min = arr[i];
            //set idx = index position of min
            idx = i;
        }
    }
    //loop through starting at index position of min, using temp variable to swap values
    for(var j=idx; j>0; j--){
        var temp = arr[j];
        arr[j]=arr[j-1];
        arr[j-1] = temp;
    }
    return arr;
}
minToFront([4,2,1,3,5]);