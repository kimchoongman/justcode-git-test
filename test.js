function naturalNum() {

  let result = new Array();

  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(naturalNum());


// 1~50 자연수 중 짝수만 구하는 함수
// 변수에 배열 선언
// 반복문을 통해 1~50 까지 돌리고
// 결과 값 중 짝수만 담는 배열을 리턴
