/**
 * Formation Bible Study — Cookie Consent (Google Consent Mode v2)
 * -----------------------------------------------------------------
 * Loaded on every page alongside the GA4 snippet. GA4 is configured with
 * consent defaulted to "denied" in the inline gtag block in <head>; this
 * file shows a banner, and on Accept calls gtag('consent','update', ...)
 * to actually start analytics storage. Essential/auth cookies are not
 * gated here — they're not subject to consent under most frameworks and
 * the app would not function without them (see Cookie Policy).
 *
 * Choice is persisted in localStorage and can be changed anytime via the
 * small "Configuración de Cookies" tab this script injects after a choice is made.
 */
(function () {
  var STORAGE_KEY = 'fbs_cookie_consent'; // 'granted' | 'denied'

  function updateConsent(granted) {
    if (typeof gtag !== 'function') return;
    gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied'
    });
  }

  function injectStyles() {
    if (document.getElementById('fbs-cookie-style')) return;
    var css = ''
      + '#fbs-cookie-banner{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#3D1540;border-top:1px solid rgba(242,229,240,0.15);padding:18px 24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;font-family:inherit;box-shadow:0 -10px 30px rgba(0,0,0,0.3);}'
      + '#fbs-cookie-banner p{margin:0;color:#f2e5f0;opacity:.85;font-size:13px;line-height:1.5;max-width:640px;}'
      + '#fbs-cookie-banner a{color:#FFB4A4;text-decoration:underline;}'
      + '#fbs-cookie-actions{display:flex;gap:10px;flex-shrink:0;}'
      + '#fbs-cookie-banner button{font-family:inherit;font-size:13px;font-weight:700;border-radius:999px;padding:10px 20px;cursor:pointer;border:1px solid transparent;}'
      + '#fbs-cookie-accept{background:linear-gradient(135deg,#FFB4A4,#6E2414);color:#5D1809;}'
      + '#fbs-cookie-reject{background:transparent;color:#f2e5f0;border-color:rgba(242,229,240,0.3);}'
      + '#fbs-cookie-tab{position:fixed;left:16px;bottom:16px;z-index:9998;background:#3D1540;color:#f2e5f0;opacity:.8;font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:8px 14px;border-radius:999px;border:1px solid rgba(242,229,240,0.2);cursor:pointer;}'
      + '#fbs-cookie-tab:hover{opacity:1;}'
      + '@media (max-width:640px){#fbs-cookie-banner{flex-direction:column;align-items:stretch;}#fbs-cookie-actions{justify-content:stretch;}#fbs-cookie-actions button{flex:1;}}';
    var style = document.createElement('style');
    style.id = 'fbs-cookie-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function hideBanner() {
    var el = document.getElementById('fbs-cookie-banner');
    if (el) el.remove();
  }

  function showTab() {
    injectStyles();
    if (document.getElementById('fbs-cookie-tab')) return;
    var tab = document.createElement('button');
    tab.id = 'fbs-cookie-tab';
    tab.type = 'button';
    tab.textContent = 'Configuración de Cookies';
    tab.addEventListener('click', function () {
      tab.remove();
      showBanner();
    });
    document.body.appendChild(tab);
  }

  function showBanner() {
    injectStyles();
    if (document.getElementById('fbs-cookie-banner')) return;
    var el = document.createElement('div');
    el.id = 'fbs-cookie-banner';
    el.innerHTML =
      '<p>Usamos cookies para operar Formation Bible Study y, con su consentimiento, para entender cómo se usa la app. Las cookies esenciales (inicio de sesión, seguridad) siempre están activas. Consulte nuestra <a href="/cookie_policy.html">Política de Cookies</a>.</p>' +
      '<div id="fbs-cookie-actions">' +
        '<button id="fbs-cookie-reject" type="button">Rechazar no esenciales</button>' +
        '<button id="fbs-cookie-accept" type="button">Aceptar</button>' +
      '</div>';
    document.body.appendChild(el);
    document.getElementById('fbs-cookie-accept').addEventListener('click', function () {
      try { localStorage.setItem(STORAGE_KEY, 'granted'); } catch (e) {}
      updateConsent(true);
      hideBanner();
      showTab();
    });
    document.getElementById('fbs-cookie-reject').addEventListener('click', function () {
      try { localStorage.setItem(STORAGE_KEY, 'denied'); } catch (e) {}
      updateConsent(false);
      hideBanner();
      showTab();
    });
  }

  function init() {
    var choice = null;
    try { choice = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (choice === 'granted') {
      updateConsent(true);
      showTab();
    } else if (choice === 'denied') {
      showTab();
    } else {
      showBanner();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
