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
 * small "Cookie Settings" tab this script injects after a choice is made.
 *
 * Styling matches the site's existing visual language: Noto Serif /
 * Manrope (already loaded site-wide), Material Symbols Outlined icons,
 * the deep-plum / coral / gold palette, and the same blurred, bordered
 * "floating card" treatment used elsewhere (e.g. the main nav).
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
      + '#fbs-cookie-banner{position:fixed;right:20px;bottom:20px;left:auto;z-index:9999;width:min(400px,calc(100vw - 40px));background:rgba(61,21,64,0.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,180,164,0.18);border-radius:20px;box-shadow:0 20px 45px -10px rgba(20,6,22,0.55);padding:22px 22px 20px;font-family:"Manrope",sans-serif;opacity:0;transform:translateY(16px) scale(.98);transition:opacity .35s ease,transform .35s ease;}'
      + '#fbs-cookie-banner.fbs-in{opacity:1;transform:translateY(0) scale(1);}'
      + '#fbs-cookie-head{display:flex;align-items:center;gap:10px;margin-bottom:10px;}'
      + '#fbs-cookie-icon{width:34px;height:34px;flex-shrink:0;border-radius:10px;background:linear-gradient(135deg,rgba(233,195,73,0.22),rgba(255,180,164,0.14));display:flex;align-items:center;justify-content:center;}'
      + '#fbs-cookie-icon .material-symbols-outlined{font-size:19px;color:#E9C349;font-variation-settings:"FILL" 1,"wght" 500;}'
      + '#fbs-cookie-title{margin:0;font-family:"Noto Serif",serif;font-weight:700;font-size:15px;color:#f2e5f0;letter-spacing:.01em;}'
      + '#fbs-cookie-banner p.fbs-cookie-body{margin:0 0 18px;color:#f2e5f0;opacity:.72;font-size:13px;line-height:1.55;}'
      + '#fbs-cookie-banner a{color:#FFB4A4;text-decoration:underline;text-underline-offset:2px;}'
      + '#fbs-cookie-actions{display:flex;gap:10px;}'
      + '#fbs-cookie-banner button{font-family:"Manrope",sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.02em;border-radius:999px;padding:11px 16px;cursor:pointer;transition:filter .15s ease,background .15s ease;flex:1;}'
      + '#fbs-cookie-accept{background:linear-gradient(135deg,#FFB4A4,#6E2414);color:#5D1809;border:1px solid transparent;}'
      + '#fbs-cookie-accept:hover{filter:brightness(1.08);}'
      + '#fbs-cookie-reject{background:transparent;color:#f2e5f0;opacity:.75;border:1px solid rgba(242,229,240,0.25);}'
      + '#fbs-cookie-reject:hover{opacity:1;border-color:rgba(242,229,240,0.45);}'
      + '#fbs-cookie-tab{position:fixed;right:20px;bottom:20px;z-index:9998;display:flex;align-items:center;gap:6px;background:rgba(61,21,64,0.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#f2e5f0;opacity:.55;font-family:"Manrope",sans-serif;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:9px 14px 9px 10px;border-radius:999px;border:1px solid rgba(242,229,240,0.16);cursor:pointer;transition:opacity .2s ease;}'
      + '#fbs-cookie-tab .material-symbols-outlined{font-size:15px;color:#E9C349;}'
      + '#fbs-cookie-tab:hover{opacity:1;}'
      + '@media (max-width:640px){#fbs-cookie-banner{left:12px;right:12px;bottom:12px;width:auto;border-radius:18px;padding:20px 18px 18px;}#fbs-cookie-actions{flex-direction:column;}#fbs-cookie-tab{right:12px;bottom:12px;}}';
    var style = document.createElement('style');
    style.id = 'fbs-cookie-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function hideBanner() {
    var el = document.getElementById('fbs-cookie-banner');
    if (!el) return;
    el.classList.remove('fbs-in');
    setTimeout(function () { el.remove(); }, 350);
  }

  function showTab() {
    injectStyles();
    if (document.getElementById('fbs-cookie-tab')) return;
    var tab = document.createElement('button');
    tab.id = 'fbs-cookie-tab';
    tab.type = 'button';
    tab.innerHTML = '<span class="material-symbols-outlined">cookie</span>Cookie Settings';
    tab.addEventListener('click', function () {
      tab.remove();
      showBanner();
    });
    document.body.appendChild(tab);
  }

  function showBanner() {
    injectStyles();
    if (document.getElementById('fbs-cookie-banner')) return;
    var existingTab = document.getElementById('fbs-cookie-tab');
    if (existingTab) existingTab.remove();

    var el = document.createElement('div');
    el.id = 'fbs-cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Cookie preferences');
    el.innerHTML =
      '<div id="fbs-cookie-head">' +
        '<div id="fbs-cookie-icon"><span class="material-symbols-outlined">cookie</span></div>' +
        '<p id="fbs-cookie-title">A note on cookies</p>' +
      '</div>' +
      '<p class="fbs-cookie-body">We use essential cookies to run Formation Bible Study, and — with your consent — analytics cookies to understand how the app is used. See our <a href="/cookie_policy.html">Cookie Policy</a>.</p>' +
      '<div id="fbs-cookie-actions">' +
        '<button id="fbs-cookie-reject" type="button">Reject</button>' +
        '<button id="fbs-cookie-accept" type="button">Accept</button>' +
      '</div>';
    document.body.appendChild(el);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add('fbs-in'); });
    });

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
