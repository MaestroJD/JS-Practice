const list= document.querySelector(".list");
const items = document.querySelectorAll(".item");

const btn_send = document.querySelector(".btn-send");
/*
console.log(list);
console.log(items);
console.log(btn_send);
*/


/*
evento -> string
function (nombre) ó callback (function anonima)
state -> boolean "no es requerido"
addEventListener("", callback, state)
Ejemplo:
function sms(){
    console.log("Hola mundo");
}

btn_send.addEventListener("click", sms, false);
*/




//con callback es decir con función anónima
btn_send.addEventListener("click", function() {
    let countries = ["Colombia", "México", "Paraguay", "Perú"];
    let iteracion = 0 ;
    for (const index of items) {
        if (iteracion < countries.length)
        {
            index.textContent = countries[iteracion];
            iteracion++;
        }
    }
});