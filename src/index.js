module.exports = function toReadable (number) {
    const nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
        10: 'hundred'
    };

    let rez = [];
    const str = String(number);
    
    const makeString1 = (n) => {
        rez.push(nums[n]);
    };

    const makeString2 = (n) => {
        rez.push(dozens[Math.floor(n / 10)]);
        
        if (!!+String(n)[1]) {
            makeString1(String(n)[1]);
        }
    };

    const makeString3 = (n) => {
        makeString1(Math.floor(n / 100));
        rez.push(dozens[10]);

        const dis = n - `${Math.floor(n / 100)}00`;

        if (dis && dis < 20) {
            makeString1(dis);
        } else if (dis && dis >= 20) {
            makeString2(dis);
        }
    };

    if (number < 20) {
        makeString1(number);
    }

    if (number >= 20 && number < 100) {
        makeString2(number);
    }

    if (number >= 100 && number < 1000) {
        makeString3(number);
    }

    return rez.join(' ');
}
