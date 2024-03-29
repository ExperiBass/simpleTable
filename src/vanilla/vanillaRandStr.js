function randomString(length) {
    let chars = {
        0: '`',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '0',
        11: '-',
        12: '=',
        13: 'q',
        14: 'w',
        15: 'e',
        16: 'r',
        17: 't',
        18: 'y',
        19: 'u',
        20: 'i',
        21: 'o',
        22: 'p',
        23: '[',
        24: ']',
        25: '\\',
        26: 'a',
        27: 's',
        28: 'd',
        29: 'f',
        30: 'g',
        31: 'h',
        32: 'j',
        33: 'k',
        34: 'l',
        35: ';',
        36: "'",
        37: 'z',
        38: 'x',
        39: 'c',
        40: 'v',
        41: 'b',
        42: 'n',
        43: 'm',
        44: ',',
        45: '.',
        46: '/',
        47: '~',
        48: '!',
        49: '@',
        50: '#',
        51: '$',
        52: '%',
        53: '^',
        54: '&',
        55: '*',
        56: '(',
        57: ')',
        58: '_',
        59: '+',
        60: 'Q',
        61: 'W',
        62: 'E',
        63: 'R',
        64: 'T',
        65: 'Y',
        66: 'U',
        67: 'I',
        68: 'O',
        69: 'P',
        70: '{',
        71: '}',
        72: '|',
        73: 'A',
        74: 'S',
        75: 'D',
        76: 'F',
        77: 'G',
        78: 'H',
        79: 'J',
        80: 'K',
        81: 'L',
        82: ':',
        83: '"',
        84: 'Z',
        85: 'X',
        86: 'C',
        87: 'V',
        88: 'B',
        89: 'N',
        90: 'M',
        91: '<',
        92: '>',
        93: '?',
        94: ' '
    }
    let str = ''
    let charLeng = Object.keys(chars).length
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }
    for (let i = 0; i < length; i++) {
        let num = getRandomInt(charLeng)

        str += chars[num]
    }
    return str
}