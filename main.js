/*  1.- Resivir una expresión.                   x
    2.- Separar los valores.                 x    
    3.- Agregar a una lista.                 x
    4.- Trasformar la lista a un árbol.          x
    5.- Crear PreOrder.                      x
    6.- Crear PosOrder.                      x
    7.- Resolver el PreOrder.                    x
    8.- Resolver el PosOrder.                    x
*/

import Lista from './lista.js';
import Nodo from './nodos.js'
import Arbol from './arbol.js'
import ArbolBinario from './arbol.js';

let lista =  new Lista();

let arbol = new ArbolBinario();
let nodo = new Nodo(20);
arbol.crear(nodo);

nodo = new Nodo(15);
arbol.crear(nodo);

nodo = new Nodo(10);
arbol.crear(nodo);

nodo = new Nodo(30);
arbol.crear(nodo);

nodo = new Nodo(45);
arbol.crear(nodo);

nodo = new Nodo(25);
arbol.crear(nodo);

console.log('PreOrder');
console.log(arbol.obtenerPreOrder());
console.log('PosOrder');
console.log(arbol.obtenerPosOrder());

/*
let ecuacion = '4+2*5-6*4/2';

console.log(ecuacion);

ecuacion = separarValores(ecuacion);
console.log(ecuacion);

console.log(incluirEnLista(ecuacion));
console.log(lista.mostrarLista());

//2
function separarValores(expresion){
    let operacion = Array.from(expresion);
    for(let i = 0; i< operacion.length; i++){
        if(operacion[i] !== '+' ){
            if(operacion[i] !== '-'){
                if(operacion[i] !== '/'){
                    if(operacion[i] !== '*'){
                        let num = operacion[i];
                        operacion[i] = parseInt(num, 10);
                    }
                }
            }
        }
    }
    return operacion;
}


//3
function incluirEnLista(expresion){
    for(let i = 0; i < expresion.length; i++){
        let valor =  new Nodo(expresion[i]);
        lista.agregar(valor);
    }

    return lista.mostrarLista();
}

*/