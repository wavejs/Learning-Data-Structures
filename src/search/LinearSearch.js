// 선형 검색
function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    // 값을 찾으면 반환
    if (arr[i] === val) {
      return val;
    }
  }

  // 값을 못찾으면 null 리턴
  return null;
}

module.exports = linearSearch;