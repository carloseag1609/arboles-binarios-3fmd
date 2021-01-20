class Nodo {

    data: number;
    izquierda: any;
    derecha: any;

    constructor(value: number = 1) {
        this.data = value;
        this.izquierda = null;
        this.derecha = null; 
    }
}

class Arbol {

    raiz: Nodo;

    constructor () {
      this.raiz = new Nodo();
    }
    
    agregar (value: number) {
        let auxiliar: Nodo = this.raiz;
        while (auxiliar) {
            // vamos hacia la izquierda
            if (value < auxiliar.data) {
                if (auxiliar.izquierda) {
                    auxiliar = auxiliar.izquierda
                } else {
                    auxiliar.izquierda = new Nodo(value)
                    console.log(`El valor ${value} ha sido agregado al árbol`); 
                    break;         
                }
            } else { // vamos hacia la derecha
                if (auxiliar.derecha) {
                    auxiliar = auxiliar.derecha
                } else {
                    auxiliar.derecha = new Nodo(value)
                    console.log(`El valor ${value} ha sido agregado al árbol`); 
                    break;
                }
            }       
        }    
    }
    
    /*
       Recorre primero toda la rama izquierda
       de izquierda al centro.
       Luego imprime la raíz, y finalmente
       recorre la rama derecha, del centro hacia
       la derecha.
    */
    inOrder (nodo = this.raiz) {
      if (!nodo) {
        return
      }
      this.inOrder(nodo.izquierda)
      console.log(nodo.data)
      this.inOrder(nodo.derecha)
    }
    /*
       Imprime primero la raíz, luego
       toda la rama izquierda de izquierda al centro.
       y finalmente recorre la rama derecha,
       del centro hacia la derecha.
    */
    preOrder (nodo = this.raiz) {
      if (!nodo) {
        return
      }
      console.log(nodo.data)
      this.preOrder(nodo.izquierda)
      this.preOrder(nodo.derecha)
    }
    /**
      * Recorre el árbol de izquierda hacia el centro.
      * Luego del centro hacia la derecha, y finalmente
      * imprime la raíz.
      */
    postOrder (nodo = this.raiz) {
      if (!nodo) {
        return
      }
      this.postOrder(nodo.izquierda)
      this.postOrder(nodo.derecha)
      console.log(nodo.data)
    }
}

let prueba = new Arbol();
prueba.agregar(3);
prueba.agregar(10);
prueba.agregar(9);
prueba.agregar(4);

console.log('====== Ejecutando preOrder ======');
prueba.preOrder();
console.log('====== Ejecutando inOrder ======');
prueba.inOrder();
console.log('===== Ejecutando postOrder ======');
prueba.postOrder();