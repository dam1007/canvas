//1. setting
/* const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); //context = 붓. 캔버스에 그림 그릴 때 사용.
canvas.width = 800; //css 말고 자스에도 설정 필요. canvas 이미지의 퀄리티 높이기 위해서.
canvas.height = 800; */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;


//2. 직사각형 그리기
/* ctx.rect(50, 50, 100, 100); //x, y, width, height
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath(); //이전 경로 끊고 다시 그리기
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill(); */

//3. moveTo, lineTo
/* ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.stroke(); */


//4. 집 그리기
/* ctx.fillRect(200, 200, 50, 200); //벽
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2;
ctx.strokeRect(300, 300, 50, 100); //문
ctx.fillRect(200, 200, 200, 20); //천장
ctx.moveTo(200, 200); //지붕
ctx.lineTo(325, 100); //지붕
ctx.lineTo(450, 200); //지붕
ctx.fill(); //지붕 */

// 내가 해보기
/* ctx.fillRect(200, 300, 50, 200);
ctx.fillRect(500, 300, 50, 200);
ctx.fillRect(335, 400, 80, 100);

ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(375, 200);
ctx.stroke();
ctx.moveTo(375, 200);
ctx.lineTo(550, 300);
ctx.stroke();
ctx.moveTo(200, 300);
ctx.lineTo(550, 300);
ctx.stroke();
ctx.moveTo(200, 500);
ctx.lineTo(550, 500);
ctx.stroke();
 */

// 5. 사람 그리기
ctx.fillRect(210 - 40, 200 - 20, 15, 100); //몸통
ctx.fillRect(350 - 40, 200 - 20, 15, 100);
ctx.fillRect(260 - 40, 200 - 20, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI); //머리
ctx.fill();

ctx.beginPath(); //눈
ctx.fillStyle = 'white';
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80, 8, 0, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(500, 500, 50, 0, 1.5 * Math.PI);
ctx.fill();