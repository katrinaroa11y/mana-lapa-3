export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  dateISO: string;
  readTime: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    keyTakeaways?: string[];
    quote?: string;
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '4',
    slug: 'vision-board-meistarklase-2027',
    title: 'Vision Board Meistarklase 2027',
    author: 'Katrīna Rozenbaha & Elza Krasta',
    date: '2026. gads',
    dateISO: '2026-12-01',
    readTime: '4 min lasījums',
    category: 'Meistarklase & Pašizziņa',
    excerpt: 'Vision board un pašizziņas meistarklase Rīgā | 9. janvāris | 2027. Aicinu Tevi pievienoties psihologu vadītā meistarklasē Rīgā, kur psiholoģijas zinātne satiekas ar pašizziņu.',
    featuredImage: '/5739029c773ea7f817c2ac19fafdccd9.jpg',
    content: {
      intro: 'Vision board un pašizziņas meistarklase Rīgā | 9. janvāris | 2027\nAicinu Tevi pievienoties psihologu vadītā meistarklasē Rīgā, kur psiholoģijas zinātne satiekas ar pašizziņu un sāc jauno gadu ar mieru un pārliecību.',
      sections: [
        {
          heading: 'Kam paredzēta meistarklase?',
          body: `Meistarklase ir piemērota ikvienam, kurš vēlas sevi iepazīt mazliet dziļāk. Tā būs noderīga, ja:
• <b>vēlies labāk izprast sevi</b>, savas vērtības un emocijas;
• <b>jūties iestrēdzis</b> vai gluži vienkārši esi gatavs apstāties un pārskatīt, kas dzīvē Tev ir nozīmīgs;
• <b>gribi skaidrāku redzējumu</b> par to, uz ko virzīties 2027. gadā;
• <b>meklē mierīgu, atbalstošu vidi</b> un patīkamu kompāniju;
• <b>vēlies saņemt praktiskus rīkus un apzinātības tehnikas</b>, ko izmantot arī pēc pasākuma.

<b>Iepriekšēja pieredze nav nepieciešama.</b> Pietiek ar vēlmi piedalīties.`
        },
        {
          heading: 'Ko tu iegūsi?',
          body: `Meistarklases laikā, Tu:
• <b>Iegūsi dziļāku izpratni</b> par sevi, savām vērtībām un emocijām;
• <b>Izzināsi savu <i>dzīves apli</i></b>;
• <b>Apzināti izveidosi</b> savu 2027. gada vīziju un vision board, ko paņemt līdzi;
• <b>Stiprināsi savus iekšējos resursus</b> ar kādu EMDR balstītu resursu stiprināšanas vingrinājumu.
Pēc vision board veidošanas saņemsi arī uzdevumus un psihologu veidotās darba lapas tālākajam pašizziņas darbam.`
        },
        {
          heading: 'Kad un kur notiks?',
          body: `<b>Datums:</b> 9. janvāris, sestdiena
<b>Laiks:</b> 11.00–14.00
<b>Vieta:</b> Coffee Society, Tērbatas iela 72, Rīga`
        },
        {
          heading: 'Pieteikšanās',
          body: `<b>Cena:</b> 80 EUR par 3 stundu meistarklasi.
<b>Cenā iekļauts:</b>
• visi nepieciešamie materiāli;
• kafija un uzkodas;
• uzdevumi tālākajam pašizziņas darbam;
• pēc izvēles - iespēja palikt ilgāk uz kādu sarunu pēc meistarklases.

<b>Pieteikšanās:</b> rakstot uz <a href="mailto:katrina.rozenbaha@gmail.com?subject=Pieteikums%20Vision%20Board%20Meistarklasei" class="underline text-[#668261] font-medium hover:text-[#4F684B]">katrina.rozenbaha@gmail.com</a>

Vai arī šeit:
<div class="pt-3 pb-2"><a href="https://buy.stripe.com/5kQ7sK3YAdI04Xgare0VO09" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-[#5a855a] hover:bg-[#4b714b] text-[#FAF8F5] px-7.5 py-3.5 rounded-md font-semibold text-[15px] tracking-wider uppercase transition-all shadow-xs hover:shadow-md cursor-pointer border border-[#5a855a] hover:border-[#4b714b] no-underline">REZERVĀCIJA</a></div>`
        },
        {
          heading: 'Vai šī pieredze var tikt iegādāta kā dāvana?',
          body: `Var rasties jautājums: <b>ko dāvināt draudzenei, māsai, sievai, mammai vai mīļotajam cilvēkam svētkos?</b> Ja meklē Ziemassvētku, dzimšanas dienas vai kāda cita īpaša notikuma dāvanu sev tuvam cilvēkam un nevēlies izvēlēties kārtējo lietu, kas nonāks plauktā, vai šķiet, ka ''viņai/ viņam jau viss ir'', tad šī meistarklase ir tieši laikā.

<i>Vision board</i> meistarklase derētu kā dāvana kādam, kuram interesē pašizziņa, patīk lasīt un interesējās par psiholoģiju, varbūt pat raksta savu dienasgrāmatu vai plānotāju, <b>bet dzīves, darba un ģimenes rūpju skrējienā bieži neatliek laiks sev.</b> Trīs stundas Coffee Society mājīgajā atmosfērā, viņš/ viņa mūsu vadībā <b>varēs pievērsties sev, izveidot savu <i>vision board</i>, sajust mieru un doties mājās ar jauniem, psiholoģijā balstītiem resursiem</b> un skaidrāku vīziju nākamajam gadam.

<b>Ja meistarklasi dāvināsi un attiecīgi vēlies tai skaistu noformējumu, raksti man uz e-pastu vai WhatsApp (skatīt <a href="/#kontakti" data-navigate-section="kontakti" class="underline text-[#668261] font-medium hover:text-[#4F684B]">Kontakti</a> sadaļu).</b>`
        },
        {
          heading: 'Kas vada meistarklasi?',
          body: `Meistarklasi vada psiholoģes <b>Katrīna Rozenbaha</b> un <b>Elza Krasta</b>. Viņas apvieno praktiski pielietojamas psiholoģijas zināšanas ar empātisku pieeju, lai ikvienam dalībniekam būtu droši un ērti iepazīt sevi.

<b>Katrīna Rozenbaha</b> – klīniskā un veselības psiholoģe ar maģistra grādu psiholoģijā. Savā privātpraksē strādā ar EMDR un shēmu terapijas metodēm, palīdzot cilvēkiem pārvarēt trauksmi, attiecību grūtības, izdegšanu un stiprināt iekšējos resursus.

<b>Elza Krasta</b> – klīniskā un veselības psiholoģe ar maģistra grādu psiholoģijā. Pašizaugsmes platformas @atplaukt veidotāja. Savā privātpraksē strādā ar EMDR un shēmu terapijas metodēm, vada lekcijas un seminārus par apzinātību, emocionālo labbūtību un pašvērtējumu.`
        }
      ],
      keyTakeaways: [
        'Zinātniski pamatota pašizziņas pieeja un EMDR resursu stiprināšanas vingrinājumi.',
        'Mājīga, iedvesmojoša atmosfēra Coffee Society telpās, iekļauti visi materiāli un uzkodas.',
        'Paņem līdzi gatavu 2027. gada vīziju un darba lapas patstāvīgam darbam.'
      ],
      quote: 'Sāc 2027. gadu ar mieru, skaidrību un apzināti veidotu vīziju savai iekšējai izaugsmei.',
      conclusion: 'Vietu skaits grupā ir ierobežots, lai nodrošinātu drošu un personīgu gaisotni. Piesakies savlaicīgi, rakstot uz e-pastu vai veicot rezervāciju!'
    }
  },
  {
    id: '1',
    slug: 'emdr-terapija-ka-ta-palidz-traumu-gadijumos',
    title: 'EMDR terapija: Kā tā palīdz apstrādāt traumas un samazināt trauksmi?',
    author: 'Katrīna Rozenbaha',
    date: '2026. gads',
    dateISO: '2026-05-15',
    readTime: '6 min lasījums',
    category: 'EMDR & Traumu terapija',
    excerpt: 'EMDR jeb desensibilizācija un pārstrāde ar acu kustībām ir viena no zinātniski visvairāk pētītajām un efektivākajām metodēm traumu un trauksmes mazināšanā.',
    featuredImage: '/blog_emdr_therapy.jpg',
    content: {
      intro: `Daudzi cilvēki gadiem ilgi nes smagu pagātnes notikumu un hroniskas trauksmes nastu, nemaz neapzinoties, ka smadzenes ir ‘’iestrēgušas’’ traumas brīdī. EMDR (Eye Movement Desensitization and Reprocessing) jeb ackustību desensibilizācijas un atkārtotas apstrādes terapija nodrošina strukturētu pieeju, kas palīdz smadzenēm dabiski pārstrādāt traumatiskās atmiņas.`,
      sections: [
        {
          heading: 'Kā darbojas EMDR metode?',
          body: `<b>Izteikti negatīva vai traumatiska pārdzīvojuma laikā smadzenes var tikt pārslogotas, un dabiskais informācijas apstrādes process var apstāties.</b> Iestrēgušos smadzeņu procesus palīdz atbrīvot EMDR metode, kuras pamatā ir abpusēja jeb bilaterālā stimulācija. Visbiežāk stimulācija notiek ar ritmiskām acu kustībām, skaņas signāliem vai viegliem pieskārieniem, kas pārmaiņus aktivizē labo un kreiso smadzeņu puslodi. Šis process atgādina to, kas dabiski notiek smadzenēs miega ātrajā (REM) fāzē, un tas palīdz smadzenēm drošā veidā "pārstrādāt" iestrēgušās atmiņas un emocijas.
`
        },
        {
          heading: 'Kādos gadījumos EMDR ir piemērota metode?',
          body: `EMDR terapija ir piemērota cilvēkiem, kuri ir pieredzējuši dažāda veida traumatiskas pieredzes - <b>gan vienu īpaši smagu notikumu, gan ilgstoši uzkrājušās negatīvas pieredzes.</b> Traumatiskas pieredzes ir, piemēram, fiziska vai emocionāla vardarbība, apcelšanas vai mobinga pieredzes, nelaimes gadījumi, pieredzēti militāri konflikti, dabas katastrofas un tuva cilvēka pēkšņs zaudējums. EMDR terapija var būt arī noderīga cilvēkiem, kuri ilgstoši ir <b>pieredzējuši emocionālu nolaidību no vecākiem </b>, piemēram, vecāki nebija klāt, atstāja ilgstoši vienu tam nepiemērotā vecumā un nereaģēja uz bērna vajadzībām. Taču EMDR der ne tikai traumu sekām. Metodes efektivitāte ir pētīta plašam spektram grūtību, un var palīdzēt arī fobijām, izdegšanai, zemam pašvērtējumam un citiem psihoemocionālo veselību apgrūtinošiem faktoriem.

Jāņem vērā, ka traumatiska vai negatīva pieredze ne vienmēr noved pie negatīvu psiholoģisko seku vai PTSS attīstības, tādēļ arī EMDR nebūs piemērota katram. Speciālists un klients kopīgi izvērtē šīs metodes atbilstību, balstoties uz cilvēka simptomiem, individuālajām iezīmēm, situācijas kontekstu un personīgajām vēlmēm.`
        },
        {
          heading: 'Ko gaidīt no pirmās EMDR sesijas?',
body: 'Pirmajās sesijās psihologs uzmanīgi izvērtē klienta grūtības un simptomus, veido drošības sajūtu, izglīto par metodi un apzina pieejamos resursus. <b>Tikai tad, kad klients jūtas pilnībā droši un sagatavots procesam, tiek uzsākts pārstrādes darbs.</b>'        },
{
          heading: 'Kādus uzlabojumus iespējams sasniegt ar EMDR?',
          body: `<b>Reizēm cilvēki baidās no traumas pārstrādes, domājot, ka būs nepieciešams detalizēti izstāstīt katru traumatiskā notikuma detaļu</b>. Tomēr EMDR terapijā<b> nav atkārtoti jāizdzīvo vai detalizēti jāapraksta visa traumatiskā pieredze</b>, jo tās pamatā ir smadzeņu dabiskā informācijas pārstrādes sistēma un abpusēja stimulācija, un šī procesa efektivitātei nav nepieciešama notikuma detaļu atstāstīšana. Kādā Amerikas Psihologu asociācijas žurnāla rakstā (2025) psihologs Silvers dalās ar stāstu par savu klientu, Vjetnamas kara veterānu: <i>‘’Pēc trim sesijām ar abpusējo stimulāciju klients teica, ka vairs neredz atmiņu attēlus tik spilgtus, cik tie bija. Pēc piektās sesijas klients ziņoja, ka traumatiskais atmiņu attēls ir pazudis pavisam un piebilda: ‘’Ziniet, tas ir skumji, ka mans draugs nomira. Viņš bija labs cilvēks.’’ Un mēs pieredzējām, ka kara trauma, kas notika pirms 30 gadiem, tika atrisināta vienas sesijas 20 minūtēs.’’</i> Šis psihologa pieredzes stāsts ataino to, kā EMDR palīdz sāpīgām atmiņām pakāpeniski zaudēt savu emocionālo intensitāti un kļūt par pagātnes daļu, kā rezultātā tiek mazināta vai pavisam novērsta traumas ietekme. Līdz ar to dzīves kvalitāte var uzlaboties, pat daudzus gadus pēc traumatiskā notikuma.
`
        },
      ],
      keyTakeaways: [
        'EMDR ir zinātniski pierādīta un Starptautiskās Veselības Organizācijas (PVO) atzīta metode.',
        'Pārstrādes procesā izmaiņas notiek gan emocionālā, gan fizioloģiskā līmenī.',
        'Klienti bieži izjūt atvieglojumu jau pēc pirmajām mērķtiecīgajām sesijām.'
      ],
      quote: 'Smadzenēm piemīt dabiska tieksme uz dziedināšanos – EMDR terapija vienkārši atver durvis šim procesam.',
      conclusion: 'Ja jūtat, ka pagātnes pieredzes turpina ietekmēt Jūsu pašreizējo ikdienu, attiecības vai pašsajūtu, EMDR var būt drošs un efektīvs ceļš uz atbrīvošanos un atkalredzēšanos ar savu iekšējo mieru.'
    }
  },
  {
    id: '2',
    slug: 'izdegsana-un-stresa-vadiba-ikdiena',
    title: 'Atpazīsti agrīnās izdegšanas pazīmes un laicīgi atgūsti līdzsvaru',
    author: 'Katrīna Rozenbaha',
    date: '2026. gads',
    dateISO: '2026-04-02',
    readTime: '7 min lasījums',
    category: 'Stresa vadība & Izdegšana',
    excerpt: 'Izdegšana nenotiek vienā dienā. Tā ir pakāpeniska emocionāla un fiziska spēku izsīkšana. Uzziniet galvenos signālus un praksē pārbaudītus soļus, lai atlabtu.',
    featuredImage: '/blog_burnout_prevention.jpg',
    content: {
      intro: 'Vai man ir izdegšana? Bieži ar šo jautājumu savā praksē saskaras psihologi un psihoterapeiti. Mūsdienu steidzīgajā ritmā liels darba apjoms un nemitīgs spiediens bieži tiek uztverts kā norma. Tomēr, kad hronisks stress paliek nepamanīts, organisms sāk sūtīt nopietnus trauksmes signālus. Ja trauksmes signāli tiek ignorēti, var sākties izdegšanas sindroms jeb visaptverošs fizisko, garīgo un psiholoģisko spēku izsīkuma stāvoklis. Izdegšanas agrīno pazīmju atpazīšana un profilakse ir atslēga uz ilgtspējīgu dzīves un darba sparu.',
      sections: [
        {
          heading: 'Biežākie izdegšanas simptomi',
          body: `<b class="font-bold">Izdegšana nenotiek vienā dienā</b>. Tā ir lēna, gandrīz nepamanāma virzība no ikdienišķa noguruma līdz pilnīgam spēku izsīkumam. Visbiežāk mēs ignorējam pirmos brīdinājuma signālus, norakstot tos uz "smagu darba nedēļu" vai negulētu nakti, taču jāpatur prātā, ka tieši sākuma stadijā izdegšanu atpazīstot, to ir visvieglāk apturēt. Šeit ir apkopotas galvenās <b>agrīnās pazīmes</b>, kurām vērts pievērst uzmanību, iekams organisms nav pieprasījis piespiedu pārtraukumu:
            1. Grūtības koncentrēties
            2. Nespēja pabeigt iesākto
            3. Grūtības pieņemt lēmumus
            4. Neveselīgu ieradumu pieaugums (palielinās, piemēram, neveselīgu ēdienu, alkohola, tabakas izstrādājumu vai ekrānu patēriņš)
            5. Nevēlēšanās iet uz darbu
            6. Biežāka slimošana
            7. Vēlme izolēties
            8. Paātrināta sirdsdarbība
            9. Miega traucējumi, piemēram, grūtības iemigt, bieža mošanās nakts laikā vai sajūta, ka neesi izgulējies no rīta pat pēc 8-9 stundu miega.
            10. Emocionālās izmaiņas (cilvēks sāk just vairāk cinisma, biežāku nomāktību, lielāku aizkaitināmību vai izteiktāku motivācijas trūkumu).
            `
        },
        {
          heading: 'Kāpēc maza atpūta vai atvaļinājums izdegšanai nepalīdz?',
          body: `<b>Ja izdegšanu izraisa dziļāki domāšanas modeļi</b> (piemēram, perfekcionisms, nespēja atteikt citiem cilvēkiem vai bailes no kļūdām), ar divām brīvdienām nebūs līdzēts. Ir svarīgi pārskatīt savas pārliecības un personīgās robežas. Iespējams, ka pazemināta pašvērtējuma dēļ cilvēks nekad neatsaka ģimenei un darbam. Atgriežoties no atpūtas, turpinot darīt visu kā parasti - pāri saviem spēkiem, domājot tikai par citu vajadzībām -, ātri vien notiek atgriešanās pie iepriekšējā izsīkuma stāvokļa. Neliela atpūta vai divas brīvas nedēļas nepalīdzēs, jo tās nemainīs pierastos domāšanas modeļus un pārliecības. Tādēļ līdztekus atvaļinājumam vai brīvdienām jādod vieta dziļākam darbam ar jautājumiem ''Kas man liek izdegt?'' un ''Kā es varu mācīties nospraust robežas darbā un ģimenē?''. `
        },
        {
          heading: '3 praktiski soļi stresa līmeņa mazināšanai šodien',
          body: `1. <b>Ievies mazas pauzes darba dienas laikā </b> (jau 5 minūšu pastaiga vai 2 minūtes apzinātas elpošanas ik pēc stundas var radīt lielas pārmaiņas ilgtermiņā).\n2. <b>Definē skaidru robežu starp darba laiku un privāto dzīvi.</b> Pat ja amats prasa būt sasniedzamam arī ārpus normēta darba laika, ir vairākas iespējas, kā sabalansēt slodzi, piemēram,
          • deleģēt kādus pienākumus kolēģiem; 
          • nodalīt darba tālruni no personīgā; 
          • noteikt konkrētus laika logus, kuros vakaros un brīvdienās neesi pieejams darbam 
          • kontaktā ar ģimeni vai draugiem, pavadīt laiku bez viedierīcēm. \n3. <b>Praktizē līdzjūtību pret sevi</b> un atzīsti sev, ka nevienam cilvēkam nav iespējams būt perfektam. Un reizēm arī ''pietiekami labi'' ir labākais iespējamais rezultāts. Noslēgumā atgādinu Tev, ka atpūta nav pretstats produktivitātei. Tieši pretēji, atpūta palīdz atjaunot enerģiju, saglabāt fokusu un ilgtermiņā uzturēt labas darba spējas. Galu galā, to vēlamies mēs visi - justies labi un vienlaikus spēt paveikt to, kas mums ir svarīgs.`
        }
      ],
      keyTakeaways: [
        'Izdegšana ir oficiāli atzīta medicīniska diagnoze (SSK-11), nevis slinkums.',
        'Savlaicīga vēršanās pie speciālista novērš ilgstošu darbaspēju un dzīvesprieka zudumu.',
        'Darbs ar savām robežām un prioritātēm ir labākais ieguldījums ilgtermiņa veselībā.'
      ],
      quote: 'Jūs nevarat ieliet no tukšas krūzes – parūpēšanās par sevi nav greznība, bet gan nepieciešamība.',
      conclusion: 'Ja jūtat, ka paša spēkiem kļūst grūti tikt galā ar ikdienas slodzi, psihologa konsultācija var sniegt drošu telpu stresa cēloņu izpratnei un praktisku stratēģiju izstrādei.'
    }
  },
  {
    id: '3',
    slug: 'shemu-terapija-izprast-savus-uzvedibas-paternus',
    title: 'Shēmu terapija: Kāpēc mēs atkal un atkal pieļaujam tās pašas kļūdas?',
    author: 'Katrīna Rozenbaha',
    date: '2026. gads',
    dateISO: '2026-02-18',
    readTime: '5 min lasījums',
    category: 'Shēmu terapija',
    excerpt: 'Vai kādreiz esi pamanījis, ka atkal un atkal nonāc līdzīgās konfliktsituācijās vai izvēlies līdzīgus partnerus? Shēmu terapija palīdz izprast šos neapzinātos uzvedības modeļus.',
    featuredImage: '/blog_schema_therapy_and_relationship_advice.jpg',
    content: {
      intro: 'Shēmu terapija ir psihoterapijas pieeja. Tā ir īpaši izstrādāta, lai strādātu ar dziļi iesakņotiem un traucējošiem uzvedības modeļiem.',
      sections: [
        {
          heading: 'Agrīnās shēmas',
          body: `Shēmas veidojas bērnībā, kad kāda no mūsu pamatvajadzībām (drošība, mīlestība, pieņemšana, autonomija) nav tikusi pietiekami apmierināta. Pieaugušā vecumā šīs <b>shēmas var aktivizēties līdzīgās situācijās</b>, liekot reaģēt neproporcionāli emocionāli vai kaitējot pašam sev. <b>Tas notiek neapzināti</b>, tāpēc ir ļoti grūti mainīt šos modeļus. Šeit talkā nāk speciālists, kurš neapzināto palīdz padarīt apzinātu. Respektīvi, psihologs vai psihoterapeits ar shēmu terapijas metodēm un izglītojošu informāciju ļauj klientam pamanīt un izprast savas reakcijas un uzvedības modeļus. 
            
            Kā tas notiek? Lai vizualizētu pārmaiņu procesu, iedomāsimies vīrieti, kurš atkārtoti atgrūž cilvēkus, kuri vēlas ar viņu veidot emocionāli tuvas attiecības. Viņam pašam var šķist, ka problēma galvenokārt ir citos cilvēkos. Speciālists palīdz <b>pamanīt situācijas, kurās šāda reakcija parādās, izpētīt, kas tajos brīžos notiek</b> ar viņa domām, emocijām un uzvedību. Tā vīrietis var pakāpeniski saprast, kādi dziļāki modeļi jeb shēmas to varētu ietekmēt. Piemēram, šāda reakcija var būt saistīta ar defektivitātes/kauna shēmu (vienkāršoti izsakoties - uzskats, ka es esmu nepareizs un neviens mani nemīlēs) vai kādu no aizsardzības režīmiem. Šī iztēlotā vīrieša gadījumā, aizsardzības režīms varētu likt atsvešināties, ja kāds piekļūst par tuvu un tas ļauj izvairīties no emocionālas ievainojamības. Izpētot savas dažādās daļas - tās, kuras palīdz un tās, kuras traucē - cilvēks var veidot jaunus veidus, kā reaģēt uz citiem cilvēkiem un sadzīvot ar sarežģītām emocijām. Līdz ar to dzīve kļūst mazliet saprotamāka un vieglāka.`
        },
        {
          heading: 'Biežāk sastopamās shēmas',
          body: 'Pie dažām no visbiežāk sastopamajām shēmām pieder Pamestība / Nestabilitāte (bailes, ka mīļotais cilvēks vai citi svarīgi cilvēki pametīs), Emocionālā deprivācija (sajūta, ka neviens cilvēku pa īstam nesaprot un viņa emocionālās vajadzības citi nespēs saprast) un Perfekcionisms (nepārtraukta spriedze un tiekšanās būt ideālam). Taču šīs ir tikai trīs no kopumā astoņpadsmit shēmām, kuras empīriski pierādījis ir Jangs un viņa kolēģi (2014).'
        },
        {
          heading: 'Kādu rezultātu sagaidīt no shēmu terapijas?',
          body: `Šīs terapijas laikā klients <b>mācās iepazīt savas shēmas un uzvedības modeļus, dziedināt ievainoto daļu un stiprināt savu veselīgo pusi (shēmu terapijā to sauc par "veselīgo pieaugušo").</b> Rezultātā cilvēks iemācās parūpēties par savām vajadzībām daudz labāk un pārtraukt modeļus, kuri ir neveselīgi un traucējoši.`
        }
      ],
      keyTakeaways: [
        'Shēmas nav Jūsu vaina – tās bija adaptīvs veids, kā bērnībā tikt galā ar grūtībām.',
        'Atpazīšana ir pirmais solis uz apzinātu izvēļu izdarīšanu pieaugušo dzīvē.',
        'Shēmu terapija sniedz dziļas, paliekošas izmaiņas personības un attiecību līmenī.'
      ],
      quote: 'Apzinoties savas shēmas, mēs pārejam no automātiskas reakcijas uz apzinātu brīvību izvēlēties.',
      conclusion: 'Shēmu terapija piedāvā struktūru un atbalstu, lai atbrīvotos no veciem domāšanas slazdiem un veidotu pilnvērtīgas, piepildītas attiecības ar sevi un citiem.'
    }
  }
];
