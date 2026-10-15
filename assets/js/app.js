/* ───────────────────────────────────────────────────────────────────────────
   Insty — first-launch onboarding

   A short story: one paid feature per page, each shown as a small moment
   from Instagram that plays on its own, then a page about privacy and into
   the app. The pages are listed in PAGES below; their words come from i18n.js.

   Query parameters (all optional)
     lang=en|tr|de|id|es|pt|ar|fr|ms|hi|af   language; falls back to the
                                             browser's, then English
     full=1|0         1 (default) the Instagram features; 0 the Studio-only
                      story the app asks for while its Instagram tools are
                      switched off (iOS review builds)
     platform=ios|android   names the store on the payment line
     theme=light|dark       defaults to the device setting

   Inside the app it talks to Flutter: it reports where the user is on the
   `AppBridge` handler, and Flutter steps it back through `window.Guide`.
   Opened in a plain browser both do nothing, and the last button starts the
   story over so it can be previewed.
   ─────────────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  var I18N = window.GUIDE_I18N || {};
  var APP_NAME = window.GUIDE_APP_NAME || 'Insty';
  var FALLBACK_LANG = 'en';
  var RTL_LANGUAGES = ['ar'];

  // ── The pages ────────────────────────────────────────────────────────────
  //
  //   scene     the moment drawn on top (see SCENES)
  //   title     a string id; words between *stars* are painted in the brand
  //             gradient — keep the stars around the promise when translating
  //   desc      one line under it
  //   premium   shows the small "Premium" badge above the title
  //   note      the line under the button while this page is on screen

  var FULL = [
    { scene: 'download', title: 'ob_download_title', desc: 'ob_download_desc', premium: true, note: 'local' },
    { scene: 'ghost', title: 'ob_ghost_title', desc: 'ob_ghost_desc', premium: true, note: 'local' },
    { scene: 'unsent', title: 'ob_unsent_title', desc: 'ob_unsent_desc', premium: true, note: 'local' },
    { scene: 'caption', title: 'ob_studio_title', desc: 'ob_studio_desc', premium: true, note: 'local' },
    { scene: 'trust', title: 'ob_private_title', desc: 'ob_private_desc', note: 'disclaimer' },
  ];

  // Review builds: nothing about Instagram, only what the Studio does.
  var LITE = [
    { scene: 'templates', title: 'ob_templates_title', desc: 'ob_templates_desc', premium: true, note: 'drafts' },
    { scene: 'caption', title: 'ob_captions_title', desc: 'ob_captions_desc', premium: true, note: 'drafts' },
    { scene: 'editor', title: 'ob_editor_title', desc: 'ob_editor_desc', premium: true, note: 'drafts' },
    { scene: 'trust_lite', title: 'ob_start_title', desc: 'ob_start_desc', note: 'pay' },
  ];

  // ── Parameters ───────────────────────────────────────────────────────────

  var params = new URLSearchParams(window.location.search);
  var lang = pickLanguage(params.get('lang'));
  var isRtl = RTL_LANGUAGES.indexOf(lang) !== -1;
  var full = ['0', 'false', 'no'].indexOf(String(params.get('full'))) === -1;
  var platform = pickPlatform(params.get('platform'));
  var PAGES = full ? FULL : LITE;

  function pickLanguage(requested) {
    var known = Object.keys(I18N.continue || {});
    var wanted = [requested, navigator.language, (navigator.languages || [])[0]];
    for (var i = 0; i < wanted.length; i++) {
      if (!wanted[i]) continue;
      var code = String(wanted[i]).toLowerCase().split(/[-_]/)[0];
      if (known.indexOf(code) !== -1) return code;
    }
    return FALLBACK_LANG;
  }

  function pickPlatform(requested) {
    var wanted = String(requested || '').toLowerCase();
    if (wanted === 'ios' || wanted === 'android') return wanted;
    var agent = navigator.userAgent || '';
    if (/iPhone|iPad|iPod/i.test(agent) || (/Macintosh/i.test(agent) && navigator.maxTouchPoints > 1)) return 'ios';
    return 'android';
  }

  // ── Words ────────────────────────────────────────────────────────────────

  /** The translation for a string id, falling back to English. */
  function t(id, vars) {
    var entry = I18N[id];
    if (!entry) return '';
    var value = entry[lang] || entry[FALLBACK_LANG] || '';
    return value.replace(/\{(\w+)\}/g, function (match, key) {
      if (key === 'app') return APP_NAME;
      return vars && key in vars ? String(vars[key]) : match;
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /** A translation, ready for markup. */
  function text(id, vars) {
    return escapeHtml(t(id, vars));
  }

  /** A title, with its *starred* words in the brand gradient. */
  function title(id) {
    return text(id).replace(/\*([^*]+)\*/g, '<span class="hl">$1</span>');
  }

  // ── Icons: line icons on a 24×24 grid ────────────────────────────────────

  var ICONS = {
    download: '<path d="M12 4v11"/><path d="M7.5 10.8L12 15.3l4.5-4.5"/><path d="M5 19.5h14"/>',
    check: '<path d="M5.2 12.4l4.6 4.6L18.8 7.6"/>',
    crown: '<path d="M3.8 8.2l4.3 3.6L12 5.5l3.9 6.3 4.3-3.6-1.7 9.8H5.5L3.8 8.2z"/>',
    ghost: '<path d="M5 20V11a7 7 0 0 1 14 0v9l-2.3-1.6L14.3 20 12 18.4 9.7 20l-2.4-1.6L5 20z"/><circle cx="9.5" cy="11" r=".7"/><circle cx="14.5" cy="11" r=".7"/>',
    eye: '<path d="M2.8 12S6.6 5.8 12 5.8 21.2 12 21.2 12 17.4 18.2 12 18.2 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.7"/>',
    'eye-off': '<path d="M10.6 6A9.8 9.8 0 0 1 12 5.8c5.4 0 9.2 6.2 9.2 6.2a16 16 0 0 1-2.4 3"/><path d="M6.4 7.6A16 16 0 0 0 2.8 12s3.8 6.2 9.2 6.2a9 9 0 0 0 4.4-1.2"/><path d="M3.5 3.5l17 17"/><path d="M10 10a2.7 2.7 0 0 0 4 4"/>',
    chat: '<path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.1-4.4A8.5 8.5 0 1 1 20.5 12z"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
    send: '<path d="M21 3.5L10.2 13.8"/><path d="M21 3.5l-6.7 17-4.1-6.7-6.7-4.1 17.5-6.2z"/>',
    bookmark: '<path d="M6.8 4.6h10.4v15.4L12 16.4l-5.2 3.6V4.6z"/>',
    restore: '<path d="M20.3 12a8.4 8.4 0 1 1-2.6-6.1"/><path d="M20.4 4.2v4.7h-4.7"/>',
    'arrow-down': '<path d="M12 4.6v13.8"/><path d="M6.5 13l5.5 5.5 5.5-5.5"/>',
    sparkle: '<path d="M11 3.5l1.9 5.1 5.1 1.9-5.1 1.9L11 17.5l-1.9-5.1L4 10.5l5.1-1.9L11 3.5z"/><path d="M18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z"/>',
    'shield-check': '<path d="M12 3.2l7 2.6v5.6c0 4.3-2.9 7.5-7 8.9-4.1-1.4-7-4.6-7-8.9V5.8l7-2.6z"/><path d="M9.2 11.9l2.1 2.1 3.9-4.2"/>',
    lock: '<rect x="4.8" y="10.4" width="14.4" height="10.2" rx="2.6"/><path d="M8.4 10.4V7.7a3.6 3.6 0 0 1 7.2 0v2.7"/>',
    phone: '<rect x="7" y="2.6" width="10" height="18.8" rx="2.6"/><path d="M10.6 18.6h2.8"/>',
    calendar: '<rect x="4" y="5.5" width="16" height="15" rx="3"/><path d="M8 3.5v4M16 3.5v4M4 10.5h16"/><path d="M9.8 15.2l4.4-.01"/>',
    'no-ads': '<circle cx="12" cy="12" r="8.6"/><path d="M5.9 5.9l12.2 12.2"/><path d="M8.6 14.6l1.9-5.2 1.9 5.2M9.2 13h2.6"/>',
    scissors: '<circle cx="6.5" cy="6.5" r="2.8"/><circle cx="6.5" cy="17.5" r="2.8"/><path d="M8.6 8.4L20 17.5"/><path d="M8.6 15.6L20 6.5"/>',
    filters: '<circle cx="9" cy="9.5" r="5"/><circle cx="15" cy="9.5" r="5"/><circle cx="12" cy="14.8" r="5"/>',
    music: '<path d="M9 18V5.5l11-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    play: '<path d="M7.5 4.8l11.5 7.2-11.5 7.2z"/>',
  };

  function icon(name, extraClass) {
    return '<svg class="icon ' + (extraClass || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }

  // ── The scenes ───────────────────────────────────────────────────────────
  //
  // Drawn here in HTML rather than shipped as screenshots: they read in the
  // user's own language and cost almost nothing to download. A scene plays in
  // beats of BEAT ms. Anything marked data-on="n" switches on at beat n (it
  // gets `is-on`); the scene itself carries data-beat for parts that change
  // more than once. After its last beat it starts again.

  var BEAT = 1300;
  var BEATS = { download: 4, ghost: 5, unsent: 5, caption: 4, templates: 3, editor: 4, trust: 1, trust_lite: 1 };

  /** Two labels in one place: `a` until beat `on`, then `b`. */
  function swap(a, b, on, extraClass) {
    return (
      '<span class="swap ' + (extraClass || '') + '">' +
      '<span class="swap__b" data-on="' + on + '">' + b + '</span>' +
      '<span class="swap__a">' + a + '</span>' +
      '</span>'
    );
  }

  function photo(name, extraClass) {
    return '<img class="' + (extraClass || '') + '" src="assets/img/' + name + '" alt="" decoding="async">';
  }

  function promises(items) {
    return (
      '<div class="card promises">' +
      items
        .map(function (item) {
          return (
            '<div class="promise">' +
            '<span class="promise__icon">' + icon(item[0]) + '</span>' +
            '<span class="promise__text">' + text(item[1]) + '</span>' +
            '<span class="promise__check">' + icon('check') + '</span>' +
            '</div>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  var SCENES = {
    // A post, its download button tapped, saved in HD.
    download: function () {
      return (
        '<div class="card post">' +
        '<div class="post__head"><span class="avatar ring">' + photo('thumb.jpg') + '</span><b>emma.travels</b><span class="post__more">···</span></div>' +
        '<div class="post__media">' +
        photo('story.jpg') +
        '<span class="dl">' + icon('download') + '</span>' +
        '<span class="progress"><i></i></span>' +
        '<span class="toast" data-on="2"><span class="toast__check">' + icon('check') + '</span>' + text('s_saved') + '<span class="hd">HD</span></span>' +
        '</div>' +
        '<div class="post__actions">' + icon('heart') + icon('chat') + icon('send') + icon('bookmark') + '</div>' +
        '</div>'
      );
    },

    // Ghost Mode switched on, and what the other side stops seeing.
    ghost: function () {
      return (
        '<div class="card toggle" data-on="2">' +
        '<span class="toggle__icon">' + icon('ghost') + '</span>' +
        '<span class="toggle__text"><b>' + text('s_ghost') + '</b>' + swap(text('s_off'), text('s_on'), 2) + '</span>' +
        '<span class="switch" data-on="2"><i></i></span>' +
        '</div>' +
        '<div class="card receipts">' +
        '<span class="receipts__label">' + text('s_they_see') + '</span>' +
        '<div class="receipt">' +
        '<span class="avatar ring">' + photo('story.jpg') + '</span>' +
        '<span class="receipt__text"><b>' + text('s_story') + '</b><small>emma.travels</small></span>' +
        '<span class="state">' + swap(icon('eye') + text('s_seen'), icon('eye-off') + text('s_hidden'), 2) + '</span>' +
        '</div>' +
        '<div class="receipt">' +
        '<span class="receipt__icon">' + icon('chat') + '</span>' +
        '<span class="receipt__text"><b>' + text('s_message') + '</b><small>mia.rose</small></span>' +
        '<span class="state">' + swap(icon('check') + text('s_seen'), icon('eye-off') + text('s_hidden'), 3) + '</span>' +
        '</div>' +
        '</div>'
      );
    },

    // A message unsent in a chat, and the copy Insty kept of it.
    unsent: function () {
      return (
        '<div class="card dm">' +
        '<div class="dm__head"><span class="avatar online">M</span><span class="dm__who"><b>mia.rose</b><small>' + text('s_active') + '</small></span></div>' +
        '<div class="dm__body">' +
        '<span class="msg">' + text('s_msg1') + '</span>' +
        '<span class="msg msg--gone" data-on="1">' + swap(text('s_msg2'), text('s_unsent', { name: 'mia.rose' }), 1) + '</span>' +
        '<span class="arrow reveal" data-on="2">' + icon('arrow-down') + '</span>' +
        '<span class="kept reveal" data-on="2">' +
        '<span class="kept__tag">' + icon('restore') + text('s_recovered') + '</span>' +
        '<span>' + text('s_msg2') + '</span>' +
        '</span>' +
        '</div>' +
        '</div>'
      );
    },

    // A story being made, and its caption written for it.
    caption: function () {
      return (
        '<div class="canvas">' +
        photo('story.jpg') +
        '<span class="canvas__bars"><i></i><i></i><i></i></span>' +
        '<span class="canvas__title">' + text('s_canvas') + '</span>' +
        '<span class="caption">' +
        '<span class="caption__tag">' + icon('sparkle') + text('s_ai_caption') + '</span>' +
        '<span class="caption__body">' +
        '<span class="caption__wait" data-on="1"><i></i><i></i></span>' +
        '<span class="caption__text" data-on="1">' + text('s_caption') +
        '<span class="tags" data-on="2">#goldenhour #sunset #travel</span></span>' +
        '</span>' +
        '</span>' +
        '</div>'
      );
    },

    // Review builds: one photo, three templates.
    templates: function () {
      return (
        '<div class="canvas">' +
        photo('story.jpg') +
        '<span class="layout layout--0"><b>' + text('s_canvas') + '</b></span>' +
        '<span class="layout layout--1"><span class="polaroid">' + photo('thumb.jpg') + '</span><b>' + text('s_canvas') + '</b></span>' +
        '<span class="layout layout--2">' + photo('story.jpg') + photo('thumb.jpg') + '</span>' +
        '</div>' +
        '<span class="thumbs"><i></i><i></i><i></i></span>'
      );
    },

    // Review builds: trim, filter, music.
    editor: function () {
      return (
        '<div class="card editor">' +
        '<div class="editor__view">' +
        photo('story.jpg') +
        '<span class="editor__play">' + icon('play', 'icon--fill') + '</span>' +
        '<span class="music reveal" data-on="3">' + icon('music') + '<span class="wave"><i></i><i></i><i></i><i></i></span></span>' +
        '</div>' +
        '<div class="timeline"><span class="trim"></span></div>' +
        '<div class="tools">' +
        '<span class="tool tool--trim">' + icon('scissors') + text('s_trim') + '</span>' +
        '<span class="tool tool--filters">' + icon('filters') + text('s_filters') + '</span>' +
        '<span class="tool tool--music">' + icon('music') + text('s_music') + '</span>' +
        '</div>' +
        '</div>'
      );
    },

    // The promise. Every line is true of the app — keep it that way.
    trust: function () {
      return (
        '<span class="shield">' + icon('shield-check') + '</span>' +
        promises([
          ['lock', 'p_signin'],
          ['phone', 'p_local'],
          ['calendar', 'p_cancel'],
        ])
      );
    },

    trust_lite: function () {
      return (
        '<span class="shield">' + icon('sparkle') + '</span>' +
        promises([
          ['phone', 'p_drafts'],
          ['no-ads', 'p_adfree'],
          ['calendar', 'p_cancel'],
        ])
      );
    },
  };

  function scene(name) {
    var draw = SCENES[name];
    if (!draw) return '';
    return '<div class="scene scene--' + name + '" data-scene="' + name + '" data-beat="0">' + draw() + '</div>';
  }

  /** Moves a scene to a beat: everything due by then switches on. */
  function setBeat(el, beat) {
    el.setAttribute('data-beat', beat);
    var parts = el.querySelectorAll('[data-on]');
    for (var i = 0; i < parts.length; i++) {
      parts[i].classList.toggle('is-on', beat >= Number(parts[i].getAttribute('data-on')));
    }
  }

  function beatsOf(el) {
    return BEATS[el.getAttribute('data-scene')] || 1;
  }

  var reducedMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // ── Theme ────────────────────────────────────────────────────────────────

  function applyTheme(theme) {
    var dark = theme === 'dark' || (theme !== 'light' && !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  applyTheme(params.get('theme'));

  // ── The bridge to the app ────────────────────────────────────────────────
  //
  // The app embeds the page with flutter_inappwebview, whose handler only
  // becomes callable once the platform says it is ready — so anything posted
  // before then waits in a queue. A plain `AppBridge.postMessage` channel is
  // understood too.

  var Bridge = {
    queue: [],
    get inApp() {
      return !!(window.flutter_inappwebview || (window.AppBridge && window.AppBridge.postMessage));
    },
    send: function (json) {
      try {
        if (window.AppBridge && typeof window.AppBridge.postMessage === 'function') {
          window.AppBridge.postMessage(json);
          return true;
        }
        var host = window.flutter_inappwebview;
        if (host && typeof host.callHandler === 'function') {
          host.callHandler('AppBridge', json);
          return true;
        }
      } catch (e) {
        /* the app is gone — nothing to do */
      }
      return false;
    },
    post: function (message) {
      var json = JSON.stringify(message);
      if (this.queue.length || !this.send(json)) {
        if (this.queue.length < 30) this.queue.push(json);
      }
    },
    flush: function () {
      while (this.queue.length && this.send(this.queue[0])) this.queue.shift();
    },
  };

  window.addEventListener('flutterInAppWebViewPlatformReady', function () { Bridge.flush(); });

  // ── Drawing ──────────────────────────────────────────────────────────────

  var app = document.getElementById('app');
  var track = document.getElementById('track');
  var dots = document.getElementById('dots');
  var counter = document.getElementById('counter');
  var cta = document.getElementById('cta');
  var ctaLabel = document.getElementById('cta-label');
  var footnote = document.getElementById('footnote');

  function renderPage(page, i) {
    return (
      '<li class="page' + (i === 0 ? ' is-active' : '') + '" aria-roledescription="slide" aria-label="' + (i + 1) + ' / ' + PAGES.length + '">' +
      '<div class="page__inner">' +
      '<div class="stage" aria-hidden="true">' + scene(page.scene) + '</div>' +
      '<div class="words">' +
      '<span class="badge' + (page.premium ? '' : ' is-placeholder') + '"' + (page.premium ? '' : ' aria-hidden="true"') + '>' + icon('crown', 'icon--fill') + text('premium') + '</span>' +
      '<h1 class="title">' + title(page.title) + '</h1>' +
      '<p class="subtitle">' + text(page.desc) + '</p>' +
      '</div>' +
      '</div>' +
      '</li>'
    );
  }

  var NOTES = {
    local: function () { return icon('lock') + '<span>' + text('p_local') + '</span>'; },
    drafts: function () { return icon('lock') + '<span>' + text('p_drafts') + '</span>'; },
    disclaimer: function () { return '<span>' + text('f_disclaimer') + '</span>'; },
    pay: function () { return icon('lock') + '<span>' + text('f_pay', { store: platform === 'ios' ? 'App Store' : 'Google Play' }) + '</span>'; },
  };

  function build() {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = t('guide_title');
    document.getElementById('brand-name').textContent = APP_NAME;

    track.innerHTML = PAGES.map(renderPage).join('');
    dots.innerHTML = PAGES.map(function (page, i) {
      return '<button class="dot' + (i === 0 ? ' is-active' : '') + '" type="button" data-dot="' + i + '" aria-label="' + (i + 1) + ' / ' + PAGES.length + '"></button>';
    }).join('');

    // A photo that never arrives leaves the stage's colour behind, not a hole.
    var images = track.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('error', function () { this.style.visibility = 'hidden'; });
    }

    var scenes = track.querySelectorAll('.scene');
    for (var j = 0; j < scenes.length; j++) {
      setBeat(scenes[j], reducedMotion ? beatsOf(scenes[j]) - 1 : 0);
    }

    drawChrome();
    app.classList.remove('is-loading');
  }

  // ── Moving through the pages ─────────────────────────────────────────────

  var index = 0;

  function pages() {
    return track.children;
  }

  /** The page nearest the middle of the track: the one being read. */
  function currentPage() {
    var box = track.getBoundingClientRect();
    var middle = box.left + box.width / 2;
    var nearest = 0;
    var best = Infinity;
    for (var i = 0; i < pages().length; i++) {
      var rect = pages()[i].getBoundingClientRect();
      var distance = Math.abs(rect.left + rect.width / 2 - middle);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    }
    return nearest;
  }

  /**
   * Brings a page to the middle. Measured on screen rather than in
   * scrollLeft, which counts backwards in Arabic — differently in each engine.
   */
  function showPage(i) {
    var target = pages()[Math.max(0, Math.min(i, pages().length - 1))];
    var box = track.getBoundingClientRect();
    var rect = target.getBoundingClientRect();
    var distance = rect.left + rect.width / 2 - (box.left + box.width / 2);
    if ('scrollBehavior' in document.documentElement.style) track.scrollBy({ left: distance, behavior: 'smooth' });
    else track.scrollLeft += distance;
  }

  function isLast() {
    return index === PAGES.length - 1;
  }

  function drawChrome() {
    for (var i = 0; i < pages().length; i++) pages()[i].classList.toggle('is-active', i === index);
    var all = dots.children;
    for (var j = 0; j < all.length; j++) all[j].classList.toggle('is-active', j === index);
    counter.textContent = index + 1 + ' / ' + PAGES.length;
    ctaLabel.textContent = isLast() ? t('get_started') : t('continue');
    var note = NOTES[PAGES[index].note];
    footnote.innerHTML = note ? note() : '';

    // The scene arriving plays from its first beat.
    var el = pages()[index].querySelector('.scene');
    if (el && !reducedMotion) setBeat(el, 0);
  }

  function onSettled() {
    var now = currentPage();
    if (now === index) return;
    index = now;
    drawChrome();
    Bridge.post({ type: 'page', index: index, last: false, total: PAGES.length });
  }

  var queued = false;
  track.addEventListener(
    'scroll',
    function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () {
        queued = false;
        onSettled();
      });
    },
    { passive: true }
  );

  // Only the page on screen plays, so a scene is always seen from its start.
  if (!reducedMotion) {
    window.setInterval(function () {
      if (document.hidden) return;
      var el = pages()[index] && pages()[index].querySelector('.scene');
      if (!el) return;
      var beats = beatsOf(el);
      if (beats > 1) setBeat(el, (Number(el.getAttribute('data-beat')) + 1) % beats);
    }, BEAT);
  }

  function finish() {
    // A page that reports itself last is what the app logs as completed.
    Bridge.post({ type: 'page', index: index + 1, last: true, total: PAGES.length });
    Bridge.post({ type: 'finish', reason: 'cta' });
    // In a browser there is no app to hand over to: start the story again.
    if (!Bridge.inApp) showPage(0);
  }

  cta.addEventListener('click', function () {
    if (isLast()) finish();
    else showPage(index + 1);
  });

  dots.addEventListener('click', function (event) {
    var dot = event.target.closest && event.target.closest('[data-dot]');
    if (dot) showPage(Number(dot.getAttribute('data-dot')));
  });

  document.addEventListener('keydown', function (event) {
    var forward = isRtl ? 'ArrowLeft' : 'ArrowRight';
    var back = isRtl ? 'ArrowRight' : 'ArrowLeft';
    if (event.key === forward) showPage(index + 1);
    else if (event.key === back) showPage(index - 1);
  });

  // ── What Flutter can call ────────────────────────────────────────────────

  window.Guide = {
    /** The system back gesture: one page back, or false at the first. */
    previous: function () {
      if (index === 0) return false;
      showPage(index - 1);
      return true;
    },
    setTheme: applyTheme,
    getState: function () {
      return { index: index, total: PAGES.length, full: full, lang: lang };
    },
  };

  // ── Go ───────────────────────────────────────────────────────────────────

  build();

  // ?start=<n> opens on page n (from 1) — for a support link or a preview.
  var start = Math.max(1, Math.min(Number(params.get('start')) || 1, PAGES.length)) - 1;
  if (start > 0) {
    pages()[start].scrollIntoView({ inline: 'center', block: 'nearest' });
    index = start;
    drawChrome();
  }

  Bridge.post({ type: 'ready', total: PAGES.length, index: index, lang: lang, full: full });
})();
