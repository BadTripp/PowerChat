// FUNZIONE DELL'API PER CREAZIONE DI NUOVO UTENTE NEL DB 
const api_Create = async (username, email, password) => {

    const response = await fetch(Host+"/create?username=" + username + "&email=" + email + "&password=" + password);
    api_GetAll();
    return response;

}
// FUNZIONE DELL'API PER RICHIEDERE LA LISTA DI TUTTI GLI UTENTI DAL DB 
const api_GetAll = async () => {
    await fetch(Host+"/getAll")
        .then(response => response.json())
        .then(a => {
            Users = a;                      //AGGIORNO L'ARRAY OBJ DI UTENTI 
            add_User_List();                // RICHIAMO LA FUNZIONE PER AGGIORNARE LA LISTA NELL'INTERFACCIA UTENTE 
        })
    // const myJson = await response.json(); //extract JSON from the http response
    // console.log(myJson)
    // Users=myJson;
}

const api_Delete = async (email) => {

    const response = await fetch(Host+"/delete?email=" + email );
    api_GetAll();            
    return response;

}

const api_Get_User =  (email) => {
   
  
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Host+"/get?email="+email, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
        
}
const api_Change =  (username,email,password) => {
   
  
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", Host+"/update?username=" + username + "&email=" + email + "&password=" + password, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
        
}
