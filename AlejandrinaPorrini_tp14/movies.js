let peliculas = [
    "Turno de día", 
    "30 noches con mi ex", 
    "Bestia", 
    "El monte", 
    "Top gun maverick",
    "Elvis",
    "Thor: amor y trueno"
];


function Primera_Mayuscula(pelicula) {
    let MasVendida = pelicula.toUpperCase();
    peliculas = peliculas.filter(MasVendida => MasVendida !== pelicula);
    peliculas.unshift(MasVendida);
    return peliculas;
}
console.log(Primera_Mayuscula("Thor: amor y trueno"));



let proximasPeliculas = [
    "Counter-Strike",
    "NOP",
    "Vertigo",
    "Nick",
    "Avatar"
];
let cadenaProximasPeliculas = proximasPeliculas.join(", ");
console.log(cadenaProximasPeliculas);



function unirPeliculas(peliculas, proximasPeliculas) {
    return peliculas.concat(proximasPeliculas);
}
console.log(unirPeliculas(peliculas, proximasPeliculas));







