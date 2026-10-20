(function(){
 'use strict';
 const inputs={students:document.getElementById('student-count'),teachers:document.getElementById('teacher-count')};
 if(!inputs.students||!inputs.teachers)return;
 const money=n=>'PKR '+Math.round(n).toLocaleString('en-PK');
 const read=input=>{const raw=Number(input.value);return Number.isFinite(raw)?Math.max(0,Math.min(100000,Math.floor(raw))):0};
 const set=(id,value)=>{const e=document.getElementById(id);if(e)e.textContent=value};
 function update(){
  const students=read(inputs.students), teachers=read(inputs.teachers);
  const sFee=students*50,tFee=teachers*150,unadjusted=sFee+tFee;
  const total=Math.max(10000,unadjusted),adjustment=total-unadjusted;
  set('calc-total',money(total));
  set('calc-caption',students.toLocaleString('en-PK')+' student'+(students===1?'':'s')+' + '+teachers.toLocaleString('en-PK')+' teacher'+(teachers===1?'':'s'));
  set('calc-students-price',money(sFee));set('calc-teachers-price',money(tFee));
  set('calc-min-adjustment',money(adjustment));
  set('calc-upfront',money(total/2));set('calc-deploy',money(total/2));
  const row=document.getElementById('calc-min-row');if(row)row.style.display=adjustment>0?'flex':'none';
 }
 Object.values(inputs).forEach(e=>e.addEventListener('input',update));
 document.querySelectorAll('.calc-preset').forEach(btn=>btn.addEventListener('click',()=>{
  inputs.students.value=btn.dataset.students;inputs.teachers.value=btn.dataset.teachers;update();
 }));
 update();
})();