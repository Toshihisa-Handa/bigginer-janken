let gu = document.querySelector('#gu');
let choki = document.querySelector('#choki');
let pa = document.querySelector('#pa');
let myhand = document.querySelector('.myhand');
let judge= document.querySelector('.judge');
let enemyhand= document.querySelector('.enemyhand');
let janken ={1:'グー', 2:'チョキ', 3:'パー'};
let btn = document.querySelector('.btn');



//btnクラスを持つグー、チョキ、パーどれかをクリックするとクリックした
//btnのid属性をコンソールに表示したい
btn.onclick = clickfunc;

function clickfunc(event){  
  
let data = event.target.className;
console.log(data,'data');
let iddata = event.target.id;
console.log(iddata,'iddata');


}
