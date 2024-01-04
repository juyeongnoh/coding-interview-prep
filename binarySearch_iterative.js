/**
 * 이진 탐색(반복형)
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} 찾을 시 해당 인덱스, 못 찾을 시 -1 리턴
 */
const binarySearch_iterative = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
      mid = parseInt((start + end) / 2);
    } else {
      start = mid + 1;
      mid = parseInt((start + end) / 2);
    }
  }
  return -1;
};
