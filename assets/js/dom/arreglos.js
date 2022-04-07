var objetos = {titulo: "", texto:" "};
let arreglo = [objetos];

const $items = document.querySelectorAll(".item");
console.log($items[0].children[0]);
while (prompt("Presiona S si quieres introducir un Objeto")== "S")
{
    objetos.titulo = prompt("¿Cual es el titulo del objeto?");
    objetos.texto = prompt("Cual es el texto del objeto");
    arreglo.push(objetos);
}
$items[0].children[0].textContent = "El contenido del Arreglo es: ";
let contenido = "";
for (index = 0; index < arreglo.length-1; index++)
{
    contenido = "El título del objeto " +index +" es: " + arreglo[index].titulo ;
    contenido = contenido + "El texto del objeto " +index +" es: " + arreglo[index].texto ;
    $items[0].children[0].textContent = $items[0].children[0].textContent +
        contenido;
}