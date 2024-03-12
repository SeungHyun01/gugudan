const readline = require('readline');

// Readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 구구단 출력 함수
function printMultiplicationTable(num) {
    console.log(`--- ${num}단 ---`);
    // 입력된 숫자에 해당하는 단의 구구단 출력
    for (let i = 1; i <= 9; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// 사용자에게 입력 요청
rl.question('Enter a number (1-9) for the multiplication table: ', (answer) => {
    const num = parseInt(answer);
    if (num >= 1 && num <= 9) {
        printMultiplicationTable(num);
    } else {
        console.log('Please enter a number between 1 and 9.');
    }
    
    // 인터페이스 종료
    rl.close();
});

