export const numberToEuro = (num) => {
    if (typeof num !== "number") throw new TypeError('Turi buti skaicius');
    if (num < 0) throw new TypeError('Turi buti teigiamas skaicius');
    if (num > 1000000000) throw new TypeError('Skaicius negali buti didesnis nei milijardas');

    let sk = Math.floor(num);

    if (sk > 100) {
        sk = sk - 100 * Math.floor(sk/100);
    }

    sk = Math.floor(sk);

    if (sk === 0) {
        return eurai[2];
    }
    if (sk === 1) {
        return eurai[0];
    }
    if (sk >= 2 && sk < 10) {
        return eurai[1];
    }
    if (sk >= 10 && sk < 21) {
        return eurai[2];
    }
    if (sk >= 21 && sk <= 100 ) {
        switch (sk % 10) {
            case 0: return eurai[2];
            case 1: return eurai[0];
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9: return eurai[1];
        }
    }
    throw Error(`Nemoku konvertuori skaiciaus ${num}`);
};

const eurai = ['euras', 'eurai', 'eurų'];
