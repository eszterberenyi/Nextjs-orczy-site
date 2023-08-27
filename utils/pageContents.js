import openingImg from '../public/landing/nyito.jpg'
import aboutUsImg from '../public/landing/bemutatkozo.jpg'
import berthaLogo from '../public/landing/bertha_logo_BLACKonWHITE-01.svg'
import theySayImg from '../public/landing/azt_beszelik.svg'
import placeholder from '../public/image_placeholder.jpg'
import szonja from '../public/about/aboutUs/bemutatkozo deák.jpg'
import balla from '../public/about/aboutUs/bemutatkozo balla.jpg'
import csilla from '../public/about/aboutUs/csilla_bemutatkozo.jpg'
import dotya from 'public/about/aboutUs/Dotya.jpg'
import anna from '../public/about/aboutUs/SeresAnna.jpg'
import mate from '../public/about/aboutUs/bemutatkozo máté.jpg'
import siteri from '../public/about/aboutUs/bemutatkozo siteri.jpg'
import matyi from '../public/about/aboutUs/Matyi.jpg'
import pkLogo from '../public/about/aboutUs/pkk_logo_0.png'
import jozsefvarosLogo from '../public/about/aboutUs/jozsefvaros_logo.png'
import eventCover from '../public/exhibition/OSZ_esemeny_cover_23_08_182.jpg'
import communityFromNeighborhood from '../public/szomszedsagbol_kozosseget.jpg'
import p1 from '../public/neighborhood/aboutPics/DSC_0072.jpg'
import p2 from '../public/neighborhood/aboutPics/DSC_0122.jpg'
import p3 from '../public/neighborhood/aboutPics/DSC_0211.jpg'
import p4 from '../public/neighborhood/aboutPics/IMG_6409.jpg'
import p5 from '../public/neighborhood/aboutPics/IMG_20211114_125756.jpg'
import p6 from '../public/neighborhood/aboutPics/m.jpg'
import p7 from '../public/neighborhood/aboutPics/majjalis.jpg'
import p8 from '../public/neighborhood/aboutPics/P1140610.jpg'
import p9 from '../public/neighborhood/aboutPics/utcazene.jpg'

export const imagePlaceholder = {
    placeholder: placeholder
}

export const homeContent = {
    aboutUs: 'Az Orczy Szomszédok a Gólya Szövetkezet és a Kazán Közösségi Ház Szomszédsági programjának a ház környezetéről szóló, helytörténeti projektje. Az itt élők történetein keresztül szeretnénk megismerni a véleményüket és tapasztalataikat a környékről, megérteni, hogy különböző társadalmi folyamatok hogyan alakítják a mindennapjaikat. Fontosnak tartjuk, hogy a kerületrészről azok az emberek beszéljenek akiknek a mindennapi tapasztalata ide kötődik, ezzel árnyalva az Orczy-negyed köztudatban élő rossz hírét. A projekt kiindulópontja egy hetvenkét interjúból álló kutatás, amit részvételi művészeti és közösségépítő programok, és egy kiállítás követ majd.',
    titles: {
        about: 'RÓLUNK',
        current: 'AKTUÁLIS',
        contact: 'ELÉRHETŐSÉG'
    },
    images: {
        opening: openingImg,
        aboutUs: aboutUsImg,
        bertha: berthaLogo,
        theySay: theySayImg,
    },
    email: 'orczy.szomszedsagi@gmail.com',
    buttonImages: [
        {
            url: '/landing/buttonImages/aktualis_placeholder.jpg',
            title: 'KIÁLLÍTÁS',
            width: '100%',
            link: '/exhibition',
            target: '_self'
        },
        {
            url: '/landing/buttonImages/aktualis_placeholder.jpg',
            title: 'MEGNYITÓ',
            width: '100%',
            link: 'https://www.facebook.com/events/104168436118807',
            target: '_blank'
        },

    ]
}

export const enContent = {
    aboutUs: 'Orczy Neighborhood Project is a neighborhood project using creative tools to build community, fight gentrification and research the local history of a stigmatized area in Budapest, Hungary. The project expands the work of the Community From Neighborhood Program, run by Kazán Community Center, a political and social space owned and used by more than ten different organizations in the same location. The Orczy Neighborhood Project was initiated by Csilla Hajdu, a community developer in the Community From Neighborhood Program, and Dorottya Poór, a visual artist and art educator. They work with a group of community developers, social workers, sociologists, cultural workers, and artists.',
    aboutNeighborhoodProject: 'Coming soon!',
    titles: {
        about: 'ABOUT US',
        neighborhood: 'COMMUNITY FROM NEIGHBORHOOD',
    },
    images: {
        aboutUs: aboutUsImg,
        neighborhood: communityFromNeighborhood,
    }
}

export const aboutContent = {
    titles: {
        about: 'RÓLUNK',
        history: 'HELYTÖRTÉNETI KUTATÁS'
    },
    aboutUs: {
        description: 'Az Orczy Szomszédok a Gólya Közösségi Ház szomszédsági programjának a gólya környezetéről szóló projektje. Célunk, hogy megismerjük a helyi közösségeket, egyéni történeteket. A történeteken keresztül szeretnénk megismerni az itt élőket, mindennapjaikat, véleményüket és tapasztalataikat a környékről. Szeretnénk megmutatni, hogy a környék rossz hírével ellentétben mennyi pozitív egyéni, közösségi dolog történik itt, ami nem biztos, hogy egy kis kutakodás nélkül látható bárki számára. Fontosnak tartjuk, hogy azok beszéljenek az Orczy-negyedről, akik itt élnek, dolgoznak, ide kötődnek. \n' +
            '\n' +
            'Azért, hogy ezt meg tudjuk mutatni, nyáron 71 interjút készítettünk itt lakókkal. Azóta is visszatérünk beszélgetni, részvételi művészeti eszközökkel és közösségépítő programokkal gyűjtünk további információkat és mutatjuk meg az itt lakóknak, mit tudtunk meg eddig. \n' +
            '\n' +
            'Az Orczy Szomszédok projekt a Bertha Foundation támogatásával valósul meg.\n' +
            '\n' +
            'közreműködők:\n' +
            'Balla Edit, Deák Szonja, Drótos Dominika, Hajdu Csilla, Horváth Mátyás, Jelinek Csaba, Őze Eszter, Máté Dániel, Poór Dorottya, Lődi Virág\n' +
            '\n' +
            'kommunikáció: Seress Anna\n' +
            'web: Berényi Eszter\n' +
            'fotók: Siteri Nóra',
        team: [
            {
                text: 'Deák Szonja vagyok, jelenleg kortárs művészetelméleti és kurátori mesterképzésen tanulok, így csatlakoztam az Orczy Projekt kiállítási csapatba. Alapképzésen politológiát tanultam, és megvolt emiatt az alap érdeklődésem a helyi intézmények és különböző társadalmi csoportok múltjának, jelenének reprezentációjával kapcsolatban, ami ebben a kiállításban szerepet kap. Pécsen születtem, és kilenc éves koromtól élek a (Budapest) kilencedik kerületben, de közeli kapcsolatom volt a nyolcadik kerülettel is a körzeti sulis barátaimon keresztül, akik az Orczy tér környékén laktak. Izgatott vagyok, hogy részese lehetek ennek projektnek nem csak azért, mert az első szakmai projektem, hanem, mert azzal a városrésszel foglalkozhatok, ami a életterem volt az elmúlt 10-15 évben, és az itt bekövetkezett változások személyesen is meghatározták a városhoz, az emberekhez való viszonyomat.',
                img: szonja,
            },
            {
                text: 'Balla Edit vagyok, segítő szakember. Az Orczy szomszédsági munkában közösségfejlesztő gyakornokként veszek részt. Azon dolgozom, hogy az emberek saját erőforrásaikat mozgósítva tegyék azt, ami az ő saját illetve közösségeik életét jobbítja. Szociológiai, néprajzi, egyéni fejlesztői és szociális munkához kapcsolódó munkáim során olyan feladatokban szeretek a legjobban elmélyülni, ahol az embereket saját környezetükben kérdezhetem arról, ami őket érdekli, és ami nekik fontos. Itt is ezt teszem.\n' +
                    'Az Orczy-negyed utcáit járva, lakóit kérdezve, levegőjét szagolva olyan érzésem támad, hogy ez itt a világ kicsiben. Éltem falun, kisvárosban, nagyvárosban, Budapesten és külföldön, és itt, a 8. kerületnek ebben a szeletében ugyanilyen sokféle emberi kapcsolódással találkozom, mint szerte a világban. Különösen jó példáját látni itt annak, hogy fővárosi viszonylatban hogy lehet közvetlen emberi kapcsolatokkal, otthonosan, emellett nagyon szabadon élni. Alig várom, hogy szóba elegyedhessek valakivel vagy egyszerűen megszólítsanak – mint falun.\n',
                img: balla,
            },
            {
                text: 'Hajdu Csilla vagyok, nyolcadik kerületi lakos. Szociológiát és közösségszervezést tanultam, a Gólya Szomszédságból Közösséget Programjában három éve veszek részt, az Orczy Szomszédok programban pedig mint közösségi koordinátor dolgozom. Emellett az Utcáról Lakásba Egyesületnél női csoportot vezetek és ukrajnából menekültekkel foglalkozom.\n' +
                    'Körülbelül hét éve költöztem az Orczy-negyed Diószegi Sámuel utcájába.\n' +
                    'Tipikus dzsentrifikációs sztori az enyém, a szerencsésebb fajtából. Szüleim a rendszerváltás után megvásárolták az ötödik kerületi tanácsi lakást, majd amikor az a kerületrész a befektetők paradicsomává vált, és a lakásunk árából két másikat lehetett venni külsőbb kerületben, ide költöztem. Ez azt jelentette, hogy a társadalmi problémák elegáns éttermekkel elfedett valóságából olyan helyre költöztem, ahol a rendszerszintű igazságtalanságok kárvallottjainak problémái napi szinten szembejönnek és reflektálásra késztetnek.\n' +
                    'Az Orczy Szomszédok programra egy hosszabb távú közösségszervezés állomásaként tekintek, aminek célja, hogy a kerületrészben élők közötti szolidáris aktusok megerősödjenek, a problémáinkról közösen gondolkodjunk. Fontosnak tartom, hogy az egyéni életutak során személyesként megélt helyzetekre (mint például: lakhatás, munka, szabadidő) egy tágabb keretrendszerben tekintsünk rá és azon keresztül értelmezzük a tapasztalatainkat. Meglátásom szerint ez az ami elvezethet ahhoz, hogy hosszú távon képesek legyünk közösen tenni azért, hogy a világunk egy kicsit boldogabb hely legyen.\n',
                img: csilla,
            },
            {
                text: 'Horváth Mátyás vagyok, a Képzőn járok művészetelmélet mesterszakra. Így kerültem be az Orczy Szomszédok kiállítási csapatba is, mint kurátor. Szakmai érdeklődésem homlokterében a művészet és a politika kapcsolata áll, elsősorban a részvételi gyakorlatok viszonyában. Ez a rész fogott meg a kiállítás kapcsán is, ahogyan egy városrész, egy negyed a részvételiség (interjúk és workshopok) mentén képekbe, szavakba és formákba önti saját történeteit, tapasztalatait. Tíz éves koromtól lakok a VIII. kerületben, noha azóta már sokat költöztem, csak igen kevés ideig éltem a kerületen kívül. Az itt töltött évek alatt saját magam is megtapasztalhattam a kerület és a különböző negyedeinek átalakulását, átalakítását.',
                img: matyi,
            },
            {
                text: 'Máté Dániel vagyok, jelenleg a Képző Doktori Iskolás hallgatója. Korábban ugyanebben az intézményben szereztem tervezőgrafikus master diplomát.Alkotói és kutatói gyakorlatomban az egyén is ideologia kapcsolata a lakhatás, a lakótér és tárgykultúrájának viszonyában foglalkoztat. Bár vidékről származom, a Budapesten eltöltött lassan 10 év jelentős részében a 8-ban éltem, így sok személyes élmény is fűz a kerülethez. A projektben a kiállítás tervezésével és a vizuális megjelnéssel foglalkozom.',
                img: mate,
            },
            {
                text: 'Poór Dorottya vagyok, képzőművész. Festő szakra jártam a Képzőművészeti Egyetemre, de a jelenlegi gyakorlatomban leginkább részvételi, oktatási és interdiszciplináris művészeti projektek a meghatározóak. Emellett néha grafikusként és illusztrátorként dolgozom. Az Orczy Szomszédok egyik koordinátora vagyok és a workshopokért, a részvételi művészeti folyamatért vagyok felelős. Tíz éve költöztem a fővárosba, ezalatt számos albérletben laktam Budapest különböző pontjain, mivel nincs saját ingatlanom. A nyolcadik kerületben legutóbb a Teleki téren, azelőtt a Kun utcában, a Harminckettesek terénél, az Üllői úton a Corvin negyednél, és rövid ideig a Karácsony Sándor utcában is laktam. Ez az utca most is meghatározó nekem, mert itt tartom a felnőtteknek szóló rajzszakkörömet és itt van a Pneuma Szöv.-Mókusok művész csoport bázisa, akikkel gyakran együttműködöm.',
                img: dotya,
            },
            {
                text: 'Seress Anna vagyok, kulturális munkásként dolgozom szabadúszóként és az FKSE titkáraként, valamint szeptembertől kezdem doktori tanulmányaimat ahol Angyalföld változó munkásidetitásait fogom vizsgálni. Fontosnak tartom a város és a társadalom keresztmetszeteinek vizsgálatát, és a kultúra közösségi erejét is, ezért örülök, hogy kommunikációs munkatársként részt vehetek az Orczy Szomszédok projektben.',
                img: anna,
            },
            {
                text: 'Siteri Nóra vagyok, fotós-videós. Jelenleg a Moholy-Nagy Művészeti Egyetem média design szakán tanulok. Az Orczy Szomszédok projekt vizuális dokumentálását végzem, az eseményeken és workshopokon én szoktam kamerázni. Annak ellenére, hogy a 8. kerületben sosem éltem, kifejezetten gyakran járok arra, nagyon közel áll hozzám. Örülök, hogy az Orczy Szomszédokon keresztül megismerhetem és megörökíthetem a résztvevők történeteit, a közös alkotásokat, és közösségek szerveződését.',
                img: siteri,

            },
            {
                text: '',
                img: '',

            },
            {
                text: '',
                img: '',
            },
            {
                text: '',
                img: '',
            },
        ],
        partners: {
            text: 'EGYÜTTMŰKÖDŐ SZERVEZETEK:',
            partnerOne: {
                name: 'Periféria központ',
                logo: pkLogo,
            },
            partnerTwo: {
                name: 'Józsefvárosi Múzeum',
                logo: jozsefvarosLogo,
            }
        },
    },
    aboutResearch: '',
}

export const exhibitionContent = {
    img: eventCover,
}

export const workshopsContent = {
    buttonImages: [
        {
            url: '/landing/buttonImages/aktualis_placeholder.jpg',
            title: 'KIÁLLÍTÁS',
            width: '100%',
            link: '/exhibition',
            target: '_self'
        },
    ]
}

export const mediaContent = {
    buttonImages: [
        {
            url: '/landing/buttonImages/aktualis_placeholder.jpg',
            title: 'Kiállítás',
            width: '100%',
            link: '/exhibition',
            target: '_self'
        },
    ]
}

export const neighborhoodContent = {
    mainText: '2019-ben kezdtük meg munkánkat az Orczy út 46-48. szám alatti épületben, a Gólya Szövetkezetből kiindulva. Az épület azóta a Kazán Közösségi Ház nevet kapta, amiben jelenleg 11 szervezet dolgozik.\n' +
        'Indulásunkkor az akkori alapítókkal együtt készítettünk egy 5 évre szóló stratégiai tervet a közösen megfogalmazott céljaink alapján. A szomszédsági programban a közösségi és szociális munka eszközeivel dolgozunk, amit kiegészít a Gólya Szövetkezet hosszú múltra visszatekintő sokszínű tudástára, valamint az itt dolgozók eltérő tapasztalatai különféle területeken. Munkánk célja, hogy a Kazán egy helyben beágyazott közösségi házként működjön, annak minden tulajdonságával és funkciójával együtt.\n' +
        '\n' +
        'A közösségi házzá válás azt jelenti számunkra, hogy a Kazánban szervezett programokon, jelenlévő és folyamatosan fejlesztett szolgáltatásainkon, különféle projektjeinken és a házban dolgozó szervezetek tevékenységein keresztül:\n' +
        '\n' +
        '- helyi társadalmi problémákra és szükségletekre reagálunk\n' +
        '- különböző életkorú, érdeklődésű, társadalmi helyzetű és hovatartozású embereket kötünk össze\n' +
        '- párbeszédet teremtünk eltérő nézetű és érdeklődésű emberek között\n' +
        '- a szomszédságunkban élők otthonosan használhatják tereinket és alakíthatják azokat\n' +
        '- programjaink megszólítsáják a helyi embereket, az ő szükségleteikhez alakítjuk őket\n' +
        '- helyi problémákra, ügyekre segítünk szerveződni és megoldásokat találni\n' +
        '- és együttműködünk helyi csoportokkal, szervezetekkel és intézményekkel\n' +
        '\n' +
        'Mindezt rugalmasan, a környezetükhöz alakítva és alkalmazkodva valósítjuk meg. \n' +
        'Ennek érdekében az alábbi négy területen végezzük munkánkat:\n' +
        '\n' +
        'A Kazán Házban dolgozó szervezetekkel való együttműködés és tevékenységeik támogatása, közös projektek létrehozása\n' +
        'Az épület fizikai adottságainak, kinézetének és szolgáltatásainak fejlesztése\n' +
        'Kapcsolatépítés és közös projektek létrehozása a szomszédsággal\n' +
        'Kapcsolatépítés és együttműködés helyi és kerületen kívüli csoportokkal, szervezetekkel és intézményekkel\n' +
        '\n' +
        'A szomszédsági indulása óta sok változáson ment keresztül, az alapító tagok közül ketten dolgozunk már csak a szomszédságiban, azonban a csapatunk időről időre bővül és alakul. Jelenleg (2023.08.) hatan vagyunk, azonban sokan kapcsolódnak a munkánkhoz lazábban, programok és projektek mentén a Gólya és a Kazán különféle területeiről, illetve a házon kívülről. Jelenlegi célunk, hogy tovább bővüljön csapatunk.\n' +
        '\n' +
        'Kéthetente tartunk megbeszélést, amikor a különféle futó tevékenységeinket nézzük át és tervezünk, a döntéseinket pedig főleg ezeken a találkozókon, közösen hozzuk (de egyébként is együtt dolgozunk a mindennapokban különféle területeken). Minden évben tartunk egy hosszabb stratégiai megbeszélést, ahol a következő évre tervezzük meg tevékenységeinket és vállaljuk el feladatainkat azokkal kapcsolatban. Munkánkat az éves és az 5 éves stratégiai terveink alapján szervezzük. A csoportunk és tevékenységeink alakulása gyakran új kérdések elé állít minket belső szervezeti működésükkel kapcsolatban, amikkel szintén főleg ezeken a találkozókon foglalkozunk.\n' +
        '\n' +
        'Fontos alap a stratégiai tervünk, mégis rugalmasan tudunk reagálni a környezetünkben felmerülő dolgokra és változásokra. Előfordul, hogy elindítunk egy projektet, amiről azt gondoljuk, a legmegfelelőbb az adott célunk eléréséhez, de közben kiderül, hogy nem úgy alakul, ahogy gondoltuk és megváltoztatjuk vagy újat indítunk helyette. (Pl. a 2022-ben fiatal felnőttek számára indított munka-klubunk időközben átalakult ifjúsági klubbá). Célunk továbbra is megőrizni ezt a rugalmasságra való képességet, ugyanakkor a már létező és futó tevékenységeinket megszilárdítani és azokra építkezni.\n',
    mainImage: communityFromNeighborhood,
    mainTitle: 'SZOMSZÉDSÁGBÓL KÖZÖSSÉGET PROGRAM',
    about : {
        title: 'TEVÉKENYSÉGÜNKRŐL',
        pics: [
            {
                img: p1,
                title: 'szomszédsági esemény kép',
            },
            {
                img: p2,
                title: 'szomszédsági esemény kép',
            },
            {
                img: p3,
                title: 'szomszédsági esemény kép',
            },
            {
                img: p4,
                title: 'szomszédsági esemény kép',
            },
            {
                img: p5,
                title: 'szomszédsági esemény kép',
            },
            {
                img: p6,
                title: 'szomszédsági esemény kép',
                rows: 2,
                cols: 2,
            },
            {
                img: p7,
                title: 'szomszédsági esemény kép',
            },
            {
                img: p8,
                title: 'szomszédsági esemény kép',
            },
            {
                img: p9,
                title: 'szomszédsági esemény kép',
            },
        ],
        text: 'A szomszédsági egyik tevékenysége az épületbe és az épület környezetébe szervezni programokat, amik az itt élők igényeire, szükségleteire épülnek vagy reagálnak. Ezen kívül ez az egyik eszközünk arra, hogy ismerkedjünk az itt élőkkel és ők is megismerhessenek minket, be tudjuk vonni őket egyéb projektjeinkbe.\n' +
            '2019-es indulásunk után a Covid járvány és a hozzá kapcsolódó szabályozások miatt majd 2 évig nem tudtunk igazán programszervezéssel foglalkozni, hiszen nem volt biztonságos. 2020-ban szerveztünk egy Utcazene felvonulást, a Gólya Futár cargo biciklijén VIII. kerületi zenészeket fuvaroztunk az Orczy és a Magdolna negyed különféle részeire, így az otthon lévők az ablakaikból, erkélyeikről hallhatták, a résztvevők pedig szabadtéren, biztonságosan tudtak találkozni barátaikkal, ismerőseikkel. Ezzel célunk az is volt, hogy helyi zenészeket támogassunk, hiszen a járvány miatt ők is elestek fő megélhetési forrásuktól. A programnak nagy sikere volt a kerületiek körében.\n' +
            'A covid járvány utolsó hulláma után elkezdtünk rendszeres programokat szervezni. Ebből az egyik legnépszerűbb, legnagyobb szabású a már 2. alkalommal megrendezett őszi Főzőversenyünk. Ezeken az alkalmakon gázfőzőn, bográcsban a teraszon főznek csapatok szezonális ételt és a végén egy független zsűri dönti el, hogy ki viszi haza a vándorkupát. Ilyenkor családi és gyerekprogramokkal is készülünk. A főzőversenyen kerületi lakók, családok, baráti társaságok és szervezetek, csoportok vesznek részt minden évben. Nagy öröm számunkra, hogy ezen a programon minden alkalommal megvalósul a sokszínűség, otthontalan emberek, menekültek, értelmiségiek, romák és nem romák, fiatalok és idősek egyszerre vesznek részt a különféle tevékenységekben és töltenek időt egymással.\n' +
            'Ezen kívül egyre szorosabban dolgozunk együtt a Gólya Szövetkezet rendezvény, koncertszervező munkacsoportjával és szervezünk olyan programokat, amik helyi családok számára érdekesek, fontosak lehetnek, mint a legutóbbi farsang, majális és karaoke-party.\n',
    },
    buttonImages: [
        {
            url: 'landing/nyito.jpg',
            title: 'ÖNKÉNTESSÉG',
            width: '100%',
            link: '/neighborhood/volunteer',
            target: '_self'
        },
        {
            url: 'landing/nyito.jpg',
            title: 'KERT PROJEKT',
            width: '100%',
            link: '/neighborhood/garden',
            target: '_self'
        },
        {
            url: 'landing/nyito.jpg',
            title: 'TAJ PROJEKT',
            width: '100%',
            link: '/neighborhood/taj',
            target: '_self'
        },
        {
            url: 'landing/nyito.jpg',
            title: 'EDUKÁCIÓ',
            width: '100%',
            link: '/neighborhood/education',
            target: '_self'
        },
        {
            url: 'landing/nyito.jpg',
            title: 'IFJÚSÁGI KLUB',
            width: '100%',
            link: '/neighborhood/youthclub',
            target: '_self'
        },
    ],
    volunteer: {
        title: 'ÖNKÉNTES MUNKA, TAPASZTALATCSERE ÉS TÁMOGATÁSI LEHETŐSÉGEK',
        email: 'trk.zsofia@gmail.com',
        phone: '+ 36 20 997 8986\n'

    }


}
