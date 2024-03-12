// 구구단을 출력하는 함수
function printMultiplicationTable() {
    // 2부터 9까지의 단을 반복
    for (let i = 2; i <= 9; i++) {
        console.log(`--- ${i}단 ---`);
        // 각 단에서 1부터 9까지의 곱셈 결과 출력
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(); // 각 단 사이에 공백 추가
    }
}

// 구구단 출력 함수 호출
printMultiplicationTable();
