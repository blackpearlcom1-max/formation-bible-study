/**
 * Formación Bíblica (ES) — Shared Site Components
 * -------------------------------------------------
 * Spanish-language version of components.js.
 * Injects the global nav and footer into every ES page.
 * To update nav links or footer content for ALL Spanish pages, edit this file only.
 *
 * Usage in any ES HTML page:
 *   1. Add <div id="site-nav"></div> where the nav goes (top of <body>)
 *   2. Add <div id="site-footer"></div> where the footer goes (bottom of <body>)
 *   3. Add <script src="/components.js"></script> in <head>
 */

(function () {

  /* ─── NAV ─────────────────────────────────────────────────────────────── */
  var NAV_HTML = `
<nav id="main-nav" class="fixed top-0 w-full z-50 bg-[#3D1540]/80 backdrop-blur-xl shadow-[0_20px_40px_-5px_rgba(61,21,64,0.3)]">
  <div class="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
    <a href="/index.html" class="text-2xl font-headline font-black text-[#FFB4A4] no-underline">Formación Bíblica</a>
    <div class="hidden md:flex items-center space-x-8">
      <a href="/index.html"       data-nav="inicio"         class="nav-link font-label uppercase tracking-widest text-xs transition-colors duration-300">Inicio</a>
      <a href="/features.html"    data-nav="caracteristicas" class="nav-link font-label uppercase tracking-widest text-xs transition-colors duration-300">Características</a>
      <a href="/pricing.html"     data-nav="precios"         class="nav-link font-label uppercase tracking-widest text-xs transition-colors duration-300">Precios</a>
      <a href="/about.html"       data-nav="acerca"          class="nav-link font-label uppercase tracking-widest text-xs transition-colors duration-300">Acerca de</a>
      <a href="/demo"             data-nav="demo"            class="nav-link font-label uppercase tracking-widest text-xs transition-colors duration-300">Ver la Demo</a>
    </div>
    <a href="/beta.html" class="bg-gradient-to-br from-[#FFB4A4] to-[#6E2414] text-[#5D1809] px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg">Regístrate Gratis →</a>
    <button id="nav-toggle" class="md:hidden text-[#f2e5f0] ml-4" aria-label="Abrir menú">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
  <div id="mobile-menu" class="hidden flex-col px-8 pb-6 space-y-4 bg-[#3D1540]/95 backdrop-blur-xl md:hidden">
    <a href="/index.html"    class="block text-[#f2e5f0]/60 font-label uppercase tracking-widest text-xs hover:text-[#FFB4A4]">Inicio</a>
    <a href="/features.html" class="block text-[#f2e5f0]/60 font-label uppercase tracking-widest text-xs hover:text-[#FFB4A4]">Características</a>
    <a href="/pricing.html"  class="block text-[#f2e5f0]/60 font-label uppercase tracking-widest text-xs hover:text-[#FFB4A4]">Precios</a>
    <a href="/about.html"    class="block text-[#f2e5f0]/60 font-label uppercase tracking-widest text-xs hover:text-[#FFB4A4]">Acerca de</a>
    <a href="/demo"          class="block text-[#f2e5f0]/60 font-label uppercase tracking-widest text-xs hover:text-[#FFB4A4]">Ver la Demo</a>
    <a href="/beta.html"     class="block text-[#FFB4A4] font-label uppercase tracking-widest text-xs font-bold">✨ Pregunta la Palabra</a>
    <a href="/beta.html"     class="block text-[#E8816A] font-label uppercase tracking-widest text-xs font-bold">Regístrate Gratis →</a>
  </div>
</nav>`;

  /* ─── FOOTER ──────────────────────────────────────────────────────────── */
  var FOOTER_HTML = `
<footer class="w-full border-t border-[#f2e5f0]/10 bg-[#3D1540]">
  <div class="max-w-7xl mx-auto px-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

      <!-- Marca -->
      <div class="md:col-span-1">
        <div class="text-xl font-headline font-bold text-[#FFB4A4] mb-4">Formación Bíblica</div>
        <p class="text-[#f2e5f0]/40 text-xs leading-relaxed font-body">Herramientas de estudio bíblico fundamentadas en las Escrituras. Sin presión. Sin requisitos previos. Solo la Palabra.</p>
        <a href="https://formationbible.com" class="inline-block mt-4 text-[10px] font-label uppercase tracking-widest text-[#e9c349] hover:text-[#FFB4A4] transition-colors">🌐 Also in English →</a>
      </div>

      <!-- Producto -->
      <div>
        <p class="font-label text-[10px] uppercase tracking-[0.2em] text-[#f2e5f0]/30 mb-5">Producto</p>
        <ul class="space-y-3">
          <li><a href="/features.html"     class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Características</a></li>
          <li><a href="/pricing.html"      class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Precios</a></li>
          <li><a href="/how_it_works.html" class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Cómo Funciona</a></li>
          <li><a href="/study-library.html" class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Biblioteca de Estudios</a></li>
          <li><a href="/faq.html"          class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Preguntas Frecuentes</a></li>
          <li><a href="/beta.html"         class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Regístrate Gratis</a></li>
        </ul>
      </div>

      <!-- Recursos -->
      <div>
        <p class="font-label text-[10px] uppercase tracking-[0.2em] text-[#f2e5f0]/30 mb-5">Recursos</p>
        <ul class="space-y-3">
          <li><a href="/about.html"             class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Sobre Nosotros</a></li>
          <li><a href="/mission.html"           class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Nuestra Misión</a></li>
          <li><a href="/statement_of_faith.html" class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Declaración de Fe</a></li>
          <li><a href="/inductive-study-romans.html" class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Guía: Estudiar Romanos</a></li>
          <li><a href="/color-coding-bible.html" class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Guía: Colorear Tu Biblia</a></li>
          <li><a href="/greek-interlinear-beginners.html" class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Guía: Interlineal Griego para Principiantes</a></li>
          <li><a href="/help.html"              class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Centro de Ayuda</a></li>
          <li><a href="/contact.html"           class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Contacto</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <p class="font-label text-[10px] uppercase tracking-[0.2em] text-[#f2e5f0]/30 mb-5">Legal</p>
        <ul class="space-y-3">
          <li><a href="/privacy_policy.html" class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Política de Privacidad</a></li>
          <li><a href="/terms.html"          class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Términos de Servicio</a></li>
          <li><a href="/cookie_policy.html"  class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Política de Cookies</a></li>
          <li><a href="/billing_terms.html"  class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Términos de Facturación</a></li>
          <li><a href="/ai_disclaimer.html"  class="text-[#f2e5f0]/50 text-sm font-body hover:text-[#E8816A] transition-all">Aviso de IA</a></li>
        </ul>
      </div>

    </div>
    <div class="pt-8 border-t border-[#f2e5f0]/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-[#f2e5f0]/30 font-body text-[10px] uppercase tracking-widest">© 2026 Berean Defense LLC. Todos los derechos reservados.</p>
      <p class="text-[#f2e5f0]/20 font-body text-[10px]">Wyoming · EIN registrado · formacion-biblica.com</p>
    </div>
  </div>
</footer>`;

  /* ─── ACTIVE NAV STATE ────────────────────────────────────────────────── */
  var NAV_MAP = {
    inicio:          ['/', '/index.html'],
    caracteristicas: ['/features.html', '/features'],
    precios:         ['/pricing.html',  '/pricing'],
    acerca:          ['/about.html',    '/about'],
    demo:            ['/demo.html',     '/demo'],
  };

  function setActiveNav() {
    var path = window.location.pathname;
    var activeClasses   = 'text-[#E9C349] font-bold border-b-2 border-[#E9C349] pb-1';
    var inactiveClasses = 'text-[#f2e5f0]/60 font-medium hover:text-[#FFB4A4]';

    Object.keys(NAV_MAP).forEach(function (key) {
      var el = document.querySelector('[data-nav="' + key + '"]');
      if (!el) return;
      var isActive = NAV_MAP[key].some(function (p) {
        return path === p || path.endsWith(p);
      });
      el.classList.remove('text-[#f2e5f0]/60', 'font-medium', 'hover:text-[#FFB4A4]',
                          'text-[#E9C349]', 'font-bold', 'border-b-2', 'border-[#E9C349]', 'pb-1');
      if (isActive) {
        activeClasses.split(' ').forEach(function (c) { el.classList.add(c); });
      } else {
        inactiveClasses.split(' ').forEach(function (c) { el.classList.add(c); });
      }
    });
  }

  /* ─── NAV BEHAVIOURS ─────────────────────────────────────────────────── */
  function initNavBehaviours() {
    var toggle = document.getElementById('nav-toggle');
    var menu   = document.getElementById('mobile-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var isOpen = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden', isOpen);
        menu.classList.toggle('flex',   !isOpen);
      });
    }
    var nav = document.getElementById('main-nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('bg-[#3D1540]/95', window.scrollY > 50);
        nav.classList.toggle('bg-[#3D1540]/80', window.scrollY <= 50);
      }, { passive: true });
    }
  }

  /* ─── INJECT ─────────────────────────────────────────────────────────── */
  function inject() {
    var navPlaceholder    = document.getElementById('site-nav');
    var footerPlaceholder = document.getElementById('site-footer');
    if (navPlaceholder)    navPlaceholder.outerHTML    = NAV_HTML;
    if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
    setActiveNav();
    initNavBehaviours();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
