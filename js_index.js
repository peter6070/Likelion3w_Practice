document.write('<p>살려주세요 ㅠㅠ</p>');
/*
//number
var num=10;
var floatNum = 10.1;
console.log(num, floatNum);

//string
var stringName = 'string';
console.log(stringName);

//Boolean
var isTrue = true;
var isFalse = false;
console.log(isTrue, isFalse);

//Undefined
var a;
console.log(a);
*/

//Object(객체)
/*
var student = {
    grade: 1,
    school: "lion school"
};
//console.log(student);
//console.log(typeof(student));

//객체 값 호출
var gradeInfo = student.grade;
console.log(gradeInfo);

//객체 키 호출
var key = Object.keys(student)[0];
console.log(key);

//객체 속성 추가
student.class = 3;
console.log(student);

//대괄호 표기법
console.log(student['class']);
*/

//symbol
/*
var n1 = 'a';
var n2 = 'a';
console.log(n1 == n2);

var n3 = Symbol('a');
var n4 = Symbol('a');
console.log(n3 == n4);

var myClass={
    [Symbol('e')]:1
    ,[Symbol('e')]:2
};
*/
/*
//1. 산술연산자
var a=10;
var b=3;
console.log(a+b, a-b, a*b, a/b, a++, ++b);
//2. 대입연산자
console.log(a+=b);
console.log(a);
//3. 비교연산자
console.log(2=='2');
console.log(2==='2');
//4. 논리연산자
console.log(2>3 || 5==5); //논리합 ||
console.log(2>3 && 5==5); //논리곱 &&
console.log(!(2>3) && 5==5); //부정 !
//5. typeof
console.log(typeof Symbol);
*/

//문자열
/*
var greeting = "Hello!";
var farewell = "Bye!";
var myname = 'John';
var sentence = greeting +'\n'+ myname;
console.log(sentence);
console.log(farewell +2);

//이스케이프 시퀀스
var sentence = greeting +'\t'+ myname;
console.log(sentence);
*/

//템플릿 리터럴
/*
var a=`안녕하세요
개척자여러분`;
console.log(a);

var price = 1000;
var c = `이 물건은 ${price}원입니다.`;
console.log(c);
//var b = "이 물건은" + price + "원입니다.""; 위 코드랑 같지만 위 코드가 쓰기 편함
var d = `이 물건은 ${250+1230}원입니다.`;
console.log(d);
*/

//문자열 함수
//indexOf()
/*
var str = "I am Iron man";
console.log(str.indexOf('man')); //man의 인덱스 위치값 반환

//slice
console.log(str.slice(0,4));

//toUpperCase, toLowerCase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//startsWith(), endsWith()
console.log(str.startsWith('am'));
console.log(str.endsWith('man'));

//includes()
console.log(str.includes('am')); 
*/

//배열
// var mbti = ['infp','enfj','intj'];
/*console.log(mbti[0]);
console.log(mbti.length);

mbti[3]='esfp'; //배열의 끝 인덱스보다 더 큰 인덱스에 값을 넣으면 자동으로 배열이 늘어남
console.log(mbti[3]);
console.log(mbti.length);

//push()
console.log(mbti.push('estp','istj'));
console.log(mbti[5]);
*/
//스프레드 문법
/*var newMBTI = [...mbti, 'estp','istj']; //요소를 뒤에 추가
console.log(mbti);
console.log(newMBTI);
var newMBTI = ['estp','istj', ...mbti]; //요소를 앞에 추가
console.log(mbti);
console.log(newMBTI);

//pop()
console.log(mbti.pop());

//unshift()
console.log(mbti.unshift('estp','istj'));

//shift()
console.log(mbti.shift());
console.log(mbti);*/

//배열 함수
//slice()
// console.log(mbti.slice(0,2));
// console.log(mbti.slice(-1));

//join()
// console.log(mbti.join());
// console.log(mbti.join('-'));
// console.log(mbti.join('|'));

//sort(), reverse()
// console.log(mbti.sort());
// console.log(mbti.sort().reverse());


//조건문
//if else
/*var a = 5;
if(a > 10) console.log(true);
else if(a==5) console.log(true);
else if(a==0) console.log('a == 0');
else console.log(false);*/

//switch
/*var mbti = 'infp';
var num;
switch(mbti){
    case 'infp':
        num = 'infp';
    case 'enfp':
        num = 'enfp';
    case 'istj':
        num = 'istj';
    default: num = '유효값 아님';
}
console.log(num);*/

//반복문
//for()
/*for(var i=10;i > 0;i--){
    console.log(i);
}
for(var i=0;i<10;i++){
    for(var j=0;j<10;j++)
        console.log(`${i}-${j}`);
}*/

//while()
/*var a = 10;
while(a > 0){
    console.log(a);
    a--;
}
//do-while
do{
    console.log(a);
    a--;
}while(a < 0);*/


//예외처리
/*try{
    throw new Error('에러');
}
catch(error){
    console.log('에러 발생');
    console.log(error);
}finally{
    console.log('무조건 실행');
}*/


//함수
/*function mul(a,b){
    return a*b;
}
console.log(mul(2,3));
var mul = function(a,b){
    return a*b;
}
console.log(mul(2,3));*/
/*
var a=10;
while(true){ //무한반복
    var a = 1000;
    break;
}
console.log(a);*/
//호이스팅
/*console.log(word); //undefined
word='happy'; //word에 값을 넣음
console.log(word); //happy
var word; //먼저 지정됨*/

//let
/*let word; //위로 올려놔야 정상 작동
console.log(word); //undefined
word='happy'; //word에 값을 넣음
console.log(word); //happy*/

/*let a = 10;
while(true){ //무한반복
    let a = 1000;
    break;
}
console.log(a);*/

//상수 const
/*const pi = 3.14;
console.log(pi);
pi = 4;*/
/*const student = {
    grade: 1,
    class: 3
};
student.grade = 2;
student ={
    num: 2023,
    grade: 2
};
console.log(student);*/

//화살표 함수
/*let plus = (a,b) =>{
    return a+b;
}*/
// let plus = (a,b) => a+b; //return없이 한줄로 작성가능
// console.log(plus(2,3));

// let print = word => console.log(word);
// print('hello');

let myFunc = () => 1;
console.log(myFunc());