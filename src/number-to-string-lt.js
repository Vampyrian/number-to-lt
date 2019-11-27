export const numberToString = (num) => {
    if (typeof num !== "number") throw new TypeError('Turi buti skaicius');
    if (num < 0) throw new TypeError('Turi buti teigiamas skaicius');
    if (num > 1000000000) throw new TypeError('Skaicius negali buti didesnis nei milijardas');

    if (num === 0) {
        return 'nulis'
    }
    return konvertuokMilijonus(Math.floor(num));
};

const konvertuokMilijonus = (num) => {
    if (num >= 1000000) {
        const text = parinkGalune(Math.floor(num / 1000000), milijonai);
        return konvertuokTukstancius(Math.floor(num / 1000000)) +  text  + konvertuokTukstancius(num % 1000000);
    } else {
        return konvertuokTukstancius(num);
    }
};

const  konvertuokTukstancius = (num) => {
    if (num >= 1000) {
        const text = parinkGalune(Math.floor(num / 1000), tukstanciai);
        return konvertuokSimtus(Math.floor(num / 1000)) +  text  + konvertuokSimtus(num % 1000);
    } else {
        return konvertuokSimtus(num);
    }
};

const konvertuokSimtus = (num) => {
    if (num > 99) {
        const simtai = (Math.floor(num / 100) > 1) ? ' šimtai ' : ' šimtas ';
        return vienetai[Math.floor(num / 100)] + simtai + konvertuokDesimtis(num % 100);
    } else {
        return konvertuokDesimtis(num);
    }
};

const konvertuokDesimtis = (num) => {
    if (num < 10) {
        return vienetai[num];
    } else if (num >= 10 && num < 20) {
        return ikiDvidesimt[num - 10];
    } else {
        return desimtys[Math.floor(num / 10)] + ' ' + vienetai[num % 10];
    }
};

const parinkGalune = (num, galune) => {
    if (num > 100 && num < 121) {
        num = num / 10;
    }
    if (num === 1) {
        return galune[0];
    }
    if (num >= 2 && num < 10) {
        return galune[1];
    }
    if (num >= 10 && num < 21) {
        return galune[2];
    }
    switch (num % 10) {
        case 0: return galune[2];
        case 1: return galune[0];
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9: return galune[1];
    }
    throw Error(`Skaiciaus ${num} nemoku konvertuoti`);
};

const vienetai = ['', 'vienas', 'du', 'trys', 'keturi', 'penki', 'šeši', 'septyni', 'aštuoni', 'devyni'];
const desimtys = ['', '', 'dvidešimt', 'trisdešimt', 'keturiasdešimt', 'penkiasdešimt', 'šešiadešimt',
    'septyniasdešimt', 'aštuoniasdešimt', 'devyniasdešimt'];
const ikiDvidesimt = ['dešimt', 'vienuolika', 'dvylika', 'trylika', 'keturiolika',
    'penkiolika', 'šešiolika', 'septyniolika', 'aštuoniolika', 'devyniolika'];
const milijonai = [' milijonas ', ' milijonai ', ' milijonų '];
const tukstanciai = [' tūkstantis ', ' tūkstančiai ', ' tūkstančių '];
