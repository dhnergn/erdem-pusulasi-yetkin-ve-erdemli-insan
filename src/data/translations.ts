import { Language } from '../types/i18n';
import { VirtueKey } from '../types/virtue';

export interface LocalizedVirtueInfo {
  title: string;
  tagline: string;
  definition: string;
  quote: {
    text: string;
    author: string;
  };
  levels: {
    l1: string;
    l2: string;
    l3: string;
    l4: string;
  };
}

export const VIRTUE_TRANSLATIONS: Record<Language, Record<VirtueKey, LocalizedVirtueInfo>> = {
  tr: {
    ahlakli: {
      title: 'Ahlaklı',
      tagline: 'Doğruluk, dürüstlük ve emanete sadakat',
      definition: 'İçinde ve dışında tutarlı, sözünde duran, emanete riayet eden, adaleti her şartta gözeten ve kul/kamu hakkını kutsal sayan insan erdemi.',
      quote: { text: 'Doğruluk emanet, yalancılık ise hıyanettir.', author: 'Hz. Ebubekir' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    bilge: {
      title: 'Bilge',
      tagline: 'Hakikat arayışı, tefekkür ve hikmet',
      definition: 'Sadece bilgi depolayan değil, edindiği bilgiyi hayatına ve ahlakına dönüştüren, tefekkür eden, haddini bilen ve hikmet yolcusu insan.',
      quote: { text: 'İlim ilim bilmektir, ilim kendin bilmektir; sen kendini bilmezsin, ya nice okumaktır.', author: 'Yunus Emre' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    cesaretli: {
      title: 'Cesaretli',
      tagline: 'Doğruyu savunma, medeni cesaret ve girişimcilik',
      definition: 'Korkusuzluk değil, korkuya rağmen doğru olanı yapabilme; haksızlığa karşı ses çıkarabilme, hata yapmaktan korkmadan deneme gücü.',
      quote: { text: 'Cesaret, tehlike karşısında aklın ve kalbin sarsılmaz duruşudur.', author: 'Farabi' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    estetik: {
      title: 'Estetik',
      tagline: 'Zarafet, tatlı dil ve çevre güzelliği',
      definition: 'Hayatı, dili, davranışları ve çevreyi güzelleştirme tutkusu; sanata duyarlılık, sözün en güzelini seçme ve zarafet arama şuuru.',
      quote: { text: 'Allah güzeldir, güzelliği sever.', author: 'Hadis-i Şerif' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    iradeli: {
      title: 'İradeli',
      tagline: 'Öz denetim, sabır ve kararlılık',
      definition: 'Anlık dürtülere ve bağımlılıklara "hayır" diyebilme, uzun vadeli yüce hedeflere odaklanma ve başladığı hayırlı işi sabırla tamamlama gücü.',
      quote: { text: 'En büyük zafer, insanın kendi nefsine ve arzularına karşı kazandığı zaferdir.', author: 'Platon' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    merhametli: {
      title: 'Merhametli',
      tagline: 'Şefkat, empati ve dilsiz canlara kol kanat germe',
      definition: 'Yaratılanı yaratandan ötürü sevme, acıyı yüreğinde hissetme, affedici olma, dilsiz bir hayvana veya zayıfa gönülden yardım eli uzatma yüceliği.',
      quote: { text: 'Yeryüzündekilere merhamet edin ki, göktekiler de size merhamet etsin.', author: 'Hz. Muhammed (s.a.v.)' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    saglikli: {
      title: 'Sağlıklı',
      tagline: 'Beden, zihin ve ruh emanetine saygı',
      definition: 'Bedenini bir emanet bilip temiz, dengeli ve hareketli yaşamak; zararlı maddelerden ve zihni körelten alışkanlıklardan uzak durma bilinci.',
      quote: { text: 'Halk içinde muteber bir nesne yok devlet gibi, olmaya devlet cihanda bir nefes sıhhat gibi.', author: 'Kanuni Sultan Süleyman' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    sorgulayici: {
      title: 'Sorgulayıcı',
      tagline: 'Eleştirel düşünme, teyit ve hakikat dedektifliği',
      definition: 'Her duyduğuna körü körüne inanmayan, delil ve kaynak arayan, "Neden?", "Nasıl?" sorularını cesaretle soran, ön yargıları akıl süzgecinden geçiren zihniyet.',
      quote: { text: 'Sorgulanmamış bir hayat, yaşanmaya değer değildir.', author: 'Sokrates' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    uretken: {
      title: 'Üretken',
      tagline: 'Fikir, emek ve faydalı eser üretme aşkı',
      definition: 'Tüketim çılgınlığına kapılmayıp el emeği, zihin gücü veya sanatıyla insanlığa ve doğaya fayda sağlayan; şikayet etmek yerine çözüm üreten şahsiyet.',
      quote: { text: 'İnsanların en hayırlısı, insanlara en çok faydası dokunandır.', author: 'Hadis-i Şerif' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    },
    vatansever: {
      title: 'Vatansever',
      tagline: 'Kültürel miras, kamu hakkı ve toplumsal sorumluluk',
      definition: 'Vatanını lafla değil, işini en iyi yaparak, tarihine, diline, bayrağına, doğasına ve kamu mallarına gözü gibi sahip çıkarak seven yüksek milli şuur.',
      quote: { text: 'Vatanını en çok seven, görevini en iyi yapandır.', author: 'Mustafa Kemal Atatürk' },
      levels: { l1: 'Başlangıç', l2: 'Gelişmekte', l3: 'Yetkin', l4: 'Erdemli Öncü' }
    }
  },
  en: {
    ahlakli: {
      title: 'Moral & Ethical',
      tagline: 'Truthfulness, integrity and stewardship',
      definition: 'Consistent within and without, keeping promises, respecting trust, upholding justice in all circumstances, and treating public and individual rights as sacred.',
      quote: { text: 'Truthfulness is a trust, and lying is betrayal.', author: 'Abu Bakr' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    bilge: {
      title: 'Wise & Sage',
      tagline: 'Pursuit of truth, contemplation and wisdom',
      definition: 'Not merely accumulating data, but transforming knowledge into righteous conduct, deep contemplation, knowing one’s limits, and seeking wisdom.',
      quote: { text: 'Knowledge is to know yourself; if you do not know yourself, what is the use of reading?', author: 'Yunus Emre' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    cesaretli: {
      title: 'Courageous',
      tagline: 'Defending truth, civic courage and initiative',
      definition: 'Not the absence of fear, but acting rightly despite fear; speaking up against injustice, admitting mistakes gracefully, and daring to try without fear.',
      quote: { text: 'Courage is the steadfast balance of mind and heart when confronting danger.', author: 'Al-Farabi' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    estetik: {
      title: 'Aesthetic',
      tagline: 'Grace, courteous speech and harmony of environment',
      definition: 'The passion to beautify life, speech, behavior, and surroundings; artistic sensitivity, choosing the finest words, and pursuing harmony in all deeds.',
      quote: { text: 'God is beautiful and loves beauty.', author: 'Prophetic Tradition' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    iradeli: {
      title: 'Resolute & Willed',
      tagline: 'Self-discipline, patience and perseverance',
      definition: 'The fortitude to say "no" to momentary impulses and addictions, focusing on noble long-term goals, and patiently completing whatever beneficial work is begun.',
      quote: { text: 'The first and greatest victory is to conquer yourself.', author: 'Plato' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    merhametli: {
      title: 'Compassionate',
      tagline: 'Tenderness, empathy and care for all living beings',
      definition: 'Loving creation for the Creator’s sake, feeling others’ pain in one’s own heart, being forgiving, and extending a heartfelt helping hand to the vulnerable.',
      quote: { text: 'Be merciful to those on earth, and the One in heaven will have mercy on you.', author: 'Prophet Muhammad' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    saglikli: {
      title: 'Healthy',
      tagline: 'Honoring body, mind and spirit as a sacred trust',
      definition: 'Recognizing one’s body as a sacred trust; living clean, balanced, and active; avoiding toxic substances and habits that dull the mind.',
      quote: { text: 'There is no treasure in this world like good health.', author: 'Suleiman the Magnificent' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    sorgulayici: {
      title: 'Inquisitive & Critical',
      tagline: 'Critical thinking, verification and truth detective',
      definition: 'Refusing blind belief, actively demanding evidence and sources, asking "Why?" and "How?", and dismantling prejudices through reason and discernment.',
      quote: { text: 'An unexamined life is not worth living.', author: 'Socrates' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    uretken: {
      title: 'Productive & Creative',
      tagline: 'Passion for craft, ingenuity and beneficial production',
      definition: 'Rejecting mind-numbing consumerism; providing real value to humanity and nature through craftsmanship, intellectual output, and practical problem-solving.',
      quote: { text: 'The best of people are those who bring the greatest benefit to humankind.', author: 'Prophetic Tradition' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    },
    vatansever: {
      title: 'Patriotic & Civic',
      tagline: 'Cultural heritage, public good and civic responsibility',
      definition: 'Loving one’s homeland not merely in words, but by doing one’s work with supreme excellence, protecting history, language, nature, and shared public wealth.',
      quote: { text: 'Those who love their homeland most are those who perform their duties best.', author: 'Mustafa Kemal Atatürk' },
      levels: { l1: 'Novice', l2: 'Developing', l3: 'Competent', l4: 'Virtuous Pioneer' }
    }
  },
  de: {
    ahlakli: {
      title: 'Moralisch & Ethisch',
      tagline: 'Aufrichtigkeit, Ehrlichkeit und Treue zum Vertrauen',
      definition: 'In Wort und Tat beständig, Versprechen haltend, Treue bewahrend, Gerechtigkeit wahrend und das Wohl der Gemeinschaft heiligend.',
      quote: { text: 'Wahrhaftigkeit ist ein Anvertrautes, und Lüge ist Verrat.', author: 'Abu Bakr' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    bilge: {
      title: 'Weise & Gelehrt',
      tagline: 'Suche nach Wahrheit, Besinnung und Weisheit',
      definition: 'Nicht bloß Wissen anhäufen, sondern Erkenntnisse in tugendhaftes Handeln, Selbstbeherrschung und Weisheit verwandeln.',
      quote: { text: 'Wissen bedeutet, sich selbst zu erkennen; wenn du dich selbst nicht kennst, wozu dient das Lesen?', author: 'Yunus Emre' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    cesaretli: {
      title: 'Mutig & Standhaft',
      tagline: 'Verteidigung des Rechts, Zivilcourage und Tatkraft',
      definition: 'Nicht die Abwesenheit von Furcht, sondern trotz Angst das Richtige tun; Ungerechtigkeit anprangern und Fehler aufrichtig eingestehen.',
      quote: { text: 'Mut ist die unerschütterliche Haltung von Verstand und Herz angesichts der Gefahr.', author: 'Al-Farabi' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    estetik: {
      title: 'Ästhetisch',
      tagline: 'Anmut, freundliche Sprache und harmonische Umwelt',
      definition: 'Das Bestreben, Sprache, Verhalten und Umgebung zu verschönern; Feingefühl für Kunst und Streben nach Maß und Harmonie.',
      quote: { text: 'Gott ist schön und liebt die Schönheit.', author: 'Prophetische Überlieferung' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    iradeli: {
      title: 'Willensstark',
      tagline: 'Selbstdisziplin, Geduld und Entschlossenheit',
      definition: 'Die Kraft, flüchtigen Verlockungen zu widerstehen, sich auf hohe Ziele zu konzentrieren und begonnene gute Taten zu vollenden.',
      quote: { text: 'Der größte Sieg ist der Sieg über das eigene Selbst.', author: 'Platon' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    merhametli: {
      title: 'Barmherzig & Mitfühlend',
      tagline: 'Güte, Empathie und Schutz für alle Lebewesen',
      definition: 'Die Schöpfung lieben, das Leid anderer im eigenen Herzen spüren, Vergebung üben und Schwachen uneigennützig beistehen.',
      quote: { text: 'Seid barmherzig zu den Wesen auf Erden, so wird der im Himmel euch barmherzig sein.', author: 'Prophet Muhammad' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    saglikli: {
      title: 'Gesund',
      tagline: 'Respekt vor Körper, Geist und seelischem Gleichgewicht',
      definition: 'Den Körper als Geschenk achten, maßvoll leben, schädliche Gewohnheiten meiden und seelische Ruhe pflegen.',
      quote: { text: 'Es gibt keinen größeren Reichtum auf Erden als ein Atemzug voller Gesundheit.', author: 'Süleyman der Prächtige' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    sorgulayici: {
      title: 'Hinterfragend & Kritisch',
      tagline: 'Kritisches Denken, Faktenprüfung und Wahrheitssuche',
      definition: 'Keinem Gerücht blind glauben, Beweise verlangen, beharrlich „Warum?“ fragen und Vorurteile mit Vernunft abbauen.',
      quote: { text: 'Ein unhinterfragtes Leben ist nicht lebenswert.', author: 'Sokrates' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    uretken: {
      title: 'Produktiv & Schöpferisch',
      tagline: 'Begeisterung für Schaffenskraft und nützliche Werke',
      definition: 'Nicht bloß konsumieren, sondern durch Handwerk, Geist und Herz Lösungen für Mitmenschen und Umwelt hervorbringen.',
      quote: { text: 'Die besten unter den Menschen sind jene, die anderen am meisten nützen.', author: 'Prophetische Überlieferung' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    },
    vatansever: {
      title: 'Patriotisch & Bürgerlich',
      tagline: 'Kulturerbe, Gemeinwohl und bürgerschaftliche Pflicht',
      definition: 'Die Heimat durch vorbildliche Pflichterfüllung ehren, Geschichte, Natur und öffentliches Gut gewissenhaft bewahren.',
      quote: { text: 'Wer seine Heimat am meisten liebt, erfüllt seine Aufgaben am besten.', author: 'Mustafa Kemal Atatürk' },
      levels: { l1: 'Anfänger', l2: 'In Entwicklung', l3: 'Kompetent', l4: 'Tugendhafter Pionier' }
    }
  },
  ar: {
    ahlakli: {
      title: 'الأخلاقي والأمين',
      tagline: 'الصدق والأمانة والوفاء بالعهد',
      definition: 'الإنسان المتطابق ظاهراً وباطناً، الحافظ للعهد والأمانة، المقيم للعدل في كل ظرف وحال، والمقدس لحقوق الناس والمال العام.',
      quote: { text: 'الصدق أمانة والكذب خيانة.', author: 'أبو بكر الصديق' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    bilge: {
      title: 'الحكيم والمعرفي',
      tagline: 'طلب الحقيقة والتفكر والحكمة',
      definition: 'ليس مجرد مكدس للمعلومات، بل من يحول علمه إلى عمل وأخلاق وتفكر ومعرفة لقدر نفسه.',
      quote: { text: 'العلم أن تعرف نفسك، وإن لم تعرف نفسك فما فائدة القراءة؟', author: 'يونس إمري' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    cesaretli: {
      title: 'الشجاع والجريء بالحق',
      tagline: 'نصرة الحق والشجاعة الأدبية والمبادرة',
      definition: 'ليست الشجاعة انعدام الخوف، بل نصرة الحق رغم الخوف والاعتراف بالخطأ والوقوف ضد الظلم بأدب وثبات.',
      quote: { text: 'الشجاعة هي ثبات العقل والقلب عند مواجهة الخطر.', author: 'الفارابي' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    estetik: {
      title: 'الجمالي والذوقي',
      tagline: 'اللباقة وحسن القول وجمال البيئة',
      definition: 'الشغف بتجميل الحياة واللسان والسلوك والمحيط، وحسن اختيار الكلمات وبناء الانسجام في كل فعل.',
      quote: { text: 'إن الله جميل يحب الجمال.', author: 'حديث شريف' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    iradeli: {
      title: 'صاحب الإرادة والضبط',
      tagline: 'ضبط النفس والصبر والعزيمة',
      definition: 'القدرة على قول "لا" للشهوات والملهيات العابرة، والتركيز على الغايات السامية وإتمام العمل الصالح بصبر.',
      quote: { text: 'أعظم انتصار هو انتصار الإنسان على نفسه ورغباته.', author: 'أفلاطون' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    merhametli: {
      title: 'الرحيم والمعطاء',
      tagline: 'الشفقة والتعاطف وإغاثة الضعفاء والكائنات',
      definition: 'حب الخلق رحمة بالخالق، والشعور بآلام الآخرين، والعفو عند المقدرة، ومد يد العون للكائنات الضعيفة والحيوان الصامت.',
      quote: { text: 'ارحموا من في الأرض يرحمكم من في السماء.', author: 'النبي محمد (ص)' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    saglikli: {
      title: 'الصحي والمتوازن',
      tagline: 'صيانة أمانة الجسد والعقل والروح',
      definition: 'معاملة الجسد كأمانة عبر العيش المتوازن النظيف والحركة، والابتعاد عما يضر البدن ويفسد صفاء النفس.',
      quote: { text: 'ليس في الوجود ملك أعظم من نفس يخرج في عافية.', author: 'السلطان سليمان القانوني' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    sorgulayici: {
      title: 'المستفسر والناقد',
      tagline: 'التفكير النقدي والتثبت وتقصي الحقائق',
      definition: 'عدم التصديق الأعمى لكل شائعة، وطلب البرهان والحجة، والتساؤل المستمر لإسقاط الأحكام المسبقة بالعقل.',
      quote: { text: 'الحياة التي لا تُفحص وتُمحص لا تستحق أن تُعاش.', author: 'سقراط' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    uretken: {
      title: 'المنتج والمبتكر',
      tagline: 'صناعة الأثر النافع والعمل البنّاء',
      definition: 'الانعتاق من أسر الاستهلاك المجرد، وتقديم النفع للبشرية والطبيعة بالجهد والفكر والابتكار بدلاً من الشكوى.',
      quote: { text: 'خير الناس أنفعهم للناس.', author: 'حديث شريف' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    },
    vatansever: {
      title: 'المحب للوطن والمجتمع',
      tagline: 'صون التراث والمال العام والمسؤولية المدنية',
      definition: 'حب الوطن بالعمل المتقن وإحسان الصنعة، وحماية التراث واللغة والبيئة والممتلكات العامة بعين الحريص.',
      quote: { text: 'أشد الناس حباً لوطنه هو من يؤدي واجبه على أكمل وجه.', author: 'مصطفى كمال أتاتورك' },
      levels: { l1: 'مبتدئ', l2: 'نامٍ', l3: 'متمكن', l4: 'رائد فضيل' }
    }
  },
  fr: {
    ahlakli: {
      title: 'Moral & Éthique',
      tagline: 'Droiture, intégrité et fidélité au dépôt',
      definition: 'Cohérent en paroles et en actes, respectant ses engagements, garant de la justice en toute circonstance et traitant les droits d’autrui et le bien public comme sacrés.',
      quote: { text: 'La véracité est un dépôt, et le mensonge une trahison.', author: 'Abou Bakr' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    bilge: {
      title: 'Sage & Érudit',
      tagline: 'Quête de vérité, contemplation et sagesse',
      definition: 'Ne pas simplement accumuler des informations, mais transformer le savoir en conduite juste, contemplation, connaissance de ses limites et quête de sagesse.',
      quote: { text: 'Le savoir, c’est se connaître soi-même ; si tu ne te connais pas, à quoi bon lire ?', author: 'Yunus Emre' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    cesaretli: {
      title: 'Courageux',
      tagline: 'Défense de la vérité, courage civique et initiative',
      definition: 'Non pas l’absence de peur, mais la force d’agir avec droiture malgré la crainte ; s’élever contre l’injustice et reconnaître ses fautes avec dignité.',
      quote: { text: 'Le courage est la fermeté inébranlable de l’esprit et du cœur face au danger.', author: 'Al-Farabi' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    estetik: {
      title: 'Esthétique',
      tagline: 'Élégance, courtoisie du langage et harmonie de l’environnement',
      definition: 'La passion d’embellir la vie, la parole, les attitudes et le milieu ; sensibilité artistique, choix des mots les plus justes et recherche d’harmonie.',
      quote: { text: 'Dieu est beau et Il aime la beauté.', author: 'Tradition prophétique' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    iradeli: {
      title: 'Volontaire & Résolu',
      tagline: 'Maîtrise de soi, patience et persévérance',
      definition: 'La force de dire « non » aux pulsions passagères et aux distractions, de se concentrer sur de nobles objectifs et d’achever avec patience les bonnes œuvres.',
      quote: { text: 'La plus grande des victoires est celle que l’on remporte sur soi-même.', author: 'Platon' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    merhametli: {
      title: 'Compatissant',
      tagline: 'Bienveillance, empathie et protection des êtres vivants',
      definition: 'Aimer la création pour l’amour du Créateur, ressentir la souffrance d’autrui dans son cœur, pardonner et tendre une main secourable aux faibles et aux créatures.',
      quote: { text: 'Soyez miséricordieux envers ceux qui sont sur terre, et Celui qui est au ciel le sera envers vous.', author: 'Prophète Muhammad' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    saglikli: {
      title: 'Sain & Équilibré',
      tagline: 'Respect du corps, de l’esprit et de l’âme comme un dépôt sacré',
      definition: 'Reconnaître son corps comme un dépôt sacré ; mener une vie saine, active et équilibrée, en évitant les substances nocives et les habitudes néfastes.',
      quote: { text: 'Il n’est point de trésor en ce monde égal à un souffle de santé.', author: 'Soliman le Magnifique' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    sorgulayici: {
      title: 'Esprit Critique & Inquisitif',
      tagline: 'Pensée critique, vérification et quête de vérité',
      definition: 'Refuser les croyances aveugles, exiger des preuves et des sources fiables, poser sans crainte les questions « Pourquoi ? » et « Comment ? ».',
      quote: { text: 'Une vie sans examen ne vaut pas la peine d’être vécue.', author: 'Socrate' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    uretken: {
      title: 'Productif & Créatif',
      tagline: 'Passion du travail bien fait et créativité utile',
      definition: 'Dépasser la consommation passive pour apporter une valeur réelle à l’humanité et à la nature par le travail manuel, intellectuel et la résolution de problèmes.',
      quote: { text: 'Les meilleurs des hommes sont ceux qui sont les plus utiles aux autres.', author: 'Tradition prophétique' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    },
    vatansever: {
      title: 'Patriote & Civique',
      tagline: 'Patrimoine culturel, bien commun et devoir civique',
      definition: 'Aimer sa patrie par l’excellence de son travail, la préservation de son histoire, de sa langue, de sa nature et de ses biens publics.',
      quote: { text: 'Ceux qui aiment le plus leur patrie sont ceux qui accomplissent le mieux leur devoir.', author: 'Mustafa Kemal Atatürk' },
      levels: { l1: 'Débutant', l2: 'En développement', l3: 'Compétent', l4: 'Pionnier vertueux' }
    }
  },
  es: {
    ahlakli: {
      title: 'Moral y Ético',
      tagline: 'Rectitud, honestidad y lealtad a la confianza',
      definition: 'Coherente en pensamiento y acción, fiel a su palabra, custodio de la confianza, defensor de la justicia y protector del bien público.',
      quote: { text: 'La veracidad es un tesoro de confianza y la mentira es traición.', author: 'Abu Bakr' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    bilge: {
      title: 'Sabio y Erudito',
      tagline: 'Búsqueda de la verdad, contemplación y sabiduría',
      definition: 'No se limita a acumular datos, sino que transforma el saber en rectitud, contemplación profunda, humildad y sabiduría de vida.',
      quote: { text: 'El conocimiento es conocerse a uno mismo; si no te conoces, ¿de qué sirve leer?', author: 'Yunus Emre' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    cesaretli: {
      title: 'Valiente y Decidido',
      tagline: 'Defensa del bien, valentía cívica e iniciativa',
      definition: 'No es la ausencia de miedo, sino la determinación de obrar correctamente a pesar del temor; alzar la voz contra la injusticia y admitir los errores con nobleza.',
      quote: { text: 'El coraje es la firmeza inquebrantable de la mente y el corazón ante el peligro.', author: 'Al-Farabi' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    estetik: {
      title: 'Estético y Armonioso',
      tagline: 'Gracia, lenguaje cortés y belleza ambiental',
      definition: 'El anhelo de embellecer la vida, la palabra, el trato y el entorno; sensibilidad artística, cortesía genuina y búsqueda de armonía en todo quehacer.',
      quote: { text: 'Dios es bello y ama la belleza.', author: 'Tradición profética' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    iradeli: {
      title: 'Perseverante y Resuelto',
      tagline: 'Autodisciplina, paciencia y determinación',
      definition: 'La fortaleza de decir "no" a los impulsos pasajeros y a las distracciones, enfocándose en nobles ideales y perseverando con paciencia hasta concluir el bien.',
      quote: { text: 'La primera y mayor de las victorias es conquistarse a uno mismo.', author: 'Platón' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    merhametli: {
      title: 'Compasivo y Solidario',
      tagline: 'Ternura, empatía y amparo a los seres vulnerables',
      definition: 'Amar la creación por amor al Creador, sentir el dolor ajeno en el propio corazón, perdonar con nobleza y tender la mano a los desprotegidos y animales.',
      quote: { text: 'Sed misericordiosos con quienes están en la tierra, y Aquel que está en el cielo lo será con vosotros.', author: 'Profeta Muhammad' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    saglikli: {
      title: 'Saludable y Vital',
      tagline: 'Respeto al cuerpo, mente y espíritu como custodia sagrada',
      definition: 'Reconocer el propio cuerpo como un don sagrado; llevar una vida equilibrada, activa y limpia, rechazando hábitos y sustancias perjudiciales.',
      quote: { text: 'No hay mayor riqueza en este mundo que un hálito de salud.', author: 'Solimán el Magnífico' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    sorgulayici: {
      title: 'Inquisitivo y Crítico',
      tagline: 'Pensamiento crítico, verificación y rigor en la verdad',
      definition: 'Rechazar la credulidad ciega, exigir pruebas y fuentes fiables, preguntar con valor "¿Por qué?" y "¿Cómo?" para desterrar los prejuicios con la razón.',
      quote: { text: 'Una vida sin examen no merece ser vivida.', author: 'Sócrates' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    uretken: {
      title: 'Productivo y Creador',
      tagline: 'Pasión por el trabajo benéfico, ingenio y obra útil',
      definition: 'Superar el consumo pasivo para aportar valor genuino a la sociedad y a la naturaleza mediante el esfuerzo manual, intelectual y la resolución constructiva de problemas.',
      quote: { text: 'Los mejores entre los seres humanos son quienes mayor beneficio aportan a los demás.', author: 'Tradición profética' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    },
    vatansever: {
      title: 'Patriota y Ciudadano',
      tagline: 'Patrimonio cultural, bien común y responsabilidad cívica',
      definition: 'Amar la patria cumpliendo el deber con suprema excelencia, salvaguardando la historia, la lengua, la naturaleza y los bienes públicos.',
      quote: { text: 'Quien más ama a su patria es quien mejor cumple con su deber.', author: 'Mustafa Kemal Atatürk' },
      levels: { l1: 'Principiante', l2: 'En desarrollo', l3: 'Competente', l4: 'Pionero virtuoso' }
    }
  }
};

export interface UiTranslations {
  brand: string;
  nav: {
    quests: string;
    dilemmas: string;
    assessment: string;
    radar: string;
    journal: string;
    certificate: string;
    profile: string;
  };
  hero: {
    kicker: string;
    subKicker: string;
    title: string;
    desc: string;
    statVirtues: string;
    statCompleted: string;
    statIndex: string;
    startQuests: string;
    selfRubric: string;
    visualBadge: string;
    visualDesc: string;
  };
  strip: {
    title: string;
    heading: string;
    filterLabel: string;
    filterAll: string;
    inspect: string;
  };
  quests: {
    kicker: string;
    subKicker: string;
    heading: string;
    desc: string;
    filterAll: string;
    filterPending: string;
    filterCompleted: string;
    activeFilterNote: string;
    clearFilter: string;
    xpReward: string;
    completed: string;
    actionGuide: string;
    yourReflection: string;
    showSteps: string;
    hideSteps: string;
    reflectAndComplete: string;
    completeButton: string;
    emptyNote: string;
  };
  dilemmas: {
    kicker: string;
    subKicker: string;
    heading: string;
    desc: string;
    sampleList: string;
    scenarioOf: string;
    evaluateDecision: string;
    virtuousTitle: string;
    growthTitle: string;
    affectedVirtue: string;
    secondaryImpact: string;
    tryDifferent: string;
    nextScenario: string;
  };
  radar: {
    kicker: string;
    subKicker: string;
    heading: string;
    desc: string;
    currentScore: string;
    hoverHint: string;
    detailTitle: string;
    balanceTitle: string;
    balanceDesc: string;
    strongest: string;
    growthArea: string;
    pedagogicalAdvice: string;
  };
  assessment: {
    kicker: string;
    subKicker: string;
    heading: string;
    desc: string;
    tabSelf: string;
    tabObserver: string;
    instruction: string;
    selectedLevel: string;
    currentStatus: string;
    clickToSelect: string;
    observerHeading: string;
    observerDesc: string;
    observerRole: string;
    observerName: string;
    studentName: string;
    observerScaleTitle: string;
    observerCommentLabel: string;
    createReport: string;
    closePreview: string;
    printReport: string;
  };
  workshop: {
    kicker: string;
    subKicker: string;
    heading: string;
    desc: string;
    tabFact: string;
    tabGrace: string;
    tabFocus: string;
    tabHealth: string;
    factHeading: string;
    factDesc: string;
    factScore: string;
    factComplete: string;
    graceHeading: string;
    graceDesc: string;
    graceTransformBtn: string;
    graceOutputTitle: string;
    focusHeading: string;
    focusDesc: string;
    focusStart: string;
    focusPause: string;
    temptationsResisted: string;
    resistedBtn: string;
    healthHeading: string;
    healthDesc: string;
    healthSleep: string;
    healthWater: string;
    healthSteps: string;
    healthScreen: string;
    healthScoreLabel: string;
  };
  journal: {
    kicker: string;
    subKicker: string;
    heading: string;
    desc: string;
    addNew: string;
    selectVirtue: string;
    deedTitle: string;
    reflectionText: string;
    saveBtn: string;
    successMsg: string;
    pastEntries: string;
    emptyLog: string;
  };
  certificate: {
    title: string;
    printBtn: string;
    subHeader: string;
    certName: string;
    presentedTo: string;
    summary: string;
    date: string;
    seal: string;
    signature: string;
  };
  profileModal: {
    title: string;
    nameLabel: string;
    schoolLabel: string;
    gradeLabel: string;
    resetData: string;
    save: string;
    saved: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const UI_TRANSLATIONS: Record<Language, UiTranslations> = {
  tr: {
    brand: 'Erdem Pusulası',
    nav: {
      quests: 'İnteraktif Görevler',
      dilemmas: 'Ahlaki İkilemler',
      assessment: 'Değerlendirme Rubriği',
      radar: 'Yetkinlik Radarı',
      journal: 'Erdem Günlüğü',
      certificate: 'Erdem Belgesi',
      profile: 'Profilim'
    },
    hero: {
      kicker: 'Türkiye Yüzyılı Maarif Modeli',
      subKicker: 'Karakter ve Değerler Eğitimi',
      title: 'Yetkin ve Erdemli İnsanın Doğuşu',
      desc: 'Ahlaklı, bilge, cesaretli, estetik, iradeli, merhametli, sağlıklı, sorgulayıcı, üretken ve vatansever... Bu on temel erdemi sadece ezberleyen değil, günlük eylemleri ve kararlarıyla hayata dönüştüren erdem yolculuğu.',
      statVirtues: 'Temel Erdem Boyutu',
      statCompleted: 'Tamamlanan Görevler',
      statIndex: 'Genel Erdem Endeksi',
      startQuests: 'İnteraktif Görevlere Başla',
      selfRubric: 'Öz Değerlendirme Rubriği',
      visualBadge: 'ON TEMEL BOYUT',
      visualDesc: 'Düşünceden eyleme, eylemden ahlaki karaktere.'
    },
    strip: {
      title: '10 Temel Karakter Alanı',
      heading: 'Erdem ve Yetkinlik Matrisi',
      filterLabel: 'Görev Filtresi:',
      filterAll: 'Tümü (10 Erdem)',
      inspect: 'İncele'
    },
    quests: {
      kicker: 'Eyleme Dönüşen Değerler',
      subKicker: 'Uygulamalı Görevler',
      heading: 'İnteraktif Erdem Görevleri',
      desc: 'Erdemli olmak sadece bilmek değil, her gün küçük adımlarla eyleme geçmektir. Görevleri tamamla, deneyimini günlüğe not et ve erdem puanlarını artır.',
      filterAll: 'Tüm Görevler',
      filterPending: 'Bekleyenler',
      filterCompleted: 'Tamamlananlar',
      activeFilterNote: 'Şu an seçilen erdeme ait görevler listeleniyor:',
      clearFilter: 'Filtreyi Temizle',
      xpReward: 'Erdem XP',
      completed: 'Tamamlandı',
      actionGuide: 'Adım Adım Eylem Rehberi',
      yourReflection: 'Senin Yansıman:',
      showSteps: 'Uygulama Adımları & Günlük',
      hideSteps: 'Adımları Gizle',
      reflectAndComplete: 'Yansıt ve Tamamla',
      completeButton: 'Görevi Tamamla',
      emptyNote: 'Bu filtre kriterine uygun görev bulunamadı.'
    },
    dilemmas: {
      kicker: 'Vicdan ve Karar Laboratuvarı',
      subKicker: 'İnteraktif Simülatör',
      heading: 'Ahlaki İkilemler ve Karar Ağacı',
      desc: 'Gerçek hayatta doğru olanı seçmek her zaman kolay değildir. Farklı senaryolarda kararını ver, kararlarının vicdani ve ahlaki sonuçlarını anında keşfet.',
      sampleList: 'Örnek Yaşam Senaryoları',
      scenarioOf: 'Senaryo',
      evaluateDecision: 'Kararımı Değerlendir',
      virtuousTitle: 'Erdemli ve Yapıcı Bir Tercih',
      growthTitle: 'Gelişime Açık Bir Karar',
      affectedVirtue: 'Etkilenen Erdem:',
      secondaryImpact: 'İkincil Etki:',
      tryDifferent: 'Farklı Bir Seçeneği Dene',
      nextScenario: 'Sıradaki Senaryo'
    },
    radar: {
      kicker: 'Bütüncül Karakter Analizi',
      subKicker: '10 Boyutlu Gelişim Haritası',
      heading: 'Yetkinlik ve Erdem Radarı',
      desc: 'Yetkin ve erdemli insan; tek bir alanda değil, tüm boyutlarda ahenkli bir denge kurandır.',
      currentScore: 'Mevcut Erdem Puanı',
      hoverHint: 'Düğümlerin üzerine gelerek detayları görebilirsiniz',
      detailTitle: 'Seçilen Erdem Detayı',
      balanceTitle: 'Bütüncül Erdem Dengesi',
      balanceDesc: 'Karakter gelişiminde bir erdemin çok yüksek, diğerinin ihmal edilmiş olması yerine dengeli bir gelişim hedeflenir.',
      strongest: 'En Güçlü Alanın:',
      growthArea: 'Odaklanman Önerilen Alan:',
      pedagogicalAdvice: 'Pedagojik Gelişim Tavsiyesi'
    },
    assessment: {
      kicker: 'Ölçme ve Değerlendirme Araçları',
      subKicker: 'Karakter Gelişim Rubriği',
      heading: 'Erdem Değerlendirme Merkezi',
      desc: 'Öğrencinin erdem yolculuğunu somut göstergelerle ölçen iki yönlü değerlendirme aracı: Öz değerlendirme rubriği ve Gözlemci formu.',
      tabSelf: 'Öz Değerlendirme Rubriği',
      tabObserver: 'Gözlemci Değerlendirme Formu',
      instruction: 'Değerlendirme Yönergesi: Her erdem için kendi durumunu en iyi açıklayan seviyeyi seç. Puanların Yetkinlik Radarına anında yansır.',
      selectedLevel: 'Seçilen Seviye:',
      currentStatus: 'Mevcut Durum',
      clickToSelect: 'Seçmek için tıkla',
      observerHeading: 'Gözlemci Değerlendirme ve Kanaat Raporu',
      observerDesc: 'Öğretmen, veli veya akran olarak öğrencinin davranışlarını değerlendirebilir ve resmi rapor oluşturabilirsiniz.',
      observerRole: 'Değerlendiren Rolü',
      observerName: 'Değerlendiren Adı Soyadı',
      studentName: 'Değerlendirilen Öğrenci',
      observerScaleTitle: '10 Temel Erdem Gözlem Derecelendirmesi (1 - 4 Puan)',
      observerCommentLabel: 'Gözlemcinin Niteliksel Değerlendirme Görüşü ve Tavsiyeleri:',
      createReport: 'Gözlem Raporu Oluştur',
      closePreview: 'Rapor Önizlemesini Kapat',
      printReport: 'Raporu Yazdır / PDF Kaydet'
    },
    workshop: {
      kicker: 'Uygulamalı Atölye',
      subKicker: 'Erdem Simülasyon Araçları',
      heading: 'Etkileşimli Erdem Atölyesi',
      desc: 'Farklı erdemleri gerçek zamanlı araçlarla deneyimle: Haber teyit dedektifi, söz zarafeti dönüştürücüsü, odak zamanlayıcısı ve sağlık dengesi.',
      tabFact: 'Haber Teyit Dedektifi',
      tabGrace: 'Söz Zarafeti Atölyesi',
      tabFocus: 'İradeli Odaklanma',
      tabHealth: 'Bütüncül Sağlık Dengesi',
      factHeading: 'Dijital Haber ve İddia Teyit Kontrolörü',
      factDesc: 'Şüpheli bir haberi 5 temel hakikat filtresinden geçirerek doğrula.',
      factScore: 'Güvenilirlik Puanı:',
      factComplete: 'Teyit Raporunu Tamamla',
      graceHeading: 'Söz Zarafeti ve Tatlı Dil Atölyesi',
      graceDesc: 'Kırıcı, aceleci veya kaba bir ifadeyi nezaket ve saygı diliyle yeniden ifade et.',
      graceTransformBtn: 'Zarafete Dönüştür',
      graceOutputTitle: 'Zarif ve Erdemli İfade Önerisi:',
      focusHeading: 'Öz Denetim ve Kesintisiz Odaklanma İstasyonu',
      focusDesc: 'Anlık dikkat dağıtıcıları yen. 25 dakikalık derin odaklanma ile iradeni güçlendir.',
      focusStart: 'Odaklanmaya Başla',
      focusPause: 'Durdur',
      temptationsResisted: 'Dürtüye Direnilen Anlar:',
      resistedBtn: '+ Telefondan / Oyundan Uzak Durdum (+5 İrade)',
      healthHeading: 'Bütüncül Sağlık ve Yaşam Dengesi Metresi',
      healthDesc: 'Beden emanetini koru. Uyku, su tüketimi, hareket ve ekran sınırını ayarla.',
      healthSleep: 'Gece Uykusu:',
      healthWater: 'Günlük Su Tüketimi:',
      healthSteps: 'Adım / Hareket:',
      healthScreen: 'Eğlence Ekran Süresi:',
      healthScoreLabel: 'Bütüncül Sağlık Puanı'
    },
    journal: {
      kicker: 'İç Muhasebe ve Tefekkür',
      subKicker: 'Erdem Günlüğü',
      heading: 'Günün Erdemli Ameli ve Yansıtma Defteri',
      desc: 'Bugün hangi erdemi hayata geçirdin? Yaz, kaydet ve içsel farkındalığını güçlendir.',
      addNew: 'Yeni Erdem Kaydı Ekle',
      selectVirtue: 'Uyguladığın Erdem Boyutu',
      deedTitle: 'Eylemin / Davranışın Başlığı',
      reflectionText: 'İçsel Yansıman ve Duygun',
      saveBtn: 'Günlüğe Kaydet & Puan Kazan',
      successMsg: 'Erdem amelin günlüğe işlendi ve +6 Erdem Puanı kazanıldı!',
      pastEntries: 'Geçmiş Erdem Kayıtların',
      emptyLog: 'Henüz bir günlük kaydı eklenmedi.'
    },
    certificate: {
      title: 'Yetkin ve Erdemli İnsan Başarı Sertifikası',
      printBtn: 'Yazdır / PDF Kaydet',
      subHeader: 'TÜRKİYE YÜZYILI MAARİF MODELİ',
      certName: 'YETKİN VE ERDEMLİ İNSAN BELGESİ',
      presentedTo: 'Bu belge ile taltif edilen öğrenci',
      summary: 'Adı geçen öğrenci, 10 Temel Erdem alanında hazırlanan interaktif görevleri, ahlaki muhakeme simülasyonlarını ve öz değerlendirme süreçlerini başarıyla tamamlamıştır.',
      date: 'Düzenleme Tarihi',
      seal: 'ERDEMLİ\nİNSAN\nMÜHRÜ',
      signature: 'Milli Eğitim Komisyonu'
    },
    profileModal: {
      title: 'Öğrenci Profili ve Ayarlar',
      nameLabel: 'Öğrenci Adı Soyadı',
      schoolLabel: 'Okul Adı',
      gradeLabel: 'Sınıf / Şube',
      resetData: 'Verileri Sıfırla',
      save: 'Bilgileri Kaydet',
      saved: 'Kaydedildi'
    },
    footer: {
      tagline: 'Yetkin ve erdemli insan; aklıyla hakikati arayan, vicdanıyla adaleti gözeten, üretkenliği ve merhametiyle toplumu aydınlatan şahsiyettir.',
      copyright: 'Türkiye Yüzyılı Maarif Modeli · Karakter ve Erdem Eğitimi Sistemi'
    }
  },
  en: {
    brand: 'Compass of Virtue',
    nav: {
      quests: 'Interactive Tasks',
      dilemmas: 'Moral Dilemmas',
      assessment: 'Assessment Rubric',
      radar: 'Competency Radar',
      journal: 'Virtue Journal',
      certificate: 'Virtue Certificate',
      profile: 'My Profile'
    },
    hero: {
      kicker: 'Century of Education Model',
      subKicker: 'Character & Values Education',
      title: 'The Rise of the Virtuous and Competent Human',
      desc: 'Moral, wise, courageous, aesthetic, resolute, compassionate, healthy, inquisitive, productive, and patriotic... An educational journey where students do not merely memorize values, but live them through daily actions and thoughtful choices.',
      statVirtues: 'Core Virtues Dimensions',
      statCompleted: 'Completed Quests',
      statIndex: 'Overall Virtue Index',
      startQuests: 'Start Interactive Quests',
      selfRubric: 'Self-Assessment Rubric',
      visualBadge: 'TEN CORE DIMENSIONS',
      visualDesc: 'From thought to deed, from deed to moral character.'
    },
    strip: {
      title: '10 Core Character Domains',
      heading: 'Virtue & Competency Matrix',
      filterLabel: 'Task Filter:',
      filterAll: 'All (10 Virtues)',
      inspect: 'Inspect'
    },
    quests: {
      kicker: 'Values in Action',
      subKicker: 'Applied Missions',
      heading: 'Interactive Virtue Missions',
      desc: 'Virtue is not just theory, but daily concrete actions. Complete the missions, record your personal reflections, and build character XP.',
      filterAll: 'All Quests',
      filterPending: 'Pending',
      filterCompleted: 'Completed',
      activeFilterNote: 'Currently showing missions for selected virtue:',
      clearFilter: 'Clear Filter',
      xpReward: 'Virtue XP',
      completed: 'Completed',
      actionGuide: 'Step-by-Step Action Guide',
      yourReflection: 'Your Reflection:',
      showSteps: 'Action Steps & Journal',
      hideSteps: 'Hide Steps',
      reflectAndComplete: 'Reflect & Complete',
      completeButton: 'Complete Mission',
      emptyNote: 'No missions match the selected criteria.'
    },
    dilemmas: {
      kicker: 'Conscience & Decision Lab',
      subKicker: 'Interactive Simulator',
      heading: 'Moral Dilemmas & Decision Tree',
      desc: 'Choosing the right path in life is not always simple. Make decisions across realistic scenarios and instantly observe their moral consequences.',
      sampleList: 'Real-Life Scenarios',
      scenarioOf: 'Scenario',
      evaluateDecision: 'Evaluate My Decision',
      virtuousTitle: 'A Virtuous and Constructive Choice',
      growthTitle: 'A Decision Open to Growth',
      affectedVirtue: 'Affected Virtue:',
      secondaryImpact: 'Secondary Impact:',
      tryDifferent: 'Try a Different Option',
      nextScenario: 'Next Scenario'
    },
    radar: {
      kicker: 'Holistic Character Analysis',
      subKicker: '10-Dimensional Growth Map',
      heading: 'Virtue & Competency Radar',
      desc: 'The virtuous human is harmonious across all dimensions rather than excelling in one while neglecting others.',
      currentScore: 'Current Virtue Score',
      hoverHint: 'Hover over vertices to view detailed breakdown',
      detailTitle: 'Selected Virtue Detail',
      balanceTitle: 'Holistic Virtue Balance',
      balanceDesc: 'True character development emphasizes balanced growth across all moral dimensions.',
      strongest: 'Strongest Area:',
      growthArea: 'Recommended Focus Area:',
      pedagogicalAdvice: 'Pedagogical Growth Advice'
    },
    assessment: {
      kicker: 'Measurement & Evaluation Tools',
      subKicker: 'Character Growth Rubric',
      heading: 'Virtue Assessment Hub',
      desc: 'A dual assessment framework with transparent indicators: Self-assessment rubric matrix and Observer evaluation report.',
      tabSelf: 'Self-Assessment Rubric',
      tabObserver: 'Observer Evaluation Form',
      instruction: 'Evaluation Guidelines: Choose the level that best reflects your current practice for each virtue. Your score dynamically updates your Radar.',
      selectedLevel: 'Selected Level:',
      currentStatus: 'Current Status',
      clickToSelect: 'Click to select',
      observerHeading: 'Observer Evaluation & Opinion Report',
      observerDesc: 'As a teacher, parent, or peer, evaluate observable student behavior and generate an official report.',
      observerRole: 'Observer Role',
      observerName: 'Observer Name',
      studentName: 'Assessed Student',
      observerScaleTitle: '10 Core Virtues Observation Scale (1 - 4 Points)',
      observerCommentLabel: 'Observer Qualitative Comments & Recommendations:',
      createReport: 'Generate Observation Report',
      closePreview: 'Close Preview',
      printReport: 'Print Report / Save PDF'
    },
    workshop: {
      kicker: 'Applied Workshop',
      subKicker: 'Virtue Simulation Tools',
      heading: 'Interactive Virtue Workshop',
      desc: 'Experience character virtues through hands-on tools: Fact-check detective, graceful language transformer, focus timer, and holistic health balancer.',
      tabFact: 'Fact-Check Detective',
      tabGrace: 'Graceful Language Workshop',
      tabFocus: 'Resolute Focus',
      tabHealth: 'Holistic Health Balance',
      factHeading: 'Digital News & Claim Verifier',
      factDesc: 'Evaluate suspicious claims through 5 fundamental truth filters.',
      factScore: 'Credibility Score:',
      factComplete: 'Complete Verification Report',
      graceHeading: 'Speech Grace & Courteous Language',
      graceDesc: 'Transform blunt, harsh statements into courteous and constructive language.',
      graceTransformBtn: 'Transform with Grace',
      graceOutputTitle: 'Graceful & Virtuous Expression:',
      focusHeading: 'Self-Discipline & Uninterrupted Focus Station',
      focusDesc: 'Defeat distractions with a 25-minute Pomodoro focus session.',
      focusStart: 'Start Focusing',
      focusPause: 'Pause',
      temptationsResisted: 'Temptations Resisted:',
      resistedBtn: '+ Stayed away from phone/game (+5 Willpower)',
      healthHeading: 'Holistic Health & Life Balance Meter',
      healthDesc: 'Treat your body as a sacred trust. Balance sleep, hydration, movement, and screen limits.',
      healthSleep: 'Night Sleep:',
      healthWater: 'Daily Water:',
      healthSteps: 'Steps / Movement:',
      healthScreen: 'Entertainment Screen Time:',
      healthScoreLabel: 'Holistic Health Score'
    },
    journal: {
      kicker: 'Self-Reflection & Contemplation',
      subKicker: 'Virtue Journal',
      heading: 'Daily Virtuous Deed & Reflection Log',
      desc: 'Which virtue did you practice today? Record it, reflect on its meaning, and elevate your moral awareness.',
      addNew: 'Add New Virtue Entry',
      selectVirtue: 'Practiced Virtue Dimension',
      deedTitle: 'Title of Action / Deed',
      reflectionText: 'Personal Reflection & Feeling',
      saveBtn: 'Save to Journal & Gain XP',
      successMsg: 'Virtuous deed recorded in journal and +6 Virtue Points awarded!',
      pastEntries: 'Past Reflection Entries',
      emptyLog: 'No journal entries yet.'
    },
    certificate: {
      title: 'Virtuous and Competent Human Certificate of Achievement',
      printBtn: 'Print / Save as PDF',
      subHeader: 'CENTURY OF EDUCATION MODEL',
      certName: 'CERTIFICATE OF VIRTUOUS CITIZENSHIP',
      presentedTo: 'This honor is presented to student',
      summary: 'The named student has successfully engaged with interactive missions, ethical dilemma decision trees, and holistic self-assessment across all 10 core virtues.',
      date: 'Date of Issue',
      seal: 'VIRTUOUS\nHUMAN\nSEAL',
      signature: 'Education Council'
    },
    profileModal: {
      title: 'Student Profile & Settings',
      nameLabel: 'Student Full Name',
      schoolLabel: 'School Name',
      gradeLabel: 'Grade / Class',
      resetData: 'Reset All Data',
      save: 'Save Profile',
      saved: 'Saved'
    },
    footer: {
      tagline: 'The competent and virtuous human seeks truth with reason, upholds justice with conscience, and enlightens society with compassion and industriousness.',
      copyright: 'Century of Education Model · Character & Values Education System'
    }
  },
  de: {
    brand: 'Tugendkompass',
    nav: {
      quests: 'Interaktive Aufgaben',
      dilemmas: 'Moralische Dilemmata',
      assessment: 'Bewertungsrubrik',
      radar: 'Kompetenzradar',
      journal: 'Tugendtagebuch',
      certificate: 'Tugendzertifikat',
      profile: 'Mein Profil'
    },
    hero: {
      kicker: 'Bildungsmodell des Jahrhunderts',
      subKicker: 'Charakter- und Wertebildung',
      title: 'Die Entfaltung des tugendhaften und fähigen Menschen',
      desc: 'Moralisch, weise, mutig, ästhetisch, willensstark, barmherzig, gesund, hinterfragend, produktiv und patriotisch... Eine Bildungsreise, bei der Schüler Werte nicht nur auswendig lernen, sondern im Alltag leben.',
      statVirtues: 'Kerntugenden',
      statCompleted: 'Erledigte Aufgaben',
      statIndex: 'Gesamter Tugendindex',
      startQuests: 'Zu den interaktiven Aufgaben',
      selfRubric: 'Selbstbewertungsrubrik',
      visualBadge: 'ZEHN KERNDIMENSIONEN',
      visualDesc: 'Vom Gedanken zur Tat, von der Tat zum moralischen Charakter.'
    },
    strip: {
      title: '10 Kerncharakterbereiche',
      heading: 'Tugend- und Kompetenzmatrix',
      filterLabel: 'Aufgabenfilter:',
      filterAll: 'Alle (10 Tugenden)',
      inspect: 'Prüfen'
    },
    quests: {
      kicker: 'Werte im Handeln',
      subKicker: 'Praktische Missionen',
      heading: 'Interaktive Tugendaufgaben',
      desc: 'Tugendhaft zu sein bedeutet tägliches Handeln in kleinen Schritten. Erfülle Aufgaben, notiere deine Gedanken und sammle Tugend-XP.',
      filterAll: 'Alle Aufgaben',
      filterPending: 'Ausstehend',
      filterCompleted: 'Abgeschlossen',
      activeFilterNote: 'Aktuell gefiltert nach Tugend:',
      clearFilter: 'Filter aufheben',
      xpReward: 'Tugend-XP',
      completed: 'Abgeschlossen',
      actionGuide: 'Schritt-für-Schritt-Leitfaden',
      yourReflection: 'Deine Reflexion:',
      showSteps: 'Handlungsschritte & Tagebuch',
      hideSteps: 'Schritte verbergen',
      reflectAndComplete: 'Reflektieren & Abschließen',
      completeButton: 'Aufgabe abschließen',
      emptyNote: 'Keine Aufgaben für diese Kriterien gefunden.'
    },
    dilemmas: {
      kicker: 'Gewissens- und Entscheidungslabor',
      subKicker: 'Interaktiver Simulator',
      heading: 'Moralische Dilemmata & Entscheidungsbaum',
      desc: 'Das Richtige zu wählen ist im Leben nicht immer einfach. Triff fundierte Entscheidungen und erkenne unmittelbar ihre ethischen Folgen.',
      sampleList: 'Reale Lebensszenarien',
      scenarioOf: 'Szenario',
      evaluateDecision: 'Entscheidung bewerten',
      virtuousTitle: 'Eine tugendhafte und aufbauende Wahl',
      growthTitle: 'Eine Entscheidung mit Lernpotenzial',
      affectedVirtue: 'Betroffene Tugend:',
      secondaryImpact: 'Sekundäre Wirkung:',
      tryDifferent: 'Andere Option probieren',
      nextScenario: 'Nächstes Szenario'
    },
    radar: {
      kicker: 'Ganzheitliche Charakteranalyse',
      subKicker: '10-Dimensionale Entwicklungskarte',
      heading: 'Tugend- und Kompetenzradar',
      desc: 'Der fähige und tugendhafte Mensch pflegt Harmonie in allen Lebensdimensionen.',
      currentScore: 'Aktuelle Tugendpunkte',
      hoverHint: 'Bewege den Cursor über die Punkte für Details',
      detailTitle: 'Ausgewählte Tugend',
      balanceTitle: 'Ganzheitliche Tugendbalance',
      balanceDesc: 'Eine ausgewogene Charakterentwicklung verlangt Ausgeglichenheit aller Tugenden.',
      strongest: 'Deine stärkste Tugend:',
      growthArea: 'Empfohlener Wachstumsbereich:',
      pedagogicalAdvice: 'Pädagogischer Ratschlag'
    },
    assessment: {
      kicker: 'Mess- und Bewertungswerkzeuge',
      subKicker: 'Charakterentwicklungsrubrik',
      heading: 'Tugend-Bewertungszentrum',
      desc: 'Zwei transparente Instrumente: Selbstbewertungsrubrik und Beobachterbericht für Lehrkräfte, Eltern und Mitschüler.',
      tabSelf: 'Selbstbewertungsrubrik',
      tabObserver: 'Beobachter-Bewertungsbogen',
      instruction: 'Bewertungsanleitung: Wähle die Stufe, die dein Verhalten am besten beschreibt. Deine Punkte aktualisieren sofort das Radar.',
      selectedLevel: 'Gewählte Stufe:',
      currentStatus: 'Aktueller Stand',
      clickToSelect: 'Zum Auswählen klicken',
      observerHeading: 'Beobachtungs- und Gutachtenbericht',
      observerDesc: 'Beurteilen Sie als Lehrkraft, Elternteil oder Mitschüler das beobachtbare Verhalten und erstellen Sie einen Druckbericht.',
      observerRole: 'Rolle des Beobachters',
      observerName: 'Name des Beobachters',
      studentName: 'Beurteilter Schüler',
      observerScaleTitle: '10 Kerntugenden Beobachtungsskala (1 - 4 Punkte)',
      observerCommentLabel: 'Qualitative Anmerkungen und Empfehlungen:',
      createReport: 'Bericht erstellen',
      closePreview: 'Vorschau schließen',
      printReport: 'Bericht drucken / PDF'
    },
    workshop: {
      kicker: 'Praxis-Workshop',
      subKicker: 'Tugendsimulationen',
      heading: 'Interaktive Tugendwerkstatt',
      desc: 'Erlebe Tugenden mit praxisnahen Werkzeugen: Faktencheck-Detektiv, Sprachveredelung, Konzentrationstimer und Gesundheitswaage.',
      tabFact: 'Faktencheck-Detektiv',
      tabGrace: 'Sprachästhetik-Werkstatt',
      tabFocus: 'Willensstarke Konzentration',
      tabHealth: 'Ganzheitliche Gesundheit',
      factHeading: 'Digitaler Nachrichten- und Faktenprüfer',
      factDesc: 'Überprüfe verdächtige Behauptungen mit 5 Filtern.',
      factScore: 'Glaubwürdigkeitswert:',
      factComplete: 'Prüfbericht abschließen',
      graceHeading: 'Sprachfeinheit & Höflichkeit',
      graceDesc: 'Wandle verletzende Ausdrücke in respektvolle und kultivierte Sprache um.',
      graceTransformBtn: 'In Schönheit umwandeln',
      graceOutputTitle: 'Höflicher Formulierungsvorschlag:',
      focusHeading: 'Selbstdisziplin & Fokusstation',
      focusDesc: 'Widerstehe Ablenkungen mit einer 25-Minuten-Pomodoro-Sitzung.',
      focusStart: 'Fokus starten',
      focusPause: 'Pause',
      temptationsResisted: 'Überwundene Impulse:',
      resistedBtn: '+ Handy/Spiel widerstanden (+5 Willenskraft)',
      healthHeading: 'Ganzheitliche Lebensbalance',
      healthDesc: 'Achte deinen Körper als Anvertrautes: Schlaf, Wasser, Schritte und Bildschirmzeit.',
      healthSleep: 'Nachtschlaf:',
      healthWater: 'Tägliches Wasser:',
      healthSteps: 'Schritte / Bewegung:',
      healthScreen: 'Bildschirmzeit (Freizeit):',
      healthScoreLabel: 'Gesundheitswert'
    },
    journal: {
      kicker: 'Selbstreflexion & Besinnung',
      subKicker: 'Tugendtagebuch',
      heading: 'Heutige gute Tat & Reflexionsbuch',
      desc: 'Welche Tugend hast du heute verwirklicht? Halte sie fest und stärke dein moralisches Bewusstsein.',
      addNew: 'Neuen Tugendeintrag erfassen',
      selectVirtue: 'Praktizierte Tugend',
      deedTitle: 'Titel der Tat',
      reflectionText: 'Eigene Reflexion & Gefühl',
      saveBtn: 'Im Tagebuch speichern (+XP)',
      successMsg: 'Gute Tat gespeichert und +6 Tugendpunkte erhalten!',
      pastEntries: 'Bisherige Reflexionen',
      emptyLog: 'Noch keine Einträge vorhanden.'
    },
    certificate: {
      title: 'Zertifikat für tugendhafte und fähige Persönlichkeit',
      printBtn: 'Drucken / Als PDF speichern',
      subHeader: 'BILDUNGSMODELL DES JAHRHUNDERTS',
      certName: 'TUGEND- UND VERDIENSTURKUNDE',
      presentedTo: 'Verliehen an den Schüler / die Schülerin',
      summary: 'Der genannte Schüler hat die interaktiven Missionen, moralischen Dilemmata und Selbstbewertungen in allen 10 Kerntugenden erfolgreich abgeschlossen.',
      date: 'Ausstellungsdatum',
      seal: 'TUGEND\nSIEGEL',
      signature: 'Bildungskommission'
    },
    profileModal: {
      title: 'Schülerprofil & Einstellungen',
      nameLabel: 'Name des Schülers',
      schoolLabel: 'Schule',
      gradeLabel: 'Klasse',
      resetData: 'Daten zurücksetzen',
      save: 'Profil speichern',
      saved: 'Gespeichert'
    },
    footer: {
      tagline: 'Der fähige und tugendhafte Mensch sucht Wahrheit mit Vernunft, wahrt Gerechtigkeit mit Gewissen und erleuchtet die Gemeinschaft mit Fleiß und Güte.',
      copyright: 'Bildungsmodell des Jahrhunderts · Charakter- und Wertebildung'
    }
  },
  ar: {
    brand: 'بوصلة الفضيلة',
    nav: {
      quests: 'المهام التفاعلية',
      dilemmas: 'المعضلات الأخلاقية',
      assessment: 'معايير التقييم',
      radar: 'رادار الكفاءة',
      journal: 'يوميات الفضيلة',
      certificate: 'شهادة الفضيلة',
      profile: 'ملفي الشخصي'
    },
    hero: {
      kicker: 'نموذج معارف القرن الجديد',
      subKicker: 'تربية الشخصية والقيم',
      title: 'نشأة الإنسان الكفء والفضيل',
      desc: 'أخلاقي، حكيم، شجاع، ذوقي، ذو إرادة، رحيم، صحي، ناقد، منتج، ومحب للوطن... رحلة تربوية لا تقتصر على حفظ القيم، بل تحولها لأفعال يومية وقرارات حية.',
      statVirtues: 'أبعاد الفضائل العشر',
      statCompleted: 'المهام المنجزة',
      statIndex: 'مؤشر الفضيلة العام',
      startQuests: 'ابدأ المهام التفاعلية',
      selfRubric: 'مقياس التقييم الذاتي',
      visualBadge: 'عشرة أبعاد أساسية',
      visualDesc: 'من الفكر إلى العمل، ومن العمل إلى الشخصية الأخلاقية.'
    },
    strip: {
      title: '١٠ مجالات أساسية للشخصية',
      heading: 'مصفوفة الفضائل والكفاءات',
      filterLabel: 'تصفية المهام:',
      filterAll: 'الكل (١٠ فضائل)',
      inspect: 'تفاصيل'
    },
    quests: {
      kicker: 'القيم المتجسدة في العمل',
      subKicker: 'مهام تطبيقية',
      heading: 'مهام الفضيلة التفاعلية',
      desc: 'الفضيلة ليست علماً نظرياً فقط، بل خطوات عملية يومية. أنجز المهام، ودوّن تأملاتك واكتسب نقاط الفضيلة.',
      filterAll: 'جميع المهام',
      filterPending: 'قيد الانتظار',
      filterCompleted: 'المكتملة',
      activeFilterNote: 'يتم حالياً عرض مهام الفضيلة المختارة:',
      clearFilter: 'إلغاء التصفية',
      xpReward: 'نقاط الفضيلة',
      completed: 'مكتمل',
      actionGuide: 'دليل الخطوات العملية',
      yourReflection: 'تأملك الشخصي:',
      showSteps: 'خطوات التنفيذ واليوميات',
      hideSteps: 'إخفاء الخطوات',
      reflectAndComplete: 'تأمل وأكمل',
      completeButton: 'إكمال المهمة',
      emptyNote: 'لم يتم العثور على مهام تطابق المعايير.'
    },
    dilemmas: {
      kicker: 'مختبر الضمير والقرار',
      subKicker: 'محاكي تفاعلي',
      heading: 'المعضلات الأخلاقية وشجرة القرار',
      desc: 'اختيار الحق في معترك الحياة ليس سهلاً دائماً. اتخذ قرارك في مواقف واقعية واكتشف نتائجها الأخلاقية فوراً.',
      sampleList: 'سيناريوهات من واقع الحياة',
      scenarioOf: 'سيناريو',
      evaluateDecision: 'تقييم قراري',
      virtuousTitle: 'خيار فضيل وبنّاء',
      growthTitle: 'قرار يحتاج إلى نضج ومراجعة',
      affectedVirtue: 'الفضيلة المتأثرة:',
      secondaryImpact: 'الأثر الثانوي:',
      tryDifferent: 'تجربة خيار آخر',
      nextScenario: 'السيناريو التالي'
    },
    radar: {
      kicker: 'تحليل الشخصية الشامل',
      subKicker: 'خريطة النمو ذات العشرة أبعاد',
      heading: 'رادار الفضائل والكفاءة',
      desc: 'الإنسان الفضيل يبني توازناً متناغماً في جميع الأبعاد الأخلاقية دون إهمال أي جانب.',
      currentScore: 'درجة الفضيلة الحالية',
      hoverHint: 'مرر المؤشر فوق النقاط لعرض التفاصيل',
      detailTitle: 'تفاصيل الفضيلة المحددة',
      balanceTitle: 'توازن الفضائل المتكامل',
      balanceDesc: 'تطوير الشخصية الحقيقي يهدف إلى تنمية متوازنة لجميع خصال الخير.',
      strongest: 'أقوى جوانبك:',
      growthArea: 'المجال الموصى بالتركيز عليه:',
      pedagogicalAdvice: 'نصيحة تربوية للتطور'
    },
    assessment: {
      kicker: 'أدوات القياس والتقويم',
      subKicker: 'معايير نمو الشخصية',
      heading: 'مركز تقييم الفضائل',
      desc: 'أداتان تقييميتان متكاملتان: مقياس التقييم الذاتي واستمارة تقييم الملاحظ (معلم، ولي أمر، زميل).',
      tabSelf: 'مقياس التقييم الذاتي',
      tabObserver: 'استمارة تقييم الملاحظ',
      instruction: 'إرشادات التقييم: اختر المستوى الذي يعبر عن حالك بدقة. تنعكس درجاتك مباشرة على رادار الكفاءة.',
      selectedLevel: 'المستوى المختار:',
      currentStatus: 'الوضع الحالي',
      clickToSelect: 'انقر للاختيار',
      observerHeading: 'تقرير ملاحظة وشهادة التقدير',
      observerDesc: 'بصفتك معلماً أو ولي أمر أو زميلاً، يمكنك تقييم سلوكيات الطالب وإصدار تقرير رسمي قابل للطباعة.',
      observerRole: 'صفة الملاحظ',
      observerName: 'اسم الملاحظ',
      studentName: 'الطالب المُقيَّم',
      observerScaleTitle: 'مقياس ملاحظة الفضائل العشر (١ - ٤ درجات)',
      observerCommentLabel: 'رأي الملاحظ النوعي وتوصياته التربوية:',
      createReport: 'إصدار تقرير الملاحظة',
      closePreview: 'إغلاق المعاينة',
      printReport: 'طباعة التقرير / حفظ PDF'
    },
    workshop: {
      kicker: 'الورشة التطبيقية',
      subKicker: 'أدوات محاكاة الفضيلة',
      heading: 'ورشة الفضائل التفاعلية',
      desc: 'مارس الفضائل بأدوات حية: محقق صحة الأخبار، محول الكلام الجميل، مؤقت التركيز، وميزان الصحة المتكاملة.',
      tabFact: 'محقق صحة الأخبار',
      tabGrace: 'ورشة فصاحة وحسن القول',
      tabFocus: 'التركيز والإرادة',
      tabHealth: 'توازن الصحة المتكاملة',
      factHeading: 'مدقق الأخبار الرقمية والادعاءات',
      factDesc: 'افحص الأخبار المشبوهة عبر ٥ مصافٍ للتحقق من الحقيقة.',
      factScore: 'درجة الموثوقية:',
      factComplete: 'إتمام تقرير التحقق',
      graceHeading: 'حسن القول واللباقة',
      graceDesc: 'حوّل العبارات الجافة أو القاسية إلى لغة ملؤها الأدب والاحترام والجمال.',
      graceTransformBtn: 'تحويل إلى قول حسن',
      graceOutputTitle: 'الصياغة الراقية الفاضلة:',
      focusHeading: 'محطة ضبط النفس والتركيز العميق',
      focusDesc: 'تغلب على المشتتات بجلسة تركيز مدتها ٢٥ دقيقة (بومودورو).',
      focusStart: 'بدء التركيز',
      focusPause: 'إيقاف مؤقت',
      temptationsResisted: 'مرات مقاومة المشتتات:',
      resistedBtn: '+ قاومت الهاتف/اللعب (+٥ إرادة)',
      healthHeading: 'ميزان الصحة والتوازن الحياتي',
      healthDesc: 'احفظ أمانة الجسد: النوم الكافي، شرب الماء، النشاط البدني، والحد من الشاشات.',
      healthSleep: 'نوم الليل:',
      healthWater: 'الماء اليومي:',
      healthSteps: 'الخطوات / الحركة:',
      healthScreen: 'وقت الشاشة الترفيهي:',
      healthScoreLabel: 'مؤشر الصحة الشامل'
    },
    journal: {
      kicker: 'المحاسبة والتفكر الداخلي',
      subKicker: 'يوميات الفضيلة',
      heading: 'عمل اليوم الصالح ودفتر التأمل',
      desc: 'أي فضيلة جسدتها اليوم في واقعك؟ اكتبها ودوّن مشاعرك لتنمي يقظتك الأخلاقية.',
      addNew: 'إضافة عمل فضيل جديد',
      selectVirtue: 'مجال الفضيلة المطبق',
      deedTitle: 'عنوان العمل أو السلوك',
      reflectionText: 'تأملك وشعورك الداخلي',
      saveBtn: 'حفظ في اليوميات وكسب النقاط',
      successMsg: 'تم تسجيل عملك الفضيل وكسب +٦ نقاط فضيلة!',
      pastEntries: 'سجل التأملات السابقة',
      emptyLog: 'لا توجد تسجيلات بعد.'
    },
    certificate: {
      title: 'شهادة إنجاز الإنسان الكفء والفضيل',
      printBtn: 'طباعة / حفظ بتنسيق PDF',
      subHeader: 'نموذج معارف القرن الجديد',
      certName: 'وثيقة وبراءة الإنسان الفضيل',
      presentedTo: 'تُمنح هذه الشهادة تكريماً للطالب',
      summary: 'أنجز الطالب المذكور بنجاح المهام التفاعلية ومعضلات التحكيم الأخلاقي وعمليات التقييم الذاتي في جميع أبعاد الفضائل العشر.',
      date: 'تاريخ التحرير',
      seal: 'ختم\nالإنسان\nالفضيل',
      signature: 'لجنة التربية والتعليم'
    },
    profileModal: {
      title: 'ملف الطالب والإعدادات',
      nameLabel: 'اسم الطالب الكامل',
      schoolLabel: 'اسم المدرسة',
      gradeLabel: 'الصف / الشعبة',
      resetData: 'إعادة ضبط البيانات',
      save: 'حفظ الملف',
      saved: 'تم الحفظ'
    },
    footer: {
      tagline: 'الإنسان الفضيل والكفء هو من يطلب الحق بعقله، ويقيم العدل بضميره، وينير مجتمعه برحمته وبذله وعمله.',
      copyright: 'نموذج معارف القرن الجديد · منظومة تربية الشخصية والقيم'
    }
  },
  fr: {
    brand: 'Boussole des Vertus',
    nav: {
      quests: 'Missions Interactives',
      dilemmas: 'Dilemmes Moraux',
      assessment: 'Grille d’Évaluation',
      radar: 'Radar des Compétences',
      journal: 'Journal des Vertus',
      certificate: 'Certificat de Vertu',
      profile: 'Mon Profil'
    },
    hero: {
      kicker: 'Modèle Éducatif du Siècle',
      subKicker: 'Éducation au Caractère et aux Valeurs',
      title: 'L’Avènement de l’Homme Vertueux et Compétent',
      desc: 'Moral, sage, courageux, esthétique, résolu, compatissant, sain, critique, productif et patriote... Un parcours d’apprentissage où les élèves ne se contentent pas d’apprendre des vertus, mais les incarnent au quotidien.',
      statVirtues: 'Dimensions des Vertus',
      statCompleted: 'Missions Accomplies',
      statIndex: 'Indice Global de Vertu',
      startQuests: 'Commencer les Missions',
      selfRubric: 'Grille d’Auto-évaluation',
      visualBadge: 'DIX DIMENSIONS FONDAMENTALES',
      visualDesc: 'De la pensée à l’action, de l’action au caractère moral.'
    },
    strip: {
      title: '10 Domaines Clés du Caractère',
      heading: 'Matrice des Vertus et Compétences',
      filterLabel: 'Filtrer les missions :',
      filterAll: 'Toutes (10 Vertus)',
      inspect: 'Examiner'
    },
    quests: {
      kicker: 'Les Valeurs en Action',
      subKicker: 'Missions Pratiques',
      heading: 'Missions Interactives de Vertu',
      desc: 'La vertu s’exprime par des actes quotidiens concrets. Accomplis tes missions, consigne tes réflexions et gagne des points de caractère.',
      filterAll: 'Toutes les Missions',
      filterPending: 'En cours',
      filterCompleted: 'Accomplies',
      activeFilterNote: 'Missions filtrées pour la vertu :',
      clearFilter: 'Réinitialiser le filtre',
      xpReward: 'XP de Vertu',
      completed: 'Accomplie',
      actionGuide: 'Guide d’Action Pas à Pas',
      yourReflection: 'Ta Réflexion :',
      showSteps: 'Étapes d’Action & Journal',
      hideSteps: 'Masquer les étapes',
      reflectAndComplete: 'Réfléchir & Valider',
      completeButton: 'Valider la Mission',
      emptyNote: 'Aucune mission ne correspond à ces critères.'
    },
    dilemmas: {
      kicker: 'Laboratoire de Conscience et Décision',
      subKicker: 'Simulateur Interactif',
      heading: 'Dilemmes Moraux & Arbre de Décision',
      desc: 'Choisir la bonne voie n’est pas toujours facile. Prends des décisions dans des situations réelles et découvre immédiatement leurs conséquences morales.',
      sampleList: 'Scénarios de la Vie Réelle',
      scenarioOf: 'Scénario',
      evaluateDecision: 'Évaluer ma Décision',
      virtuousTitle: 'Un Choix Vertueux et Constructif',
      growthTitle: 'Une Décision Perfectible',
      affectedVirtue: 'Vertu Concernée :',
      secondaryImpact: 'Impact Secondaire :',
      tryDifferent: 'Essayer une autre option',
      nextScenario: 'Scénario Suivant'
    },
    radar: {
      kicker: 'Analyse Globale du Caractère',
      subKicker: 'Carte de Développement à 10 Dimensions',
      heading: 'Radar des Vertus et Compétences',
      desc: 'L’être vertueux et accompli cultive une harmonie équilibrée dans toutes les dimensions.',
      currentScore: 'Score de Vertu Actuel',
      hoverHint: 'Survolez les points pour afficher le détail',
      detailTitle: 'Détail de la Vertu Sélectionnée',
      balanceTitle: 'Équilibre Global des Vertus',
      balanceDesc: 'Le véritable développement moral recherche l’harmonie de toutes les vertus.',
      strongest: 'Point Fort :',
      growthArea: 'Axe de Développement :',
      pedagogicalAdvice: 'Conseil Pédagogique'
    },
    assessment: {
      kicker: 'Outils de Mesure et d’Évaluation',
      subKicker: 'Rubrique de Développement Moral',
      heading: 'Centre d’Évaluation des Vertus',
      desc: 'Un double dispositif d’évaluation : grille d’auto-évaluation et rapport d’observation pour enseignants, parents et pairs.',
      tabSelf: 'Grille d’Auto-évaluation',
      tabObserver: 'Fiche d’Évaluation de l’Observateur',
      instruction: 'Consigne : Choisis le niveau qui correspond le mieux à tes pratiques. Tes scores mettent à jour le radar en direct.',
      selectedLevel: 'Niveau Choisi :',
      currentStatus: 'Statut Actuel',
      clickToSelect: 'Cliquer pour choisir',
      observerHeading: 'Rapport d’Observation et Avis Pédagogique',
      observerDesc: 'En tant qu’enseignant, parent ou camarade, évaluez les comportements observables et générez un rapport imprimable.',
      observerRole: 'Rôle de l’Observateur',
      observerName: 'Nom de l’Observateur',
      studentName: 'Élève Évalué',
      observerScaleTitle: 'Échelle d’Observation des 10 Vertus (1 à 4 Points)',
      observerCommentLabel: 'Commentaires Qualitatifs et Recommandations :',
      createReport: 'Générer le Rapport',
      closePreview: 'Fermer l’Aperçu',
      printReport: 'Imprimer / Sauvegarder en PDF'
    },
    workshop: {
      kicker: 'Atelier Pratique',
      subKicker: 'Outils de Simulation de Vertu',
      heading: 'Atelier Interactif des Vertus',
      desc: 'Mettez en pratique les vertus avec des outils interactifs : vérificateur d’informations, langage courtois, minuteur de concentration et équilibre santé.',
      tabFact: 'Détective Anti-Fake News',
      tabGrace: 'Atelier d’Élégance Verbale',
      tabFocus: 'Concentration & Volonté',
      tabHealth: 'Équilibre de Santé Globale',
      factHeading: 'Vérificateur d’Actualités et de Rumeurs',
      factDesc: 'Examinez une information suspecte à travers 5 filtres de vérité.',
      factScore: 'Score de Fiabilité :',
      factComplete: 'Finaliser le Rapport de Vérification',
      graceHeading: 'Élégance Verbale et Politesse',
      graceDesc: 'Transformez une phrase abrupte en expression bienveillante et constructive.',
      graceTransformBtn: 'Transformer avec Élégance',
      graceOutputTitle: 'Suggestion d’Expression Courtoise :',
      focusHeading: 'Discipline Personnelle & Station de Concentration',
      focusDesc: 'Surmontez les distractions avec une session Pomodoro de 25 minutes.',
      focusStart: 'Démarrer la Concentration',
      focusPause: 'Pause',
      temptationsResisted: 'Distractions Évitées :',
      resistedBtn: '+ Résisté au smartphone/jeu (+5 Volonté)',
      healthHeading: 'Équilibre de Vie et Santé Globale',
      healthDesc: 'Préservez votre corps : sommeil réparateur, hydratation, activité et limitation des écrans.',
      healthSleep: 'Sommeil de Nuit :',
      healthWater: 'Eau Quotidienne :',
      healthSteps: 'Pas / Activité :',
      healthScreen: 'Temps d’Écran Récréatif :',
      healthScoreLabel: 'Score de Santé Globale'
    },
    journal: {
      kicker: 'Introspection et Méditation',
      subKicker: 'Journal des Vertus',
      heading: 'Action Vertueuse du Jour & Carnet de Réflexion',
      desc: 'Quelle vertu as-tu manifestée aujourd’hui ? Consigne-la et élève ta conscience morale.',
      addNew: 'Ajouter une Nouvelle Action Vertueuse',
      selectVirtue: 'Vertu Pratiquée',
      deedTitle: 'Titre de l’Action / Comportement',
      reflectionText: 'Réflexion Personnelle et Ressenti',
      saveBtn: 'Enregistrer au Journal (+XP)',
      successMsg: 'Action enregistrée et +6 points de vertu attribués !',
      pastEntries: 'Historique des Réflexions',
      emptyLog: 'Aucune entrée pour le moment.'
    },
    certificate: {
      title: 'Certificat de Réussite de l’Homme Vertueux et Compétent',
      printBtn: 'Imprimer / Enregistrer en PDF',
      subHeader: 'MODÈLE ÉDUCATIF DU SIÈCLE',
      certName: 'CERTIFICAT DU CITOYEN VERTUEUX',
      presentedTo: 'Ce titre d’honneur est décerné à l’élève',
      summary: 'L’élève susnommé a accompli avec succès les missions interactives, les scénarios de jugement moral et l’auto-évaluation sur les 10 vertus fondamentales.',
      date: 'Date de Délivrance',
      seal: 'SCEAU\nDE L’HOMME\nVERTUEUX',
      signature: 'Conseil de l’Éducation'
    },
    profileModal: {
      title: 'Profil de l’Élève & Paramètres',
      nameLabel: 'Nom et Prénom de l’Élève',
      schoolLabel: 'Établissement Scolaire',
      gradeLabel: 'Classe / Division',
      resetData: 'Réinitialiser les Données',
      save: 'Enregistrer le Profil',
      saved: 'Enregistré'
    },
    footer: {
      tagline: 'L’être humain accompli et vertueux recherche la vérité avec raison, défend la justice avec conscience et illumine la société avec compassion et dévouement.',
      copyright: 'Modèle Éducatif du Siècle · Système d’Éducation au Caractère et aux Valeurs'
    }
  },
  es: {
    brand: 'Brújula de las Virtudes',
    nav: {
      quests: 'Misiones Interactivas',
      dilemmas: 'Dilemas Morales',
      assessment: 'Rúbrica de Evaluación',
      radar: 'Radar de Competencias',
      journal: 'Diario de Virtudes',
      certificate: 'Certificado de Virtud',
      profile: 'Mi Perfil'
    },
    hero: {
      kicker: 'Modelo Educativo del Siglo',
      subKicker: 'Educación del Carácter y los Valores',
      title: 'El Nacimiento del Ser Humano Virtuoso y Competente',
      desc: 'Moral, sabio, valiente, estético, perseverante, compasivo, saludable, inquisitivo, productivo y patriota... Una travesía formativa donde los estudiantes no solo memorizan valores, sino que los viven a diario.',
      statVirtues: 'Dimensiones de Virtudes',
      statCompleted: 'Misiones Completadas',
      statIndex: 'Índice Global de Virtud',
      startQuests: 'Iniciar Misiones Interactivas',
      selfRubric: 'Rúbrica de Autoevaluación',
      visualBadge: 'DIEZ DIMENSIONES CLAVE',
      visualDesc: 'Del pensamiento a la acción, de la acción al carácter moral.'
    },
    strip: {
      title: '10 Áreas Fundamentales del Carácter',
      heading: 'Matriz de Virtudes y Competencias',
      filterLabel: 'Filtro de misiones:',
      filterAll: 'Todas (10 Virtudes)',
      inspect: 'Examinar'
    },
    quests: {
      kicker: 'Valores en Acción',
      subKicker: 'Misiones Prácticas',
      heading: 'Misiones Interactivas de Virtud',
      desc: 'Ser virtuoso implica actuar día a día con constancia. Supera los desafíos, anota tus reflexiones y acumula experiencia de virtud.',
      filterAll: 'Todas las Misiones',
      filterPending: 'Pendientes',
      filterCompleted: 'Completadas',
      activeFilterNote: 'Misiones para la virtud seleccionada:',
      clearFilter: 'Limpiar filtro',
      xpReward: 'XP de Virtud',
      completed: 'Completada',
      actionGuide: 'Guía de Acción Paso a Paso',
      yourReflection: 'Tu Reflexión:',
      showSteps: 'Pasos de Acción & Diario',
      hideSteps: 'Ocultar pasos',
      reflectAndComplete: 'Reflexionar y Completar',
      completeButton: 'Completar Misión',
      emptyNote: 'No se encontraron misiones para estos criterios.'
    },
    dilemmas: {
      kicker: 'Laboratorio de Conciencia y Decisión',
      subKicker: 'Simulador Interactivo',
      heading: 'Dilemas Morales & Árbol de Decisiones',
      desc: 'Elegir lo correcto no siempre resulta sencillo. Toma decisiones en situaciones de la vida real y descubre de inmediato sus consecuencias éticas.',
      sampleList: 'Escenarios Reales',
      scenarioOf: 'Escenario',
      evaluateDecision: 'Evaluar mi Decisión',
      virtuousTitle: 'Una Elección Virtuosa y Constructiva',
      growthTitle: 'Una Decisión con Oportunidad de Mejora',
      affectedVirtue: 'Virtud Afectada:',
      secondaryImpact: 'Impacto Secundario:',
      tryDifferent: 'Probar otra opción',
      nextScenario: 'Siguiente Escenario'
    },
    radar: {
      kicker: 'Análisis Integral del Carácter',
      subKicker: 'Mapa de Desarrollo en 10 Dimensiones',
      heading: 'Radar de Virtudes y Competencias',
      desc: 'La persona competente y virtuosa cultiva un balance armonioso en todas las facetas de su vida.',
      currentScore: 'Puntuación Actual de Virtud',
      hoverHint: 'Pasa el cursor sobre los vértices para ver detalles',
      detailTitle: 'Detalle de la Virtud Seleccionada',
      balanceTitle: 'Equilibrio Integral de Virtudes',
      balanceDesc: 'El auténtico desarrollo del carácter persigue la armonía de todas las virtudes.',
      strongest: 'Tu mayor fortaleza:',
      growthArea: 'Área recomendada para crecer:',
      pedagogicalAdvice: 'Consejo Pedagógico'
    },
    assessment: {
      kicker: 'Instrumentos de Medición y Evaluación',
      subKicker: 'Rúbrica de Crecimiento del Carácter',
      heading: 'Centro de Evaluación de Virtudes',
      desc: 'Doble instrumento de evaluación: rúbrica de autoevaluación y reporte de observación para docentes, familias y compañeros.',
      tabSelf: 'Rúbrica de Autoevaluación',
      tabObserver: 'Ficha de Evaluación del Observador',
      instruction: 'Instrucciones: Selecciona el nivel que mejor describa tu conducta actual. Tus puntajes actualizan el radar al instante.',
      selectedLevel: 'Nivel Seleccionado:',
      currentStatus: 'Estado Actual',
      clickToSelect: 'Haz clic para seleccionar',
      observerHeading: 'Informe de Observación y Dictamen',
      observerDesc: 'Como docente, madre/padre o compañero, valore conductas observables y genere un informe oficial imprimible.',
      observerRole: 'Rol del Observador',
      observerName: 'Nombre del Observador',
      studentName: 'Estudiante Evaluado',
      observerScaleTitle: 'Escala de Observación de las 10 Virtudes (1 a 4 Puntos)',
      observerCommentLabel: 'Comentarios Cualitativos y Recomendaciones:',
      createReport: 'Generar Informe',
      closePreview: 'Cerrar Vista Previa',
      printReport: 'Imprimir / Guardar en PDF'
    },
    workshop: {
      kicker: 'Taller Práctico',
      subKicker: 'Simuladores de Virtudes',
      heading: 'Taller Interactivo de Virtudes',
      desc: 'Experimenta las virtudes con herramientas activas: detective de verificación, refinamiento del lenguaje, temporizador de enfoque y equilibrio de salud.',
      tabFact: 'Detective de Verificación',
      tabGrace: 'Taller de Lenguaje Cortés',
      tabFocus: 'Enfoque y Fuerza de Voluntad',
      tabHealth: 'Equilibrio de Salud Integral',
      factHeading: 'Verificador de Noticias y Afirmaciones',
      factDesc: 'Analiza una información dudosa mediante 5 filtros de veracidad.',
      factScore: 'Índice de Fiabilidad:',
      factComplete: 'Finalizar Informe de Verificación',
      graceHeading: 'Cortesía Verbal y Palabras Bellas',
      graceDesc: 'Transforma una expresión áspera en un mensaje respetuoso y constructivo.',
      graceTransformBtn: 'Transformar con Gracia',
      graceOutputTitle: 'Propuesta de Expresión Serena:',
      focusHeading: 'Autodisciplina & Estación de Concentración',
      focusDesc: 'Vence las distracciones con una sesión Pomodoro de 25 minutos.',
      focusStart: 'Iniciar Enfoque',
      focusPause: 'Pausa',
      temptationsResisted: 'Impulsos Superados:',
      resistedBtn: '+ Resistí el móvil/juego (+5 Voluntad)',
      healthHeading: 'Medidor de Salud Integral y Vida',
      healthDesc: 'Cuida tu cuerpo: sueño reparador, hidratación adecuada, ejercicio y límite de pantallas.',
      healthSleep: 'Sueño Nocturno:',
      healthWater: 'Agua Diaria:',
      healthSteps: 'Pasos / Movimiento:',
      healthScreen: 'Tiempo de Pantalla Recreativo:',
      healthScoreLabel: 'Puntuación de Salud Integral'
    },
    journal: {
      kicker: 'Introspección y Reflexión',
      subKicker: 'Diario de Virtudes',
      heading: 'Buena Acción del Día & Cuaderno de Reflexión',
      desc: '¿Qué virtud pusiste en práctica hoy? Regístrala y profundiza en tu conciencia moral.',
      addNew: 'Registrar Nueva Buena Acción',
      selectVirtue: 'Virtud Practicada',
      deedTitle: 'Título de la Acción / Conducta',
      reflectionText: 'Reflexión Personal y Sentimiento',
      saveBtn: 'Guardar en el Diario (+XP)',
      successMsg: '¡Acción registrada en tu diario y +6 puntos de virtud otorgados!',
      pastEntries: 'Historial de Reflexiones',
      emptyLog: 'Aún no hay registros en el diario.'
    },
    certificate: {
      title: 'Certificado de Logro de la Persona Virtuosa y Competente',
      printBtn: 'Imprimir / Guardar en PDF',
      subHeader: 'MODELO EDUCATIVO DEL SIGLO',
      certName: 'CERTIFICADO DEL CIUDADANO VIRTUOSO',
      presentedTo: 'Se otorga este reconocimiento al estudiante',
      summary: 'El estudiante mencionado ha culminado exitosamente las misiones interactivas, los dilemas de juicio ético y la autoevaluación en las 10 virtudes fundamentales.',
      date: 'Fecha de Expedición',
      seal: 'SELLO\nDEL SER\nVIRTUOSO',
      signature: 'Consejo de Educación'
    },
    profileModal: {
      title: 'Perfil del Estudiante y Ajustes',
      nameLabel: 'Nombre Completo del Estudiante',
      schoolLabel: 'Centro Educativo',
      gradeLabel: 'Curso / Grupo',
      resetData: 'Restablecer Datos',
      save: 'Guardar Perfil',
      saved: 'Guardado'
    },
    footer: {
      tagline: 'El ser humano competente y virtuoso busca la verdad con la razón, defiende la justicia con la conciencia e ilumina a la comunidad con su compasión y esfuerzo.',
      copyright: 'Modelo Educativo del Siglo · Sistema de Educación del Carácter y Valores'
    }
  }
};
