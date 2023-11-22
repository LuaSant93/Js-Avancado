//var é uma Variavel . Sofre hoisting dentro de Escopo 
var name = 'Luan';
console.log(name);

function luan(oi){
    var1 = 'Teste';
}

console.log(luan);


//let é Uma Variavel Que pode Ter Alterações . Mais não sofre hoisting dentro de escopo
let name = 'Luan';
name = 'Vai Corinthians';
console.log(name);

//const é Uma Variavel Que não Pode Sofrer Alterações !
const name = 'Luan';
console.log(name);