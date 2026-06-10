(function(){
  var p=window.location.pathname.split('/').pop().replace('.html','')||'index';
  function dc(id){return 'font-label uppercase tracking-widest text-xs '+(p===id?'text-[#E9C349] font-bold border-b-2 border-[#E9C349] pb-1':'text-[#f2e5f0]/60 font-medium hover:text-[#FFB4A4] transition-colors duration-300');}
  function mc(id){return 'block font-label uppercase tracking-widest text-xs '+(p===id?'text-[#E9C349] font-bold':'text-[#f2e5f0]/60 hover:text-[#FFB4A4]');}
  var html='<nav id="main-nav" class="fixed top-0 w-full z-50 bg-[#3D1540]/80 backdrop-blur-xl shadow-[0_20px_40px_-5px_rgba(61,21,64,0.3)]">'
    +'<div class="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">'
    +'<a href="index.html" class="text-2xl font-headline font-black text-[#FFB4A4] no-underline">Formación Bíblica</a>'
    +'<div class="hidden md:flex items-center space-x-8">'
    +'<a href="index.html" class="'+dc('index')+'">Inicio</a>'
    +'<a href="features.html" class="'+dc('features')+'">Características</a>'
    +'<a href="pricing.html" class="'+dc('pricing')+'">Precios</a>'
    +'<a href="about.html" class="'+dc('about')+'">Acerca de</a>'
    +'</div>'
    +'<a href="signup.html" class="bg-gradient-to-br from-[#FFB4A4] to-[#6E2414] text-[#5D1809] px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg">Únete a la Lista →</a>'
    +'<button id="nav-toggle" class="md:hidden text-on-surface ml-4" aria-label="Menú"><span class="material-symbols-outlined">menu</span></button>'
    +'</div>'
    +'<div id="mobile-menu" class="flex-col px-8 pb-6 space-y-4 bg-[#3D1540]/95 backdrop-blur-xl md:hidden">'
    +'<a href="index.html" class="'+mc('index')+'">Inicio</a>'
    +'<a href="features.html" class="'+mc('features')+'">Características</a>'
    +'<a href="pricing.html" class="'+mc('pricing')+'">Precios</a>'
    +'<a href="about.html" class="'+mc('about')+'">Acerca de</a>'
    +'<a href="signup.html" class="block text-[#E8816A] font-label uppercase tracking-widest text-xs font-bold">Únete a la Lista →</a>'
    +'</div></nav>';
  var el=document.getElementById('nav-placeholder');
  if(el){el.outerHTML=html;}
  var btn=document.getElementById('nav-toggle'),menu=document.getElementById('mobile-menu');
  if(btn&&menu){btn.addEventListener('click',function(){menu.classList.toggle('open');});}
  window.addEventListener('scroll',function(){var n=document.getElementById('main-nav');if(n)n.classList.toggle('nav-scrolled',window.scrollY>50);});
})();
