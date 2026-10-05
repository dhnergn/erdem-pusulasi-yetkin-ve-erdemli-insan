import { Scenario } from '../types/virtue';

export const SCENARIOS_DATA: Scenario[] = [
  {
    id: 'scen-ahlakli-1',
    virtueId: 'ahlakli',
    title: 'Kütüphanede Bulunan İsimsiz Cüzdan',
    context: 'Okul Kütüphanesi & Vicdan Sınavı',
    situation: 'Okul kütüphanesinde ders çalışırken bir sandalyenin altında düşürülmüş bir cüzdan buldun. İçinde yüklü miktarda para, öğrenci kimliği ve otobüs kartı var. Etrafta o an kimse yok ve güvenlik kamerası da o köşeyi görmüyor.',
    question: 'Bu durumda nasıl bir tavır sergilersin?',
    choices: [
      {
        id: 'c1',
        text: 'Cüzdanın içindeki kimliğe bakar, öğrencinin sınıfını öğrenip idareye veya kütüphane görevlisine tutanakla hemen teslim ederim.',
        isVirtuous: true,
        virtueOutcome: {
          virtueKey: 'ahlakli',
          scoreChange: 15,
          explanation: 'Emanete riayet ve kul hakkı bilinciyle en erdemli kararı verdin.'
        },
        secondaryVirtueOutcome: {
          virtueKey: 'cesaretli',
          scoreChange: 5,
          explanation: 'Dürüstlükten asla taviz vermedin.'
        },
        feedback: 'Harika bir ahlaki duruş! Bir başkasının zorlukla biriktirdiği harçlığı ve kimliğini koruyarak onun mağduriyetini önledin. Dürüstlük, kimse bakmadığında doğru olanı yapmaktır.'
      },
      {
        id: 'c2',
        text: 'Parayı almam ama cüzdanı da oradan almam; bulan görevli ilgilensin diye dokunmadan bırakırım.',
        isVirtuous: false,
        virtueOutcome: {
          virtueKey: 'ahlakli',
          scoreChange: -5,
          explanation: 'Kötü niyetli olmasan da pasif kalmak emanetin kaybolma riskini artırır.'
        },
        feedback: 'Pasif kalmak vicdanı rahatlatmaz. Senden sonra art niyetli biri gelip alabilir ve asıl sahibi mağdur olabilirdi. Erdemli insan inisiyatif alır ve koruyucudur.'
      },
      {
        id: 'c3',
        text: 'Öğrencinin sosyal medya hesabına mesaj atıp bizzat kendim teslim etmek için randevulaşırım.',
        isVirtuous: true,
        virtueOutcome: {
          virtueKey: 'ahlakli',
          scoreChange: 12,
          explanation: 'Doğrudan hak sahibine ulaştın ve güven verdin.'
        },
        secondaryVirtueOutcome: {
          virtueKey: 'merhametli',
          scoreChange: 8,
          explanation: 'Kaybedenin endişesini hızlıca giderdin.'
        },
        feedback: 'Güzel bir çözüm. Sahibi kimliğini ve parasını eksiksiz aldığında derin bir minnettarlık duydu.'
      }
    ]
  },
  {
    id: 'scen-cesaretli-1',
    virtueId: 'cesaretli',
    title: 'Sınıf Grubunda Hedef Gösterilen Arkadaş',
    context: 'Dijital Zorbalık & Medeni Cesaret',
    situation: 'Sınıfın WhatsApp grubunda birkaç popüler öğrenci, sessiz ve içine kapanık bir arkadaşınızın giyimiyle ve konuşma tarzıyla alay eden kırıcı etiketler ve capsler paylaşıyor. Diğerleri ise dışlanma korkusuyla sadece gülme emojisi atıyor.',
    question: 'Bu durum karşısında sergileyeceğin tutum ne olur?',
    choices: [
      {
        id: 'c1',
        text: 'Gruba net bir dille: "Arkadaşlar bu yaptığımız düpedüz saygısızlık ve zorbalıktır, hemen silin ve özür dileyin" yazar, ardından o arkadaşıma özelden destek mesajı atarım.',
        isVirtuous: true,
        virtueOutcome: {
          virtueKey: 'cesaretli',
          scoreChange: 20,
          explanation: 'Topluluk baskısına boyun eğmeyip hakkı cesaretle savundun.'
        },
        secondaryVirtueOutcome: {
          virtueKey: 'merhametli',
          scoreChange: 10,
          explanation: 'Ezilen arkadaşının yanında durarak yüreğini ferahlattın.'
        },
        feedback: 'İşte gerçek medeni cesaret! Çoğunluğun yanlış yaptığı bir yerde doğruyu tek başına savunabilmek lider ve erdemli bir ruha işarettir. Arkadaşın yalnız olmadığını hissetti.'
      },
      {
        id: 'c2',
        text: 'Bana dokunmadıkları için gruba hiçbir şey yazmam, sadece arkadaşıma özelden "onlara bakma" derim.',
        isVirtuous: false,
        virtueOutcome: {
          virtueKey: 'cesaretli',
          scoreChange: -10,
          explanation: 'Haksızlık karşısında sessiz kalmak cesaret eksikliğidir.'
        },
        feedback: 'Özelden destek olmak güzel olsa da, zorbaların açıkça durdurulmaması onların cesaretini artırır. Haksızlık karşısında açık tavır almak gerekir.'
      },
      {
        id: 'c3',
        text: 'Gruptan hemen ayrılırım, böyle şeylere tanık olmak istemem.',
        isVirtuous: false,
        virtueOutcome: {
          virtueKey: 'cesaretli',
          scoreChange: -15,
          explanation: 'Sorundan kaçmak mağduru korumaz.'
        },
        feedback: 'Kaçmak haksızlığı çözmez. Erdemli insan kötülüğün olduğu yerden kaçmak yerine onu iyilikle ıslah etmeye gayret eder.'
      }
    ]
  },
  {
    id: 'scen-sorgulayici-1',
    virtueId: 'sorgulayici',
    title: 'Sosyal Medyada Yayılan Sansasyonel İddia',
    context: 'Bilgi Kirliliği & Eleştirel Süzgeç',
    situation: 'Okulda hızla yayılan bir paylaşımda: "Milli Eğitim Bakanlığı yarından itibaren sınavları iptal etti, herkes sınıfı geçecek!" şeklinde görsel montajlı bir haber dolaşıyor. Sınıftaki arkadaşların ders çalışmayı bırakıp sevinç çığlıkları atıyor.',
    question: 'Bu bilgiye nasıl yaklaşırsın?',
    choices: [
      {
        id: 'c1',
        text: 'Resmi MEB internet sitesine ve Resmî Gazete duyurularına girip doğrularım; görseldeki yazı tiplerinin ve tarihin montaj olduğunu arkadaşlarıma göstererek gerçeği anlatırım.',
        isVirtuous: true,
        virtueOutcome: {
          virtueKey: 'sorgulayici',
          scoreChange: 20,
          explanation: 'Delil ve birincil kaynak araştırmasıyla bilgi doğrulaması yaptın.'
        },
        secondaryVirtueOutcome: {
          virtueKey: 'bilge',
          scoreChange: 10,
          explanation: 'Arkadaşlarını yanılgıdan kurtardın.'
        },
        feedback: 'Mükemmel bir eleştirel düşünme örneği! Duygularınla değil, aklın ve teyit araçlarıyla hareket ettin. Sınıf arkadaşlarının sınavda mağdur olmasını engelledin.'
      },
      {
        id: 'c2',
        text: 'Hemen ben de hikayemde paylaşır, herkesin duymasını sağlarım.',
        isVirtuous: false,
        virtueOutcome: {
          virtueKey: 'sorgulayici',
          scoreChange: -15,
          explanation: 'Teyit edilmemiş bilgiyi yaymak dezenformasyona ortak olmaktır.'
        },
        feedback: 'Yanlış bilginin taşıyıcısı oldun. Sorgulayıcı insan teyit etmediği hiçbir habere itibar etmez ve yaymaz.'
      },
      {
        id: 'c3',
        text: 'Doğru olup olmadığını umursamam ama yine de sınavıma çalışmaya devam ederim.',
        isVirtuous: true,
        virtueOutcome: {
          virtueKey: 'iradeli',
          scoreChange: 10,
          explanation: 'Odaklanmanı kaybetmedin.'
        },
        secondaryVirtueOutcome: {
          virtueKey: 'sorgulayici',
          scoreChange: 5,
          explanation: 'Körü körüne inanmadın ama teyit de etmedin.'
        },
        feedback: 'Çalışmanı aksatmadın ancak bilginin kaynağını sorgulayıp topluluğu aydınlatmak erdemi pekiştirir.'
      }
    ]
  },
  {
    id: 'scen-iradeli-1',
    virtueId: 'iradeli',
    title: 'Sınav Gecesi ve Popüler Oyun Turnuvası',
    context: 'Öz Denetim & Geleceğe Yatırım',
    situation: 'Yarın dönem sonunun en belirleyici matematik sınavı var. Akşam saat 20:00’de en sevdiğin online oyunun tüm arkadaş grubunun katıldığı sezon finali canlı etkinliği başlıyor. Arkadaşların "Sadece 1 saat oynarız, bir şey olmaz" diyerek seni sürekli çağırıyor.',
    question: 'İradeni nasıl yönetirsin?',
    choices: [
      {
        id: 'c1',
        text: 'Telefonu ve oyunu tamamen kapatıp başka bir odaya koyarım. Hedefime sadık kalıp konuyu tekrar eder, zamanında yatarak zihnimi dinlendiririm.',
        isVirtuous: true,
        virtueOutcome: {
          virtueKey: 'iradeli',
          scoreChange: 20,
          explanation: 'Anlık zevki uzun vadeli başarı için erteleyebilme iradesi sergiledin.'
        },
        secondaryVirtueOutcome: {
          virtueKey: 'saglikli',
          scoreChange: 10,
          explanation: 'Düzenli uyku ile zihnini korudun.'
        },
        feedback: 'Büyük bir irade zaferi! Anlık dürtülerin değil, kendi aklının kaptanı olduğunu gösterdin. Sınavda dikkatin zirvedeydi ve yüksek bir başarı elde ettin.'
      },
      {
        id: 'c2',
        text: '"1 maç atıp çıkarım" diyerek oyuna girerim.',
        isVirtuous: false,
        virtueOutcome: {
          virtueKey: 'iradeli',
          scoreChange: -15,
          explanation: 'Dürtülere teslim olmak odaklanmayı yok eder.'
        },
        feedback: 'Bir maç dedikten sonra saatlerin nasıl geçtiğini anlamadın, gece geç yattın ve sınavda dikkat hataları yaptın. İrade, baştan sınır çizebilmektir.'
      }
    ]
  },
  {
    id: 'scen-merhametli-1',
    virtueId: 'merhametli',
    title: 'Kış Soğuğunda Okul Bahçesindeki Islak Yavru Kedi',
    context: 'Dilsiz Canlar & Şefkat',
    situation: 'Dondurucu bir kış sabahı okul bahçesindeki çalıların arasında titreyen, tüyleri ıslanmış küçük bir yavru kedi gördün. Zil çalmak üzere ve ilk ders çok önemli bir konu işlenecek.',
    question: 'Nasıl hareket edersin?',
    choices: [
      {
        id: 'c1',
        text: 'Nöbetçi öğretmene veya okul görevlisine hemen haber verip kediyi kuru bir kutu ve bezle kaloriferin yanına almalarını rica ederim; kantinden ılık süt/mama temin edip derse öyle girerim.',
        isVirtuous: true,
        virtueOutcome: {
          virtueKey: 'merhametli',
          scoreChange: 20,
          explanation: 'Dilsiz bir canın hayatını kurtarmak için hızlı ve organize merhamet gösterdin.'
        },
        secondaryVirtueOutcome: {
          virtueKey: 'uretken',
          scoreChange: 5,
          explanation: 'Pratik bir çözüm ürettin.'
        },
        feedback: 'Yüreğin şefkatle çarptı! Bir canlının donmasını engelledin. Merhamet, başkasının soğuğunu kendi kalbinde hissetmektir.'
      },
      {
        id: 'c2',
        text: 'İçim cız eder ama derse geç kalmamak için hızla sınıfa çıkarım.',
        isVirtuous: false,
        virtueOutcome: {
          virtueKey: 'merhametli',
          scoreChange: -10,
          explanation: 'Hissedip eyleme dökmeyen merhamet eksik kalır.'
        },
        feedback: 'Merhamet sadece üzülmek değil, harekete geçmektir. 2 dakikalık bir organizasyonla nöbetçiye haber verebilirdin.'
      }
    ]
  },
  {
    id: 'scen-vatansever-1',
    virtueId: 'vatansever',
    title: 'Otobüs Durağı ve Tarihi Çeşmeye Yazı Yazanlar',
    context: 'Kamu Malı & Kültürel Miras Şuuru',
    situation: 'Okul çıkışı tarihi bir çeşmenin mermerlerine ve otobüs durağının camlarına sprey boyayla isimler ve anlamsız şekiller çizen birkaç genç gördün.',
    question: 'Tepkin ne olur?',
    choices: [
      {
        id: 'c1',
        text: 'Güvenli bir mesafeden duruma tanık olur, yakındaki zabıtaya veya güvenlik görevlisine haber veririm; ardından okul kulübümüzle bu tarihi çeşmenin temizlenmesi için gönüllü bir proje başlatırım.',
        isVirtuous: true,
        virtueOutcome: {
          virtueKey: 'vatansever',
          scoreChange: 20,
          explanation: 'Ecdat mirasını ve kamu malını sahiplenerek yapıcı koruyuculuk yaptın.'
        },
        secondaryVirtueOutcome: {
          virtueKey: 'uretken',
          scoreChange: 10,
          explanation: 'Gönüllü bir iyilik projesi kurguladın.'
        },
        feedback: 'İşte gerçek vatanseverlik! Vatan, üzerinde nefes aldığımız toprağın taşını, suyunu ve tarihini korumaktır. Çeşmeyi temizleyip koruma altına aldırdın.'
      },
      {
        id: 'c2',
        text: '"Devlet nasılsa temizler" diyerek yanımdan geçip giderim.',
        isVirtuous: false,
        virtueOutcome: {
          virtueKey: 'vatansever',
          scoreChange: -15,
          explanation: 'Kamu malını sahipsiz görmek yurttaşlık bilincine aykırıdır.'
        },
        feedback: 'Kamu malı hepimizin ortak vergisi ve emeğidir. Tarihi eserler ise yok olursa yerine yenisi konamayacak ecdat emanetidir.'
      }
    ]
  }
];
