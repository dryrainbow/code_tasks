// https://leetcode.com/problems/maximum-product-of-word-lengths/
// Too slow for leetcode, but work
function maxProduct(words: string[]): number {
    let sw = words.sort((a, b) => b.length - a.length)
    let res = 0;
    let setDiff = <T>(set1: Set<T>, set2: Set<T>) => {
        return new Set([...set1].filter(el=> !set2.has(el)))
    }
    let toStr = (set: Set<any>) => Array.from(set).join('')

    for (let i = 0; i < sw.length - 1; i ++) {
        for (let j = i + 1; j < sw.length; j ++ ) {
            let setI = new Set(sw[i])
            let setJ = new Set(sw[j])
            
            if (toStr(setDiff(setI, setJ)) === toStr(setI) && toStr(setDiff(setJ, setI)) === toStr(setJ)) {
                res = Math.max(res, sw[j].length * sw[i].length)
            }
        }
    }

    return res;
};


// The two words can be "abcw", "xtfn".
console.log(maxProduct(["clijnpelf","klomedgaagbpo","phmojodmahalbhhcknhckbpenheglojalhcopnbeidmibelcci","bofpmmkpkghfindopljnmdcjohafoddlhloimbobjdicinkjlp","lbeakhmkpnpolhnndi","joodkkajcaogfpkgkdlbhegdbijmhblfldgdj","kefmiajcdelnacbhcpcaljcldohpjmbekhfkeaeiefgak","bigdbnfoeikeekkcianhipopeheooea","dfdiejgdcegiphdhbmcioklkjdbndhobgboc","jkkmfgdebmpobbenbdflkjijnjfnddfcdlpbldihmphgmjdim","fhmbbidlkcdijenj","lobpgpcifabhemlkogiiapdkllbbodimpaeilklnep","didfabfigjpedafbnghikn","akfohcemhoamjbohdlkfngomafbimkgkiobd","ilflongadmddlidecdekhlgmgecmppakjlgekpepldlbgkm","jbgpjcno","dhnkohldmopjeipcin","alemgnjjclcoichpfmenpjf","pnjdjfpciadhaekinogbkcblenkc","hdldjedcoomlgfjomofilgenjflpmpfglaghgicenidgl","cclppb","knfmlncplfmjmbfkcbiopmmmhhlkemianmmgfnfbjjemcb","oeiocifokjc","ajjalinpj","ealmdcdaaeemjp","ajannpldnhnnn","hlfpjidk","mcmopbchgcmbjomp","efihho","llbmflldnbcjbgeepjkdaefblihlbd","bgmbpnfamnmemgabbl","okebkcffkkocjmedkjegiodhklhbncollomdlm","ffnlhbnabdcjo","iiaaehmejcm","ekmacioejhglckokofkodjcbpaghfcklli","kgojfmmflkllfknnnmiijnieep","pahdpacbfaeibaphobefmajiogidg","ephokkfhbjkidkhdhl","pjkkfbiicglphllgkfdbafl","pmlghkbmnaojpbjnodeimbgpjgpclbck","ohegkkpdcipdcddcmngmoggdbaccdnfk","hmhhgcaelmnmddkpccb","apfkjnnom","dlkahnnpkfmadjmmfgkjbpmfgpeccejnjdjdhjjh","cgmaneffkbdmipldkghahmffibkpmniipampbgke","hdconemlgkfliog","ml","mhhi","omclncmibphjcjmdknjonoldpbhfpijhpjkkcogelleacl","nenaaiejgihgbokpegmglcihhpffkodniagdbjjoamfcfbmaka","ffajenckbifmkhlgaadeoe","hjcim","dcdcjkejmaadbigjkhinpfjcjcmoabandpbmbhhehodkidgcpb","hlnnciccffk","kjfjdlopbacf","dglbdaeefdcfilffpdiaiadfljcoaclihkplm","nnalblfcmefgkombhdangaekadbfe","paamcflnihhjibblcbg","gkijcjaigbg","efmghdappbgnbedieklonbcgjmggmoko","ffejidjeopkomeklnjiehioomihoekglj","lmokdmkln","mkkje","oenfkifjdkfapnekbjmknhab","eaabaabnegodialpdolkhkle","oakefmnogmdgpicinkffggkdhmlcegmnkc","apbmfmejmnjdcgjgedmccakblhlohlpolaabjnalhhnmmj","anlcnjaoiidbjhhmkjgoenffelicdodpngfplncpjeeokd","jeejkklelonjdkbkhfdm","pccfilk","inkdnemcfnmlhanmdhgllmjibjcpoejg","cnfpidbmbffpipdmkndiemdojpahnijhkmb","jfc","hbodagiggkhfhggdkpobalajkogmoipfcmhpckchehi","molihaehhclkogbboiijpbpi","bafbgehgelajmopekgkchnnkeb","bped","jdapgkkgdkaibijaeoeainclmmkiiofkppocmo","pedlof","olkffpdnkpaldaopiiflmen","hdg","nhnfjpiakoaiihehhecibnnnapfgibbapjmdajkjiddcleceon","cmggjobighgllbgmjghonbnheajeodjadlbbfbhcef","ekfeggeonkloimjbhpgkpdnlhobihladkachoaehokipdclkk","pdohclfehfiihpndeikfccaa","elbcjhaaegimnkcbebejpfbnpgmhpkad","kdcbdmdfhgpiolbijookmpadmjfijiplcpjobohep","anccgocjm","gmdckginalkkjpljamlbofkpdflhmbmjeclfefpmebnhigjgca","jlcclflkoomcbfe","nhcoelcjagnjfeaggloiniloenpi","mmheoelomhmopapgeejhjbihohnehkcgicia","foinonimcagobhmlhhdlnmmnfnojbghiihpokcoafkcjinhid","opipbnclodkkiabogafinacmlena","igfgofgjhpilmahkadbk","adhdljiifmj","igddoplkkoiphbjjgljbohjmimgomknaphlenfelkbnkmoagn","apdflldan","ebh","flbkamniokndicolcgaibpakmdgppkk","heoihglk","mgjdjiogjhgpbdboggfajehfeaffnbe","bnfeldeknfhfiifghnggneedgpekeelkm","dkbdealoadcpkenbfpik","boliggjcemffjfjeghnkiecmkpjoagemfmhhjhhmop","clhhmlhdajkgnaemlcfhggjoaanedjgclcpbcpagccgeab","nifglhhd","nbcfafhfdn","aeleaopogmcakfbambjhhmjglbf","nmkohleocjijljgdfcmoaakcf","jgcjijgeikmmhjjginaeackf","aeoe","kidonpp","okgampphlihddmmeflaomplkgjil","megadheelifdgnhfomdjofkmadmjdfakodikccpaie","cenhiphmgpoeabnhcbcnigmpdfooaccofheaak","kcpcjcjfpabpiccpclkjplckgcfolmanjpjankccnnkb","agmehhmmgnhakcjhaemod","kndjgojfg","kpnenpcmldf","fcfeabej","ogccjonekjhdjlbe","dnhjobnkbgbhppkhh","ejdclpliajeolbck","cmllpneonmgnmhnghmlacnjann","fgecgmlnnegcolbdodediapefmngngnkdhh","hf","gmpbonidfnapndpdoegjpgjmdkocdbhjpe","enndamhgdlbmdpnamjpjnfmaiohmndfjgodjljnjnifpfkfao","ibn","kipblfcfehpgoppgpjdnmjdplhbcpjpbbgpn","nfgpgicpicnkgjdjmokgogfaihbchpal","ocgdfpabefo","pdkfigd","hljfiedapdmekhkmkihndkpagmicl","fajolboadfgad","cjkenaeof","kipeincgjop","helngpiibgfbjcjgggelhednkmn","nmfgddck","khejfhhgcbphcomcopho","fec","bkcbaeolccempacglldnnpldekamkf","fleieogcplppjdhihgghoijohcgmpfppicbdb","cgfhbhl","oigbohjfofdkooiogfgfglhhmgnfeicfhpomapffibn","kehncgfepniehbnodfiodpdblomljnhhdj","kjn"]))

// The two words can be "ab", "cd".
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]), 4)

// No such pair of words.
console.log(maxProduct(["a","aa","aaa","aaaa"]), 0)

