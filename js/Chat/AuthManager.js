
Check_IsLogin=()=>{

    Auth=localStorage.getItem("Auth");

    if(Auth == 1){
        return true
    }else{
        return false
    }
}

Get_Data_User=()=>{
    Email=localStorage.getItem("Data");
    return Email;
}

on_Login_Success=(email)=>{
    localStorage.setItem('Auth', '1');
    localStorage.setItem('Data', email);
}
