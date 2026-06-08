const pages=[...document.querySelectorAll('.page')];
const dots=document.querySelector('.dots');
let index=0;
pages.forEach((_,i)=>{const d=document.createElement('div');d.className='dot';d.onclick=()=>show(i);dots.appendChild(d)});
function show(i){index=(i+pages.length)%pages.length;pages.forEach((p,n)=>p.classList.toggle('active',n===index));document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===index));document.querySelector('.prev').style.opacity=index===0?'.45':'1';}
document.querySelectorAll('.next').forEach(b=>b.onclick=()=>show(index+1));
document.querySelector('.prev').onclick=()=>show(index-1);
document.querySelector('.restart').onclick=()=>show(0);
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')show(index+1);if(e.key==='ArrowLeft')show(index-1)});
show(0);
