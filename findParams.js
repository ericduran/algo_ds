let string = "Sometimes (when I ( nest them (my par)entheticals) too much (like this (and this))) they get confusing.";



function findMatching(s, start) {
  let params = 0;

  for (let i = start + 1; i < s.length; i++ ) {
    if (s[i] == '(') {
      params++;
    }

    if (s[i] == ')' && params == 0) {
      return "Location " + i;
    }
    if (s[i] == ')' && params != 0 ) {
      params--;
    }
  }

  return false;
}

console.log(findMatching(string, 10));
