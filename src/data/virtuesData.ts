import { VirtueDefinition, VirtueKey, VirtueTask } from '../types/virtue';

export const VIRTUES_DATA: Record<VirtueKey, VirtueDefinition> = {
  ahlakli: {
    id: 'ahlakli',
    title: 'Ahlaklı',
    tagline: 'Doğruluk, dürüstlük ve emanete sadakat',
    definition: 'İçinde ve dışında tutarlı, sözünde duran, emanete riayet eden, adaleti her şartta gözeten ve kul/kamu hakkını kutsal sayan insan erdemi.',
    quote: {
      text: 'Doğruluk emanet, yalancılık ise hıyanettir.',
      author: 'Hz. Ebubekir'
    },
    color: '#0284c7', // Sky Blue
    lightBg: '#f0f9ff',
    borderColor: '#bae6fd',
    iconName: 'Scale',
    keyIndicators: [
      'Kimse görmese bile doğru ve dürüst davranır.',
      'Söz verdiğinde şartlar zorlaşsa da sözünü tutar.',
      'Başkalarının hakkına ve kamu malına riayet eder.',
      'Kendi çıkarı zedelense dahi adaletten ödün vermez.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Dürüstlük kurallarını bilir ancak zor durumlarda bazen kendi lehine esnetebilir.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Genellikle doğruyu söyler, sözünde durmaya çabalar, hata yaptığında telafi etmeye çalışır.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Her ortamda güvenilirdir. Adalet ve emanet bilinciyle hareket eder, çevresine örnek olur.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Ahlaki ilkeleri bir yaşam felsefesi haline getirmiş, haksızlıklara karşı hakikati savunan rehber kişiliktir.'
      }
    ]
  },
  bilge: {
    id: 'bilge',
    title: 'Bilge',
    tagline: 'Hakikat arayışı, tefekkür ve hikmet',
    definition: 'Sadece bilgi depolayan değil, edindiği bilgiyi hayatına ve ahlakına dönüştüren, tefekkür eden, haddini bilen ve hikmet yolcusu insan.',
    quote: {
      text: 'İlim ilim bilmektir, ilim kendin bilmektir; sen kendini bilmezsin, ya nice okumaktır.',
      author: 'Yunus Emre'
    },
    color: '#7c3aed', // Violet
    lightBg: '#f5f3ff',
    borderColor: '#ddd6fe',
    iconName: 'BookOpen',
    keyIndicators: [
      'Öğrenmeyi bir ömür boyu sürecek kutsal bir yolculuk olarak görür.',
      'Öğrendiği bilginin faydasını topluma ve insanlığa aktarır.',
      'Olayların ardındaki hikmeti ve derinliği kavramaya çalışır.',
      'Kibrini yener, bildikçe ne kadar az bildiğinin farkına varır.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Verilen bilgileri ödev için öğrenir, derinlemesine sorgulama ve tefekkür henüz sınırlıdır.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Kitap okuma alışkanlığı kazanmaktadır; edindiği bilgilerin anlamı üzerine düşünmeye başlar.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Bilgiyi özümser, olaylar arasında sebep-sonuç ilişkileri kurar ve bilgisini paylaşmaktan mutluluk duyar.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Hikmet ve basiretle konuşur, bilgisiyle etrafını aydınlatır ve daima öğrenci kalmanın tevazusunu taşır.'
      }
    ]
  },
  cesaretli: {
    id: 'cesaretli',
    title: 'Cesaretli',
    tagline: 'Doğruyu savunma, medeni cesaret ve girişimcilik',
    definition: 'Korkusuzluk değil, korkuya rağmen doğru olanı yapabilme; haksızlığa karşı ses çıkarabilme, hata yapmaktan korkmadan deneme ve nezaketle hakkı savunma gücü.',
    quote: {
      text: 'Cesaret, tehlike karşısında aklın ve kalbin sarsılmaz duruşudur.',
      author: 'Farabi'
    },
    color: '#dc2626', // Crimson Red
    lightBg: '#fef2f2',
    borderColor: '#fecaca',
    iconName: 'ShieldAlert',
    keyIndicators: [
      'Haksızlığa uğrayan bir arkadaşını yalnız bırakmaz, destek olur.',
      'Fikirlerini nezaket ve saygı dairesinde cesurca ifade eder.',
      'Hatasını mertçe kabul eder ve özür dilemekten çekinmez.',
      'Yeni bir beceri öğrenirken başarısız olma korkusunu yener.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Topluluk önünde konuşmaktan veya haksızlığa karşı durmaktan çekinir, sessiz kalmayı seçer.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Teşvik edildiğinde görüşlerini ifade edebilir, tanıdığı ortamlarda haksızlığa itiraz eder.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Zor durumlarda adaletin yanında cesurca durur, inisiyatif alır ve hata yaptığında sorumluluk üstlenir.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Toplumsal yarar uğruna risk alır, zorbalıklara karşı sessizlerin sesi olur ve ilham verir.'
      }
    ]
  },
  estetik: {
    id: 'estetik',
    title: 'Estetik',
    tagline: 'Zarafet, tatlı dil ve çevre güzelliği',
    definition: 'Hayatı, dili, davranışları ve çevreyi güzelleştirme tutkusu; sanata duyarlılık, sözün en güzelini seçme ve her işte bir zarafet ve intizam arama şuuru.',
    quote: {
      text: 'Allah güzeldir, güzelliği sever.',
      author: 'Hadis-i Şerif'
    },
    color: '#d97706', // Amber Gold
    lightBg: '#fffbeb',
    borderColor: '#fde68a',
    iconName: 'Sparkles',
    keyIndicators: [
      'Konuşurken kırıcı kelimeler yerine nazik ve zarif bir üslup kullanır.',
      'Kişisel eşyalarını, sırasını ve çalışma alanını intizamla korur.',
      'Görsel sanatlar, musiki veya edebiyata karşı derin bir ilgi duyar.',
      'Yaptığı her işe özen katar; baştan savma değil, sanatkarane üretir.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Estetik duyarlılık henüz gelişmemiştir, çevresinin veya dilinin kabalığını fark etmeyebilir.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Çalışma alanını düzenlemeye çalışır, uyarılınca üslubunu düzeltir, sanatsal etkinliklere katılır.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Dili ve tavırları her zaman zariftir; bulunduğu her mekâna intizam, temizlik ve ahenk katar.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Sanat ve estetiği bir hayat tarzı olarak yaşar; çevresindekileri incelik, zarafet ve sevgi diliyle büyüler.'
      }
    ]
  },
  iradeli: {
    id: 'iradeli',
    title: 'İradeli',
    tagline: 'Öz denetim, sabır ve kararlılık',
    definition: 'Anlık dürtülere ve bağımlılıklara "hayır" diyebilme, uzun vadeli yüce hedeflere odaklanma, erteleme hastalığını yenme ve başladığı hayırlı işi sabırla tamamlama gücü.',
    quote: {
      text: 'En büyük zafer, insanın kendi nefsine ve arzularına karşı kazandığı zaferdir.',
      author: 'Platon'
    },
    color: '#059669', // Emerald
    lightBg: '#f0fdf4',
    borderColor: '#bbf7d0',
    iconName: 'Compass',
    keyIndicators: [
      'Ekran süresini kendi iradesiyle sınırlandırır, dijital esir olmaz.',
      'Ders çalışırken ve hedeflerine yürürken dikkat dağıtıcıları eler.',
      'Öfkelendiğinde veya zorlandığında sabreder, fevri davranmaz.',
      'Verdiği kararları sonuna kadar kararlılıkla takip eder.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Çabuk sıkılır, ekran ve sosyal medyada kontrolü kaybeder, ödevlerini sürekli erteler.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Hatırlatıldığında planına uyar, anlık dürtüleriyle mücadele etmeye gayret eder.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Kendi çalışma ve dinlenme disiplinini sağlar; sabırla zorlukların üstesinden gelir.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Çelik gibi bir irade ve yüksek sabra sahiptir; kriz anlarında sükunetini korur ve kararlılıkla hedefine ulaşır.'
      }
    ]
  },
  merhametli: {
    id: 'merhametli',
    title: 'Merhametli',
    tagline: 'Şefkat, empati ve dilsiz canlara kol kanat germe',
    definition: 'Yaratılanı yaratandan ötürü sevme, acıyı yüreğinde hissetme, affedici olma, sokaktaki bir hayvana, zayıf bir çocuğa veya yaşlıya gönülden yardım eli uzatma yüceliği.',
    quote: {
      text: 'Yeryüzündekilere merhamet edin ki, göktekiler de size merhamet etsin.',
      author: 'Hz. Muhammed (s.a.v.)'
    },
    color: '#e11d48', // Rose
    lightBg: '#fff1f2',
    borderColor: '#fecdd3',
    iconName: 'HeartHandshake',
    keyIndicators: [
      'Başkalarının üzüntüsünü veya zorluğunu anlayıp empati kurar.',
      'Sokak hayvanlarının su, yemek ve güvenliğini dert edinir.',
      'Kendisine hata yapanları bağışlayıcı bir olgunlukla karşılar.',
      'Yardımlaşma ve dayanışma faaliyetlerinde en önde yer alır.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Çoğunlukla kendi duygu ve ihtiyaçlarına odaklanır, çevresindeki dertleri fark etmekte zorlanır.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Gözü önündeki canlılara şefkat gösterir, yardıma muhtaç olanları görünce üzülür ve destek olur.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Aktif olarak iyilik üretir, kırgınlıkları affeder, hayvanlara ve muhtaçlara düzenli yardım eder.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Merhameti evrenseldir; tüm tabiata, insana ve hayvana sevgiyle yaklaşır, toplumsal yaraları sarar.'
      }
    ]
  },
  saglikli: {
    id: 'saglikli',
    title: 'Sağlıklı',
    tagline: 'Beden, zihin ve ruh emanetine saygı',
    definition: 'Bedenini bir emanet bilip temiz, dengeli ve hareketli yaşamak; zararlı maddelerden ve zihni körelten alışkanlıklardan uzak durup ruhunu dinlendirme bilinci.',
    quote: {
      text: 'Halk içinde muteber bir nesne yok devlet gibi, olmaya devlet cihanda bir nefes sıhhat gibi.',
      author: 'Kanuni Sultan Süleyman'
    },
    color: '#16a34a', // Green
    lightBg: '#f0fdf4',
    borderColor: '#bbf7d0',
    iconName: 'Activity',
    keyIndicators: [
      'Günde yeterli su tüketir, abur cubur yerine doğal gıdaları tercih eder.',
      'Düzenli spor veya yürüyüş yaparak bedenini diri tutar.',
      'Uyku saatlerine riayet ederek zihinsel ve bedensel dinlenmeyi sağlar.',
      'Ruh sağlığını korumak için zihnini kin, nefret ve hasetten temizler.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Hareketsiz yaşam sürer, uyku ve beslenmesine dikkat etmez; beden sağlığını ihmal eder.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Zaman zaman spor yapar, zararlı gıdaları azaltmaya çalışır, sağlığının değerini kavrar.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Beslenme, hareket ve uyku dengesini kurmuştur; beden ve ruh zindeliğini korur.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Bütüncül sağlığı bir yaşam disiplinine dönüştürmüş, çevresine spor ve temiz yaşam ilhamı verir.'
      }
    ]
  },
  sorgulayici: {
    id: 'sorgulayici',
    title: 'Sorgulayıcı',
    tagline: 'Eleştirel düşünme, teyit ve hakikat dedektifliği',
    definition: 'Her duyduğuna körü körüne inanmayan, delil ve kaynak arayan, "Neden?", "Nasıl?" sorularını cesaretle soran, ön yargıları akıl ve mantık süzgecinden geçiren zihniyet.',
    quote: {
      text: 'Sorgulanmamış bir hayat, yaşanmaya değer değildir.',
      author: 'Sokrates'
    },
    color: '#0891b2', // Cyan
    lightBg: '#ecfeff',
    borderColor: '#a5f3fc',
    iconName: 'HelpCircle',
    keyIndicators: [
      'Sosyal medyada gördüğü bir haberi paylaşmadan önce doğruluğunu araştırır.',
      'Farklı bakış açılarını dinler, peşin hüküm ve ön yargıyla yaklaşmaz.',
      'Sorunların kök sebeplerini bulmak için merakla derin sorular sorar.',
      'Kendi düşüncelerini de eleştirip geliştirmeye açıktır.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Duyduğu her iddiaya kolayca inanır, sosyal medyadaki sansasyonel içerikleri sorgulamadan kabul eder.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Şüpheli durumları fark eder, temel kaynaklara bakmaya çalışır, sınıfta soru sormaya başlar.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Güvenilir bilgi kaynaklarını ayırt eder, mantık hatalarını yakalar ve analitik düşünür.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Hakikat dedektifliği yapar; ön yargıları yıkar, karmaşık meseleleri akıl, delil ve hikmetle çözer.'
      }
    ]
  },
  uretken: {
    id: 'uretken',
    title: 'Üretken',
    tagline: 'Fikir, emek ve faydalı eser üretme aşkı',
    definition: 'Tüketim çılgınlığına kapılmayıp el emeği, zihin gücü veya sanatıyla insanlığa ve doğaya fayda sağlayan; sorun gördüğünde şikayet etmek yerine çözüm üreten üretken kişilik.',
    quote: {
      text: 'İnsanların en hayırlısı, insanlara en çok faydası dokunandır.',
      author: 'Hadis-i Şerif'
    },
    color: '#ca8a04', // Yellow ochre
    lightBg: '#fefce8',
    borderColor: '#fef08a',
    iconName: 'Wrench',
    keyIndicators: [
      'Geri dönüştürülebilir malzemelerle faydalı araçlar üretir.',
      'Okul veya mahalle sorunlarına pratik çözüm projeleri geliştirir.',
      'Boş zamanlarını tembellikle değil, üretici bir hobi veya zanaatla değerlendirir.',
      'Yalnızca tüketici olmak yerine fikir ve içerik üreten tarafta yer alır.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Zamanını pasif tüketimle (oyun, dizi) geçirir; üretmeye yönelik istek henüz zayıftır.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Verilen projeleri yapar, el becerisi veya fikir geliştirme atölyelerine merak duyar.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Kendi inisiyatifiyle projeler tasarlar, problem çözer ve ürettiklerini başkalarıyla paylaşır.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Toplumsal fayda sağlayan inovasyonlar geliştirir; atölye kurar, başkalarını da üretmeye teşvik eder.'
      }
    ]
  },
  vatansever: {
    id: 'vatansever',
    title: 'Vatansever',
    tagline: 'Kültürel miras, kamu hakkı ve toplumsal sorumluluk',
    definition: 'Vatanını lafla değil, işini en iyi yaparak, tarihine, diline, bayrağına, doğasına ve kamu mallarına gözü gibi sahip çıkarak seven yüksek milli ve insani şuur.',
    quote: {
      text: 'Vatanını en çok seven, görevini en iyi yapandır.',
      author: 'Mustafa Kemal Atatürk'
    },
    color: '#b91c1c', // Deep Turkey Red
    lightBg: '#fef2f2',
    borderColor: '#fecaca',
    iconName: 'Flag',
    keyIndicators: [
      'Tarihi ve kültürel mirasımıza derin saygı gösterir ve korur.',
      'Okul sıralarını, parkları, otobüsleri ve kamu mallarını kendi evi gibi özenle kullanır.',
      'Çevreyi, suları ve ormanları korumayı milli bir vazife kabul eder.',
      'İşini, ödevini ve sorumluluklarını en yüksek kalitede yaparak ülkesine değer katar.'
    ],
    rubricLevels: [
      {
        level: 1,
        title: 'Başlangıç',
        description: 'Vatan sevgisini sadece milli günlerde hatırlar; kamu mallarını koruma bilinci tam oturmamıştır.'
      },
      {
        level: 2,
        title: 'Gelişmekte',
        description: 'Milli değerlere saygılıdır, okul eşyalarına zarar vermemeye özen gösterir.'
      },
      {
        level: 3,
        title: 'Yetkin',
        description: 'Kamu malını titizlikle korur, kültürel zenginliğimizi araştırır, görevini kusursuz yapar.'
      },
      {
        level: 4,
        title: 'Erdemli Öncü',
        description: 'Ülkesinin kalkınması ve refahı için fedakarlık yapar; doğayı, tarihi ve insanı koruyan projeler yönetir.'
      }
    ]
  }
};

export const INITIAL_TASKS: VirtueTask[] = [
  // 1. AHLAKLI
  {
    id: 'task-ahlakli-1',
    virtueId: 'ahlakli',
    title: 'Doğruluk ve Emanet Defteri',
    description: 'Bugün boyunca attığın her adımda tam bir doğruluk içinde ol. Kimsenin görmediği bir anda dahi dürüst davrandığın bir anı defterine kaydet.',
    actionGuide: [
      'Günün başından itibaren kendine "Bugün tek bir gerçeği bile eğip bükmeyeceğim" sözü ver.',
      'Sınıfta, evde veya sokakta emanet bir eşya veya bilgiye sahip çık.',
      'Günün sonunda bu deneyimin sende bıraktığı iç huzuru yansıt.'
    ],
    difficulty: 'Basit',
    xpReward: 25,
    completed: true,
    completedAt: '2026-10-04T18:30:00Z',
    reflectionNote: 'Kütüphanede arkadaşımın unuttuğu kulaklığı görevliye teslim ettim. Sahibi bulununca içim çok rahatladı.'
  },
  {
    id: 'task-ahlakli-2',
    virtueId: 'ahlakli',
    title: 'Adil Sözleşme & Hak Gözetimi',
    description: 'Bir grup çalışmasında veya oyunda kuralların herkese eşit uygulanmasını sağla; kendi lehine olan haksız bir avantajdan kendi isteğinle vazgeç.',
    actionGuide: [
      'Oyun veya takım çalışmasında kuralları tarafsızca uygula.',
      'Haksız kazanılmış bir sırayı veya puanı geri vererek hakkı sahibine teslim et.',
      'Arkadaşlarından bu davranışın hakkında dürüst geri bildirim al.'
    ],
    difficulty: 'Orta',
    xpReward: 40,
    completed: false
  },

  // 2. BİLGE
  {
    id: 'task-bilge-1',
    virtueId: 'bilge',
    title: 'Bir Hikmet Cümlesi ve Derin Tefekkür',
    description: 'Tarihe mal olmuş bilge bir düşünürün (Farabi, Yunus Emre, Mevlana vb.) bir sözünü seç. Bu sözü 15 dakika boyunca tefekkür et ve hayatına nasıl uyarlayacağını yaz.',
    actionGuide: [
      'Bilgelik kütüphanesinden bir vecize seç.',
      'Sakin bir köşede bu sözün günümüzdeki karşılığını düşün.',
      'Bu düşünceden çıkardığın bir hayat prensibini günlüğe kaydet.'
    ],
    difficulty: 'Basit',
    xpReward: 25,
    completed: true,
    completedAt: '2026-10-03T14:15:00Z',
    reflectionNote: 'Yunus Emre’nin "İlim kendin bilmektir" sözü üzerinde düşündüm. Kendi zayıf ve güçlü yanlarımı listeledim.'
  },
  {
    id: 'task-bilge-2',
    virtueId: 'bilge',
    title: 'Bilgi Elçisi: Bir Kavramı Sadeleştirerek Öğret',
    description: 'Öğrendiğin karmaşık bir konuyu (örneğin fotosentez, algoritma veya bir tarih olayı) küçük bir kardeşine ya da arkadaşına en sade dille anlat.',
    actionGuide: [
      'Konuyu jargondan arındırarak günlük hayat benzetmeleriyle açıkla.',
      'Karşındakinin anladığını doğrulamak için sorular sor.',
      'Feynman tekniğini kullanarak kendi eksiklerini tespit et.'
    ],
    difficulty: 'Orta',
    xpReward: 45,
    completed: false
  },

  // 3. CESARETLİ
  {
    id: 'task-cesaretli-1',
    virtueId: 'cesaretli',
    title: 'Nezaketle "Haksızlığa İtiraz" Adımı',
    description: 'Birinin alay edildiğini, dışlandığını veya haksızlığa uğradığını gördüğünde sessiz kalma; sakin, kararlı ve nazik bir üslupla doğruyu savun.',
    actionGuide: [
      'Öfkeye kapılmadan doğrudan hakikati dile getir.',
      'Dışlanan veya üzülen kişinin yanına geçip ona yalnız olmadığını hissettir.',
      'Zorbalık yapanı kırmadan ama net bir duruşla uyar.'
    ],
    difficulty: 'Orta',
    xpReward: 45,
    completed: false
  },
  {
    id: 'task-cesaretli-2',
    virtueId: 'cesaretli',
    title: 'Mertçe Özür Dileme & Hatayı Telafi',
    description: 'Geçmişte bilerek veya bilmeyerek kırdığın bir kimseden cesaretini toplayıp içtenlikle özür dile ve durumu telafi edecek bir jest yap.',
    actionGuide: [
      'Bahane üretmeksizin kendi payını kabul et.',
      'Göz teması kurarak veya samimi bir mektupla özrünü ilet.',
      'Gönül alıcı bir davranışla (kitap hediye etme, yardım etme) telafi et.'
    ],
    difficulty: 'İleri',
    xpReward: 60,
    completed: false
  },

  // 4. ESTETİK
  {
    id: 'task-estetik-1',
    virtueId: 'estetik',
    title: 'Zarif Dil & Nezaket Sözlüğü',
    description: 'Günün tamamında kaba, argo veya aceleci kelimeleri hayatından çıkar. "Lütfen, istirham ederim, afedersiniz, teşekkür ederim, rica ederim" inceliklerini yay.',
    actionGuide: [
      'Gün boyunca kullandığın kelimelerin kalitesine dikkat et.',
      'Kaba bir tabir aklına geldiğinde onu zarif bir eşanlamlısıyla değiştir.',
      'Ailende ve okulunda en az 5 kişiye içten bir nezaket cümlesi söyle.'
    ],
    difficulty: 'Basit',
    xpReward: 25,
    completed: true,
    completedAt: '2026-10-02T19:00:00Z',
    reflectionNote: 'Kantinciye ve servis şoförüne gülümseyerek teşekkür ettim, yüzlerindeki tebessüm günümü aydınlattı.'
  },
  {
    id: 'task-estetik-2',
    virtueId: 'estetik',
    title: 'Yaşam Alanına Ahenk ve Sanat Dokunuşu',
    description: 'Odanı, çalışma masanı veya sınıfındaki bir köşeyi altın oran, sade düzen ve estetik bir ahenkle yeniden düzenle.',
    actionGuide: [
      'Gereksiz fazlalıkları ayıkla, sadelik zarafettir ilkesini uygula.',
      'Bir çiçek, hat/sanat eseri veya güzel bir kitapla odak noktası oluştur.',
      'Düzenin zihinsel berraklığına olan etkisini gözlemle.'
    ],
    difficulty: 'Orta',
    xpReward: 35,
    completed: false
  },

  // 5. İRADELİ
  {
    id: 'task-iradeli-1',
    virtueId: 'iradeli',
    title: '2 Saatlik Kesintisiz Dijital Detoks',
    description: 'Telefon, tablet ve bilgisayar ekranını tam 2 saat boyunca kapalı tut. Bu süreyi okuma, tefekkür veya doğa yürüyüşüyle değerlendir.',
    actionGuide: [
      'Bildirimleri kapat ve cihazları başka bir odaya bırak.',
      'Eline bir kitap al veya ailene derin bir sohbet başlat.',
      'İlk 20 dakikadaki yoksunluk hissini iradenle yönet.'
    ],
    difficulty: 'Basit',
    xpReward: 30,
    completed: true,
    completedAt: '2026-10-04T16:00:00Z',
    reflectionNote: 'İlk yarım saat elim sürekli telefona gitti ama sonra kitap okumaya daldım ve zamanın ne kadar bereketli olduğunu hissettim.'
  },
  {
    id: 'task-iradeli-2',
    virtueId: 'iradeli',
    title: 'Ertelemeyi Bitir: En Zor Görevi İlk Sırada Tamamla',
    description: 'Günlerdir ertelediğin en zor ödevi veya işi sabahın ilk saatinde hiç ara vermeden odaklanarak bitir ("Kurbağayı Ye" tekniği).',
    actionGuide: [
      'Ertelediğin o tek kritik işi belirle.',
      '25 dakikalık odaklanma (Pomodoro) ile hemen başla.',
      'Bitirdiğinde hissettiğin hafiflemeyi günlüğe kaydet.'
    ],
    difficulty: 'Orta',
    xpReward: 40,
    completed: false
  },

  // 6. MERHAMETLİ
  {
    id: 'task-merhametli-1',
    virtueId: 'merhametli',
    title: 'Dilsiz Canlara Merhamet Sofrası',
    description: 'Sokaktaki kedi, köpek veya kuşlar için temiz su ve mama kabı hazırla, korunaklı bir noktaya yerleştir ve takip et.',
    actionGuide: [
      'Geri dönüştürülebilir bir kaptan temiz su ve mama kabı yap.',
      'Güneşten ve yağmurdan korunaklı bir yere bırak.',
      'Haftalık olarak suyunu tazelemeyi sorumluluk edin.'
    ],
    difficulty: 'Basit',
    xpReward: 30,
    completed: true,
    completedAt: '2026-10-01T11:00:00Z',
    reflectionNote: 'Apartmanın bahçesindeki kediler için karton kutudan korunaklı bir yuva ve su kabı yaptım.'
  },
  {
    id: 'task-merhametli-2',
    virtueId: 'merhametli',
    title: 'Gönül Alma ve Yalnız Birini Sevindirme',
    description: 'Sınıfta yalnız oturan, okula yeni gelmiş veya zor bir dönemden geçen bir arkadaşına içtenlikle yaklaşıp onunla vakit geçir.',
    actionGuide: [
      'Yargılamadan sadece dinlemeyi amaçla.',
      'Birlikte bir çay/su içmeyi veya bahçede dolaşmayı teklif et.',
      'Onun değerli olduğunu hissettirecek samimi bir ilgi göster.'
    ],
    difficulty: 'Orta',
    xpReward: 45,
    completed: false
  },

  // 7. SAĞLIKLI
  {
    id: 'task-saglikli-1',
    virtueId: 'saglikli',
    title: '8.000 Adım & 2 Litre Su Disiplini',
    description: 'Beden emanetini korumak için gün boyunca asansör yerine merdivenleri tercih et, açık havada yürü ve 2 litre su tüket.',
    actionGuide: [
      'Gün boyunca su içmeyi hatırlatan bir takip oluştur.',
      'Okul veya ev yolunda en az 30 dakika tempolu yürü.',
      'İşlenmiş şekerli içecekleri bugün tamamen hayatından çıkar.'
    ],
    difficulty: 'Basit',
    xpReward: 25,
    completed: true,
    completedAt: '2026-10-03T20:00:00Z',
    reflectionNote: 'Bugün 9.200 adım attım ve hiç gazlı içecek içmedim. Akşam kendimi çok daha dinç hissettim.'
  },
  {
    id: 'task-saglikli-2',
    virtueId: 'saglikli',
    title: 'Düzenli Uyku Ritmi & Gece Zihin Temizliği',
    description: 'Yatmadan 1 saat önce tüm mavi ışık saçan cihazları kapat. 10 dakika nefes egzersizi yapıp saat 22:30’dan önce uykuya geç.',
    actionGuide: [
      'Odayı havalandır ve serin bir uyku ortamı hazırla.',
      'Günün yorgunluğunu 4-7-8 nefes tekniğiyle bırak.',
      'En az 8 saatlik kesintisiz dinlendirici uyku uyu.'
    ],
    difficulty: 'Orta',
    xpReward: 35,
    completed: false
  },

  // 8. SORGULAYICI
  {
    id: 'task-sorgulayici-1',
    virtueId: 'sorgulayici',
    title: 'Haber Teyit Dedektifliği',
    description: 'Sosyal medyada veya haber sitelerinde karşına çıkan sansasyonel bir iddiayı incele. 3 farklı güvenilir birincil kaynaktan doğruluğunu teyit et.',
    actionGuide: [
      'İddianın ilk kaynağını (tarih, kişi, kurum) bul.',
      'Tersine görsel arama ve teyit platformlarını (Teyit.org vb.) kullan.',
      'Gördüğün mantık hatalarını veya çarpıtmaları not et.'
    ],
    difficulty: 'Orta',
    xpReward: 40,
    completed: true,
    completedAt: '2026-10-04T12:00:00Z',
    reflectionNote: 'Popüler bir bilim iddiasının 2018 yılına ait montaj bir videodan türetildiğini tespit ettim.'
  },
  {
    id: 'task-sorgulayici-2',
    virtueId: 'sorgulayici',
    title: 'Bir Ön Yargıyla Yüzleşme ve Çürütme',
    description: 'Daha önce bir grup, meslek veya durum hakkında sahip olduğun peşin hükümlü bir fikri belirle. Karşı görüşü ve gerçek verileri araştırarak ön yargını sorgula.',
    actionGuide: [
      'Zihnindeki o peşin hükmü dürüstçe yaz.',
      'Bu düşüncenin dayandığı kanıtları sorgula: "Gerçekten doğru mu, yoksa genel bir ezber mi?"',
      'Ulaştığın objektif sonucu arkadaşlarınla paylaş.'
    ],
    difficulty: 'İleri',
    xpReward: 55,
    completed: false
  },

  // 9. ÜRETKEN
  {
    id: 'task-uretken-1',
    virtueId: 'uretken',
    title: 'İleri Dönüşüm: Atıktan Faydalı Araca',
    description: 'Evde veya okulda çöpe gidecek bir malzemeyi (kutu, kavanoz, pet şişe vb.) kalemlik, saksı veya düzenleyiciye dönüştür.',
    actionGuide: [
      'Kullanılmayan bir atık malzeme seç.',
      'Bunu hem estetik hem de işlevsel bir araç haline getir.',
      'Ürettiğin aracı masanda aktif olarak kullanmaya başla.'
    ],
    difficulty: 'Basit',
    xpReward: 30,
    completed: true,
    completedAt: '2026-10-02T15:30:00Z',
    reflectionNote: 'Karton ayakkabı kutusunu bölmelere ayırarak şarj kabloları ve kırtasiye için düzenleyici yaptım.'
  },
  {
    id: 'task-uretken-2',
    virtueId: 'uretken',
    title: 'Toplumsal Bir Soruna Proje Çözümü Tasarla',
    description: 'Okulunda veya mahallende gözlemlediğin bir problemi (israf, gürültü, çevre kirliliği) çözmek için 4 aşamalı uygulanabilir bir proje taslağı yaz.',
    actionGuide: [
      'Sorunun tanımını ve etkilenenleri netleştir.',
      'Düşük maliyetli ve sürdürülebilir bir çözüm fikri geliştir.',
      'Uygulama takvimini ve gerekli işbirliklerini planla.'
    ],
    difficulty: 'İleri',
    xpReward: 60,
    completed: false
  },

  // 10. VATANSEVER
  {
    id: 'task-vatansever-1',
    virtueId: 'vatansever',
    title: 'Kamu Malını Koruma ve Temizlik Seferi',
    description: 'Okul sırasını, kütüphane kitaplarını veya mahalle parkındaki ortak alanı koru. Gördüğün bir çöpü kaldır, çizilmiş bir sırayı temizle.',
    actionGuide: [
      'Kamu malının 85 milyon vatandaşın ortak emaneti olduğunu hatırla.',
      'Ortak bir alanı kendi evinden daha temiz bırak.',
      'Kamu malına zarar veren birini nezaketle uyar.'
    ],
    difficulty: 'Basit',
    xpReward: 30,
    completed: true,
    completedAt: '2026-10-04T10:15:00Z',
    reflectionNote: 'Sınıfta tahta silgisini ve yerdeki kağıtları temizleyip sınıfımızı pırıl pırıl yaptık.'
  },
  {
    id: 'task-vatansever-2',
    virtueId: 'vatansever',
    title: 'Yerel Kültürel Miras Kaşifi',
    description: 'Yaşadığın şehrin veya ilçenin tarihi bir anıtını, çeşmesini, camisini veya müzesini araştır; hikayesini öğrenip okul panosunda veya sınıfta tanıt.',
    actionGuide: [
      'Yakın çevrendeki tarihi bir yapıyı ziyaret et veya detaylı araştır.',
      'Bu yapının hangi dönemde kime hizmet ettiğini öğren.',
      'Bu eserin korunması için yapılması gerekenleri maddeler halinde yaz.'
    ],
    difficulty: 'Orta',
    xpReward: 45,
    completed: false
  }
];
