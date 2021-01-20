var Nodo = /** @class */ (function () {
    function Nodo(value) {
        if (value === void 0) { value = 1; }
        this.data = value;
        this.izquierda = null;
        this.derecha = null;
    }
    return Nodo;
}());
var Arbol = /** @class */ (function () {
    function Arbol() {
        this.raiz = new Nodo();
    }
    Arbol.prototype.agregar = function (value) {
        var auxiliar = this.raiz;
        while (auxiliar) {
            // vamos hacia la izquierda
            if (value < auxiliar.data) {
                if (auxiliar.izquierda) {
                    auxiliar = auxiliar.izquierda;
                }
                else {
                    auxiliar.izquierda = new Nodo(value);
                    console.log("El valor " + value + " ha sido agregado al \u00E1rbol");
                    break;
                }
            }
            else { // vamos hacia la derecha
                if (auxiliar.derecha) {
                    auxiliar = auxiliar.derecha;
                }
                else {
                    auxiliar.derecha = new Nodo(value);
                    console.log("El valor " + value + " ha sido agregado al \u00E1rbol");
                    break;
                }
            }
        }
    };
    /*
       Recorre primero toda la rama izquierda
       de izquierda al centro.
       Luego imprime la raíz, y finalmente
       recorre la rama derecha, del centro hacia
       la derecha.
    */
    Arbol.prototype.inOrder = function (nodo) {
        if (nodo === void 0) { nodo = this.raiz; }
        if (!nodo) {
            return;
        }
        this.inOrder(nodo.izquierda);
        console.log(nodo.data);
        this.inOrder(nodo.derecha);
    };
    /**
      * Imprime primero la raíz, luego
      * toda la rama izquierda de izquierda al centro.
      * y finalmente recorre la rama derecha,
      * del centro hacia la derecha.
      */
    Arbol.prototype.preOrder = function (nodo) {
        if (nodo === void 0) { nodo = this.raiz; }
        if (!nodo) {
            return;
        }
        console.log(nodo.data);
        this.preOrder(nodo.izquierda);
        this.preOrder(nodo.derecha);
    };
    /**
      * Recorre el árbol de izquierda hacia el centro.
      * Luego del centro hacia la derecha, y finalmente
      * imprime la raíz.
      */
    Arbol.prototype.postOrder = function (nodo) {
        if (nodo === void 0) { nodo = this.raiz; }
        if (!nodo) {
            return;
        }
        this.postOrder(nodo.izquierda);
        this.postOrder(nodo.derecha);
        console.log(nodo.data);
    };
    return Arbol;
}());
var prueba = new Arbol();
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