let gu = document.querySelector('#gu');
let choki = document.querySelector('#choki');
let pa = document.querySelector('#pa');
let myhand = document.querySelector('.myhand');
let judge= document.querySelector('.judge');
let enemyhand= document.querySelector('.enemyhand');


gu.onclick = function () { 
let r = Math.floor(Math.random()*3+1);
console.log(r);

myhand.innerHTML ='グー'
if(r==1){
  enemyhand.innerHTML ='グー';
  judge.innerHTML='アイコ'
}else if(r==2){
  enemyhand.innerHTML ='チョキ';
  judge.innerHTML='勝ち'
}else if(r==3){
  enemyhand.innerHTML ='パー';
  judge.innerHTML='負け'
}
 }

choki.onclick = function () { 
let r = Math.floor(Math.random()*3+1);
console.log(r);

myhand.innerHTML ='チョキ'
if(r==1){
  enemyhand.innerHTML ='グ-';
  judge.innerHTML='負け'
}else if(r==2){
  enemyhand.innerHTML ='チョキ';
  judge.innerHTML='アイコ'
}else if(r==3){
  enemyhand.innerHTML ='パー';
  judge.innerHTML='勝ち'
}
 }

pa.onclick = function () { 
let r = Math.floor(Math.random()*3+1);
console.log(r);

myhand.innerHTML ='パー'
if(r==1){
  enemyhand.innerHTML ='グー';
  judge.innerHTML='勝ち'
}else if(r==2){
  enemyhand.innerHTML ='チョキ';
  judge.innerHTML='負け'
}else if(r==3){
  enemyhand.innerHTML ='パー';
  judge.innerHTML='アイコ'
}
 }
