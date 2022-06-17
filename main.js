
//------- Entrega #2 Javascript  -----------------------

// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

let pizzas = [
    {
        id:1,
        nombre:'Napo',
        ingrdientes:['salsa de tomate','muzzarella','tomate','ajo','aceitunas verdes'],
        precio: 1200,
    },
    {
        id:2,
        nombre:'Polemica',
        ingrdientes:['salsa de tomate','muzzarella','anana','aceitunas negras'],
        precio: 1300,
    },
    {
        id:3,
        nombre:'Muzza',
        ingrdientes:['salsa de tomate','muzzarella','aceitunas verdes'],
        precio: 500,
    },
    {
        id:4,
        nombre:'Morrones',
        ingrdientes:['salsa de tomate','muzzarella','morrones','ajo'],
        precio: 1200,
    },  {
        id:5,
        nombre:'Cuatro quesos',
        ingrdientes:['salsa de tomate','muzzarella','provolone','parmesano','fontina'],
        precio: 1400,
    },  {
        id:6,
        nombre:'Fugazzeta',
        ingrdientes:['salsa de tomate','muzzarella','cebolla','aceitunas verdes'],
        precio: 1200,
    },
]
//---- A  -----------
//VERSION 1
let idImpares = pizzas.forEach((elemento) => {
    if (elemento.id % 2 !== 0) {
        console.log(`Las pizzas con Id impares son: ${elemento.nombre}`)
    }
   
})
//VERSION 2
let idImpares2 = pizzas.filter((elemento) => {
    if (elemento.id % 2 !== 0) {
        console.log(`Las pizzas con Id impares son: ${elemento.nombre}`)
    }
})

//--------- B -------------

let saleMenosde600 = pizzas.forEach((elemento) => {
    if (elemento.precio < 600) {
        console.log(`Estas son las pizzas de menos de $600: ${elemento.nombre} `)
    }
     } )
//------------- c -------------------
let nombresPizzas = pizzas.forEach((elemento) => {
    console.log(`Tenemos pizza de: ${elemento.nombre}`)
})
// -------------- D -------------
let precioPizzas = pizzas.forEach((elemento) => {
    console.log(`Los precios de las pizzas son $ ${elemento.precio}`)
})
// ---------------- E ----------------------
let precioNombrePizzas = pizzas.forEach((elemento) => {
    console.log(`El precio de la pizza "${elemento.nombre}" es $ ${elemento.precio}`)
})





