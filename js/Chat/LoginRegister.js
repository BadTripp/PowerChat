// FORM INPUT 
input_Auth_Username=document.getElementById("Username");
input_Auth_Email=document.getElementById("email");
input_Auth_Password=document.getElementById("password");

// ELEMENTI BUTTON LOGIN E REGISTER 
btnLogin=document.getElementById("btnLogin");
btnRegister=document.getElementById("btnRegister");


on_Register =()=>{

    api_Create_User(input_Auth_Username.value,input_Auth_Email.value,input_Auth_Password.value)
    on_Login();
}   
on_Login=()=>{
    check = api_Check_Login(input_Auth_Email.value,input_Auth_Password.value);
    
    if(check === "true"){
        
        on_Login_Success(input_Auth_Email.value);
        window.location.href = "/chat.html";
    }
      

    
}