function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let leftIndex = lowerBound(arr, leftValue);
  let rightIndex = upperBound(arr, rightValue);
  return rightIndex - leftIndex;
}
