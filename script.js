const pages=[...document.querySelectorAll('.page')];
const dots=document.querySelector('.dots');
const kanjiLeft=document.querySelector('.side-kanji.left');
const kanjiRight=document.querySelector('.side-kanji.right');
const kanjiPairs=[
  ['藤虎','正義'],
  ['盲目','信念'],
  ['力','心'],
  ['経験','物語'],
  ['重力','海軍'],
  ['静寂','剣士'],
  ['目標','名誉'],
  ['忍耐','覚悟'],
  ['運命','感謝']
];
let index=0;
let locked=false;

pages.forEach((_,i)=>{
  const d=document.createElement('div');
  d.className='dot';
  d.onclick=()=>show(i);
  dots.appendChild(d);
});

function setKanji(i){
  const pair=kanjiPairs[i]||kanjiPairs[0];
  kanjiLeft.textContent=pair[0];
  kanjiRight.textContent=pair[1];
}

function show(i){
  if(locked) return;
  const newIndex=(i+pages.length)%pages.length;
  if(newIndex===index && pages[index].classList.contains('active')) return;
  locked=true;
  const old=pages[index];
  old.classList.remove('active');
  old.classList.add('leaving');
  index=newIndex;
  setKanji(index);
  pages[index].classList.add('active');
  pages[index].classList.remove('leaving');
  document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===index));
  document.querySelector('.prev').style.opacity=index===0?'.45':'1';
  setTimeout(()=>{old.classList.remove('leaving');locked=false;},360);
}

document.querySelectorAll('.next').forEach(b=>b.onclick=()=>show(index+1));
document.querySelector('.prev').onclick=()=>show(index-1);
document.querySelector('.restart').onclick=()=>show(0);
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')show(index+1);if(e.key==='ArrowLeft')show(index-1)});

function createParticles(){
  const wrap=document.querySelector('.particles');
  for(let i=0;i<58;i++){
    const p=document.createElement('span');
    p.className='particle';
    p.style.left=Math.random()*100+'%';
    p.style.animationDuration=(7+Math.random()*8)+'s';
    p.style.animationDelay=(-Math.random()*12)+'s';
    p.style.setProperty('--drift',((Math.random()*160)-80)+'px');
    const size=2+Math.random()*5;
    p.style.width=size+'px';
    p.style.height=size+'px';
    wrap.appendChild(p);
  }
}

createParticles();
setKanji(0);
pages[0].classList.add('active');
document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===0));
document.querySelector('.prev').style.opacity='.45';
