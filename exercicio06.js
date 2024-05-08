function podeAssistir(idade, tipoIngresso) {
    if(idade >= 18 || idade >= 16 && tipoIngresso == 'meia') {
        return "pode";
    } else {
        return "não pode";
    }
}

let idade1 = 20;
let tipoIngresso1 = 'inteira';

let idade2 = 16;
let tipoIngresso2 = 'meia';

let idade3 = 15;
let tipoIngresso3 = 'meia';

console.log("Catharina pode assistir ao filme:", podeAssistir(idade1, tipoIngresso1));
console.log("Jomar pode assistir ao filme:", podeAssistir(idade2, tipoIngresso2));
console.log("Moyses 2 pode assistir ao filme:", podeAssistir(idade3, tipoIngresso3));