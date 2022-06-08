
// ARRAY CHE CONTIENE USERS 
var Users = [];
//ELEMENTO CHE CONTIENE  LA LISTA UTENTE UI 
userList = document.getElementById("userList");

//  ELEMENTI INPUT DEL FORM PER CREAZIONE USER 
username_Form = document.getElementById("username");
email_Form = document.getElementById("email");
password_Form = document.getElementById("password");

button_Add=document.getElementById("add");
button_Change=document.getElementById("change");



// EVENTO DEL BUTTON ADD CHE AGGIUNGI USERS
const on_Add = () => {
    api_Create(username_Form.value, email_Form.value, password_Form.value)
    reset_Input_Form(username_Form,password_Form,email_Form);
}
// FUNZIONE PER AGGIORNARE LA LISTA UTENTI NELL'INTERFACCIA UTENTE 
const add_User_List = () => {

    userList.innerHTML = "";  // RIPULISCO GLI ELEMENTI HTML PER SOVRASCRIVERLI CON LA LISTA AGGIORNATA 
    let counter = 0;            // CONTATORE DI USERS NELLA TABELLA UI 

                                // APPEND HTML DI <TR> PER OGNI USER RICEVUTO DALL'API 
    for (let user of Users) {
        counter++;
        userList.innerHTML += "<tr><th scope='row'>" + counter + "</th><td>" + user.username + "</td><td>" + user.email + "</td><td>" + user.password + "</td><td class='text-center'><button class='btn btn-danger m-3' id=delete-"+user.email+">Del</button><button class='btn btn-info m-3' id=update-"+user.email+">Update</button></td></tr>";
    }

}
const on_Change_Send =  (email)=>{
    api_Change(username_Form.value,email_Form.value,password_Form.value);

    button_Change_User=document.getElementById("update-"+email)

    reset_Input_Form(username_Form,password_Form,email_Form);

    api_GetAll();

    button_Change.hidden=true
    button_Add.hidden=false
}

const on_Change_State =  (email)=>{
    let user
    user = JSON.parse(api_Get(email))
    
    username_Form.value=user.username;
    password_Form.value=user.password;
    email_Form.value=user.email;

    
     
}

const load_Input_Form=(input,value)=>{
    
}

const reset_Input_Form=(...input)=>{
    for(let inp of input)   inp.value="";
}
// // FUNZIONE DELL'API PER CREAZIONE DI NUOVO UTENTE NEL DB 
// const api_Create = async (username, email, password) => {

//     const response = await fetch("http://localhost:8080/create?username=" + username + "&email=" + email + "&password=" + password);
//     api_GetAll();
//     return response;

// }
// // FUNZIONE DELL'API PER RICHIEDERE LA LISTA DI TUTTI GLI UTENTI DAL DB 
// const api_GetAll = async () => {
//     let response = await fetch("http://localhost:8080/getAll")
//         .then(response => response.json())
//         .then(a => {
//             Users = a;                      //AGGIORNO L'ARRAY OBJ DI UTENTI 
//             add_User_List();                // RICHIAMO LA FUNZIONE PER AGGIORNARE LA LISTA NELL'INTERFACCIA UTENTE 
//         })
//     // const myJson = await response.json(); //extract JSON from the http response
//     // console.log(myJson)
//     // Users=myJson;
// }

// const api_Delete = async (email) => {

//     const response = await fetch("http://localhost:8080/delete?email=" + email );
//     api_GetAll();            
//     return response;

// }