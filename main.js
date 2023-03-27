let amount = +prompt('Количество ступенек')
let symbol = prompt('Отступы')
let last = prompt('Конечный символ')

// for(let i = 0; i < amount; i++) {
//     last = i == 0 ?  last : symbol + last;
//     console.log(last);
// }

for(let i = 0; i < amount; i++) {
    if(i == 0) {
        last = last
    }else {
        last = symbol + last 
    }
    console.log(last);
}
