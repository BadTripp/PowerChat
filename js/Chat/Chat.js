
var User = JSON.parse(api_Get_User(Get_Data_User()))
console.log(User)
var Chat_Messages=[];

messages_Container=document.getElementById("chat_Container");
Label_Username = document.getElementById("username");
btn_sendMessage = document.getElementById("send_Message")
input_Message = document.getElementById("msgUser");



Auth_Check = () => {
    if (!Check_IsLogin()) {
        window.location.href = "http://locahost/index.html";
    } else {
        On_Load_ChatPage()
        
    }

}

Update_Chat_Message=()=>{
    Chat_Messages=api_Get_All_Message();
    console.log(Chat_Messages);    
}

On_Load_ChatPage = () => {
    Label_Username.innerText += "  " + Get_Data_User();
    Update_Chat_Message();

}

Update_Chat_Message=()=>{
    
    
    Chat_Messages=JSON.parse(api_Get_All_Message());
    
    messages_Container.innerHTML="";
    for(let msg of Chat_Messages.reverse()){
        messages_Container.innerHTML+="<a  class='list-group-item list-group-item-action flex-column align-items-start msg-element '><div class=' justify-content-between'><b class='mb-1'>"+msg.name+"</b><small class='ml-4'>"+msg.time+"</small></div><p class='mb-1'>"+msg.message+"</p></a>"
        
    }
    
    //  ELEMENTO MESSAGGIO DELLA CHAT
    // <a  class="list-group-item list-group-item-action flex-column align-items-start active">
    //             <div class=" justify-content-between">
    //               <b class="mb-1">Panico</b>
    //               <small>3 days ago</small>
    //             </div>
    //             <p class="mb-1">Ciao belli.</p>
    //           </a>
    scroll_Fix_Down()
}

//  ELEMENTO HTML DEI MESSAGGI 
{/* <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button> */}

scroll_Fix_Down=()=>{
    scollbar = document.getElementById("list-group");
    scollbar.scrollTop = scrollbar.scrollHeight;
}

send_Message =()=>{
    
    api_Create_Message(User.email,input_Message.value)
}

setInterval(Update_Chat_Message,1000);