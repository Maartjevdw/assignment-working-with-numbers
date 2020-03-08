var array = [];

for (var i = 0; i < 250; i++) {
    array[i] = Math.floor(Math.random() * (300 - 10 + 1)) + 10;
}

for (var i = 250; i < 500; i++) {
    array[i] = Math.floor(Math.random() * (700 - 500 + 1)) + 500;
}
console.table(array);

var grootsteGetal = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] > grootsteGetal) {
        grootsteGetal = array[i]
    }
}

var aantalGetallen = array.length;
var indexGrootsteGetal = array.indexOf(grootsteGetal);


console.log('Uit het array van ' + (aantalGetallen) + ' getallen, is het getal ' + (grootsteGetal) + ' het grootst. Dit getal zit in index ' + (indexGrootsteGetal) + ' in het array.'); 