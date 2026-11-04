(function(){
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.getElementById('main-navigation');
  if(toggle&&nav){
    const close=()=>{toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');nav.classList.remove('nav-open')};
    toggle.addEventListener('click',()=>{const show=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(show));toggle.setAttribute('aria-label',show?'Close navigation':'Open navigation');nav.classList.toggle('nav-open',show)});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
    document.addEventListener('click',e=>{if(!toggle.contains(e.target)&&!nav.contains(e.target))close()});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  }
  const year=document.querySelector('#footer-year');
  if(year)year.textContent=String(new Date().getFullYear());

  const config=window.SKOLSUP_CONFIG||{};
  const number=String(config.whatsappNumber||'').replace(/\D/g,'');
  const message=String(config.whatsappMessage||'Hello SkolSup, I would like to know more about your school management system.');
  const whatsappUrl=number?'https://wa.me/'+number+'?text='+encodeURIComponent(message):'';
  document.querySelectorAll('[data-whatsapp-link]').forEach(link=>{if(whatsappUrl)link.href=whatsappUrl});
  document.querySelectorAll('[data-whatsapp-number]').forEach(link=>{if(config.whatsappDisplay)link.textContent=config.whatsappDisplay;if(number)link.href='tel:+'+number});

  if(whatsappUrl&&!document.querySelector('.whatsapp-float')){
    const link=document.createElement('a');
    link.className='whatsapp-float';
    link.href=whatsappUrl;
    link.target='_blank';
    link.rel='noopener noreferrer';
    link.setAttribute('aria-label','Chat with SkolSup on WhatsApp');
    link.title='Chat with SkolSup on WhatsApp';
    link.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.8a8.2 8.2 0 0 1-12.15 7.15L3 20l1.08-4.83A8.2 8.2 0 1 1 20.2 11.8Z"/><path d="M8.1 7.7c.18-.4.38-.42.65-.42h.48c.2 0 .38.03.52.36l.72 1.7c.1.25.1.43-.07.63l-.52.61c-.16.18-.25.32-.1.58.34.6.82 1.14 1.38 1.57.62.48 1.22.8 1.77.99.22.08.38.04.53-.13l.68-.8c.18-.21.37-.25.6-.13l1.6.78c.28.14.42.22.44.4.02.2-.08 1.04-.68 1.57-.53.47-1.1.63-1.63.55-.53-.08-2.13-.68-3.58-1.91-1.25-1.06-2.13-2.36-2.47-3.02-.34-.66-.4-1.28-.25-1.75.14-.46.48-1.12.73-1.58Z"/></svg><span>WhatsApp</span>';
    document.body.appendChild(link);
  }
})();
