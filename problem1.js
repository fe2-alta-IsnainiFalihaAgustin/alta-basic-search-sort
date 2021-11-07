

function findMinAndMax(arr) {

  let min = null
  let max = null
   
  for ( let i = 0; i < arr.length; i++) {
    if (min || max){
      if (min > arr[i]){
        min = arr[i]
      }
      if  (max < arr[i]){
        max = arr[i]
      }
    }

    if (!min) {
      min = arr[i]
    }
    if (!max) {
      max = arr[i]
    } 
    
  }
  return `min: ${min}, max: ${max}`;
}
console.log(findMinAndMax([5, 7, 4, -2, -1, 8]))
// min: -2 index: 3 max: 8 index: 5
console.log(findMinAndMax([2, -5, -4, 22, 7, 7]))
// min: -5 index: 1 max: 22 index: 3
console.log(findMinAndMax([4, 3, 9, 4, -21, 7]))
// min: -21 index: 4 max: 9 index: 2
console.log(findMinAndMax([-1, 5, 6, 4, 2, 18]))
// min: -1 index: 0 max: 18 index: 5
console.log(findMinAndMax([-2, 5, -7, 4, 7, -20]))
// min: -20 index: 5 max: 7 index: 4