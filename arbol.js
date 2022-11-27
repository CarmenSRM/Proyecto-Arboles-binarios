import Nodo from './nodos.js';
import Lista from './lista.js';

export default class ArbolBinario{
    constructor(){
        this.raiz = null;
        this.pre = '';
        this.pos = '';
    }

    crear(nodo){
        if(this.raiz === null){
            this.raiz = nodo;
        }else{
            this.agregar(nodo, this.raiz);
        }
    }
    
    agregar(nodo, nodox){
        if(nodo.valor < nodox.valor){
            if(nodox.izq == null){
                nodox.izq = nodo;
            }else{
                this.agregar(nodo, nodox.izq)
            }
        }else{
            if(nodox.der === null){
                nodox.der = nodo;
            }else{
                this.agregar(nodo, nodox.der);
            }
        }
    }

    obtenerPreOrder(){
        this.pre = '';
        if(this.raiz !==  null){
            this.preOrder(this.raiz);
            return this.pre;
        }else{
            return null;
        }
    }

    preOrder(nodox){
        this.pre+= `${nodox.valor}`; 

        if(nodox.izq !== null){
            this.preOrder(nodox.izq);
        }

        if(nodox.der !== null){
            this.preOrder(nodox.der);
        }
    }

    obtenerPosOrder(){
        this.pos = '';
        if(this.raiz !==  null){
            this.posOrder(this.raiz);
            return this.pos;
        }else{
            return null;
        }
    }
    
    posOrder(nodox){
        if(nodox.izq !== null){
            this.posOrder(nodox.izq);
        }

        if(nodox.der !== null){
            this.posOrder(nodox.der);
        }

        this.pos+= `${nodox.valor}`; 
    }

}
