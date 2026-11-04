(function(){
 'use strict';
 const input=document.getElementById('student-count');
 if(!input)return;
 const money=n=>'PKR '+Math.round(n).toLocaleString('en-PK');
 const read=()=>{const raw=Number(input.value);return Number.isFinite(raw)?Math.max(0,Math.min(100000,Math.floor(raw))):0};
 const set=(id,value)=>{const e=document.getElementById(id);if(e)e.textContent=value};
 function update(){
  const students=read();
  const subtotal=students*20;
  const total=Math.max(5000,subtotal);
  const adjustment=total-subtotal;
  set('calc-total',money(total));
  set('calc-caption',students.toLocaleString('en-PK')+' student'+(students===1?'':'s'));
  set('calc-students-price',money(subtotal));
  set('calc-min-adjustment',money(adjustment));
  set('calc-upfront',money(total/2));
  set('calc-deploy',money(total/2));
  const row=document.getElementById('calc-min-row');
  if(row)row.style.display=adjustment>0?'flex':'none';
 }
 input.addEventListener('input',update);
 document.querySelectorAll('.calc-preset').forEach(btn=>btn.addEventListener('click',()=>{
  input.value=btn.dataset.students;
  update();
 }));
 update();
})();
