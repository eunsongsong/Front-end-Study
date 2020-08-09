console.log('Hello:)');

/* 1 */
// 변수 선언 : var, let, const
//  var로 변수를 선언할 경우 동일한 이름의 변수명을 사용할 수 있다 
var num;
num = 10;
num = 100;
console.log(num)

//  let으로 변수를 선언할 경우 동일한 이름의 변수명을 사용할 수 없다 !! 
let num2 = 20;
// let num2 = 200; // 동일한 변수명 사용 불가능
console.log(num2)

//  const로 변수를 선언할 경우 메모리를 가지고 있지만 변경 불가능(상수) !! 
const num3 = 10;
// num3 = 20 // 변경 불가능
console.log(num3)


/* 2 */
// 변수 작성 규칙
// 대문자, 소문자를 구분
// 영문, 숫자, _, $의 조합으로만 가능(단, 숫자로 시작 불가)
// 키워드를 변수로 선언 불가


/* 3 */
// 주석
// 한 줄
/* 여러 줄 */


/* 4 */
// 기본 자료형 : 숫자, 문자, 논리, 객체
let nnum = 10;
let fnum = 3.14;
let b = true;
let svar = 'Hong gil dong';
let tm = new Date();


/* 5 */
// 연산자
// 1) 산술 연산자 : + - * / %
let r = 10 % 3;

// 2) 비교 연산자 : > >= < <= == != === !==
let lo = 10 > 5;
console.log(lo);

// 3) 대입 연산자 : = += -= *= /= %=
let a = 10;
a += 20;
a -= 10;
a *= 4;
a /= 2;
a %= 3;

a = 10;
a *= 3 + 5; // a = a*(3+5)
console.log(a);

// 4) 증감 연산자: ++ --
a = 10;
a++;//a=a+1
++a;//a=a+1

b = a++//b=a, a=a+1
b = ++a//a=a+1, b=a

a = 10;
console.log(a++);
a = 10;
console.log(++a);

// 5) 논리 연산자 : || && !
let n1 = 10, n2 = 20, n3 = 30;
let m1 = n1 >= 10 || n2 <= 10;
console.log(m1);
let m2 = n1 >= 10 && n2 <= 10; // 둘 다 true일 때 true
console.log(m2);
let m3 = !(n1 >= 10);
console.log(m3)
let m4 = ++n2 <= 10 || n1 >= 10;
console.log(m4)
console.log(n2)
let m5 = n2 <= 10 && ++n1 >= 10;
console.log(m5);
console.log(n1);



// 6) 문자열 연산
let strvar = "Good " + "afternoon";
console.log(strvar);
// 서로 다른 타입의 변수도 가능 
console.log('hong gil dong' + ':' + 23) // 23을 문자열로 변환하여 연산
console.log('123' + 7 + 7); // 7을 문자열로 변환하여 연산 
console.log(7 + 7 + '123') // 7+7 연산을 먼저 수행한 후, 그 결과인 14를 문자열로 변환하여 연산

let path = 'c:\\temp:\\' // \를 문자열로 인식하기 위해서는 이스케이프 문자와 구분하기 위해 \\으로 쓴다
console.log(path);
let vstr2 = 'I\'m a boy';
console.log(vstr2);
let vstr3 = "I'm a boy";
console.log(vstr3);

/*
 * \t : 수평 탭
 * \n : 줄 바꿈
 * \b : beep(소리)
 */

console.log('Good afternoon'[0]);
console.log(vstr2[2]);

let age = 23;
console.log(`gildong age: ${age}`);
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`);


/* 6 */
// typeof
let v1 = 10;
let v2 = 'hong';

let v3 = new Date();
let v4 = true;
let v5 = function () { };
let v6;
console.log(typeof (v1));
console.log(typeof (v2));
console.log(typeof (v3));
console.log(typeof (v4));
console.log(typeof (v5));
console.log(typeof (v6));

/* 7 */
// 강제 형 변환 함수 : Number(), Boolean(), String()
// 1) 숫자 타입으로 변경
// 숫자로 되어 있는 문자열을 숫자 타입으로 변경
let nv1 = Number("20")
console.log(typeof (nv1));

// 숫자가 아닌 문자열을 숫자 타입으로 변경
let nv2 = Number("a")
console.log(nv2);
console.log(typeof (nv2));

// boolean 타입을 숫자 타입으로 변경
console.log(Number(true));

// 2) Boolean 타입으로 변경
console.log(Boolean(123)); // true
console.log(Boolean(0)); // false
console.log(Boolean('hi')); // true
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false

// 3) 문자열 타입으로 변경
let sv1 = String(12);
console.log(typeof(sv1));
console.log(String(true));
console.log(typeof(String(true)));









