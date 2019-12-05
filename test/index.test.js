const {numberToStringLT, numberToEuroLT} = require('../src/index');

const skaiciai = [1,4,5,100, 4563, 3675494, 53473995];

const tekstas = ['vienas', 'keturi', 'penki', 'vienas šimtas ', 'keturi tūkstančiai penki šimtai šešiadešimt trys',
'trys milijonai šeši šimtai septyniasdešimt penki tūkstančiai keturi šimtai devyniasdešimt keturi',
'penkiasdešimt trys milijonai keturi šimtai septyniasdešimt trys tūkstančiai devyni šimtai devyniasdešimt penki'];

const eurai = ['euras', 'eurai', 'eurai', 'eurų', 'eurai', 'eurai', 'eurai'];

test('Tikrinam konvertavima i teksta', () => {
    skaiciai.forEach((skaicius, index) => {
        expect(numberToStringLT(skaicius)).toBe(tekstas[index]);
    });
});

test('Tikrinam konvertavima i eurus', () => {
    skaiciai.forEach((skaicius, index) => {
        expect(numberToEuroLT(skaicius)).toBe(eurai[index]);
    });
});
