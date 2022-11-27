import Nodo from './nodos.js';

export default class Lista{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }
    
    agregar(valor){
        if(this.primero === null){
            this.primero = valor;
            this.ultimo = valor;
        }else{
            this.ultimo.sig = valor;
            valor.ant = this.ultimo;;
            this.ultimo = valor;
        }
    }

    mostrarLista(){
        if(this.primero !== null){
            let actual = this.primero;
            let lista = "";  
            while(actual !== null){
                lista= `${lista} \n ${actual.valor}`;
                actual = actual.sig;
            }
            return lista;
        }    
    }

}
