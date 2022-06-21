! function r(s, a, l) {
    function T(t, e) {
        if (!a[t]) {
            if (!s[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (c) return c(t, !0);
                var o = new Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var n = a[t] = {
                exports: {}
            };
            s[t][0].call(n.exports, function(e) {
                return T(s[t][1][e] || e)
            }, n, n.exports, r, s, a, l)
        }
        return a[t].exports
    }
    for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) T(l[e]);
    return T
}({
    1: [function(e, t, i) {
        var u;
        ! function() {
            if (typeof t !== "undefined" && t.exports) {
                return function(e) {
                    t.exports = e()
                }
            } else if (typeof define === "function" && define.amd) {
                return define
            } else if (typeof window !== "undefined") {
                return function(e) {
                    window.MobileDetect = e()
                }
            } else {
                throw new Error("unknown environment")
            }
        }()(function() {
            "use strict";
            var a, l = {
                    mobileDetectRules: {
                        phones: { 
                            iPhone: "\\biPhone\\b|\\biPod\\b",
                            BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                            HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                            Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                            Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                            Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                            Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                            LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                            Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                            Asus: "Asus.*Galaxy|PadFone.*Mobile",
                            NokiaLumia: "Lumia [0-9]{3,4}",
                            Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                            Palm: "PalmSource|Palm",
                            Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                            Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                            Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                            Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                            iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                            SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                            Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                            Alcatel: "Alcatel",
                            Nintendo: "Nintendo (3DS|Switch)",
                            Amoi: "Amoi",
                            INQ: "INQ",
                            OnePlus: "ONEPLUS",
                            GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                        },
                        tablets: {
                            iPad: "iPad|iPad.*Mobile",
                            NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                            GoogleTablet: "Android.*Pixel C",
                            SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
                            Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                            SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                            HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                            AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                            BlackBerryTablet: "PlayBook|RIM Tablet",
                            HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                            MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                            NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                            AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                            ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                            LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                            FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                            PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                            LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
                            DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                            YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                            MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                            ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                            IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                            IRUTablet: "M702pro",
                            MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                            EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                            AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                            ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                            AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                            NokiaLumiaTablet: "Lumia 2520",
                            SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                            PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                            CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                            CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                            MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                            MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                            SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                            RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                            FlyTablet: "IQ310|Fly Vision",
                            bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                            HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                            NecTablet: "\\bN-06D|\\bN-08D",
                            PantechTablet: "Pantech.*P4100",
                            BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                            VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                            ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                            PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                            NabiTablet: "Android.*\\bNabi",
                            KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                            DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                            TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                            PlaystationTablet: "Playstation.*(Portable|Vita)",
                            TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                            PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                            AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                            DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                            GalapadTablet: "Android.*\\bG1\\b(?!\\))",
                            MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                            KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                            AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                            PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                            YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                            ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                            GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                            PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                            OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                            HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                            DPSTablet: "DPS Dream 9|DPS Dual 7",
                            VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                            CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                            MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                            ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                            GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                            ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                            VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                            ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                            StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                            VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                            EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                            RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                            iMobileTablet: "i-mobile i-note",
                            TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                            AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                            AMPETablet: "Android.* A78 ",
                            SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                            TecnoTablet: "TECNO P9|TECNO DP8D",
                            JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                            iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                            FX2Tablet: "FX2 PAD7|FX2 PAD10",
                            XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                            ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                            VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                            OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                            CaptivaTablet: "CAPTIVA PAD",
                            IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                            TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                            OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                            JaytechTablet: "TPC-PA762",
                            BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                            DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                            EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                            LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                            AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                            MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                            CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                            WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                            MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                            MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                            NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                            NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                            LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                            UbislateTablet: "UbiSlate[\\s]?7C",
                            PocketBookTablet: "Pocketbook",
                            KocasoTablet: "\\b(TB-1207)\\b",
                            HisenseTablet: "\\b(F5281|E2371)\\b",
                            Hudl: "Hudl HT7S3|Hudl 2",
                            TelstraTablet: "T-Hub2",
                            GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                        },
                        oss: {
                            AndroidOS: "Android",
                            BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                            PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                            SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                            WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                            WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                            iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                            iPadOS: "CPU OS 13",
                            MeeGoOS: "MeeGo",
                            MaemoOS: "Maemo",
                            JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                            webOS: "webOS|hpwOS",
                            badaOS: "\\bBada\\b",
                            BREWOS: "BREW"
                        },
                        uas: {
                            Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                            Dolfin: "\\bDolfin\\b",
                            Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                            Skyfire: "Skyfire",
                            Edge: "Mobile Safari/[.0-9]* Edge",
                            IE: "IEMobile|MSIEMobile",
                            Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                            Bolt: "bolt",
                            TeaShark: "teashark",
                            Blazer: "Blazer",
                            Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                            WeChat: "\\bMicroMessenger\\b",
                            UCBrowser: "UC.*Browser|UCWEB",
                            baiduboxapp: "baiduboxapp",
                            baidubrowser: "baidubrowser",
                            DiigoBrowser: "DiigoBrowser",
                            Mercury: "\\bMercury\\b",
                            ObigoBrowser: "Obigo",
                            NetFront: "NF-Browser",
                            GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                            PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                        },
                        props: {
                            Mobile: "Mobile/[VER]",
                            Build: "Build/[VER]",
                            Version: "Version/[VER]",
                            VendorID: "VendorID/[VER]",
                            iPad: "iPad.*CPU[a-z ]+[VER]",
                            iPhone: "iPhone.*CPU[a-z ]+[VER]",
                            iPod: "iPod.*CPU[a-z ]+[VER]",
                            Kindle: "Kindle/[VER]",
                            Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                            Coast: ["Coast/[VER]"],
                            Dolfin: "Dolfin/[VER]",
                            Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                            Fennec: "Fennec/[VER]",
                            Edge: "Edge/[VER]",
                            IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                            NetFront: "NetFront/[VER]",
                            NokiaBrowser: "NokiaBrowser/[VER]",
                            Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                            "Opera Mini": "Opera Mini/[VER]",
                            "Opera Mobi": "Version/[VER]",
                            UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                            MQQBrowser: "MQQBrowser/[VER]",
                            MicroMessenger: "MicroMessenger/[VER]",
                            baiduboxapp: "baiduboxapp/[VER]",
                            baidubrowser: "baidubrowser/[VER]",
                            SamsungBrowser: "SamsungBrowser/[VER]",
                            Iron: "Iron/[VER]",
                            Safari: ["Version/[VER]", "Safari/[VER]"],
                            Skyfire: "Skyfire/[VER]",
                            Tizen: "Tizen/[VER]",
                            Webkit: "webkit[ /][VER]",
                            PaleMoon: "PaleMoon/[VER]",
                            Gecko: "Gecko/[VER]",
                            Trident: "Trident/[VER]",
                            Presto: "Presto/[VER]",
                            Goanna: "Goanna/[VER]",
                            iOS: " \\bi?OS\\b [VER][ ;]{1}",
                            Android: "Android [VER]",
                            BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                            BREW: "BREW [VER]",
                            Java: "Java/[VER]",
                            "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                            "Windows Phone": "Windows Phone [VER]",
                            "Windows CE": "Windows CE/[VER]",
                            "Windows NT": "Windows NT [VER]",
                            Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                            webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                        },
                        utils: {
                            Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
                            MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                            DesktopMode: "WPDesktop",
                            TV: "SonyDTV|HbbTV",
                            WebKit: "(webkit)[ /]([\\w.]+)",
                            Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                            Watch: "SM-V700"
                        }
                    },
                    detectMobileBrowsers: {
                        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        tabletPattern: /android|ipad|playbook|silk/i
                    }
                },
                T = Object.prototype.hasOwnProperty;

            function t(e, t) {
                return null != e && null != t && e.toLowerCase() === t.toLowerCase()
            }

            function i(e, t) {
                var i, o, n = e.length;
                if (!n || !t) return !1;
                for (i = t.toLowerCase(), o = 0; o < n; ++o)
                    if (i === e[o].toLowerCase()) return !0;
                return !1
            }

            function c(e) {
                for (var t in e) T.call(e, t) && (e[t] = new RegExp(e[t], "i"))
            }

            function s(e, t) {
                this.ua = function(e) {
                    return (e || "").substr(0, 500)
                }(e), this._cache = {}, this.maxPhoneWidth = t || 600
            }
            return l.FALLBACK_PHONE = "UnknownPhone", l.FALLBACK_TABLET = "UnknownTablet", l.FALLBACK_MOBILE = "UnknownMobile", a = "isArray" in Array ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                function() {
                    var e, t, i, o, n, r, s = l.mobileDetectRules;
                    for (e in s.props)
                        if (T.call(s.props, e)) {
                            for (t = s.props[e], a(t) || (t = [t]), n = t.length, o = 0; o < n; ++o) 0 <= (r = (i = t[o]).indexOf("[VER]")) && (i = i.substring(0, r) + "([\\w._\\+]+)" + i.substring(r + 5)), t[o] = new RegExp(i, "i");
                            s.props[e] = t
                        } c(s.oss), c(s.phones), c(s.tablets), c(s.uas), c(s.utils), s.oss0 = {
                        WindowsPhoneOS: s.oss.WindowsPhoneOS,
                        WindowsMobileOS: s.oss.WindowsMobileOS
                    }
                }(), l.findMatch = function(e, t) {
                    for (var i in e)
                        if (T.call(e, i) && e[i].test(t)) return i;
                    return null
                }, l.findMatches = function(e, t) {
                    var i = [];
                    for (var o in e) T.call(e, o) && e[o].test(t) && i.push(o);
                    return i
                }, l.getVersionStr = function(e, t) {
                    var i, o, n, r, s = l.mobileDetectRules.props;
                    if (T.call(s, e))
                        for (n = (i = s[e]).length, o = 0; o < n; ++o)
                            if (null !== (r = i[o].exec(t))) return r[1];
                    return null
                }, l.getVersion = function(e, t) {
                    var i = l.getVersionStr(e, t);
                    return i ? l.prepareVersionNo(i) : NaN
                }, l.prepareVersionNo = function(e) {
                    var t;
                    return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]), 1 < t.length && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
                }, l.isMobileFallback = function(e) {
                    return l.detectMobileBrowsers.fullPattern.test(e) || l.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
                }, l.isTabletFallback = function(e) {
                    return l.detectMobileBrowsers.tabletPattern.test(e)
                }, l.prepareDetectionCache = function(e, t, i) {
                    if (e.mobile === u) {
                        var o, n, r;
                        if (n = l.findMatch(l.mobileDetectRules.tablets, t)) return e.mobile = e.tablet = n, void(e.phone = null);
                        if (o = l.findMatch(l.mobileDetectRules.phones, t)) return e.mobile = e.phone = o, void(e.tablet = null);
                        l.isMobileFallback(t) ? (r = s.isPhoneSized(i)) === u ? (e.mobile = l.FALLBACK_MOBILE, e.tablet = e.phone = null) : r ? (e.mobile = e.phone = l.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = l.FALLBACK_TABLET, e.phone = null) : l.isTabletFallback(t) ? (e.mobile = e.tablet = l.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null
                    }
                }, l.mobileGrade = function(e) {
                    var t = null !== e.mobile();
                    return e.os("iOS") && 4.3 <= e.version("iPad") || e.os("iOS") && 3.1 <= e.version("iPhone") || e.os("iOS") && 3.1 <= e.version("iPod") || 2.1 < e.version("Android") && e.is("Webkit") || 7 <= e.version("Windows Phone OS") || e.is("BlackBerry") && 6 <= e.version("BlackBerry") || e.match("Playbook.*Tablet") || 1.4 <= e.version("webOS") && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && 12 <= e.version("Firefox") || e.is("Chrome") && e.is("AndroidOS") && 4 <= e.version("Android") || e.is("Skyfire") && 4.1 <= e.version("Skyfire") && e.is("AndroidOS") && 2.3 <= e.version("Android") || e.is("Opera") && 11 < e.version("Opera Mobi") && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && 2 <= e.version("Bada") || (e.is("UC Browser") || e.is("Dolfin")) && 2.3 <= e.version("Android") || e.match("Kindle Fire") || e.is("Kindle") && 3 <= e.version("Kindle") || e.is("AndroidOS") && e.is("NookTablet") || 11 <= e.version("Chrome") && !t || 5 <= e.version("Safari") && !t || 4 <= e.version("Firefox") && !t || 7 <= e.version("MSIE") && !t || 10 <= e.version("Opera") && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && 5 <= e.version("BlackBerry") && e.version("BlackBerry") < 6 || 5 <= e.version("Opera Mini") && e.version("Opera Mini") <= 6.5 && (2.3 <= e.version("Android") || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || 11 <= e.version("Opera Mobi") && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C")
                }, l.detectOS = function(e) {
                    return l.findMatch(l.mobileDetectRules.oss0, e) || l.findMatch(l.mobileDetectRules.oss, e)
                }, l.getDeviceSmallerSide = function() {
                    return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                }, s.prototype = {
                    constructor: s,
                    mobile: function() {
                        return l.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                    },
                    phone: function() {
                        return l.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                    },
                    tablet: function() {
                        return l.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                    },
                    userAgent: function() {
                        return this._cache.userAgent === u && (this._cache.userAgent = l.findMatch(l.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                    },
                    userAgents: function() {
                        return this._cache.userAgents === u && (this._cache.userAgents = l.findMatches(l.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                    },
                    os: function() {
                        return this._cache.os === u && (this._cache.os = l.detectOS(this.ua)), this._cache.os
                    },
                    version: function(e) {
                        return l.getVersion(e, this.ua)
                    },
                    versionStr: function(e) {
                        return l.getVersionStr(e, this.ua)
                    },
                    is: function(e) {
                        return i(this.userAgents(), e) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || i(l.findMatches(l.mobileDetectRules.utils, this.ua), e)
                    },
                    match: function(e) {
                        return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                    },
                    isPhoneSized: function(e) {
                        return s.isPhoneSized(e || this.maxPhoneWidth)
                    },
                    mobileGrade: function() {
                        return this._cache.grade === u && (this._cache.grade = l.mobileGrade(this)), this._cache.grade
                    }
                }, s.isPhoneSized = "undefined" != typeof window && window.screen ? function(e) {
                    return e < 0 ? u : l.getDeviceSmallerSide() <= e
                } : function() {}, s._impl = l, s.version = "1.4.4 2019-09-21", s
        })
    }, {}],
    2: [function(e, t, i) {
        var n = e("./buttons"),
            r = e("./life"),
            s = e("./score"),
            a = e("./text-areas"),
            l = e("./popups"),
            T = e("./drop-zones"),
            c = e("./manipulatives"),
            u = e("./core/event-source"),
            d = e("./diagrams"),
            o = e("./timer"),
            S = e("./utils"),
            h = e("./intro-animation"),
            p = e("./processors/contrapositive"),
            b = e("./processors/conditional-conjunctions"),
            A = e("./processors/at-least-one"),
            P = e("./processors/if-and-only-if"),
            v = e("./processors/transitive-questions"),
            M = e("./processors/reduction-chains"),
            f = e("./processors/must-be-true"),
            x = e("./processors/fallacy-problems"),
            G = e("./processors/process-answer"),
            B = null,
            C = null,
            g = 0,
            m = null,
            w = !1,
            H = !1,
            E = {
                init: function() {
                    parent.window.addEventListener("resize", I), I();
                    var t = new XMLHttpRequest;
                    t.overrideMimeType("application/json"), t.open("GET", "tree-ordering-game.json", !0), t.onreadystatechange = function() {
                        if (4 === t.readyState && 200 === t.status) {
                            t.onreadystatechange = null, B = JSON.parse(t.responseText), t = null, console.log("********** LESSON LOADED **********"), console.log("Lesson:", B.title), console.log("Points:", B.points), console.log("Questions:", B.questions.length);
                            var e = document.body.querySelector("#preloader-div");
                            e.querySelector("#total-questions").innerHTML = "Total Questions: " + B.questions.length, e.querySelector("#title-lesson").innerHTML = B.title, null !== C && D()
                        }
                    }, t.send(null)
                },
                setLibrary: function(e) {
                    createjs.Touch.enable(stage, !1, !0), stage.preventSelection = !1, stage.enableMouseOver(8), C = e, window.stageWidth = C.properties.width, window.stageHeight = C.properties.height, null !== B && D()
                }
            };

        function I() {
            var e = document.body.querySelector("#preloader-div").querySelector("#portrait-mode"),
                t = parent.window.outerWidth,
                i = parent.window.outerHeight;
            S.isMobile() && i < t ? e.style.display = "block" : e.style.display = "none"
        }

        function D() {
            ! function() {
                a.init(C, exportRoot), n.init(exportRoot), r.init(C, exportRoot), s.init(C, exportRoot), l.init(C, exportRoot), d.init(C, exportRoot), T.init(C, exportRoot), c.init(C, exportRoot), "Contrapositive" === B.title ? T.setAnswerProcessor(p) : "Conditional Conjunctions" === B.title ? T.setAnswerProcessor(b) : "At Least One" === B.title ? T.setAnswerProcessor(A) : "If And Only If" === B.title ? T.setAnswerProcessor(P) : "Transitive Questions" === B.title ? T.setAnswerProcessor(v) : "Reduction Chains" === B.title ? T.setAnswerProcessor(M) : "Must Be True" === B.title ? T.setAnswerProcessor(f) : "Fallacy Problems" === B.title ? T.setAnswerProcessor(x) : T.setAnswerProcessor(G);
                u.on("win", O), u.on("lose", V), u.on("nextQuestion", L), u.on("prevQuestion", N), u.on("tryAgainQuestion", R), u.on("refreshQuestion", F), u.on("timer", X), u.on("timerComplete", k), u.on("help", W), u.on("lessonComplete", U), u.on("pauseGame", _), exportRoot.pauseScreen.on("click", K), s.setTotal(B.points), s.set(0)
            }(), y();
            var i = "https://localhost:8080/lsat-game/" === parent.window.location.href,
                o = document.body.querySelector("#preloader-div"),
                e = o.querySelector("#loading-text"),
                t = o.querySelector("button");
            e.style.display = "none", t.style.display = "block", t.addEventListener("click", function(e) {
                if (parent.window.removeEventListener("resize", I), o.style.display = "none", !S.isIOS() && !i) {
                    var t = parent.document.querySelector(".nectar-button.medium.accent-color.regular-button.start-game-btn");
                    t && (console.log("trigger parent anchor"), t.click())
                }
                "Ordering Games" === B.title && h.start(C)
            })
        }

        function y() {
            if (n.updateQuestionNavigation(g, B.questions.length), m = B.questions[g]) {
                l.remove(), r.removeHearts(), r.set(m.lives), r.addHearts(), T.disable(), c.disable(), a.resetLowerTextArea(), a.resetLogicTexts(), a.resetMainIdeaText(), a.resetTimerText();
                var e = "";
                if (B.isLogic) {
                    a.setLogicInstructionsTextValue(m.instructions), a.setLogicInstructionsText2Value(m.subInstructions);
                    for (var t = 0; t < m.rules.length; t++) e += m.rules[t] + "\n";
                    m.subInstructionsY || (m.subInstructionsY = 752), a.setLogicInstructionsText2Y(m.subInstructionsY)
                } else if (B.isMainIdea) {
                    var i = "";
                    for (t = 0; t < m.rules.length; t++) 0 < i.length && (i += "\n\n"), i += m.rules[t];
                    a.setMainIdeaTxtValue(i)
                } else {
                    for (m.instructions && 0 < m.instructions.length && (e += m.instructions + "\n"), t = 0; t < m.rules.length; t++) e += m.rules[t] + "\n";
                    m.subInstructions && (e += m.subInstructions)
                }! function(e) {
                    "" === a.getUpperTextAreaValue() ? (a.setUpperTextAreaValue(e), B.isModal || (T.create(m), c.create(m)), d.add(m, C, exportRoot)) : (H = !0, a.animateOutUpperTextArea().then(function() {
                        T.remove(), c.remove(), d.remove(), a.setUpperTextAreaValue(e), d.add(m), B.isModal || (T.create(m), c.create(m))
                    }), T.animateOut(), c.animateOut(), d.animateOut(), setTimeout(function() {
                        T.animateIn(), c.animateIn(), d.animateIn(), a.animateInUpperTextArea().then(function() {
                            H = !1
                        })
                    }, 250))
                }(e), m.time <= 0 ? (n.hidePause(), a.hideTimer()) : (n.showPause(), a.showTimer(), a.setTimerValue(m.time), o.start(m.time)), m.noAnswerOption ? n.showNoAnswer() : n.hideNoAnswer(), s.setChapter(B.title + " " + (g + 1) + " of " + B.questions.length), s.resetPlus(), s.updateBar()
            }
        }

        function L() {
            if (!H) {
                if (g++, (function() {
                        for (var e = 0, t = 0; t < B.questions.length; t++) {
                            !0 === B.questions[t].completed && e++
                        }
                        return e
                    }() === B.questions.length || s.get() >= s.getTotal()) && !w) return w = !0, void l.createLessonComplete();
                g >= B.questions.length && (g = 0), createjs.Sound.play("PageFlip", {
                    volume: .1
                }), o.stop(), y()
            }
        }

        function N() {
            H || (--g < 0 && (g = B.questions.length - 1), createjs.Sound.play("PageFlip", {
                volume: .1
            }), o.stop(), y())
        }

        function O() {
            m && (m.completed = !0), o.stop(), l.createWin();
            var e = l.get(),
                t = "Question Solved";
            0 === r.getLost() ? t = "Perfect!" : 1 === r.getLost() && (t = "Good Job!"), e.setTitle(t), e.initScoreBar(B.title + " " + (g + 1) + " of " + B.questions.length, s.get(), s.getTotal()), e.initHearts(r.getHeartClass(), r.get(), r.getLost(), r.getMax());
            c.disable(), T.disable(), 0 < m.explanation.length && a.setLowerTextAreaValue(m.explanation), s.addBonus(10 * r.get()), r.showBonus(10), n.hideNoAnswer()
        }

        function V() {
            var e = o.getTime();
            o.stop(), l.createLost();
            var t = l.get(),
                i = e <= 0 && 0 < g ? "Time Expired" : "No More Lives";
            t.setTitle(i), t.initHearts(r.getHeartClass(), r.getMax()), c.disable(), c.reset(), T.disable(), T.showCorrect(), a.setLowerTextAreaValue(""), n.hideNoAnswer()
        }

        function R() {
            H || (createjs.Sound.play("Refresh", {
                volume: .1
            }), y())
        }

        function F() {
            H || (createjs.Sound.play("Refresh", {
                volume: .1
            }), o.stop(), y())
        }

        function X(e) {
            var t = e.time;
            a.setTimerValue(t)
        }

        function k() {
            a.setTimerValue(0), V()
        }

        function W() {
            l.createHelpAndOptions()
        }

        function U() {
            l.createLessonComplete()
        }

        function _() {
            exportRoot.pauseScreen.visible = !0, exportRoot.addChild(exportRoot.pauseScreen), o.pause()
        }

        function K() {
            exportRoot.pauseScreen.visible = !1, o.resume()
        }
        window.app = E
    }, {
        "./buttons": 3,
        "./core/event-source": 12,
        "./diagrams": 20,
        "./drop-zones": 21,
        "./intro-animation": 22,
        "./life": 23,
        "./manipulatives": 24,
        "./popups": 25,
        "./processors/at-least-one": 26,
        "./processors/conditional-conjunctions": 27,
        "./processors/contrapositive": 28,
        "./processors/fallacy-problems": 29,
        "./processors/if-and-only-if": 30,
        "./processors/must-be-true": 32,
        "./processors/process-answer": 33,
        "./processors/reduction-chains": 34,
        "./processors/transitive-questions": 35,
        "./score": 36,
        "./text-areas": 37,
        "./timer": 38,
        "./utils": 39
    }],
    3: [function(e, t, i) {
        var o = e("./core/event-source"),
            n = e("./core/button"),
            r = {},
            s = null,
            a = null,
            l = null,
            T = null;

        function c(e) {
            e.nativeEvent.preventDefault(), o.dispatchEvent("refreshQuestion")
        }

        function u(e) {
            e.nativeEvent.preventDefault(), o.dispatchEvent("help")
        }

        function d(e) {
            e.nativeEvent.preventDefault(), o.dispatchEvent("pauseGame")
        }

        function S() {
            o.dispatchEvent("noAnswer")
        }

        function h(e) {
            e.nativeEvent.preventDefault(), o.dispatchEvent("prevQuestion")
        }

        function p(e) {
            e.nativeEvent.preventDefault(), o.dispatchEvent("nextQuestion")
        }
        r.init = function(e) {
            n(e.refreshButton), e.refreshButton.on("click", c), n(e.helpButton), e.helpButton.on("click", u), n(e.pauseButton), (s = e.pauseButton).on("click", d), n(e.noAnswerButton), (a = e.noAnswerButton).visible = !1, a.on("click", S), (l = n(e.prevButton)).on("click", h), (T = n(e.nextButton)).on("click", p)
        }, r.showPause = function() {
            s.visible = !0
        }, r.hidePause = function() {
            s.visible = !1
        }, r.showNoAnswer = function() {
            a.visible = !0
        }, r.hideNoAnswer = function() {
            a.visible = !1
        }, r.updateQuestionNavigation = function(e, t) {
            0 === e ? (l.visible = !1, T.visible = !0) : e === t - 1 ? (l.visible = !0, T.visible = !1) : (l.visible = !0, T.visible = !0)
        }, t.exports = r
    }, {
        "./core/button": 9,
        "./core/event-source": 12
    }],
    4: [function(e, t, i) {
        t.exports = {
            PRIMARY: "#444444",
            SECONDARY: "#676767",
            DANGER: "#da4848",
            SUCCESS: "#6aad60",
            BUTTON: "#369ca8",
            QUESTION_MARK: "#c1c1c1"
        }
    }, {}],
    5: [function(e, t, i) {
        t.exports = {
            ANIMATION_IN_DURATION: 200,
            ANIMATION_OUT_DURATION: 200
        }
    }, {}],
    6: [function(e, t, i) {
        var o = e("./display-object"),
            s = e("../colors"),
            n = e("../utils");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.init = function() {
                this.subtxt.visible = !1, this.correctTxt.visible = !1, this.correctSubtxt.visible = !1, this.displayTxt.visible = !1, this.txt.textBaseline = "middle";
                var e = this.txt.getBounds();
                this.txt.x = .5 * this.width, this.txt.y = this.height - .5 * e.height;
                var t = -.05 * e.height;
                n.isMobile() && (t = n.isIOS() ? .03 * e.height : -.043 * e.height), this.purpleSlash.visible = !1, this.purpleSlash.x = this.txt.x, this.purpleSlash.y = this.txt.y + t, this.redSlash.visible = !1, this.redSlash.x = this.purpleSlash.x, this.redSlash.y = this.purpleSlash.y, this.blackSlash.visible = !1, this.blackSlash.x = this.purpleSlash.x, this.blackSlash.y = this.purpleSlash.y
            }, t.enableUserInteraction = function(e) {
                this.cursor = "pointer", this.on("click", e)
            }, t.disableUserInteraction = function() {
                this.cursor = null, this.removeAllEventListeners("click")
            }, t.setText = function(e) {
                this.txt.text = e
            }, t.getText = function() {
                return this.txt.text
            }, t.setDisplayText = function(e) {
                this.txt.text = "", this.displayTxt.visible = !0, this.displayTxt.text = e
            }, t.setTextColor = function(e) {
                this.txt.color = e, this.subtxt.color = e
            }, t.showSubtext = function() {
                this.subtxt.visible = !0
            }, t.hideSubtext = function() {
                this.subtxt.visible = !1
            }, t.setSubtext = function(e) {
                this.subtxt.text = e
            }, t.getSubtext = function() {
                return this.subtxt.text
            }, t.prefill = function() {
                if (this.data.text) this.txt.text = this.data.text, this.setTextColor(s.SECONDARY);
                else if (this.data.texts) {
                    for (var e = "", t = 0; t < this.data.texts.length; t++) 0 < e.length && (e += "/"), e += this.data.texts[t];
                    this.txt.text = "", this.correctTxt.visible = !0, this.correctTxt.text = e, this.correctTxt.color = s.SECONDARY
                }
            }, t.fadeOut = function() {
                var e = this,
                    t = this.data.displayText ? this.displayTxt : this.txt;
                0 === t.alpha || this._isFadingOut || (this._isFadingOut = !0, this._isFadingIn = !1, createjs.Tween.removeTweens(t), t.alpha = 1, createjs.Tween.get(t).to({
                    alpha: 0
                }, 800).call(function() {
                    e._isFadingOut = !1
                }))
            }, t.fadeIn = function() {
                var e = this,
                    t = this.data.displayText ? this.displayTxt : this.txt;
                1 === t.alpha || this._isFadingIn || (this._isFadingIn = !0, this._isFadingOut = !1, createjs.Tween.removeTweens(t), t.alpha = 0, createjs.Tween.get(t).to({
                    alpha: 1
                }, 800).call(function() {
                    e._isFadingIn = !1, e.reset()
                }))
            }, t.setManipulative = function(e, t) {
                this.manipulative = e, this.isCorrect = t, this.visible = !1
            }, t.showCorrectAnswer = function() {
                if (createjs.Tween.removeTweens(this), createjs.Tween.removeTweens(this.txt), this.visible = !0, "" === this.data.text) this.reset();
                else {
                    if (this.data.prefilled) return;
                    var e = this.isCorrect ? s.SUCCESS : s.DANGER,
                        t = this.data.text,
                        i = this.data.texts,
                        o = this.data.subtexts;
                    if (t) this.txt.text = t, this.txt.alpha = 1, this.txt.visible = !0, this.txt.color = e, this.data.subtext && (this.subtxt.text = this.data.subtext, this.subtxt.visible = !0, this.subtxt.color = e);
                    else if (i) {
                        for (var n = t = "", r = 0; r < i.length; r++) 0 < t.length && (t += o ? " /" : "/"), t += i[r], o && (n += "     " + o[r]);
                        this.correctTxt.text = t, this.txt.visible = !1, this.correctTxt.visible = !0, this.correctTxt.color = e, this.correctSubtxt.text = n, this.correctSubtxt.visible = !0, this.correctSubtxt.color = e
                    }
                }
            }, t.showSlash = function() {
                this.data.prefilled ? (this.redSlash.visible = !1, this.purpleSlash.visible = !0, this.blackSlash.visible = !1) : this.data.prefilled ? this.hideSlash() : (this.redSlash.visible = !1, this.purpleSlash.visible = !0, this.blackSlash.visible = !1)
            }, t.hideSlash = function() {
                this.redSlash.visible = !1, this.purpleSlash.visible = !1, this.blackSlash.visible = !1
            }, t.reset = function() {
                createjs.Tween.removeTweens(this.txt), this.manipulative = null, this.txt.alpha = 1, this.visible = !0, this.isCorrect = !1
            }, e
        }
    }, {
        "../colors": 4,
        "../utils": 39,
        "./display-object": 11
    }],
    7: [function(e, t, i) {
        var o = e("./display-object");

        function n(e) {
            e.nativeEvent.preventDefault(), createjs.Sound.play("WordPick");
            var t = e.currentTarget;
            t.prevStagePos = {
                x: e.stageX,
                y: e.stageY
            }, t.drag = !0, t.parent.addChild(t), this.onPick && this.onPick(t)
        }

        function r(e) {
            e.nativeEvent.preventDefault();
            var t = e.currentTarget;
            if (t.drag) {
                var i = e.stageX - t.prevStagePos.x,
                    o = e.stageY - t.prevStagePos.y;
                t.prevStagePos.x = e.stageX, t.prevStagePos.y = e.stageY, t.x += i / stage.scaleX, t.y += o / stage.scaleY, this.onMove && this.onMove(t)
            }
        }

        function s(e) {
            e.nativeEvent.preventDefault();
            var t = e.currentTarget;
            t.drag = !1, this.onDrop && this.onDrop(t)
        }
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.setData = function(e) {
                this.data = e, this.x = e.x, this.y = e.y, this.originX = this.x, this.originY = this.y, this.txt && (this.txt.text = e.text)
            }, t.enableUserInteraction = function(e, t, i) {
                this.cursor = "pointer", this.onPick = e, this.onMove = t, this.onDrop = i, this.on("mousedown", n), this.on("pressmove", r), this.on("pressup", s)
            }, t.disableUserInteraction = function() {
                this.cursor = null, this.removeAllEventListeners("mousedown"), this.removeAllEventListeners("pressmove"), this.removeAllEventListeners("pressup")
            }, t.cleanUp = function() {
                this.onPick = null, this.onMove = null, this.onDrop = null
            }, e
        }
    }, {
        "./display-object": 11
    }],
    8: [function(e, t, i) {
        var o = e("./display-object");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.init = function() {
                this.titleBar && (this.titleBar.cursor = "pointer", this.titleBar.on("mousedown", this._onMouseDown.bind(this)), this.titleBar.on("pressmove", this._onMouseMove.bind(this)), this.titleBar.on("pressup", this._onMouseUp.bind(this))), this.bg.on("click", function(e) {
                    e.stopImmediatePropagation(), e.stopPropagation()
                })
            }, t.remove = function() {
                this.titleBar.removeAllEventListeners("mousedown"), this.titleBar.removeAllEventListeners("pressmove"), this.titleBar.removeAllEventListeners("pressup"), this.bg.removeAllEventListeners("click")
            }, t._onMouseDown = function(e) {
                e.nativeEvent.preventDefault(), this._isDrag = !0, this._prevStagePos = {
                    x: e.stageX,
                    y: e.stageY
                }
            }, t._onMouseMove = function(e) {
                if (e.nativeEvent.preventDefault(), this._isDrag) {
                    var t = e.stageX - this._prevStagePos.x,
                        i = e.stageY - this._prevStagePos.y;
                    this._prevStagePos.x = e.stageX, this._prevStagePos.y = e.stageY, this.x += t / this.stage.scaleX, this.y += i / this.stage.scaleY, this.x <= 0 ? this.x = 0 : this.x >= window.stageWidth - this.width && (this.x = window.stageWidth - this.width), this.y <= 0 ? this.y = 0 : this.y >= window.stageHeight - this.height && (this.y = window.stageHeight - this.height)
                }
            }, t._onMouseUp = function(e) {
                e.nativeEvent.preventDefault(), this._isDrag = !1
            }, e
        }
    }, {
        "./display-object": 11
    }],
    9: [function(e, t, i) {
        var o = e("../utils");
        t.exports = function(e) {
            return e.init = function() {
                this.cursor = "pointer", o.isMobile() ? (this.on("mousedown", this._onMouseOver), this.on("pressup", this._onMouseOut)) : (this.on("mouseover", this._onMouseOver), this.on("mouseout", this._onMouseOut)), this.on("tick", function(e) {
                    if (e.remove(), this.gotoAndStop(0), this.labelTxt) {
                        var t = .525;
                        o.isMobile() && o.isIOS() && (t = .475), this.labelTxt.textBaseline = "middle", this.labelTxt.y = this.nominalBounds.height * t
                    }
                }.bind(this))
            }, e.dispose = function() {
                this.removeAllEventListeners("tick"), this.removeAllEventListeners("mouseover"), this.removeAllEventListeners("mouseout"), this.removeAllEventListeners("mousedown"), this.removeAllEventListeners("pressup"), this.removeAllEventListeners("click")
            }, e._onMouseOver = function(e) {
                e.nativeEvent.preventDefault(), this.gotoAndStop(1)
            }, e._onMouseOut = function(e) {
                e.nativeEvent.preventDefault(), this.gotoAndStop(0)
            }, e._onClick = function() {
                createjs.Sound.play("ButtonClick")
            }, e.init(), e
        }
    }, {
        "../utils": 39
    }],
    10: [function(e, t, i) {
        var o = e("./base-manipulative"),
            n = e("../colors"),
            r = e("../utils");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.init = function() {
                this.subtxt.visible = !1, this.txt.textBaseline = "middle";
                var e = this.txt.getBounds();
                this.txt.x = .5 * this.width, this.txt.y = this.height - .5 * e.height;
                var t = -.05 * e.height;
                r.isMobile() && (t = r.isIOS() ? .03 * e.height : -.043 * e.height), this.purpleSlash.visible = !1, this.purpleSlash.x = this.txt.x, this.purpleSlash.y = this.txt.y + t, this.redSlash.visible = !1, this.redSlash.x = this.purpleSlash.x, this.redSlash.y = this.purpleSlash.y, this.blackSlash.visible = !1, this.blackSlash.x = this.purpleSlash.x, this.blackSlash.y = this.purpleSlash.y
            }, t.setText = function(e) {
                this.txt.text = e
            }, t.getText = function() {
                return this.txt.text
            }, t.scaleUp = function() {
                createjs.Tween.get(this).to({
                    scaleX: 1.15,
                    scaleY: 1.15
                }, 200)
            }, t.scaleToNormal = function() {
                createjs.Tween.get(this).to({
                    scaleX: 1,
                    scaleY: 1
                }, 200)
            }, t.moveToOrigin = function() {
                var e = this;
                createjs.Tween.get(this).to({
                    x: this.originX,
                    y: this.originY
                }, 200).call(function() {
                    e.origin.visible = !1
                })
            }, t.hover = function(e) {
                this.dropZone && this.dropZone === e || (this.dropZone && !this.dropZone.manipulative && this.dropZone.fadeIn(), this.dropZone = e, this.dropZone && (this.dropZone.manipulative || this.dropZone.fadeOut()))
            }, t.reset = function() {
                this.origin.visible = !0, this.txt.color = n.BUTTON, this.hideSlash(), this.hideSubtext(), this.dropZone && (this.dropZone.reset(), this.dropZone = null)
            }, t.correct = function(e, t) {
                this.dropZone = e, this.origin.visible = !0, this.txt.color = n.SUCCESS, this.dropZone.data.strikethrough ? this.showSlash() : this.hideSlash(), this.showSubtext(), t ? createjs.Tween.get(this).to({
                    x: e.x,
                    y: e.y
                }, 200) : (this.x = e.x, this.y = e.y)
            }, t.wrong = function(e, t) {
                this.dropZone = e, this.origin.visible = !0, this.txt.color = n.DANGER, this.dropZone.data.strikethrough ? this.showSlash() : this.hideSlash(), this.showSubtext(), t ? createjs.Tween.get(this).to({
                    x: e.x,
                    y: e.y
                }, 200) : (this.x = e.x, this.y = e.y)
            }, t.setDropZone = function(e, t) {
                this.dropZone = e, this.origin.visible = !0, this.dropZone.data.strikethrough ? this.showSlash() : this.hideSlash(), this.showSubtext(), t ? createjs.Tween.get(this).to({
                    x: e.x,
                    y: e.y
                }, 200) : (this.x = e.x, this.y = e.y)
            }, t.showSlash = function() {
                this.dropZone ? (this.redSlash.visible = this.dropZone.redSlash.visible, this.purpleSlash.visible = this.dropZone.purpleSlash.visible, this.blackSlash.visible = this.dropZone.blackSlash.visible) : this.hideSlash()
            }, t.hideSlash = function() {
                this.redSlash.visible = !1, this.purpleSlash.visible = !1, this.blackSlash.visible = !1
            }, t.showSubtext = function() {
                if (this.data && this.data.subtext) return this.subtxt.visible = !0, this.subtxt.text = this.data.subtext, void(this.subtxt.color = this.txt.color);
                if (this.dropZone) {
                    var e = this.dropZone.data;
                    e && e.subtext ? e.prefilledSubtext && (this.subtxt.visible = !0, this.subtxt.text = e.subtext, this.subtxt.color = this.txt.color) : this.hideSubtext()
                } else this.hideSubtext()
            }, t.hideSubtext = function() {
                this.data && this.data.subtext ? this.subtxt.color = this.txt.color : this.subtxt.visible = !1
            }, e
        }
    }, {
        "../colors": 4,
        "../utils": 39,
        "./base-manipulative": 7
    }],
    11: [function(e, t, i) {
        t.exports = function(e) {
            var t = e.prototype;
            return Object.defineProperty(t, "scale", {
                set: function(e) {
                    this.scaleX = this.scaleY = e
                },
                get: function() {
                    return this.scaleX !== this.scaleY ? 0 : this.scaleX
                }
            }), Object.defineProperty(t, "width", {
                set: function(e) {
                    this.scaleX = e / this.nominalBounds.width
                },
                get: function() {
                    return this.nominalBounds.width * this.scaleX
                }
            }), Object.defineProperty(t, "height", {
                set: function(e) {
                    this.scaleY = e / this.nominalBounds.height
                },
                get: function() {
                    return this.nominalBounds.height * this.scaleY
                }
            }), e
        }
    }, {}],
    12: [function(e, t, i) {
        var o = {};
        createjs.EventDispatcher.initialize(o), t.exports = o
    }, {}],
    13: [function(e, t, i) {
        var o = e("./display-object");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.init = function() {
                this.heartPurple.visible = !0, this.heartGreen.visible = !1, this.heartRed.visible = !1
            }, t.die = function() {
                this.active = !1, this.heartRed.visible = !0;
                var e = this.heartPurple;
                createjs.Tween.get(e).to({
                    alpha: 0
                }, 300).call(function() {
                    e.visible = !1
                })
            }, t.bonus = function() {
                this.heartGreen.visible = !0;
                var e = this.heartPurple;
                createjs.Tween.get(e).to({
                    alpha: 0
                }, 300).call(function() {
                    e.visible = !1
                })
            }, e
        }
    }, {
        "./display-object": 11
    }],
    14: [function(e, t, i) {
        var o = e("./base-popup"),
            n = e("./button");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.super_init = t.init, t.super_remove = t.remove, t.init = function() {
                this.super_init(), n(this.closeButton), n(this.instructionsPage.nextButton), n(this.scoringPage.closeButton), this.instructionsPage.visible = !0, this.scoringPage.visible = !1, this.titleTxt.textBaseline = "middle", this.instructionsPage.ui.scoreBar.init(), this.instructionsPage.ui.scoreBar.setChapter("Lesson 1 of 4"), this.instructionsPage.ui.scoreBar.setScore(44, 160), this.instructionsPage.ui.scoreBar.updateFill(.275), this.scoringPage.scoreBar.init(), this.scoringPage.scoreBar.setChapter("Lesson 1 of 4"), this.scoringPage.scoreBar.setScore(44, 160), this.scoringPage.scoreBar.updateFill(.275)
            }, t.remove = function() {
                this.super_remove(), this.closeButton.dispose(), this.instructionsPage.nextButton.dispose(), this.scoringPage.closeButton.dispose(), this.closeButton.removeAllEventListeners("click"), this.instructionsPage.nextButton.removeAllEventListeners("click"), this.scoringPage.closeButton.removeAllEventListeners("click"), this.parent.removeChild(this)
            }, t.setTitle = function(e) {
                this.titleTxt.text = e;
                var t = this.titleBar.nominalBounds;
                this.titleTxt.x = t.width / 2, this.titleTxt.y = t.height / 2
            }, e
        }
    }, {
        "./base-popup": 8,
        "./button": 9
    }],
    15: [function(e, t, i) {
        var o = e("./base-popup"),
            n = e("./button");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.super_init = t.init, t.super_remove = t.remove, t.init = function() {
                this.super_init(), n(this.closeButton);
                var e = this.titleBar.nominalBounds;
                this.titleTxt.textBaseline = "middle", this.titleTxt.x = e.width / 2, this.titleTxt.y = e.height / 2, this.messageTxt.textBaseline = "middle", this.messageTxt.y = (this.height - e.height) / 2 + e.height
            }, t.remove = function() {
                this.super_remove(), this.closeButton.dispose(), this.closeButton.removeAllEventListeners("click"), this.parent.removeChild(this)
            }, e
        }
    }, {
        "./base-popup": 8,
        "./button": 9
    }],
    16: [function(e, t, i) {
        var o = e("./base-popup"),
            n = e("./button");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.super_init = t.init, t.super_remove = t.remove, t.init = function() {
                this.super_init(), n(this.closeButton), n(this.tryAgainButton), n(this.rightArrow), this.messageTxt.textBaseline = "middle", this.messageTxt.text = "You used your", this.titleTxt.textBaseline = "middle"
            }, t.remove = function() {
                this.super_remove(), this.tryAgainButton.dispose(), this.closeButton.dispose(), this.rightArrow.dispose(), this.rightArrow.removeAllEventListeners("click"), this.tryAgainButton.removeAllEventListeners("click"), this.closeButton.removeAllEventListeners("click"), this.parent.removeChild(this)
            }, t.setTitle = function(e) {
                this.titleTxt.text = e;
                var t = this.titleBar.nominalBounds;
                this.titleTxt.x = t.width / 2, this.titleTxt.y = t.height / 2
            }, t.initHearts = function(e, t) {
                for (var i = NaN, o = 0; o < t; o++) {
                    var n = new e;
                    n.init(), this.addChild(n), isNaN(i) && (i = n.height), n.active = !0, n.x = 160 + o * (n.width + 16), n.y = 120, n.heartPurple.visible = !1, n.heartGreen.visible = !1, n.heartRed.visible = !0
                }
                this.messageTxt.x = 20, this.messageTxt.y = 120 + .5 * i
            }, e
        }
    }, {
        "./base-popup": 8,
        "./button": 9
    }],
    17: [function(e, t, i) {
        var o = e("./base-manipulative");
        t.exports = function(e) {
            return o(e), e.prototype.resize = function() {
                this.txt.lineWidth = this.txt.getMeasuredWidth(), this.hitArea.scaleX = this.txt.getMeasuredWidth() / this.hitArea.nominalBounds.width
            }, e
        }
    }, {
        "./base-manipulative": 7
    }],
    18: [function(e, t, i) {
        var o = e("./display-object"),
            n = e("../utils");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.init = function() {
                var e = this.scoreBarFill.nominalBounds.height,
                    t = .53;
                n.isMobile() && n.isIOS() && (t = .47), this.chapterTxt.textBaseline = "middle", this.chapterTxt.y = e * t, this.scoreTxt.textBaseline = "middle", this.scoreTxt.y = this.chapterTxt.y, this.plusTxt.visible = !1, this.plusTxt.textBaseline = "middle", this.plusTxt.y = this.chapterTxt.y
            }, t.setChapter = function(e) {
                this.chapterTxt.text = e
            }, t.setScore = function(e, t) {
                this.scoreTxt.text = e + "/" + t
            }, t.updateFill = function(e, t) {
                if (!(1 < e)) {
                    var i = this.scoreBarFill;
                    t = t || 0, e <= 0 ? i.scaleX = 0 : 0 !== t ? createjs.Tween.get(i, {
                        override: !0
                    }).to({
                        scaleX: e
                    }, t) : i.scaleX = e
                }
            }, t.updatePlus = function(e, t) {
                var i = this.plusTxt;
                if (i.alpha = 1, i.text = "+" + e, i.x = this.chapterTxt.getBounds().width + this.chapterTxt.x + 6, 0 !== e) {
                    if (0 === t) return i.visible = !0, void createjs.Tween.removeTweens(i);
                    t = t || 333, i.visible = !0, createjs.Tween.get(i, {
                        override: !0
                    }).to({
                        alpha: 0
                    }, t)
                } else i.visible = !1
            }, t.dispose = function() {
                createjs.Tween.removeTweens(this.plusTxt), createjs.Tween.removeTweens(this.scoreBarFill)
            }, e
        }
    }, {
        "../utils": 39,
        "./display-object": 11
    }],
    19: [function(e, t, i) {
        var o = e("./base-popup"),
            n = e("./button");
        t.exports = function(e) {
            o(e);
            var t = e.prototype;
            return t.super_init = t.init, t.super_remove = t.remove, t.init = function() {
                this.super_init(), n(this.closeButton), n(this.rightArrow), this.scoreBar.init(), this.titleTxt.textBaseline = "middle"
            }, t.remove = function() {
                this.super_remove(), this.scoreBar.dispose(), this.closeButton.dispose(), this.rightArrow.dispose(), this.rightArrow.removeAllEventListeners("click"), this.closeButton.removeAllEventListeners("click"), this.parent.removeChild(this)
            }, t.setTitle = function(e) {
                this.titleTxt.text = e;
                var t = this.titleBar.nominalBounds;
                this.titleTxt.x = t.width / 2, this.titleTxt.y = t.height / 2
            }, t.initScoreBar = function(e, t, i) {
                this.scoreBar.setChapter(e), this.scoreBar.setScore(t, i), this.scoreBar.updateFill(t / i, 0), this.scoreBar.updatePlus(0)
            }, t.initHearts = function(e, t, i, o) {
                this.hearts = [];
                for (var n = 0; n < o; n++) {
                    var r = new e;
                    r.init(), this.addChild(r), r.active = !0, r.x = 20 + n * (r.width + 16), r.y = 132, n <= i - 1 && (r.heartPurple.visible = !1, r.heartGreen.visible = !1, r.heartRed.visible = !0), this.hearts[n] = r
                }
            }, t.updateScoreBar = function(e, t, i, o) {
                this.scoreBar.setScore(e, t), this.scoreBar.updateFill(e / t, o), this.scoreBar.updatePlus(i, 0)
            }, e
        }
    }, {
        "./base-popup": 8,
        "./button": 9
    }],
    20: [function(e, t, i) {
        var o = e("./constants"),
            n = {},
            r = null,
            s = null,
            a = null;
        n.init = function(e, t) {
            r = e, s = new createjs.Container, t.addChild(s)
        }, n.add = function(e) {
            var t = e.diagrams[0];
            (a = function(e, t) {
                return new t[e]
            }(t.id, r)).x = t.x, a.y = t.y, s.addChild(a)
        }, n.remove = function() {
            a && (a.parent.removeChild(a), a = null)
        }, n.animateIn = function() {
            return new Promise(function(e) {
                createjs.Tween.get(s).to({
                    alpha: 1
                }, o.ANIMATION_IN_DURATION).call(e)
            })
        }, n.animateOut = function() {
            return new Promise(function(e) {
                createjs.Tween.get(s).to({
                    alpha: 0
                }, o.ANIMATION_OUT_DURATION).call(e)
            })
        }, t.exports = n
    }, {
        "./constants": 5
    }],
    21: [function(e, t, i) {
        var o = e("./core/display-object"),
            n = e("./core/base-drop-zone"),
            r = e("./core/event-source"),
            s = e("./text-areas"),
            a = e("./colors"),
            l = e("./constants"),
            T = {},
            c = null,
            u = null,
            d = null,
            S = [],
            h = null,
            p = null;

        function b(e, t) {
            var i = {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height
                },
                o = {
                    x: t.x,
                    y: t.y,
                    width: t.width,
                    height: t.height
                };
            return i.x < o.x + o.width && o.x < i.x + i.width && i.y < o.y + o.height && o.y < i.y + i.height ? {
                area: Math.max(0, Math.min(i.x + i.width, o.x + o.width) - Math.max(i.x, o.x)) * Math.max(0, Math.min(i.y + i.height, o.y + o.height) - Math.max(i.y, o.y))
            } : null
        }

        function A(e) {
            e.nativeEvent.preventDefault();
            var t = e.currentTarget;
            t.data.description && "" !== t.data.description && (s.setLowerTextAreaValue(t.data.description), s.animateLowerTextArea(a.SECONDARY))
        }

        function P() {
            p(h)
        }
        T.init = function(e, t) {
            c = n(e.DropZone), u = o(e.ModalDropZone), d = new createjs.Container, t.addChild(d), r.on("noAnswer", P)
        }, T.setAnswerProcessor = function(e) {
            p = e
        }, T.create = function(e) {
            for (var t = (h = e).dropZones, i = 0; i < t.length; i++) {
                var o = t[i],
                    n = new c;
                d.addChild(n), n.init(), (n.data = o).prefilled ? o.prefilled && n.prefill() : (o.displayText ? n.setDisplayText(o.displayText) : n.setText("?"), n.enableUserInteraction(A)), o.subtext && o.prefilledSubtext && (n.showSubtext(), n.setSubtext(o.subtext)), o.strikethrough ? n.showSlash() : n.hideSlash(), n.x = o.x, n.y = o.y, S[i] = n
            }
        }, T.createModal = function(e) {
            for (var t = (h = e).dropZones, i = 0; i < t.length; i++) {
                var o = t[i],
                    n = new u;
                d.addChild(n), n.data = o, n.x = o.x, n.y = o.y, n.txt.text = "?", S[i] = n
            }
        }, T.get = function() {
            return S
        }, T.getHovered = function(e) {
            for (var t = -1, i = null, o = 0; o < S.length; o++) {
                var n = S[o];
                if (!n.data.prefilled && !n.isCorrect) {
                    var r = b(e, n);
                    r && r.area > t && (t = r.area, i = n)
                }
            }
            return i
        }, T.drop = function(e, t) {
            var i = e.manipulative;
            i && (i.reset(), i.moveToOrigin()), p(h, e, t)
        }, T.isAllCorrect = function() {
            for (var e = 0; e < S.length; e++) {
                var t = S[e],
                    i = t.data;
                if (!i.prefilled && "" !== i.text && !t.isCorrect) return !1
            }
            return !0
        }, T.isAllFilled = function() {
            for (var e = 0; e < S.length; e++) {
                var t = S[e];
                if (!t.data.prefilled && !t.manipulative) return !1
            }
            return !0
        }, T.getExplanation = function(e) {
            if (e.data.explanation) return e.data.explanation;
            var t = e.data.explanations;
            if (t) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    if (o.text === e.manipulative.data.text) return o.explanation
                }
                if (e.data.text) {
                    for (i = 0; i < t.length; i++)
                        if ((o = t[i]).text !== e.data.text) return o.explanation
                } else
                    for (i = 0; i < t.length; i++)
                        if ((o = t[i]).text === e.getText()) return o.explanation
            }
            return ""
        }, T.showCorrect = function() {
            for (var e = 0; e < S.length; e++) {
                var t = S[e];
                t.showCorrectAnswer && t.showCorrectAnswer()
            }
        }, T.disable = function() {
            for (var e = 0; e < S.length; e++) {
                var t = S[e];
                t.disableUserInteraction && t.disableUserInteraction()
            }
        }, T.remove = function() {
            h = null;
            for (var e = 0; e < S.length; e++) {
                var t = S[e];
                d.removeChild(t)
            }
            S.length = 0
        }, T.animateIn = function() {
            createjs.Tween.get(d).to({
                alpha: 1
            }, l.ANIMATION_IN_DURATION)
        }, T.animateOut = function() {
            createjs.Tween.get(d).to({
                alpha: 0
            }, l.ANIMATION_OUT_DURATION)
        }, t.exports = T
    }, {
        "./colors": 4,
        "./constants": 5,
        "./core/base-drop-zone": 6,
        "./core/display-object": 11,
        "./core/event-source": 12,
        "./text-areas": 37
    }],
    22: [function(e, t, i) {
        var r = e("./manipulatives"),
            s = e("./drop-zones"),
            a = e("./colors"),
            l = null,
            T = null,
            c = null,
            u = null,
            o = {
                start: function(e) {
                    var t = new createjs.Shape;
                    t.graphics.beginFill("#ffffff").drawRect(0, 0, window.stageWidth, window.stageHeight), t.alpha = .01, t.on("click", function() {}), stage.addChild(t), l = t;
                    var i = r.get(),
                        o = s.get();
                    if (T = i.find(function(e) {
                            return !0 === e.data.placed
                        }), u = o.find(function(e) {
                            return !0 === e.data.prefilled
                        }), T && u) {
                        var n = T.data;
                        (c = new e.DefaultManipulative).init(), c.setText(n.text), c.showSubtext(), T.parent.addChild(c), T.parent.addChild(T), c.txt.color = a.QUESTION_MARK, c.x = T.x, c.y = T.y, T.txt.color = a.BUTTON, u.txt.color = a.QUESTION_MARK, u.txt.text = "?", setTimeout(function() {
                            createjs.Sound.play("WordPick"), createjs.Tween.get(T).to({
                                x: T.x + 8,
                                y: T.y - 8,
                                scale: 1.15
                            }, 200).call(d)
                        }, 300)
                    }
                }
            };

        function d() {
            createjs.Tween.get(T).wait(200).to({
                y: u.y - 2,
                x: u.x
            }, 1500).call(n)
        }

        function n() {
            T.scale = 1, T.x = T.data.x, T.y = T.data.y, T.txt.color = a.QUESTION_MARK, createjs.Sound.play("CorrectWordDrop"), c.parent.removeChild(c), u.prefill(), l.parent.removeChild(l)
        }
        t.exports = o
    }, {
        "./colors": 4,
        "./drop-zones": 21,
        "./manipulatives": 24
    }],
    23: [function(e, t, i) {
        var o = e("./core/heart"),
            a = e("./score"),
            l = e("./popups"),
            T = {},
            s = null,
            c = null,
            n = 4,
            r = n,
            u = [];
        T.init = function(e, t) {
            s = o(e.Heart), c = t
        }, T.getHeartClass = function() {
            return s
        }, T.addHearts = function() {
            for (var e = 0; e < r; e++) {
                var t = new s;
                t.init(), c.addChild(t), t.active = !0, t.x = 93 + e * (t.width + 16), t.y = 1316, u[e] = t
            }
        }, T.removeHearts = function() {
            for (var e = 0; e < u.length; e++) {
                var t = u[e];
                c.removeChild(t)
            }
            u.length = 0
        }, T.set = function(e) {
            r = n = e
        }, T.get = function() {
            return r
        }, T.getMax = function() {
            return n
        }, T.getLost = function() {
            return n - r
        }, T.increase = function(e) {
            r += e
        }, T.decrease = function(e) {
            r -= e;
            for (var t = 0; t < u.length; t++) {
                var i = u[t];
                if (i.active) {
                    i.die();
                    break
                }
            }
        }, T.addFloat = function(e, t, i, o, n) {
            i = i || 500, o = o || 50, n = n || c;
            var r = new s;
            r.init(), n.addChild(r), r.heartPurple.visible = !1, r.heartGreen.visible = !1, r.heartRed.visible = !0, r.x = e - r.width / 2, r.y = t, createjs.Tween.get(r).to({
                y: r.y - o,
                alpha: 0
            }, i).call(function() {
                n.removeChild(r)
            })
        }, T.killAllHearts = function() {
            for (var e = r = 0; e < u.length; e++) {
                var t = u[e];
                t.heartBlue.visible = !1, t.heartRed.visible = !0
            }
        }, T.showBonus = function(o) {
            var n = T.getLost(),
                r = null,
                s = setInterval(function() {
                    var e = u[n];
                    e.active && (e.bonus(), createjs.Sound.play("Ping"), a.addFloat(o, e.x + e.width / 2, e.y, 1e3, 60, null, null, 22));
                    var t = l.get();
                    if (t && (r = t.hearts)) {
                        var i = r[n];
                        i.active && (i.bonus(), a.addFloat(o, i.x + i.width / 2, i.y, 1e3, 60, null, t, 22))
                    }++n === u.length && clearInterval(s)
                }, 500)
        }, t.exports = T
    }, {
        "./core/heart": 13,
        "./popups": 25,
        "./score": 36
    }],
    24: [function(e, t, i) {
        var o = e("./core/default-manipulative"),
            n = e("./core/modal-manipulative"),
            d = e("./drop-zones"),
            l = e("./processors/modal"),
            S = e("./colors"),
            r = e("./constants"),
            s = {},
            h = null,
            T = null,
            p = null,
            b = [],
            A = [],
            P = null;

        function v(e, t, i) {
            for (var o = 0; o < A.length; o++) {
                var n = A[o];
                if (n.getText() === e && n.x === t && n.y === i) return n
            }
            return null
        }
        s.init = function(e, t) {
            h = o(e.DefaultManipulative), T = n(e.ModalManipulative), p = new createjs.Container, t.addChild(p)
        }, s.create = function(e) {
            for (var t = (P = e).manipulatives, n = 0; n < t.length; n++) {
                var i = t[n],
                    o = new h;
                if (p.addChild(o), o.init(), o.data = i, o.x = i.x, o.y = i.y, o.originX = o.x, o.originY = o.y, o.setText(i.text), o.showSubtext(), b[n] = o, i.placed) {
                    for (var r = !1, s = 0; s < t.length; s++) {
                        var a = t[s];
                        a !== i && a.text === i.text && (r = !0)
                    }
                    if (!r) {
                        o.txt.color = S.QUESTION_MARK;
                        continue
                    }
                    p.removeChild(o)
                } else o.enableUserInteraction(T, c, u);
                var l = v(i.text, i.x, i.y);
                l || (l = new h, p.addChild(l), l.init(), l.data = i, l.x = o.x, l.y = o.y, l.visible = !1, l.txt.color = S.QUESTION_MARK, l.setText(i.text), l.showSubtext(), A.push(l)), o.origin = l
            }
            for (n = 0; n < t.length; n++) o = b[n], p.addChild(o);

            function T(e) {
                e.reset(), e.scaleUp()
            }

            function c(e) {
                var t = d.get(),
                    i = d.getHovered(e);
                for (e.hover(i), n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.data.prefilled || o === e.dropZone || o.manipulative || o.fadeIn()
                }
            }

            function u(e) {
                e.scaleToNormal();
                var t = d.get(),
                    i = e.dropZone;
                for (i ? d.drop(i, e) : e.moveToOrigin(), n = 0; n < t.length; n++)(i = t[n]).data.prefilled || i === e.dropZone || i.manipulative || i.fadeIn()
            }
        }, s.createModal = function(e) {
            for (var t = (P = e).manipulatives, r = 0; r < t.length; r++) {
                var i = t[r],
                    o = new T;
                p.addChild(o), o.setData(i), o.resize(), o.enableUserInteraction(n, s, a), b[r] = o
            }

            function n(e) {
                var t = d.get();
                for (r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.visible = !0, 0 < i.alpha || createjs.Tween.get(i).to({
                        alpha: 1
                    }, 500)
                }
                e.scale = 1.15, e.txt.color = S.SECONDARY
            }

            function s(e) {
                var t = d.getHovered(e),
                    i = null;
                t && e.dropZone !== t ? (e.dropZone && ((i = e.dropZone).visible = !0, createjs.Tween.get(i).to({
                    alpha: 1
                }, 500)), e.dropZone = t, createjs.Tween.get(t).to({
                    alpha: 0
                }, 500)) : t || (e.dropZone && ((i = e.dropZone).visible = !0, createjs.Tween.get(i).to({
                    alpha: 1
                }, 500)), e.dropZone = null)
            }

            function a(e) {
                var t = e.dropZone;
                if (t) {
                    var i = t.manipulative;
                    i && (i.dropZone = null, i.x = e.originX, i.y = e.originY, i.txt.color = S.SECONDARY, i.scale = 1), t.manipulative = e, t.visible = !1, e.x = t.x, e.y = t.y, l(P, t, e)
                } else e.x = e.originX, e.y = e.originY;
                e.scale = 1;
                var o = d.get();
                for (r = 0; r < o.length; r++) {
                    var n = o[r];
                    t !== n && (n.manipulative = null, n.visible = !0, n.alpha = 1)
                }
            }
        }, s.get = function() {
            return b
        }, s.animateIn = function() {
            createjs.Tween.get(p).to({
                alpha: 1
            }, r.ANIMATION_IN_DURATION)
        }, s.animateOut = function() {
            createjs.Tween.get(p).to({
                alpha: 0
            }, r.ANIMATION_OUT_DURATION)
        }, s.isAllCorrect = function() {
            for (var e = 0; e < b.length; e++) {
                var t = b[e];
                if (!t.data.placed) {
                    if (!t.dropZone) return !1;
                    if (t.dropZone && !t.dropZone.isCorrect) return !1
                }
            }
            return !0
        }, s.getCorrect = function(e) {
            for (var t = 0; t < b.length; t++) {
                var i = b[t];
                if (e.isCorrectManipulative(i) && !i.isCorrected && !i.data.placed) return i
            }
            return null
        }, s.disable = function() {
            for (var e = 0; e < b.length; e++) {
                var t = b[e];
                t.disableUserInteraction && t.disableUserInteraction()
            }
        }, s.reset = function() {
            for (var e = 0; e < b.length; e++) {
                var t = b[e];
                createjs.Tween.removeTweens(t), t.data.placed || (t.origin && (t.origin.visible = !0), t.visible = !1)
            }
        }, s.remove = function() {
            for (var e = 0; e < b.length; e++) {
                var t = b[e];
                t.cleanUp(), p.removeChild(t)
            }
            for (e = 0; e < A.length; e++) {
                var i = A[e];
                p.removeChild(i)
            }
            b.length = 0, A.length = 0
        }, t.exports = s
    }, {
        "./colors": 4,
        "./constants": 5,
        "./core/default-manipulative": 10,
        "./core/modal-manipulative": 17,
        "./drop-zones": 21,
        "./processors/modal": 31
    }],
    25: [function(e, t, i) {
        var o = e("./core/display-object"),
            n = e("./core/event-source"),
            r = e("./core/win-popup"),
            s = e("./core/lost-popup"),
            a = e("./core/help-and-options-popup"),
            l = e("./core/lesson-complete-popup"),
            T = {},
            c = null,
            u = null,
            d = null,
            S = null,
            h = null,
            p = null,
            b = null,
            A = null,
            P = null;
        T.init = function(e, t) {
            b = t, c = r((p = e).QuestionWinPopup), u = s(e.QuestionLostPopup), d = a(e.HelpAndOptionsPopup), S = l(e.LessonCompletePopup), h = o(e.PopupModalBg)
        }, T.createWin = function() {
            if (!A) {
                this._addModalBg();
                var e = new c;
                b.addChild(e), e.init(), e.x = .5 * (p.properties.width - e.width), e.y = 200, e.closeButton.on("click", function(e) {
                    T.remove()
                }), e.rightArrow.on("click", function(e) {
                    T.remove(), n.dispatchEvent("nextQuestion")
                }), A = e
            }
        }, T.createLost = function() {
            if (!A) {
                this._addModalBg();
                var e = new u;
                b.addChild(e), e.init(), e.x = .5 * (p.properties.width - e.width), e.y = 200, e.closeButton.on("click", function(e) {
                    T.remove()
                }), e.tryAgainButton.on("click", function(e) {
                    T.remove(), n.dispatchEvent("tryAgainQuestion")
                }), e.rightArrow.on("click", function(e) {
                    T.remove(), n.dispatchEvent("nextQuestion")
                }), A = e
            }
        }, T.createHelpAndOptions = function() {
            if (!A) {
                this._addModalBg();
                var e = new d;
                b.addChild(e), e.init(), e.x = .5 * (p.properties.width - e.width), e.y = .5 * (p.properties.height - e.height), e.setTitle("Instructions"), e.closeButton.on("click", function(e) {
                    T.remove()
                }), e.instructionsPage.nextButton.on("click", function() {
                    e.setTitle("Scoring for Questions"), e.instructionsPage.visible = !1, e.scoringPage.visible = !0
                }), e.scoringPage.closeButton.on("click", function() {
                    T.remove()
                }), A = e
            }
        }, T.createLessonComplete = function() {
            if (!A) {
                this._addModalBg();
                var e = new S;
                b.addChild(e), e.init(), e.x = .5 * (p.properties.width - e.width), e.y = 200, e.closeButton.on("click", function(e) {
                    T.remove()
                }), A = e
            }
        }, T.get = function() {
            return A
        }, T.remove = function() {
            A && (A.remove(), A = null), P && (P.removeAllEventListeners("click"), b.removeChild(P), P = null)
        }, T._addModalBg = function() {
            P = new h, b.addChild(P), P.width = p.properties.width, P.height = p.properties.height, P.x = 0, P.y = 0, P.alpha = .01, P.on("click", function(e) {
                e.nativeEvent.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), e.remove(), T.remove()
            })
        }, t.exports = T
    }, {
        "./core/display-object": 11,
        "./core/event-source": 12,
        "./core/help-and-options-popup": 14,
        "./core/lesson-complete-popup": 15,
        "./core/lost-popup": 16,
        "./core/win-popup": 19
    }],
    26: [function(e, t, i) {
        var h = e("../utils"),
            p = e("../score"),
            b = e("../text-areas"),
            A = e("../drop-zones"),
            P = e("../core/event-source"),
            v = e("../life"),
            M = e("../colors");
        t.exports = function(e, t, i) {
            var o = A.get(),
                n = h.isCorrectAnswer(t, i);
            if (t.setManipulative(i, n), n) {
                createjs.Sound.play("CorrectWordDrop"), i.correct(t, !0), p.add(1), p.addFloat(1, t.x + t.width / 2, t.y), p.updateBar()
            } else if (createjs.Sound.play("IncorrectWordDrop"), v.decrease(1), v.addFloat(t.x + t.width / 2, t.y), i.wrong(t, !0), v.get() <= 0) return void P.dispatchEvent("lose");
            var r = o.indexOf(t),
                s = null,
                a = null;
            a = 0 === r || 1 === r ? (s = o[0], o[1]) : (s = o[2], o[3]);
            var l = "",
                T = null;
            if (t.manipulative && (l += t.manipulative.data.text + (o.indexOf(t) + 1).toString()), (T = h.findLogic(e, l)) || (l = "", s.manipulative && (l += s.manipulative.data.text + (o.indexOf(s) + 1).toString()), T = h.findLogic(e, l)), T || (a.manipulative && (0 < l.length && (l += "_"), l += a.manipulative.data.text + (o.indexOf(a) + 1).toString()), T = h.findLogic(e, l)), T && (b.setLowerTextAreaValue(T.explanation), T.correct ? b.animateLowerTextArea(M.SUCCESS) : b.animateLowerTextArea(M.DANGER)), A.isAllFilled()) {
                var c = o[0].manipulative.data.text + "1_" + o[1].manipulative.data.text + "2",
                    u = o[2].manipulative.data.text + "3_" + o[3].manipulative.data.text + "4",
                    d = h.findLogic(e, c),
                    S = h.findLogic(e, u);
                d && S && d.correct && S.correct && P.dispatchEvent("win")
            }
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    27: [function(e, t, i) {
        var S = e("../utils"),
            h = e("../score"),
            p = e("../text-areas"),
            b = e("../drop-zones"),
            A = e("../core/event-source"),
            P = e("../life"),
            v = e("../colors");
        t.exports = function(e, t, i) {
            var o = b.get(),
                n = o.indexOf(t) + 1,
                r = i.data.text,
                s = S.findWrongAnswer(e, r, n),
                a = null === s;
            if (t.setManipulative(i, a), a) {
                createjs.Sound.play("CorrectWordDrop"), i.correct(t, !0), h.add(1), h.addFloat(1, t.x + t.width / 2, t.y), h.updateBar(), p.resetLowerTextArea()
            } else if (createjs.Sound.play("IncorrectWordDrop"), i.wrong(t, !0), P.decrease(1), P.addFloat(t.x + t.width / 2, t.y), p.setLowerTextAreaValue(s.explanation), p.animateLowerTextArea(v.DANGER), P.get() <= 0) return void A.dispatchEvent("lose");
            for (var l = !0, T = !0, c = 0; c < 5; c++) {
                var u = o[c];
                if (!u.manipulative || u.manipulative && !u.isCorrect) {
                    l = !1;
                    break
                }
            }
            for (c = 5; c < 10; c++)
                if (!(u = o[c]).manipulative || u.manipulative && !u.isCorrect) {
                    T = !1;
                    break
                } var d = null;
            l && n < 6 ? d = S.findCorrectAnswer(e, n) : T && 6 <= n && (d = S.findCorrectAnswer(e, n)), d && (p.setLowerTextAreaValue(d.explanation), p.animateLowerTextArea(v.SUCCESS)), l && T && A.dispatchEvent("win")
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    28: [function(e, t, i) {
        var n = e("../utils"),
            r = e("../score"),
            s = e("../text-areas"),
            a = e("../drop-zones"),
            l = e("../manipulatives"),
            T = e("../core/event-source"),
            c = e("../life"),
            u = e("../colors");
        t.exports = function(e, t, i) {
            var o = n.isCorrectAnswer(t, i);
            if (t.setManipulative(i, o), o) {
                i.correct(t, !0), i.disableUserInteraction(), createjs.Sound.play("CorrectWordDrop"), r.add(1), r.addFloat(1, t.x + t.width / 2, t.y), r.updateBar(), s.setLowerTextAreaValue(a.getExplanation(t)), s.animateLowerTextArea(u.SUCCESS), (a.isAllCorrect() || l.isAllCorrect()) && T.dispatchEvent("win")
            } else i.wrong(t, !0), createjs.Sound.play("IncorrectWordDrop"), c.decrease(1), c.addFloat(t.x + t.width / 2, t.y), s.setLowerTextAreaValue(a.getExplanation(t)), s.animateLowerTextArea(u.DANGER), c.get() <= 0 && T.dispatchEvent("lose")
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../manipulatives": 24,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    29: [function(e, t, i) {
        var S = e("../utils"),
            h = e("../score"),
            p = e("../text-areas"),
            b = e("../drop-zones"),
            A = e("../manipulatives"),
            P = e("../core/event-source"),
            v = e("../life"),
            M = e("../colors");
        t.exports = function(e, t, i) {
            if (t || i) {
                var n = b.get(),
                    o = S.isCorrectAnswer(t, i),
                    r = n.indexOf(t);
                if (c = e.conditionals.find(function(e) {
                        return !!e.dropZones && -1 < e.dropZones.indexOf(r)
                    }), t.setManipulative(i, o), p.resetLowerTextArea(), o) {
                    if (createjs.Sound.play("CorrectWordDrop"), i.correct(t, !0), i.disableUserInteraction(), u = 1, h.add(u), h.addFloat(u, t.x + t.width / 2, t.y), h.updateBar(), c && function(e) {
                            for (var t = 0; t < e.length; t++) {
                                if (!n[e[t]].manipulative) return !1
                            }
                            return !0
                        }(c.dropZones)) {
                        var s = d(c.dropZones),
                            a = c.correctAnswers.find(function(e) {
                                return e.text === s
                            });
                        if (a) p.setLowerTextAreaValue(a.explanation), p.animateLowerTextArea(M.SUCCESS), (b.isAllCorrect() || A.isAllCorrect()) && P.dispatchEvent("win");
                        else {
                            var l = c.wrongAnswers,
                                T = l.find(function(e) {
                                    return !e.text
                                });
                            T && (p.setLowerTextAreaValue(T.explanation), p.animateLowerTextArea(M.DANGER), function(e) {
                                for (var t = 0; t < e.length; t++) {
                                    var i = n[e[t]].manipulative;
                                    i && i.enableUserInteraction(i.onPick, i.onMove, i.onDrop)
                                }
                            }(c.dropZones))
                        }
                    }
                } else createjs.Sound.play("IncorrectWordDrop"), i.wrong(t, !0), v.decrease(1), v.addFloat(t.x + t.width / 2, t.y), c && (s = d(c.dropZones), (T = (T = (l = c.wrongAnswers).find(function(e) {
                    return e.text === s
                })) || l.find(function(e) {
                    return !e.text
                })) && (p.setLowerTextAreaValue(T.explanation), p.animateLowerTextArea(M.DANGER))), v.get() <= 0 && P.dispatchEvent("lose")
            } else {
                var c = e.conditionals.find(function(e) {
                    return "no_answer" === e.text
                });
                if (c)
                    if (c.isCorrect) {
                        createjs.Sound.play("CorrectWordDrop");
                        var u = 1;
                        h.add(u), h.updateBar(), P.dispatchEvent("win")
                    } else createjs.Sound.play("IncorrectWordDrop"), v.decrease(1), v.get() <= 0 && P.dispatchEvent("lose")
            }

            function d(e) {
                for (var t = "", i = 0; i < e.length; i++) {
                    var o = n[e[i]];
                    o.manipulative && (0 < t.length && (t += "_"), t += o.manipulative.data.text)
                }
                return t
            }
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../manipulatives": 24,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    30: [function(e, t, i) {
        var T = e("../utils"),
            c = e("../score"),
            u = e("../text-areas"),
            d = e("../drop-zones"),
            S = e("../core/event-source"),
            h = e("../life"),
            p = e("../colors");
        t.exports = function(e, t, i) {
            var o = T.isCorrectAnswer(t, i);
            if (t.setManipulative(i, o), o) {
                createjs.Sound.play("CorrectWordDrop"), i.correct(t, !0), c.add(1), c.addFloat(1, t.x + t.width / 2, t.y), c.updateBar()
            } else if (createjs.Sound.play("IncorrectWordDrop"), h.decrease(1), h.addFloat(t.x + t.width / 2, t.y), i.wrong(t, !0), h.get() <= 0) return void S.dispatchEvent("lose");
            if (d.isAllFilled()) {
                for (var n = d.get(), r = "", s = 0; s < n.length; s++) {
                    var a = n[s];
                    0 < r.length && (r += "_"), r += a.manipulative.data.text + (s + 1).toString()
                }
                var l = T.findLogic(e, r);
                l ? l.correct && (u.setLowerTextAreaValue(l.explanation), u.animateLowerTextArea(p.SUCCESS), S.dispatchEvent("win")) : (l = T.findLogic(e, ""), h.decrease(1), h.addFloat(t.x + t.width / 2, t.y), u.setLowerTextAreaValue(l.explanation), u.animateLowerTextArea(p.DANGER), h.get() <= 0 && S.dispatchEvent("lose"))
            }
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    31: [function(e, t, i) {
        var l = e("../utils"),
            T = e("../score"),
            c = e("../text-areas"),
            u = e("../drop-zones"),
            d = e("../manipulatives"),
            S = e("../core/event-source"),
            h = e("../life"),
            p = e("../colors");
        t.exports = function(e, t, i) {
            var o = l.isCorrectAnswer(t, i);
            if (t.isCorrect = o) {
                createjs.Sound.play("CorrectWordDrop"), i.disableUserInteraction(), i.txt.color = p.SUCCESS;
                T.add(1), T.addFloat(1, t.x + t.width / 2, t.y), T.updateBar(), c.setLowerTextAreaValue(u.getExplanation(t)), c.animateLowerTextArea(p.SUCCESS), (u.isAllCorrect() || d.isAllCorrect()) && S.dispatchEvent("win")
            } else if (createjs.Sound.play("IncorrectWordDrop"), i.txt.color = p.DANGER, h.decrease(1), h.addFloat(t.x + t.width / 2, t.y), c.setLowerTextAreaValue(u.getExplanation(t)), c.animateLowerTextArea(p.DANGER), h.get() <= 0) {
                for (var n = u.get(), r = 0; r < n.length; r++) {
                    var s = n[r];
                    createjs.Tween.removeTweens(s), s.visible = !0, s.alpha = 1;
                    var a = s.data;
                    "" !== a.text && (s.txt.text = a.text, s.txt.color = p.DANGER)
                }
                S.dispatchEvent("lose")
            }
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../manipulatives": 24,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    32: [function(e, t, i) {
        var S = e("../utils"),
            h = e("../score"),
            p = e("../text-areas"),
            b = e("../drop-zones"),
            A = e("../manipulatives"),
            P = e("../core/event-source"),
            v = e("../life"),
            M = e("../colors");
        t.exports = function(e, t, i) {
            var n = b.get(),
                o = S.isCorrectAnswer(t, i);
            if (t.setManipulative(i, o), p.resetLowerTextArea(), o) {
                i.correct(t, !0), i.disableUserInteraction(), createjs.Sound.play("CorrectWordDrop"), h.add(1), h.addFloat(1, t.x + t.width / 2, t.y), h.updateBar()
            } else if (i.wrong(t, !0), createjs.Sound.play("IncorrectWordDrop"), v.decrease(1), v.addFloat(t.x + t.width / 2, t.y), v.get() <= 0) return void P.dispatchEvent("lose");
            var r = n.indexOf(t),
                s = e.conditionals.find(function(e) {
                    return -1 < e.dropZones.indexOf(r)
                });
            if (s && function(e) {
                    for (var t = 0; t < e.length; t++) {
                        if (!n[e[t]].manipulative) return !1
                    }
                    return !0
                }(s.dropZones)) {
                var a = function(e) {
                        for (var t = "", i = 0; i < e.length; i++) {
                            var o = n[e[i]];
                            0 < t.length && (t += "_"), t += o.manipulative.data.text
                        }
                        return t
                    }(s.dropZones),
                    l = !1;
                if (s.answer && a === s.answer) l = !0;
                else if (s.answers)
                    for (var T = s.answers, c = 0; c < T.length; c++) {
                        if (a === T[c]) {
                            l = !0;
                            break
                        }
                    }
                var u = l ? s.explanation : s.hint,
                    d = l ? M.SUCCESS : M.DANGER;
                p.setLowerTextAreaValue(u), p.animateLowerTextArea(d)
            }(b.isAllCorrect() || A.isAllCorrect()) && P.dispatchEvent("win")
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../manipulatives": 24,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    33: [function(e, t, i) {
        var n = e("../utils"),
            r = e("../score"),
            s = e("../text-areas"),
            a = e("../drop-zones"),
            l = e("../manipulatives"),
            T = e("../core/event-source"),
            c = e("../life"),
            u = e("../colors");
        t.exports = function(e, t, i) {
            var o = n.isCorrectAnswer(t, i);
            if (t.setManipulative(i, o), o) {
                i.correct(t, !0), i.disableUserInteraction(), createjs.Sound.play("CorrectWordDrop"), r.add(1), r.addFloat(1, t.x + t.width / 2, t.y), r.updateBar(), s.setLowerTextAreaValue(a.getExplanation(t)), s.animateLowerTextArea(u.SUCCESS), (a.isAllCorrect() || l.isAllCorrect()) && T.dispatchEvent("win")
            } else i.wrong(t, !0), createjs.Sound.play("IncorrectWordDrop"), c.decrease(1), c.addFloat(t.x + t.width / 2, t.y), "" === t.data.text ? s.setLowerTextAreaValue(a.getExplanation(t)) : s.setLowerTextAreaValue(t.data.hint), s.animateLowerTextArea(u.DANGER), c.get() <= 0 && T.dispatchEvent("lose")
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../manipulatives": 24,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    34: [function(e, t, i) {
        var l = e("../utils"),
            T = e("../score"),
            c = e("../text-areas"),
            u = e("../drop-zones"),
            d = e("../core/event-source"),
            S = e("../life"),
            h = e("../colors");
        t.exports = function(s, e, t) {
            var a = u.get(),
                i = l.isCorrectAnswer(e, t);
            if (e.setManipulative(t, i), i) {
                t.correct(e, !0), t.disableUserInteraction(), createjs.Sound.play("CorrectWordDrop"), T.add(1), T.addFloat(1, e.x + e.width / 2, e.y), T.updateBar();
                var o = function() {
                    if (!u.isAllFilled()) return null;
                    for (var e = "", t = 0; t < a.length; t++) {
                        var i = a[t];
                        !i.data.prefilled && i.manipulative && (0 < e.length && (e += "_"), e += i.manipulative.data.text)
                    }
                    var o = s.correctAnswers;
                    for (t = 0; t < o.length; t++) {
                        var n = o[t];
                        if (n.text === e) return n
                    }
                    return null
                }();
                if (o) c.setLowerTextAreaValue(o.explanation), c.animateLowerTextArea(h.SUCCESS), d.dispatchEvent("win");
                else if (u.isAllFilled()) {
                    var n = r();
                    n && (c.setLowerTextAreaValue(n), c.animateLowerTextArea(h.DANGER))
                }
            } else t.wrong(e, !0), createjs.Sound.play("IncorrectWordDrop"), S.decrease(1), S.addFloat(e.x + e.width / 2, e.y), (n = r()) && (c.setLowerTextAreaValue(n), c.animateLowerTextArea(h.DANGER)), S.get() <= 0 && d.dispatchEvent("lose");

            function r() {
                for (var e = "", t = 0; t < a.length; t++) {
                    var i = a[t];
                    !i.data.prefilled && i.manipulative && (0 < e.length && (e += "_"), e += i.manipulative.data.text)
                }
                var o = s.wrongAnswers;
                for (t = 0; t < o.length; t++) {
                    var n = o[t];
                    if (n.text === e) return n.explanation
                }
                var r = o.find(function(e) {
                    return "" === e.text
                });
                return r ? r.explanation : null
            }
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../score": 36,
        "../text-areas": 37,
        "../utils": 39
    }],
    35: [function(e, t, i) {
        var T = e("../score"),
            c = e("../text-areas"),
            u = e("../drop-zones"),
            d = e("../core/event-source"),
            S = e("../life"),
            h = e("../colors");
        t.exports = function(e, t, i) {
            var o = u.get(),
                n = o.indexOf(t) + 1,
                r = function(e, t, i) {
                    for (var o = e.wrongAnswers, n = 0; n < o.length; n++) {
                        var r = o[n];
                        if (-1 < r.positions.indexOf(i) && -1 < r.texts.indexOf(t)) return r
                    }
                    return null
                }(e, i.data.text, n),
                s = null === r;
            if (t.setManipulative(i, s), c.resetLowerTextArea(), s) {
                createjs.Sound.play("CorrectWordDrop"), i.correct(t, !0), T.add(1), T.addFloat(1, t.x + t.width / 2, t.y), T.updateBar();
                var a = function(e, t) {
                    for (var i = e.correctAnswers, o = 0; o < i.length; o++) {
                        var n = i[o];
                        if (n.positions && -1 < n.positions.indexOf(t)) return n
                    }
                    return null
                }(e, n);
                if (!a) {
                    var l = [n, n % 2 == 0 ? n - 1 : n + 1];
                    a = function(e, t, i) {
                        for (var o = "", n = 0; n < i.length; n++) {
                            var r = i[n],
                                s = t[r - 1];
                            s.manipulative && (0 < o.length && (o += "_"), o += s.manipulative.data.text)
                        }
                        var a = e.correctAnswers;
                        for (n = 0; n < a.length; n++) {
                            var l = a[n];
                            if (l.text && l.text === o) return l
                        }
                        return null
                    }(e, o, l = l.sort())
                }
                if (!a) return;
                c.setLowerTextAreaValue(a.explanation), c.animateLowerTextArea(h.SUCCESS), u.isAllFilled() && function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (!i.manipulative) return !1;
                        if (!i.isCorrect) return !1
                    }
                    return !0
                }(o) && d.dispatchEvent("win")
            } else createjs.Sound.play("IncorrectWordDrop"), i.wrong(t, !0), S.decrease(1), S.addFloat(t.x + t.width / 2, t.y), c.setLowerTextAreaValue(r.explanation), c.animateLowerTextArea(h.DANGER), S.get() <= 0 && d.dispatchEvent("lose")
        }
    }, {
        "../colors": 4,
        "../core/event-source": 12,
        "../drop-zones": 21,
        "../life": 23,
        "../score": 36,
        "../text-areas": 37
    }],
    36: [function(e, t, i) {
        var o = e("./core/score-bar"),
            n = e("./popups"),
            T = e("./colors"),
            r = {},
            c = null,
            s = null,
            u = null,
            a = 0,
            l = 0,
            d = 0,
            S = null;
        r.init = function(e, t) {
            c = e.ScoreFloat, s = o(e.ScoreBar), u = t, S = new s, u.addChild(S), S.init(), S.x = 387, S.y = 1314, S.updateFill(0)
        }, r.setTotal = function(e) {
            a = e
        }, r.getTotal = function() {
            return a
        }, r.set = function(e) {
            l = e, d = 0
        }, r.get = function() {
            return l
        }, r.add = function(e) {
            l += e, d = e
        }, r.addBonus = function(t) {
            var i = 0,
                o = setInterval(function() {
                    l++, ++i === t && clearInterval(o), S.setScore(l, a), S.updateFill(l / a, 100), S.updatePlus(i, 0);
                    var e = n.get();
                    e && e.updateScoreBar(l, a, i, 100)
                }, 100)
        }, r.setChapter = function(e) {
            S.setChapter(e)
        }, r.addFloat = function(e, t, i, o, n, r, s, a) {
            o = o || 500, n = n || 50, r = r || T.SUCCESS, s = s || u;
            var l = new c;
            s.addChild(l), l.txt.text = "+" + e, l.txt.color = r, l.x = t, l.y = i, isNaN(a) || (l.txt.font = a + 'px "Lato"'), createjs.Tween.get(l).to({
                y: l.y - n,
                alpha: 0
            }, o).call(function() {
                s.removeChild(l)
            })
        }, r.updateBar = function() {
            S.setScore(l, a), S.updateFill(l / a, 60), S.updatePlus(d, 500)
        }, r.resetPlus = function() {
            d = 0, S.updatePlus(0, 0)
        }, t.exports = r
    }, {
        "./colors": 4,
        "./core/score-bar": 18,
        "./popups": 25
    }],
    37: [function(e, t, i) {
        var o = e("./colors"),
            n = e("./constants"),
            r = {},
            s = null,
            a = null,
            l = !1,
            T = null,
            c = null,
            u = null,
            d = null,
            S = null,
            h = 0,
            p = null;
        r.init = function(e, t) {
            a = (s = t).lowerTextArea, u = s.timerTxt, d = s.logicInstructionsTxt, S = s.logicInstructionsTxt2, h = S.y, c = s.upperTextArea, p = s.mainIdeaTxt
        }, r.unInit = function(e) {
            e.removeChild(e.lowerTextArea), e.removeChild(e.upperTextArea), e.removeChild(e.questionNumberTxt), e.removeChild(e.timerTxt)
        }, r.setUpperTextAreaValue = function(e) {
            c.text = e
        }, r.getUpperTextAreaValue = function() {
            return c.text
        }, r.animateInUpperTextArea = function() {
            return new Promise(function(e) {
                createjs.Tween.get(c).to({
                    alpha: 1
                }, n.ANIMATION_IN_DURATION).call(e)
            })
        }, r.animateOutUpperTextArea = function() {
            return new Promise(function(e) {
                createjs.Tween.get(c).to({
                    alpha: 0
                }, n.ANIMATION_OUT_DURATION).call(e)
            })
        }, r.resetUpperTextArea = function() {
            createjs.Tween.removeTweens(c), c.text = "", c.alpha = 0
        }, r.setLowerTextAreaValue = function(e) {
            a.text = e
        }, r.flashLowerTextArea = function(e) {
            var t = a.color;
            a.color = e, T = setTimeout(function() {
                T = null, a.color = t
            }, 650)
        }, r.animateLowerTextArea = function(e) {
            if ("" !== a.text) {
                if (l) createjs.Tween.get(a).to({
                    y: 1311
                }, 150).call(function() {
                    l = !1, r.animateLowerTextArea(e)
                });
                else {
                    var t = a.getMeasuredHeight(),
                        i = 1306 - t;
                    a.y = 1076 - t - 5, createjs.Tween.get(a).to({
                        y: i
                    }, 300).call(function() {
                        l = !0, r.flashLowerTextArea(e)
                    })
                }
            } else this.resetLowerTextArea()
        }, r.resetLowerTextArea = function() {
            clearTimeout(T), createjs.Tween.removeTweens(a), a.color = o.SECONDARY, a.text = "", a.y = 1076 - a.getMeasuredHeight() - 5, l = !1
        }, r.setTimerValue = function(e) {
            var t = Math.floor(e / 60),
                i = e - 60 * t;
            t < 10 && (t = "0" + t), i < 10 && (i = "0" + i), u.text = t + ":" + i
        }, r.resetTimerText = function() {
            u.text = ""
        }, r.showTimer = function() {
            u.visible = !0
        }, r.hideTimer = function() {
            u.visible = !1
        }, r.setLogicInstructionsTextValue = function(e) {
            d.text = e
        }, r.setLogicInstructionsText2Value = function(e) {
            S.text = e
        }, r.setLogicInstructionsText2Y = function(e) {
            e = e || h, S.y = e
        }, r.resetLogicTexts = function() {
            d.text = "", S.text = "", S.y = h
        }, r.setMainIdeaTxtValue = function(e) {
            p.text = e
        }, r.resetMainIdeaText = function() {
            p.text = ""
        }, t.exports = r
    }, {
        "./colors": 4,
        "./constants": 5
    }],
    38: [function(e, t, i) {
        var o = e("./core/event-source"),
            n = {},
            r = 0,
            s = null,
            a = !1;
        n.start = function(e) {
            r = e;
            var i = 0;
            s = createjs.Ticker.on("tick", function(e) {
                if (!a) {
                    if (1e3 <= (i += e.delta)) {
                        i = 0, r--;
                        var t = new createjs.Event("timer");
                        t.time = r, o.dispatchEvent(t)
                    }
                    r <= 0 && (e.remove(), o.dispatchEvent("timerComplete"))
                }
            })
        }, n.stop = function() {
            r = 0, a = !1, createjs.Ticker.off("tick", s)
        }, n.pause = function() {
            a = !0
        }, n.resume = function() {
            a = !1
        }, n.getTime = function() {
            return r
        }, t.exports = n
    }, {
        "./core/event-source": 12
    }],
    39: [function(e, t, i) {
        var o = e("mobile-detect");
        t.exports = {
            isMobile: function() {
                return null !== new o(window.navigator.userAgent).mobile()
            },
            isPhone: function() {
                return null !== new o(window.navigator.userAgent).phone()
            },
            isIOS: function() {
                return "iOS" === new o(window.navigator.userAgent).os()
            },
            isCorrectAnswer: function(e, t) {
                if (t.data.text === e.data.text) return !(t.data.subtext || e.data.subtext && !e.data.prefilledSubtext) || t.data.subtext === e.data.subtext;
                if (e.data.texts)
                    for (var i = 0; i < e.data.texts.length; i++) {
                        var o = e.data.texts[i];
                        if (t.data.text === o) {
                            if (t.data.subtext || e.data.subtexts) {
                                var n = e.data.subtexts ? e.data.subtexts[i] : null;
                                return t.data.subtext === n
                            }
                            return !0
                        }
                    }
                return !1
            },
            findLogic: function(e, t) {
                for (var i = 0; i < e.logics.length; i++) {
                    var o = e.logics[i];
                    if (o.text === t) return o
                }
                return null
            },
            findWrongAnswer: function(e, t, i) {
                for (var o = e.wrongAnswers, n = 0; n < o.length; n++) {
                    var r = o[n];
                    if (-1 < r.positions.indexOf(i) && -1 < r.texts.indexOf(t)) return r
                }
                return null
            },
            findCorrectAnswer: function(e, t) {
                for (var i = e.correctAnswers, o = 0; o < i.length; o++) {
                    var n = i[o];
                    if (-1 < n.positions.indexOf(t)) return n
                }
                return null
            },
            getAllUrlParams: function(e) {
                var t = e ? e.split("?")[1] : window.location.search.slice(1),
                    i = {};
                if (t)
                    for (var o = (t = t.split("#")[0]).split("&"), n = 0; n < o.length; n++) {
                        var r = o[n].split("="),
                            s = r[0],
                            a = void 0 === r[1] || r[1];
                        if (s = s.toLowerCase(), "string" == typeof a && (a = a.toLowerCase()), s.match(/\[(\d+)?\]$/)) {
                            var l = s.replace(/\[(\d+)?\]/, "");
                            if (i[l] || (i[l] = []), s.match(/\[\d+\]$/)) {
                                var T = /\[(\d+)\]/.exec(s)[1];
                                i[l][T] = a
                            } else i[l].push(a)
                        } else i[s] ? (i[s] && "string" == typeof i[s] && (i[s] = [i[s]]), i[s].push(a)) : i[s] = a
                    }
                return i
            }
        }
    }, {
        "mobile-detect": 1
    }]
}, {}, [2]);