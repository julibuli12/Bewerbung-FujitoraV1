const pages=[...document.querySelectorAll('.page')];
const dots=document.querySelector('.dots');
let index=0;
const kanjiSets=[
  ["藤虎","正義","重力","海軍"],
  ["藤虎","誠","心","侍"],
  ["力","経験","魂","義"],
  ["規律","責任","道","剣"],
  ["正義","信念","紫","虎"],
  ["重力","静寂","覚悟","刃"],
  ["目標","名誉","未来","海"],
  ["武士","弱点","強さ","心"],
  ["運命","感謝","終","光"]
];
const kanjiEls=[...document.querySelectorAll('.kanji')];
pages.forEach((_,i)=>{const d=document.createElement('div');d.className='dot';d.onclick=()=>show(i);dots.appendChild(d)});
function show(i){index=(i+pages.length)%pages.length;pages.forEach((p,n)=>p.classList.toggle('active',n===index));document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===index));document.querySelector('.prev').style.opacity=index===0?'.45':'1';kanjiEls.forEach((el,n)=>el.textContent=kanjiSets[index][n]);}
document.querySelectorAll('.next').forEach(b=>b.onclick=()=>show(index+1));
document.querySelector('.prev').onclick=()=>show(index-1);
document.querySelector('.restart').onclick=()=>show(0);
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')show(index+1);if(e.key==='ArrowLeft')show(index-1)});
show(0);
