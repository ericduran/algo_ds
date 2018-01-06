function findMatch(sen, start) {
  let open = '(';
  let close = ')';

  let stack = [];

  for (let i = start; i < sen.length; i++) {
      if (sen[i] === close && stack.length <= 1) {
          return i;
      }

      if (sen[i] === close) {
          stack.pop();
      }

      if (sen[i] === open) {
          stack.push(open);
      }
  }

  return false;

}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(findMatch("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.",
10
));
