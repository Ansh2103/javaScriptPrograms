const insertionSort = (nums) => {

    for (let i = 1; i < nums.length; i++) {

      let j = i - 1;
      let temp = nums[i];
      while (j >= 0 && nums[j] > temp) {

        nums[j + 1] = nums[j];
        j--;
      }
      nums[j+1] = temp;
    }
    return nums;
  }
  console.log(insertionSort([4,5,8,9,-1,7,3,1]));
  console.log(insertionSort([7,2,-2,3,33,18,-30,2,12,6,5,12,-1,3,8,7,1,1,44]));
  