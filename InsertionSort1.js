function InsertionSort(arr, callback){
    console.log(arr);
    
    var nums = nums.length,
     i,j,temp
    for ( i = 1; i<nums; i++) {

       j = i - 1;
       temp = nums[i];
      while (j >= 0 && nums[j] > temp) {

        nums[j + 1] = nums[j];
        j--;
      }
      nums[j+1] = temp;
    }
    callback(arr);
  }
  module.exports = InsertionSort
  