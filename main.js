/*  
    1.- Resivir una expresión.               x
    2.- Separar los valores.                 x    
    3.- Agregar a una lista.                 x
    4.- Trasformar la lista a un árbol.      x
    5.- Crear preOrden.                      x
    6.- Crear posOrden.                      x
    7.- Resolver el preOrden.                x
    8.- Resolver el posOrden.                x
*/

import Nodo from './nodos.js'
import ArbolBinario from './arbol.js';

let arbol = new ArbolBinario();

//1
let ecuacion = '2*8+4+3-2*9/6-3*4/2/2';//'4-2+3*5-8*3/6';//'4+2*5-6*4/2';
console.log(`Expresión ingresada: ${ecuacion}`);
//2
ecuacion = separarValores(ecuacion);
//3
console.log(`\nExpresion en lista -> ${incluirEnLista(ecuacion)}`);
//4
arbol.ordenar();
//5
let preOrden = arbol.obtenerPreOrden(); 
console.log(`\nPreOrden: ${preOrden}`);
//6
let posOrden =  arbol.obtenerPosOrden();
console.log(`\nPosOrden: ${posOrden}`);
//7
console.log(`\nResultado del preOrden: ${resolverPreOrden(preOrden)}`);
//8
console.log(`\nResultado del posOrden: ${resolverPosOrden(posOrden)}`);

// 2.- Separar los valores. 
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

// 3.- Agregar a una lista. 
function incluirEnLista(expresion){
    for(let i = 0; i < expresion.length; i++){
        let valor =  new Nodo(expresion[i]);
        arbol.agregarValores(valor);
    }

    return arbol.mostrarLista();
}

// 7.- Resolver el preOrden.
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
    return solucion[0];
}

// 8.- Resolver el posOrden. 
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
    return solucion[0];
}