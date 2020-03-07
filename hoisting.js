// emc5 < 0

var miNombre;
miNombre = "Enrique";
// https://platzi.com/clases/ecmascript-6/

a && b // Este tipo de dato sirver para comparacion si ambos resultados son verdad los


a || b // una de estas tiene que ser verdad para que se cumpla la codicion

dato++  // Esto sirve para incrementar uno por uno 
dato += 2  //  Esto sirve para incrementar de dos en dos o puede ser mas
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

[]
// Un Array es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista.
// .lenght devuelve la longitud del array.
// .push() agrega elementos al final de array.
// .pop() elimina un elemento del array.
// .unshift() agrega un elemento al array, pero lo agrega en primer lugar.
// .shift() elimina el elemento que está en el inicio del array.
// .indexOf ** devuelve la posición de un elemento del array.


// Metodos de objetos 

// funcion constructora

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio
}

var autoNuevo = new auto("Tesla", "Model 3", 2018)

var autos = []

for (let i = 0; i < 30; i++) {
    
}


 // metodos de recorridos de ARRAYS

 var articulos = [
     {nombre: "Bici", costo:3000},
     {nombre: "Tv", costo:300},
     {nombre: "Libro", costo:2500},
     {nombre: "Celular", costo:28000},
     {nombre: "Laptop", costo:15000},
     {nombre: "Teclado", costo:1700},
 ];
// con el filter me ayuda a verificar en este ejemplo todos los costos menores a 5000 cosas especificas
 var articuloFiltrados = articulos.filter(function( articulo) {
     return articulo.costo <= 5000
 })

// con el filter genera un nuevo array ayuda a mapear ciertos articulos nombre del articulo

var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
})

// sirver para encontrar algo e un arreglo devuelve true y falso si encuentra algo
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === 'Laptop'
})

// No genera un array hace un filtrado y recorre las cosas
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

// este metodo regresa una validacion de verdadero o falso
var articulosbaratos = articulos.some(function(articulo) {
    return articulo.costo <= 3000
})