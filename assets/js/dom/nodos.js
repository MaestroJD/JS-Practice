/* const $home = document.getElementById("home"); //devuelve un objeto

const $article =document.getElementsByTagName("article"); //devuelve un arreglo

console.log($home);
console.log($article);
 */

/*
const $item = document.getElementsByClassName("item"); //devuelve un arreglo
console.log($item);*/
/*
const $query_class = document.querySelector(".item");
console.log($query_class)

const $query_class2 = document.querySelectorAll(".item");
console.log($query_class2)*/

/* const $query_class = document.querySelector(".item");
const $query_class_all = document.querySelectorAll(".item");

console.log($query_class);
console.log("--------------");
console.log($query_class_all);
console.log("--------------");
console.log($query_class_all[0]);
*/
/*
const $item = document.querySelector(".item p");

const sms = "Master en coding 2021";
$item.innerHTML = "<h1>"+ sms +"</h1>";*/
//también pudo haber sido:
//$item.innerHTML = `<h1>${sms}</h1>`;
//con alt + 96 se puede poner esto -> `

/* const $items = document.querySelectorAll(".item");
const items_array = [...$items];//spread operator hace una copia del elemento que se está ocupando
console.log($items);
console.log("---------------");
console.log(items_array); */

/* const $items = document.querySelectorAll(".item");
console.log($items[0].children[0]);
//lo anterior me despliega:
//<h1 class="item-title">Lorem ipsum dolor sit amet.</h1>
//Incluso se podría modificar con esto esa línea en el documento HTML
//con texcontent por ejemplo:
//$items[0].children[0].textContent = "Hola";
console.log("---------------"); */

/*
1.- Crear un arreglo de objetos que contenga:
    1.a.- titulo: string, texto:string
2.- Debe tener el html listo
3.- Debe usar un ciclo para pintar el arreglo en el html

    */