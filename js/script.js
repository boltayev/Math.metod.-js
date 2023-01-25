
Pow()+
sqrt()+
Abs()+
Floor()+
ceil()+
round() +
trunc()


// / ------------Round---(eng yaqin butun qism)---------
function round(a){
    a = (parseInt(a * 10)) / 10;
    b = (parseInt(a * 10) + 5) / 10;
    if (a > b){
        x = parseInt(a);
    }
    else {
        x = parseInt(b);
    }
    return x
}

number = round(67.7);
console.log("round = ", number);


// // -----------Floor----(eng kichik butun qism)------------
function Floor(a){
    x = parseInt(a);
    return x
}

num = Floor(29.972);
console.log("Floor = ", num);


// // --------------- Power ---(Daraja)---------------
let Asos = 6;
let daraja = 2;

function Power(Asos, daraja) {
    let Sum = 1;
    for (let i = 0; i < daraja; i++) {
        Sum *= Asos;
    }
    return Sum;
}

Summa = Power(Asos, daraja);
console.log(`${Asos}^${daraja} =`, Summa);


// // -------------ceil----(eng katta butun qism)----------
function d(a){
    a = (parseInt(a * 10) + 5) / 10;
    b = (parseInt(a * 10) + 5) / 10;
    if (a > b){
        x = parseInt(a);
    }
    else {
        x = parseInt(b);
    }
    return x
}

number = d(67.3);
console.log("d = ", number);


// // ---------------Square--------------
function Square(x, n) {
    if (n == 1){
        return x;
    }
    else {
    for (let i = 1; i < x / n; i ++) {
        Sum = 1;
        for (let j = 0; j < n; j ++){
            Sum *= i;
        }
        if (Sum == x){
            return i;
            console.log(i);
        }
    }
}
}



//------ abs (musbat qaytaradi)----- 

function abs(sum){
    if (sum < 0){
        sum = -sum;
    }
    return sum;
}
console.log(abs(-8));

