function countLetter(phrase, letter) {
    var amount = 0

    for (var i = 0; i < phrase.length; i++) {
        if (phrase[i] == letter) {
            amount++
        }
    }
    return amount;
}