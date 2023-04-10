/*var el = document.getElementById('brand-title');
console.log(el);
console.log(el.innerHTML);
console.log(el.innerText);

el.innerText = '안녕하세용'; //el 텍스트 변경
el.innerHTML = '<a href="###">Hi</a>';*/

// var el = document.getElementsByClassName('sub-title'); //sub-title 클래스를 지닌 요소들 반환
// console.log(el);

var el = document.getElementById('brand-title');

var myfunc = function (){
    alert('addEventListener');
};

el.addEventListener("click",myfunc);
