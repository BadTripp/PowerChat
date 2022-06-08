const api_Create_Message = async (username, message) => {

    const response = await fetch(HostChat+"/message?name=" + username + "&message=" + message);
    // api_GetAll();
    return response;

}

const api_Get_All_Message =  () => {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST",HostChat+"/getAll", false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;

}





const api_Get_User =  (email) => {
   
  
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", HostUSM+"/get?email="+email, false ); 
    xmlHttp.send( null );
    
    return xmlHttp.responseText;
        
}

const api_Create_User = async (username, email, password) => {

    const response = await fetch(HostUSM+"/create?username=" + username + "&email=" + email + "&password=" + password);
    // api_GetAll();
    return response;

}

const api_Check_Login =  ( email, password) => {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST",HostUSM+"/login?email=" + email + "&password=" + password, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;

}
