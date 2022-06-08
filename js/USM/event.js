var state=false
// DEFAULT SET CHANGE BUTTON HIDDEN TRUE
button_Change.hidden=true


document.addEventListener('click',function(e){
     
   if(e.target.id.includes("update-")){
       state=!state
       console.log(state)
       let stringFix=e.target.id.replace("update-","");
       on_Change_State(stringFix)
       toggle_Change_Button(e.target)

   }if(e.target.id.includes("delete-")){
        let stringFix=e.target.id.replace("delete-","");
        api_Delete(stringFix)
   }
    
 });

 toggle_Change_Button=(button)=>{
    if(state){
        button.innerText="Cancel change"
        button_Change.hidden=false
        button_Add.hidden=true
    }else{
        reset_Input_Form(username_Form,password_Form,email_Form);
        button.innerText="Change"
        button_Change.hidden=true
        button_Add.hidden=false
    }
    
 }

  toggle_Password_Form = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }