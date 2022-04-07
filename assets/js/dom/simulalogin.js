const user ={
   email: "correo@correo.com",
   pass: "holaMundo!", 
};

const login_form = document.querySelector("#login-form");
const response = document.querySelector(".response");

function template (sms){
    return `<p>${sms}</p>`;
}

login_form.addEventListener("submit", function (event) {
    event.preventDefault();

   //console.log(event);

   //console.log(event.target);
   //para obtener su nombre

    const email = login_form["email"];
    const pass = login_form["pass"];

    const state_login = 
    user.email === email.value && user.pass === pass.value ? "Login" : "Error!";

    const final_state = state_login ? "Login" : "Error";

    response.innerHTML = template(final_state);
    //console.log(email.value, pass.value);
    console.log(state_login);

});