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

    obtenerpreOrden(){
        this.pre = '';
        if(this.raiz !==  null){
            this.preOrden(this.raiz);
            return this.pre;
        }else{
            return null;
        }
    }

    preOrden(nodox){
        this.pre+= `${nodox.valor}`; 

        if(nodox.izq !== null){
            this.preOrden(nodox.izq);
        }

        if(nodox.der !== null){
            this.preOrden(nodox.der);
        }
    }

    obtenerposOrden(){
        this.pos = '';
        if(this.raiz !==  null){
            this.posOrden(this.raiz);
            return this.pos;
        }else{
            return null;
        }
    }
    
    posOrden(nodox){
        if(nodox.izq !== null){
            this.posOrden(nodox.izq);
        }

        if(nodox.der !== null){
            this.posOrden(nodox.der);
        }

        this.pos+= `${nodox.valor}`; 
    }

}
