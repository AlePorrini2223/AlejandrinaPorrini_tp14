// 3.
let electro =["heladera","tv","tostadora","lavarropas","licuadora","aspiradora"];
console.log(electro);


// 4.a
console.log(electro[5]);
console.log(electro[0]);
console.log(electro[3]);
console.log(electro[1]);
console.log(electro[4]);
console.log(electro[2]);

// 4.b
let primerElemento = electro.shift();
electro.push(primerElemento);
console.log(electro);

// 4.c
electro.push("microondas","plancha");
console.log(electro);

// 4.d
console.log(electro.length);

// 4.e
let electroBuscado = "cafetera";
if (electro.includes(electroBuscado)) {
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
}

// 4.f
let cadenaString = electro.join(" ");
console.log(cadenaString);

// 4.g
let cantidadElementos = cadenaString.split(" ").length;
console.log(cantidadElementos);

// 4.h
let nuevoNombre = "freidora";
cadenaString = cadenaString.replace("tv", nuevoNombre);
console.log(cadenaString);

// 4.i
let nuevoArr = cadenaString.split(" ");
console.log(nuevoArr);

