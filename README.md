#Šis modulis skirtas skaičiui peversti lietuvišku tekstu

Kaip instaliuoti?

```
npm install number-to-lt
```


Kaip importuoti?

```
import { numberToStringLT, numberToEuroLT } from 'number-to-lt';
```

Kaip naudotis numberToStringLT?

```
const skaicius = numberToStringLT(34);
console.log(skaicius)   //trisdešimt keturi

const skaicius2 = numberToStringLT(54678);
console.log(skaiciu2)   //penkiasdešimt keturi tūkstančiai šeši šimtai septyniasdešimt aštuoni
```


Kaip naudotis numberToEuroLT?

```
const eurai = numberToEuroLT(778);
console.log(eurai)   //eaurai

const eurai2 = numberToEuroLT(13);
console.log(eaurai2)   //eurų
```
