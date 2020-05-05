let recursiveFunction = function (arr, x, start, end) { 
       
    
    if (start > end) return false; 
   
    
    let mid=Math.floor((start + end)/2); 
   
    
    if (arr[mid]===x) return true; 
   
    if(arr[mid] > x)  
        return recursiveFunction(arr, x, start, mid-1); 
    else
  
        return recursiveFunction(arr, x, mid+1, end); 
} 
   
// Driver code 
let arr = [4,5,7,9,1,2,6]; 
let x = 7; 
   
if (recursiveFunction(arr, x, 0, arr.length-1)) 
    console.log("Element is available in tha array "); 
else console.log("Element is not available in the array "); 
   
x = 9; 
   
if (recursiveFunction(arr, x, 0, arr.length-1)) 
    console.log("Element found "); 
else console.log("Element not found "); 