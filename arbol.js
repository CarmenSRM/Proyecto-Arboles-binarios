export default class ArbolBinario{
    constructor(){
        this.raiz = null;
        this.primero = null;
        this.ultimo = null;
        this.pre = '';
        this.pos = '';
    }

    agregarValores(valor){
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
                lista= `${lista}  ${actual.valor}`;
                actual = actual.sig;
            }
            return lista;
        }    
    }

    ordenar(){
        if(this.raiz === null){
            if(this.primero !== null){
                let actual = this.primero;
                while(actual !== null){
                    this.multDiv(actual);
                    actual = actual.sig;
                }

                actual = this.primero;
                
                while(actual !== null){
                    this.sumasRestas(actual);
                    actual = actual.sig;
                }
            }
        }
    }

    multDiv(nodo){
        if(nodo !== this.primero){
            if(nodo.ant !== this.primero){
                if(nodo !== this.ultimo){
                    if(nodo.sig !== this.ultimo){
                        if(nodo.valor === '*'){
                            nodo.izq = nodo.ant;
                            nodo.der = nodo.sig;
                            nodo.ant = nodo.ant.ant;
                            nodo.sig = nodo.sig.sig;
                            nodo.ant.sig = nodo;
                            nodo.sig.ant = nodo;
                        }else if(nodo.valor === '/'){
                            nodo.izq = nodo.ant;
                            nodo.der = nodo.sig;
                            nodo.ant = nodo.ant.ant;
                            nodo.sig = nodo.sig.sig;
                            nodo.ant.sig = nodo;
                            nodo.sig.ant = nodo;
                        }
                    }else{
                        if(nodo.valor === '*' ){
                            nodo.izq = nodo.ant;
                            nodo.der = nodo.sig;
                            nodo.ant = nodo.ant.ant;
                            nodo.sig = null;
                            nodo.ant.sig = nodo;
                            this.ultimo = nodo;
                        }else if(nodo.valor === '/'){
                            nodo.izq = nodo.ant;
                            nodo.der = nodo.sig;
                            nodo.ant = nodo.ant.ant;
                            nodo.sig = null;
                            nodo.ant.sig = nodo;
                            this.ultimo = nodo;
                        }
                    }
                }else{
                    if(nodo.valor === '*'){
                        nodo.izq = nodo.ant;
                        nodo.ant = nodo.ant.ant;
                        nodo.ant.sig = nodo;
                    }else if(nodo.valor === '/'){
                        nodo.izq = nodo.ant
                        nodo.ant = nodo.ant.ant;
                        nodo.ant.sig = nodo;
                    }
                }
            }else{
                if(nodo.valor === '*'){
                    nodo.izq = nodo.ant;
                    nodo.der = nodo.sig;
                    nodo.ant = null;
                    nodo.sig = nodo.sig.sig;
                    nodo.sig.ant = nodo;
                    this.primero = nodo;
                }else if(nodo.valor === '/'){
                    nodo.izq = nodo.ant;
                    nodo.der = nodo.sig;
                    nodo.ant = null;
                    nodo.sig = nodo.sig.sig;
                    nodo.sig.ant = nodo;
                    this.primero = nodo;
                }
            }
        }else{
            if(nodo.valor === '*'){
                nodo.der = nodo.sig;
                nodo.sig = nodo.sig.sig;
                nodo.sig.ant = nodo;
            }else if(nodo.valor === '/'){
                nodo.der = nodo.sig;
                nodo.sig = nodo.sig.sig;
                nodo.sig.ant = nodo;
            }
        }
    }

    sumasRestas(nodo){
        if(nodo !== this.primero){
            if(nodo.ant !== this.primero){
                if(nodo !== this.ultimo){
                    if(nodo.sig !== this.ultimo){
                        if(nodo.valor === '+'){
                            nodo.izq = nodo.ant;
                            nodo.der = nodo.sig;
                            nodo.ant = nodo.ant.ant;
                            nodo.sig = nodo.sig.sig;
                            nodo.ant.sig = nodo;
                            nodo.sig.ant = nodo;
                        }else if(nodo.valor === '-'){
                            nodo.izq = nodo.ant;
                            nodo.der = nodo.sig;
                            nodo.ant = nodo.ant.ant;
                            nodo.sig = nodo.sig.sig;
                            nodo.ant.sig = nodo;
                            nodo.sig.ant = nodo;
                        }
                    }else{
                        if(nodo.valor === '+' ){
                            nodo.izq = nodo.ant;
                            nodo.der = nodo.sig;
                            nodo.ant = nodo.ant.ant;
                            nodo.sig = null;
                            nodo.ant.sig = nodo;
                            this.ultimo = nodo;
                        }else if(nodo.valor === '-'){
                            nodo.izq = nodo.ant;
                            nodo.der = nodo.sig;
                            nodo.ant = nodo.ant.ant;
                            nodo.sig = null;
                            nodo.ant.sig = nodo;
                            this.ultimo = nodo;
                        }
                    }
                }else{
                    if(nodo.valor === '+'){
                        nodo.izq = nodo.ant;
                        nodo.ant = nodo.ant.ant;
                        nodo.ant.sig = nodo;
                    }else if(nodo.valor === '-'){
                        nodo.izq = nodo.ant
                        nodo.ant = nodo.ant.ant;
                        nodo.ant.sig = nodo;
                    }
                }
            }else{
                if(nodo.sig !== this.ultimo){
                    if(nodo.valor === '+'){
                        nodo.izq = nodo.ant;
                        nodo.der = nodo.sig;
                        nodo.ant = null;
                        nodo.sig = nodo.sig.sig;
                        nodo.sig.ant = nodo;
                        this.primero = nodo;
                    }else if(nodo.valor === '-'){
                        nodo.izq = nodo.ant;
                        nodo.der = nodo.sig;
                        nodo.ant = null;
                        nodo.sig = nodo.sig.sig;
                        nodo.sig.ant = nodo;
                        this.primero = nodo;
                    }
                }else{
                    if(nodo.valor === '+'){
                        nodo.izq = nodo.ant;
                        nodo.der = nodo.sig;
                        nodo.ant = null;
                        nodo.sig = null;
                        this.primero = nodo;
                        this.ultimo = nodo;
                        this.raiz = nodo;
                    }else if(nodo.valor === '-'){
                        nodo.izq = nodo.ant;
                        nodo.der = nodo.sig;
                        nodo.ant = null;
                        nodo.sig = null;
                        this.primero = nodo;
                        this.ultimo = nodo;
                        this.raiz = nodo;
                    }
                }
            }
        }else{
            if(nodo.valor === '+'){
                nodo.der = nodo.sig;
                nodo.sig = nodo.sig.sig;
                nodo.sig.ant = nodo;
            }else if(nodo.valor === '-'){
                nodo.der = nodo.sig;
                nodo.sig = nodo.sig.sig;
                nodo.sig.ant = nodo;
            }
        }
    }

    obtenerPreOrden(){
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

    obtenerPosOrden(){
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