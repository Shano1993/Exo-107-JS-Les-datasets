// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// p1 à p4

p1.dataset.number = (parseInt(p1.dataset.number) + 10).toString();

p2.innerHTML += " La longueur est de : " + (p2.dataset.string).length.toString();
p2.dataset.string = (11).toString();

let array = p3.dataset.array.split('/');
for (let ar of array) {
    p3.innerHTML += "<br> J'aime les " + ar.trim();
}

let boolean = p4.dataset.boolean;
boolean = boolean.toLowerCase() === 'true';
if (boolean) {
    p4.innerHTML += " : la valeur vaut true";
}
else {
    p4.innerHTML += " : la valeur vaut false";
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

// p5 à p8

p5.dataset.number1 = '56';
p5.dataset.number1 = (parseInt(p5.dataset.number1) + 10).toString();

p6.dataset.string1 = "Salut le monde";
p6.innerHTML = "La longueur est de : " + (p6.dataset.string1).length.toString();
p2.dataset.string = (14).toString();

p7.dataset.array1 = 'Pommes / Poires / Abricots';
let array1 = p7.dataset.array1.split('/');
for (let ar of array1) {
    p7.innerHTML += "<br> J'aime les " + ar.trim();
}

p8.dataset.boolean1 = 'True';

let boolean1 = p8.dataset.boolean;
boolean1 = boolean1 === 'true';
if (boolean1) {
    p8.innerHTML += " la valeur vaut true";
}
else {
    p8.innerHTML += " la valeur vaut false";
}





