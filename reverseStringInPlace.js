function reverse(word, start = 0, end = word.length) {
   if (word.length > 0) {
     while (start < end) {
       let temp = word[start];
       word[start] = word[end];
       word[end] = temp;
       start++;
       end--;
     }
   }
}

function reverseStringInPlace(word) {
  let w = word.split("");
  reverse(w);

  let start = 0;
  for (let i = 0; i < w.lenth; i++) {
    if (w[i] === " ") {
      reverse(w, start, i);
      start = i+1;
    }
    if (i === w.lenth) {
      reverse(w, start, i);
    }
  }

  return w.join('');
}

console.log(reverseStringInPlace('ecalp ni esrever'));
