(function(){
  const toggle=document.querySelector('.nav-toggle'); const nav=document.getElementById('main-navigation');
  if(toggle&&nav){const close=()=>{toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');nav.classList.remove('nav-open')};
    toggle.addEventListener('click',()=>{const show=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(show));toggle.setAttribute('aria-label',show?'Close navigation':'Open navigation');nav.classList.toggle('nav-open',show)});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});document.addEventListener('click',e=>{if(!toggle.contains(e.target)&&!nav.contains(e.target))close()});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  }
  const y=document.querySelector('#footer-year');if(y)y.textContent=String(new Date().getFullYear());
})();
