/**
 * Created by SHENJO on 10/13/2017.
 * @return {string}
 */


function LPS(str) {
    // can run but below test case cannot pass in leetCode caz exceed time limited
    console.time('lps')
    let palindromic = {}, length = str.length, longest = {length: -1, key: null, first: null, last: null};
    for (let len = 1; len <= length; len++) {
        let lastIndex = len - 1;
        for (let j = 0; j <= lastIndex; j++) {
            let key = j + "_" + lastIndex;
            if (lastIndex === j) {
                palindromic[key] = true;
            } else if (lastIndex - j === 1) {
                palindromic[key] = str[lastIndex] === str[j]
            } else {
                palindromic[key] = str[lastIndex] === str[j] && palindromic[(j + 1) + "_" + (lastIndex - 1)];
            }
            if (palindromic[key] && lastIndex - j + 1 > longest.length) {
                longest = {length: lastIndex - j + 1, key, first: j, last: lastIndex}
            }
        }
    }
    console.timeEnd('lps')
    return str.substring(longest.first, longest.last + 1);
}

// 马拉车算法 Manacher's
function MANACHER_ALGORITHM(str) {
    console.time('Manacher')
    // 预处理输入,给输入str中间插入特殊字符#，保持str length始终是奇数.
    // e.g.  abc  =>  #a#b#c#
    let newStr = `#${[...str].join('#')}#`;
    //数组p来记录每个下标处的最长回文串半径
    let p = [], max = {length: 0, centerIndex: 0}, id = 0;
    for (let i = 0, len = newStr.length; i < len; i++) {
        const symmetryIndex = 2 * id - i;
        if (p[id] && p[id] + id > i) {
            p[i] = Math.min(p[symmetryIndex], p[id] - (i - id));
        } else {
            p[i] = 1;
        }
        while (newStr[i - p[i]] && newStr[i + p[i]] && newStr[i - p[i]] === newStr[i + p[i]]) {
            p[i]++;
        }
        if (id + p[id] < i + p[i]) {
            id = i;
        }
        if (p[i] - 1 > max.length) {
            max.length = p[i] - 1;
            max.centerIndex = i;
        }
    }
    console.timeEnd('Manacher');
    return str.substr((max.centerIndex - max.length) / 2, max.length);
}

let str = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"
console.log(LPS(str));

console.log(MANACHER_ALGORITHM('aaba'));
console.log(MANACHER_ALGORITHM('aabba'));
console.log(MANACHER_ALGORITHM(str));



