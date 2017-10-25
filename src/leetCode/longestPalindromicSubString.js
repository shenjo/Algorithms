/**
 * Created by SHENJO on 10/13/2017.
 * @return {string}
 */


function LPS (str) {
  // can run but below test case cannot pass in leetCode caz exceed time limited
  let palindromic = {}, length = str.length, longest = { length: -1, key: null, first: null, last: null };
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
        longest = { length: lastIndex - j + 1, key, first: j, last: lastIndex }
      }
    }
  }

  return str.substring(longest.first, longest.last + 1);
}

let str = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"
console.log(LPS(str));


function highLow (numbers) {
  numbers = numbers.split(" ");
  let first = parseInt(numbers[0].trim());
  let high = first, low = first;
  for (let num of numbers) {
    num = parseInt(num.trim());
    if (num > high) {
      high = num;
    } else if (num < low) {
      low = num;
    }
  }
  return high + " " + low;
}


function countWords (words) {
  return words.reduce(function(result, word) {
    if (result[word]) {
      result[word]++
    } else {
      result[word] = 0;
    }
    return result
  }, {});
}

countWords(['apple', 'watch', 'apple'])

function reduce (arr, fn, initial) {
  initial = fn(initial,arr[0]);
  reduce()
}


