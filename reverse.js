var message = 'find you will pain only go you recordings security the into if';

// reverse entire sentence -- then reverse word by work

function reverseWords(msg, i = 0, len = null) {
  // Convert the string to array because strings are immutable in JS.
  var msgArray = msg.split('');
  if (len === null) {
    len = msgArray.length - 1;
  }
  var end = len;
  for (i=0; i <= end; i++) {
      var t = msgArray[i];
      msgArray[i] = msgArray[end];
      msgArray[end] = t;
      end--;
  }

  // After this we need to reverse the words individually now.

  console.log(msgArray, 'end');
  //
  //
  // let len = msgA.length;
  // let start = 0;
  // var end = len - 1;
  // console.log(len);
  // for (i=0; i < len; i++) {
  //   console.log(msgA[i], msgA[end]);
  //
  //   var tmp = msgA[i];
  //
  //   console.log('tmp', tmp);
  //   console.log('msgA[i]', msgA[i]);
  //   console.log('msgA[end]', msgA[end]);
  //
  //   msgA[i] = msgA[end];
  //
  //
  //   console.log('tmp', tmp);
  //   console.log('msgA[i]', msgA[i]);
  //   console.log('msgA[end]', msgA[end]);
  //
  //
  //
  //   msgA[end] = tmp;
  //   console.log('Swap : ', tmp, msgA[end]);
  //
  //   end = end - len;
  // }

  // Join back the array into a string.
  // console.log(msgA.join(''));
}

reverseWords(message);
