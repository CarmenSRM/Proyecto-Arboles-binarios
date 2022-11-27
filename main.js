/*  1.- Resivir una expresión.                   x
    2.- Separar los valores.                 x    
    3.- Agregar a una lista.                 x
    4.- Trasformar la lista a un árbol.          x
    5.- Crear preOrden.                      x
    6.- Crear posOrden.                      x
    7.- Resolver el preOrden.                x
    8.- Resolver el posOrden.                x
*/

import Lista from './lista.js';
import Nodo from './nodos.js'
import ArbolBinario from './arbol.js';

let lista =  new Lista();
/*
let arbol = new ArbolBinario();

console.log('PreOrden');
console.log(arbol.obtenerPreOrden());
console.log('PosOrden');
console.log(arbol.obtenerPosOrden());
*/

let ecuacion = '4+2*5-6*4/2';

//console.log(ecuacion);

ecuacion = separarValores(ecuacion);
//console.log(ecuacion);

//console.log(incluirEnLista(ecuacion));
//console.log(lista.mostrarLista());

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
/* 

//3
function incluirEnLista(expresion){
    for(let i = 0; i < expresion.length; i++){
        let valor =  new Nodo(expresion[i]);
        lista.agregar(valor);
    }

    return lista.mostrarLista();
}
*/
let preOrden = '++-+4*3269/*369'; 
//console.log(preOrden);

let posOrden =  '83+62*-35*-43*2*8/+';
//console.log(posOrden);

console.log(resolverPreOrden(preOrden));
console.log(resolverPosOrden(posOrden));

//7
function resolverPreOrden(preOrden){
    preOrden = separarValores(preOrden);
    let solucion = [];
    for(let i = preOrden.length-1; i >= 0; i--){
        if(Number.isInteger(preOrden[i]) === true ){
            solucion.push(preOrden[i]);
            preOrden.pop();
        }else{
            let operacion = preOrden[i];
            preOrden.pop();
            let num1 = solucion[solucion.length-1];
            solucion.pop();
            let num2 = solucion[solucion.length-1];
            solucion.pop();

            if(operacion === '+'){
                operacion = num1 + num2; 
            }else if(operacion === '-'){
                operacion = num1 - num2; 
            }else if(operacion === '*'){
                operacion = num1 * num2; 
            }else{
                operacion = num1 / num2; 
            } 
            solucion.push(operacion);
        }
    }
    return solucion;
}

//8
function resolverPosOrden(posOrden){
    posOrden = separarValores(posOrden);
    let solucion = [];
    for(let i = 0; i < posOrden.length; i++){
        if(Number.isInteger(posOrden[i]) === true ){
            solucion.push(posOrden[i]);
        }else{
            let operacion = posOrden[i];
            let num1 = solucion[solucion.length - 1];
            solucion.pop();
            let num2 = solucion[solucion.length - 1];
            solucion.pop();

            if(operacion === '+'){
                operacion = num2 + num1; 
            }else if(operacion === '-'){
                operacion = num2 - num1; 
            }else if(operacion === '*'){
                operacion = num2 * num1; 
            }else{
                operacion = num2 / num1; 
            } 
            solucion.push(operacion);
        }
    }
    return solucion;
}
