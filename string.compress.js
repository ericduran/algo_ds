/**
 * @file 
 * 
 * This is one of the 1st problems I did, so this might need a review/update.
 * I was clueless when I did this one.
 * 
 * Given an input string, write a function that returns the Run Length Encoded string for the input string.
 * For example, if the input string is “wwwwaaadexxxxxx”, then the function should return “w4a3d1e1x6”.
 * 
 * @see https://www.geeksforgeeks.org/run-length-encoding/
 */

class Compress {
  constructor(input) {
    this.input = input;
    this.len = input.length;
    this.cur = input[0];
    this.count = 0;
    this.output = [];
  }

  flush() {
    this.output.push(this.cur);
    this.output.push(this.count);
  }

  out() {
    if (this.len < this.output.length) {
      return this.input;
    }
    return this.output.join('');
  }

  compress () {
    // 1st mistake: Forgot the var/let in the for loop the 1st time around.
    for(let i=0; i< this.len; i++) {
      if (this.cur === this.input[i]) {
        this.count++;
      }
      else {
        this.flush();
        this.cur = this.input[i];
        this.count = 1; // Reset our count to 1 after flushing.
      }
    }

    // Flush whatever we have in our buffer when we reach the end.
    this.flush();
    return this.out();
  }
}


let abc = new Compress('aabcccccaaa');
console.log(abc.compress(), 'should return a2b1c5a3');

let z = new Compress('zzzzzzzzzzzz');
console.log(z.compress(), 'should return z12');

let ex = new Compress('wwwwaaadexxxxxx');
console.log(ex.compress(), 'should return “w4a3d1e1x6”');
