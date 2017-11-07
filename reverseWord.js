
function reverseWords(msg) {
    let word = Array.from(msg);
    word = reverseHelper(word, 0, word.length);

    let lastStart = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === ' ' || i === word.length) {
            word = reverseHelper(word, lastStart, i);
            lastStart = i + 1;
        }
    }

    return word.join('');
}

function reverseHelper(word, start, end) {
    end = end - 1;
    while (start < end) {
        let t = word[end];
        word[end] = word[start];
        word[start] = t;

        start++;
        end--;
    }

    return word;
}


var message = 'find you will pain only go you recordings security the into if';
console.log(reverseWords(message));
