// Every string on the page, in the app's eleven languages.
//
// {app} is replaced with the app's name; any other {name} is filled in by
// app.js. In a title, the words between *stars* are painted in the brand
// gradient — keep the stars around the words carrying the promise.
// Ghost Mode, Recovered and "Saved to gallery" follow the app's own wording
// (lib/config/translate/*.dart), so the page and the app use the same words.

window.GUIDE_I18N = {
  guide_title: {
    en: 'Welcome to {app}', tr: "{app}'ye hoş geldin", de: 'Willkommen bei {app}', id: 'Selamat datang di {app}', es: 'Bienvenido a {app}', pt: 'Boas-vindas ao {app}',
    ar: 'مرحبًا بك في {app}', fr: 'Bienvenue sur {app}', ms: 'Selamat datang ke {app}', hi: '{app} में आपका स्वागत है', af: 'Welkom by {app}',
  },
  continue: {
    en: 'Continue', tr: 'Devam Et', de: 'Weiter', id: 'Lanjutkan', es: 'Continuar', pt: 'Continuar',
    ar: 'متابعة', fr: 'Continuer', ms: 'Teruskan', hi: 'जारी रखें', af: 'Gaan voort',
  },
  get_started: {
    en: 'Get started', tr: 'Hadi başlayalım', de: "Los geht's", id: 'Mulai', es: 'Empezar', pt: 'Começar',
    ar: 'ابدأ الآن', fr: 'Commencer', ms: 'Mula', hi: 'शुरू करें', af: 'Begin',
  },
  premium: {
    en: 'Premium', tr: 'Premium', de: 'Premium', id: 'Premium', es: 'Premium', pt: 'Premium',
    ar: 'بريميوم', fr: 'Premium', ms: 'Premium', hi: 'प्रीमियम', af: 'Premium',
  },

  // ── The pages ──
  ob_download_title: {
    en: 'Unlimited downloads *in HD*', tr: '*HD kalitede* sınırsız indirme', de: 'Unbegrenzte Downloads *in HD*', id: 'Unduhan tanpa batas *dalam HD*',
    es: 'Descargas ilimitadas *en HD*', pt: 'Downloads ilimitados *em HD*', ar: 'تنزيلات غير محدودة *بجودة HD*', fr: 'Téléchargements illimités *en HD*',
    ms: 'Muat turun tanpa had *dalam HD*', hi: '*HD में* अनलिमिटेड डाउनलोड', af: 'Onbeperkte aflaaie *in HD*',
  },
  ob_download_desc: {
    en: 'Save Reels, Stories and Posts straight to your gallery.', tr: 'Reels, hikâye ve gönderileri doğrudan galerine kaydet.',
    de: 'Speichere Reels, Storys und Beiträge direkt in deiner Galerie.', id: 'Simpan Reels, Story, dan Postingan langsung ke galeri.',
    es: 'Guarda Reels, historias y publicaciones directo en tu galería.', pt: 'Salve Reels, Stories e posts direto na sua galeria.',
    ar: 'احفظ الريلز والقصص والمنشورات مباشرة في معرضك.', fr: 'Enregistre Reels, stories et publications directement dans ta galerie.',
    ms: 'Simpan Reels, Story dan Siaran terus ke galeri anda.', hi: 'Reels, Stories और Posts सीधे अपनी गैलरी में सेव करें।',
    af: 'Stoor Reels, Stories en plasings direk na jou galery.',
  },
  ob_ghost_title: {
    en: 'Watch stories *unseen*', tr: 'Hikâyeleri *görünmeden* izle', de: 'Storys *unsichtbar* ansehen', id: 'Tonton story *tanpa ketahuan*',
    es: 'Mira historias *sin ser visto*', pt: 'Veja stories *sem ser visto*', ar: 'شاهد القصص *دون أن يراك أحد*', fr: 'Regarde les stories *incognito*',
    ms: 'Tonton story *tanpa dikesan*', hi: 'Stories *बिना दिखे* देखें', af: 'Kyk stories *onsigbaar*',
  },
  ob_ghost_desc: {
    en: 'Ghost Mode keeps you off their viewer list and hides “Seen” in chats.',
    tr: 'Hayalet Modu seni izleyenler listesinden uzak tutar ve sohbetlerde “Görüldü”yü gizler.',
    de: 'Der Geistermodus hält dich aus der Zuschauerliste fern und verbirgt „Gesehen“ in Chats.',
    id: 'Mode Hantu membuatmu tak muncul di daftar penonton dan menyembunyikan “Dilihat” di chat.',
    es: 'El modo fantasma te saca de la lista de espectadores y oculta el “Visto” en los chats.',
    pt: 'O modo fantasma tira você da lista de visualizações e oculta o “Visto” nas conversas.',
    ar: 'يُبقيك وضع الشبح خارج قائمة المشاهدين ويُخفي “تمت المشاهدة” في المحادثات.',
    fr: 'Le mode fantôme t’écarte de la liste des spectateurs et masque le « Vu » dans les discussions.',
    ms: 'Mod Hantu menjauhkan anda dari senarai penonton dan menyembunyikan “Dilihat” dalam sembang.',
    hi: 'घोस्ट मोड आपको व्यूअर लिस्ट से दूर रखता है और चैट में “Seen” छिपाता है।',
    af: 'Spookmodus hou jou van hul kykerslys af en versteek “Gesien” in kletse.',
  },
  ob_unsent_title: {
    en: 'Read messages *they unsent*', tr: '*Geri alınan* mesajları oku', de: 'Lies *zurückgezogene* Nachrichten', id: 'Baca pesan yang *mereka tarik*',
    es: 'Lee los mensajes *que anularon*', pt: 'Leia as mensagens *que cancelaram*', ar: 'اقرأ الرسائل *التي ألغوا إرسالها*', fr: 'Lis les messages *qu’ils ont retirés*',
    ms: 'Baca mesej yang *mereka tarik balik*', hi: '*अनसेंड* किए मैसेज पढ़ें', af: 'Lees boodskappe *wat hulle teruggetrek het*',
  },
  ob_unsent_desc: {
    en: '{app} keeps a copy, even after they tap Unsend.', tr: 'Gönderimi geri alsalar bile {app} bir kopyasını saklar.',
    de: '{app} behält eine Kopie – auch nachdem sie die Nachricht zurückgezogen haben.', id: '{app} menyimpan salinannya, bahkan setelah mereka menariknya.',
    es: '{app} guarda una copia, incluso después de que la anulen.', pt: 'O {app} guarda uma cópia, mesmo depois que cancelam o envio.',
    ar: 'يحتفظ {app} بنسخة حتى بعد أن يلغوا الإرسال.', fr: '{app} en garde une copie, même après qu’ils l’ont retiré.',
    ms: '{app} menyimpan salinan, walaupun selepas mereka menarik baliknya.', hi: 'उनके अनसेंड करने के बाद भी {app} एक कॉपी रखता है।',
    af: '{app} hou ’n kopie, selfs nadat hulle dit teruggetrek het.',
  },
  ob_studio_title: {
    en: 'Stories & captions, *made easy*', tr: 'Hikâye ve açıklamalar *çok kolay*', de: 'Storys & Captions, *ganz einfach*', id: 'Story & caption, *jadi mudah*',
    es: 'Historias y textos, *muy fácil*', pt: 'Stories e legendas, *bem fácil*', ar: 'القصص والتعليقات *بكل سهولة*', fr: 'Stories et légendes, *en un clin d’œil*',
    ms: 'Story & kapsyen, *jadi mudah*', hi: 'Stories और कैप्शन, *बेहद आसान*', af: 'Stories en byskrifte, *maklik gemaak*',
  },
  ob_studio_desc: {
    en: 'Design stories with templates and get AI captions with hashtags.', tr: 'Şablonlarla hikâye tasarla, hashtag’li yapay zekâ açıklamaları al.',
    de: 'Gestalte Storys mit Vorlagen und erhalte KI-Captions mit Hashtags.', id: 'Desain story dengan template dan dapatkan caption AI lengkap dengan hashtag.',
    es: 'Diseña historias con plantillas y obtén textos con IA y hashtags.', pt: 'Crie stories com modelos e receba legendas com IA e hashtags.',
    ar: 'صمّم قصصك بالقوالب واحصل على تعليقات بالذكاء الاصطناعي مع الهاشتاغات.', fr: 'Crée des stories avec des modèles et obtiens des légendes IA avec hashtags.',
    ms: 'Reka story dengan templat dan dapatkan kapsyen AI berserta hashtag.', hi: 'टेम्पलेट से Stories बनाएं और हैशटैग के साथ AI कैप्शन पाएं।',
    af: 'Ontwerp stories met sjablone en kry KI-byskrifte met hutsmerke.',
  },
  ob_private_title: {
    en: 'Private *by design*', tr: '*Gizlilik* her şeyden önce', de: '*Privat* von Grund auf', id: '*Privasi* yang utama',
    es: '*Privado* por diseño', pt: '*Privado* por natureza', ar: '*الخصوصية* أولًا', fr: '*Privé* par conception',
    ms: '*Privasi* diutamakan', hi: '*प्राइवेसी* सबसे पहले', af: '*Privaat* van die begin af',
  },
  ob_private_desc: {
    en: 'Start free and upgrade whenever you like.', tr: 'Ücretsiz başla, dilediğin zaman yükselt.', de: 'Starte kostenlos und upgrade, wann du willst.',
    id: 'Mulai gratis dan upgrade kapan saja.', es: 'Empieza gratis y mejora cuando quieras.', pt: 'Comece grátis e faça upgrade quando quiser.',
    ar: 'ابدأ مجانًا وقم بالترقية متى شئت.', fr: 'Commence gratuitement et passe à Premium quand tu veux.', ms: 'Mula secara percuma dan naik taraf bila-bila masa.',
    hi: 'मुफ़्त में शुरू करें, जब चाहें अपग्रेड करें।', af: 'Begin gratis en gradeer op wanneer jy wil.',
  },
  ob_templates_title: {
    en: 'Stories that *stand out*', tr: '*Göz alıcı* hikâyeler', de: 'Storys, die *auffallen*', id: 'Story yang *menonjol*',
    es: 'Historias que *destacan*', pt: 'Stories que *se destacam*', ar: 'قصص *لافتة للنظر*', fr: 'Des stories qui *se démarquent*',
    ms: 'Story yang *menyerlah*', hi: 'Stories जो *सबसे अलग* दिखें', af: 'Stories wat *uitstaan*',
  },
  ob_templates_desc: {
    en: 'Pick a template, add your photos and share.', tr: 'Bir şablon seç, fotoğraflarını ekle ve paylaş.', de: 'Wähle eine Vorlage, füge deine Fotos hinzu und teile sie.',
    id: 'Pilih template, tambahkan fotomu, lalu bagikan.', es: 'Elige una plantilla, añade tus fotos y comparte.', pt: 'Escolha um modelo, adicione suas fotos e compartilhe.',
    ar: 'اختر قالبًا وأضف صورك وشارك.', fr: 'Choisis un modèle, ajoute tes photos et partage.', ms: 'Pilih templat, tambah foto anda dan kongsi.',
    hi: 'टेम्पलेट चुनें, अपनी फ़ोटो जोड़ें और शेयर करें।', af: 'Kies ’n sjabloon, voeg jou foto’s by en deel.',
  },
  ob_captions_title: {
    en: 'Captions written *for you*', tr: 'Açıklamalar *senin için* yazılsın', de: 'Captions, *für dich* geschrieben', id: 'Caption ditulis *untukmu*',
    es: 'Textos escritos *para ti*', pt: 'Legendas escritas *para você*', ar: 'تعليقات مكتوبة *من أجلك*', fr: 'Des légendes écrites *pour toi*',
    ms: 'Kapsyen ditulis *untuk anda*', hi: 'कैप्शन *आपके लिए* लिखे गए', af: 'Byskrifte *vir jou* geskryf',
  },
  ob_captions_desc: {
    en: 'Get a caption and hashtags made from your photo.', tr: 'Fotoğrafından açıklama ve hashtag’ler al.', de: 'Erhalte eine Caption und Hashtags passend zu deinem Foto.',
    id: 'Dapatkan caption dan hashtag dari fotomu.', es: 'Obtén un texto y hashtags creados a partir de tu foto.', pt: 'Receba uma legenda e hashtags feitas a partir da sua foto.',
    ar: 'احصل على تعليق وهاشتاغات مستوحاة من صورتك.', fr: 'Obtiens une légende et des hashtags créés à partir de ta photo.', ms: 'Dapatkan kapsyen dan hashtag daripada foto anda.',
    hi: 'अपनी फ़ोटो से कैप्शन और हैशटैग पाएं।', af: 'Kry ’n byskrif en hutsmerke uit jou foto.',
  },
  ob_editor_title: {
    en: 'Edit videos *in seconds*', tr: 'Videoları *saniyeler içinde* düzenle', de: 'Videos *in Sekunden* bearbeiten', id: 'Edit video *dalam hitungan detik*',
    es: 'Edita videos *en segundos*', pt: 'Edite vídeos *em segundos*', ar: 'عدّل الفيديوهات *في ثوانٍ*', fr: 'Monte tes vidéos *en quelques secondes*',
    ms: 'Sunting video *dalam beberapa saat*', hi: 'वीडियो *सेकंडों में* एडिट करें', af: 'Redigeer video’s *in sekondes*',
  },
  ob_editor_desc: {
    en: 'Trim, add filters and music in a few taps.', tr: 'Birkaç dokunuşla kırp, filtre ve müzik ekle.', de: 'Schneiden, Filter und Musik hinzufügen – mit wenigen Tipps.',
    id: 'Potong, tambahkan filter dan musik dengan beberapa ketukan.', es: 'Recorta, añade filtros y música en pocos toques.', pt: 'Corte, adicione filtros e música em poucos toques.',
    ar: 'قصّ وأضف الفلاتر والموسيقى ببضع لمسات.', fr: 'Coupe, ajoute des filtres et de la musique en quelques touches.', ms: 'Potong, tambah penapis dan muzik dengan beberapa ketikan.',
    hi: 'कुछ ही टैप में ट्रिम करें, फ़िल्टर और म्यूज़िक जोड़ें।', af: 'Knip, voeg filters en musiek by met ’n paar tikke.',
  },
  ob_start_title: {
    en: 'Start creating *for free*', tr: '*Ücretsiz* üretmeye başla', de: 'Starte *kostenlos*', id: 'Mulai berkreasi *gratis*',
    es: 'Empieza a crear *gratis*', pt: 'Comece a criar *grátis*', ar: 'ابدأ الإبداع *مجانًا*', fr: 'Commence à créer *gratuitement*',
    ms: 'Mula berkarya *secara percuma*', hi: '*मुफ़्त में* बनाना शुरू करें', af: 'Begin skep, *gratis*',
  },
  ob_start_desc: {
    en: 'Upgrade anytime for every template and no ads.', tr: 'Tüm şablonlar ve reklamsız kullanım için dilediğin zaman yükselt.',
    de: 'Upgrade jederzeit für alle Vorlagen und ohne Werbung.', id: 'Upgrade kapan saja untuk semua template tanpa iklan.',
    es: 'Mejora cuando quieras para tener todas las plantillas y sin anuncios.', pt: 'Faça upgrade quando quiser para ter todos os modelos e nenhum anúncio.',
    ar: 'قم بالترقية في أي وقت للحصول على كل القوالب وبدون إعلانات.', fr: 'Passe à Premium quand tu veux pour tous les modèles et zéro pub.',
    ms: 'Naik taraf bila-bila masa untuk semua templat tanpa iklan.', hi: 'सभी टेम्पलेट और बिना विज्ञापन के लिए कभी भी अपग्रेड करें।',
    af: 'Gradeer enige tyd op vir elke sjabloon en geen advertensies.',
  },

  // ── Inside the scenes ──
  s_saved: {
    en: 'Saved to gallery', tr: 'Galeriye kaydedildi', de: 'In Galerie gespeichert', id: 'Disimpan ke galeri', es: 'Guardado en la galería', pt: 'Salvo na galeria',
    ar: 'تم الحفظ في المعرض', fr: 'Enregistré dans la galerie', ms: 'Disimpan ke galeri', hi: 'गैलरी में सहेजा गया', af: 'Gestoor na galery',
  },
  s_ghost: {
    en: 'Ghost Mode', tr: 'Hayalet Modu', de: 'Geistermodus', id: 'Mode Hantu', es: 'Modo fantasma', pt: 'Modo fantasma',
    ar: 'وضع الشبح', fr: 'Mode fantôme', ms: 'Mod Hantu', hi: 'घोस्ट मोड', af: 'Spookmodus',
  },
  s_on: { en: 'On', tr: 'Açık', de: 'An', id: 'Aktif', es: 'Activado', pt: 'Ativado', ar: 'مفعّل', fr: 'Activé', ms: 'Hidup', hi: 'चालू', af: 'Aan' },
  s_off: { en: 'Off', tr: 'Kapalı', de: 'Aus', id: 'Nonaktif', es: 'Desactivado', pt: 'Desativado', ar: 'متوقف', fr: 'Désactivé', ms: 'Mati', hi: 'बंद', af: 'Af' },
  s_they_see: {
    en: 'What they see', tr: 'Karşı tarafın gördüğü', de: 'Was sie sehen', id: 'Yang mereka lihat', es: 'Lo que ven', pt: 'O que eles veem',
    ar: 'ما يرونه', fr: 'Ce qu’ils voient', ms: 'Apa yang mereka lihat', hi: 'उन्हें क्या दिखता है', af: 'Wat hulle sien',
  },
  s_story: { en: 'Story view', tr: 'Hikâye görüntüleme', de: 'Story-Aufruf', id: 'Lihat story', es: 'Vista de historia', pt: 'Visualização', ar: 'مشاهدة القصة', fr: 'Vue de story', ms: 'Tontonan story', hi: 'स्टोरी व्यू', af: 'Storie-kyk' },
  s_message: { en: 'Message', tr: 'Mesaj', de: 'Nachricht', id: 'Pesan', es: 'Mensaje', pt: 'Mensagem', ar: 'رسالة', fr: 'Message', ms: 'Mesej', hi: 'मैसेज', af: 'Boodskap' },
  s_seen: { en: 'Seen', tr: 'Görüldü', de: 'Gesehen', id: 'Dilihat', es: 'Visto', pt: 'Visto', ar: 'تمت المشاهدة', fr: 'Vu', ms: 'Dilihat', hi: 'देखा गया', af: 'Gesien' },
  s_hidden: { en: 'Hidden', tr: 'Gizli', de: 'Verborgen', id: 'Tersembunyi', es: 'Oculto', pt: 'Oculto', ar: 'مخفي', fr: 'Masqué', ms: 'Tersembunyi', hi: 'छिपा हुआ', af: 'Versteek' },
  s_active: { en: 'Active now', tr: 'Şu an aktif', de: 'Jetzt aktiv', id: 'Aktif sekarang', es: 'Activa ahora', pt: 'Online agora', ar: 'نشطة الآن', fr: 'En ligne', ms: 'Aktif sekarang', hi: 'अभी एक्टिव', af: 'Nou aktief' },
  s_msg1: {
    en: 'Did you see my story?', tr: 'Hikâyemi gördün mü?', de: 'Hast du meine Story gesehen?', id: 'Udah lihat story aku?', es: '¿Viste mi historia?', pt: 'Viu meu story?',
    ar: 'هل شاهدت قصتي؟', fr: 'Tu as vu ma story ?', ms: 'Dah tengok story saya?', hi: 'मेरी स्टोरी देखी?', af: 'Het jy my storie gesien?',
  },
  s_msg2: {
    en: 'Okay, I have to tell you something…', tr: 'Tamam, sana bir şey söylemem lazım…', de: 'Okay, ich muss dir was sagen…', id: 'Oke, aku harus bilang sesuatu…',
    es: 'Vale, tengo que contarte algo…', pt: 'Tá, preciso te contar uma coisa…', ar: 'حسنًا، يجب أن أخبرك بشيء…', fr: 'Bon, je dois te dire un truc…',
    ms: 'Okey, saya kena beritahu sesuatu…', hi: 'अच्छा, तुम्हें कुछ बताना है…', af: 'Okay, ek moet jou iets vertel…',
  },
  s_unsent: {
    en: '{name} unsent a message', tr: '{name} bir mesajı geri aldı', de: '{name} hat eine Nachricht zurückgezogen', id: '{name} menarik pesan',
    es: '{name} anuló el envío de un mensaje', pt: '{name} cancelou o envio de uma mensagem', ar: 'ألغى {name} إرسال رسالة', fr: '{name} a retiré un message',
    ms: '{name} menarik balik mesej', hi: '{name} ने एक मैसेज अनसेंड किया', af: '{name} het ’n boodskap teruggetrek',
  },
  s_recovered: {
    en: 'Recovered', tr: 'Kurtarıldı', de: 'Gerettet', id: 'Dipulihkan', es: 'Recuperado', pt: 'Recuperada',
    ar: 'تمت الاستعادة', fr: 'Récupéré', ms: 'Dipulihkan', hi: 'रिकवर किया गया', af: 'Herstel',
  },
  s_ai_caption: {
    en: 'AI caption', tr: 'Yapay zekâ açıklaması', de: 'KI-Caption', id: 'Caption AI', es: 'Texto con IA', pt: 'Legenda com IA',
    ar: 'تعليق بالذكاء الاصطناعي', fr: 'Légende IA', ms: 'Kapsyen AI', hi: 'AI कैप्शन', af: 'KI-byskrif',
  },
  s_caption: {
    en: 'Chasing sunsets and slow evenings.', tr: 'Gün batımları ve sakin akşamlar peşinde.', de: 'Sonnenuntergängen und ruhigen Abenden hinterher.',
    id: 'Mengejar senja dan malam yang tenang.', es: 'Persiguiendo atardeceres y tardes tranquilas.', pt: 'Atrás de pores do sol e fins de tarde tranquilos.',
    ar: 'نطارد الغروب والأمسيات الهادئة.', fr: 'À la poursuite des couchers de soleil et des soirées tranquilles.', ms: 'Mengejar matahari terbenam dan petang yang tenang.',
    hi: 'ढलती शामों और सुकून भरे पलों की तलाश में।', af: 'Op soek na sonsondergange en stil aande.',
  },
  s_canvas: {
    en: 'Golden hour', tr: 'Altın saat', de: 'Goldene Stunde', id: 'Golden hour', es: 'Hora dorada', pt: 'Hora dourada',
    ar: 'الساعة الذهبية', fr: 'Heure dorée', ms: 'Waktu keemasan', hi: 'गोल्डन आवर', af: 'Goue uur',
  },
  s_trim: { en: 'Trim', tr: 'Kırp', de: 'Kürzen', id: 'Potong', es: 'Recortar', pt: 'Cortar', ar: 'قصّ', fr: 'Couper', ms: 'Potong', hi: 'ट्रिम', af: 'Knip' },
  s_filters: { en: 'Filters', tr: 'Filtreler', de: 'Filter', id: 'Filter', es: 'Filtros', pt: 'Filtros', ar: 'فلاتر', fr: 'Filtres', ms: 'Penapis', hi: 'फ़िल्टर', af: 'Filters' },
  s_music: { en: 'Music', tr: 'Müzik', de: 'Musik', id: 'Musik', es: 'Música', pt: 'Música', ar: 'موسيقى', fr: 'Musique', ms: 'Muzik', hi: 'म्यूज़िक', af: 'Musiek' },

  // ── The promises ── Keep every one true of the app.
  p_signin: {
    en: 'Sign in on Instagram’s own page', tr: 'Instagram’ın kendi sayfasında giriş yap', de: 'Anmeldung auf Instagrams eigener Seite',
    id: 'Masuk di halaman resmi Instagram', es: 'Inicia sesión en la página oficial de Instagram', pt: 'Entre pela página oficial do Instagram',
    ar: 'سجّل الدخول من صفحة Instagram الرسمية', fr: 'Connexion sur la page officielle d’Instagram', ms: 'Log masuk di halaman rasmi Instagram',
    hi: 'Instagram के अपने पेज पर साइन इन करें', af: 'Meld aan op Instagram se eie bladsy',
  },
  p_local: {
    en: 'Your saves stay on your phone', tr: 'Kaydettiklerin telefonunda kalır', de: 'Deine Downloads bleiben auf deinem Handy', id: 'Simpananmu tetap di ponselmu',
    es: 'Lo que guardas se queda en tu teléfono', pt: 'O que você salva fica no seu celular', ar: 'ما تحفظه يبقى على هاتفك', fr: 'Tes enregistrements restent sur ton téléphone',
    ms: 'Simpanan anda kekal di telefon anda', hi: 'आपकी सेव की गई चीज़ें आपके फ़ोन में ही रहती हैं', af: 'Wat jy stoor, bly op jou foon',
  },
  p_cancel: {
    en: 'Cancel Premium anytime', tr: 'Premium’u dilediğin zaman iptal et', de: 'Premium jederzeit kündbar', id: 'Batalkan Premium kapan saja',
    es: 'Cancela Premium cuando quieras', pt: 'Cancele o Premium quando quiser', ar: 'ألغِ بريميوم في أي وقت', fr: 'Premium résiliable à tout moment',
    ms: 'Batalkan Premium bila-bila masa', hi: 'प्रीमियम कभी भी रद्द करें', af: 'Kanselleer Premium enige tyd',
  },
  p_drafts: {
    en: 'Your drafts stay on your phone', tr: 'Taslakların telefonunda kalır', de: 'Deine Entwürfe bleiben auf deinem Handy', id: 'Drafmu tetap di ponselmu',
    es: 'Tus borradores se quedan en tu teléfono', pt: 'Seus rascunhos ficam no seu celular', ar: 'مسوداتك تبقى على هاتفك', fr: 'Tes brouillons restent sur ton téléphone',
    ms: 'Draf anda kekal di telefon anda', hi: 'आपके ड्राफ़्ट आपके फ़ोन में ही रहते हैं', af: 'Jou konsepte bly op jou foon',
  },
  p_adfree: {
    en: 'No ads with Premium', tr: 'Premium ile reklam yok', de: 'Keine Werbung mit Premium', id: 'Tanpa iklan dengan Premium', es: 'Sin anuncios con Premium',
    pt: 'Sem anúncios com o Premium', ar: 'بلا إعلانات مع بريميوم', fr: 'Zéro pub avec Premium', ms: 'Tiada iklan dengan Premium', hi: 'प्रीमियम के साथ कोई विज्ञापन नहीं', af: 'Geen advertensies met Premium',
  },

  // ── Under the button ──
  f_disclaimer: {
    en: '{app} is an independent app, not affiliated with Instagram.', tr: '{app} bağımsız bir uygulamadır, Instagram ile bağlantılı değildir.',
    de: '{app} ist eine unabhängige App und nicht mit Instagram verbunden.', id: '{app} adalah aplikasi independen, tidak berafiliasi dengan Instagram.',
    es: '{app} es una app independiente, sin relación con Instagram.', pt: 'O {app} é um app independente, sem vínculo com o Instagram.',
    ar: '{app} تطبيق مستقل وغير تابع لـ Instagram.', fr: '{app} est une app indépendante, non affiliée à Instagram.',
    ms: '{app} ialah aplikasi bebas, tidak bergabung dengan Instagram.', hi: '{app} एक स्वतंत्र ऐप है, Instagram से संबद्ध नहीं है।',
    af: '{app} is ’n onafhanklike app, nie verbonde aan Instagram nie.',
  },
  f_pay: {
    en: 'Secure payments through {store}', tr: '{store} üzerinden güvenli ödeme', de: 'Sichere Zahlung über {store}', id: 'Pembayaran aman melalui {store}',
    es: 'Pagos seguros a través de {store}', pt: 'Pagamentos seguros pela {store}', ar: 'دفع آمن عبر {store}', fr: 'Paiement sécurisé via {store}',
    ms: 'Pembayaran selamat melalui {store}', hi: '{store} के ज़रिए सुरक्षित भुगतान', af: 'Veilige betalings deur {store}',
  },
};
