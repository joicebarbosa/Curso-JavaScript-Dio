// o que são vetores ou arrays 

// como declarar um array
/*let array = ['string', 1, true];
console.log(array);*/

//pode guardar varios tipos de dados
let array = ['string', 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
console.log(array)

/*forEach 
array.forEach(function(item, index){console.log(item, index)});*/

/*push - joga um novo dado pra dentro da array
array.push(array);
console.log(array)*/

/*pop - remove um item do final do array
array.pop(array);
console.log(array);*/

/*shift - retira um item do inicio da array
array.shift(array);
console.log(array)*/

/*unshift - adiciona um item no inicio da array
array.unshift("novo item no incio");
console.log(array);*/

/*indexOf - retorna o indece de um item dentro de um array
console.log(array.indexOf(true))*/

/*splice - remove ou substitui um item por um indece
array.splice(0,3);
console.log(array)*/

/*slice - retorna uma parte de um array existente
let novoArray = array.slice (0, 3);
console.log(novoArray)*/

//OBJETOS
let object = { string: 'string', number: 2, boolean: true, array: ["array"]};
console.log(object.boolean);

/*desestruturação do objeto
var string = object.string
console.log(string);

var arrayInterno = object.array
console.log(arrayInterno);*/

var {string, boolean, number} = object;
console.log(object)

