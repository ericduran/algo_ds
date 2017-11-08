
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
    // 1 mistake: Forgot the var/let in the for loop the 1st time around.
    for(let i=0; i< this.len; i++) {
      if (this.cur === this.input[i]) {
        this.count++;
      }
      else {
        this.flush();
        this.cur = this.input[i];
        this.count = 1; // Would leave comment here as to why 1.
      }
    }
    this.flush();
    return this.out();
  }
}


let c = new Compress('aabcccccaaa');
console.log(c.compress()); // a2b1c5a3


let d = new Compress('zzzzzzzzzzzz');
console.log(d.compress()); // z12

let e = new Compress('eabc');
console.log(e.compress()); // eabc
