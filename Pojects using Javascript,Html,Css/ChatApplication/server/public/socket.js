
let onlineList=document.querySelector(".online-list");

socket.emit("userConnected" ,  username);

socket.on("leave", function (dataObj) {
    
    let leaveDiv=document.createElement("div");
    leaveDiv.classList.add("leave");
    leaveDiv.classList.add("seen");
    leaveDiv.textContent=`${dataObj.username} left chat`;
    chatWindow.append(leaveDiv);
    deleteFromOnlineList(dataObj.id);

})

socket.on("join" , function(dataObj) {
    let joinDiv=document.createElement("div");
    joinDiv.classList.add("joined");
    joinDiv.classList.add("seen");
    joinDiv.textContent=`${dataObj.username} joined chat`;
    chatWindow.append(joinDiv);
    addInOnlineList(dataObj);
})

socket.on("chatLeft" , function (chatObj) {
    let chatDiv =document.createElement("div");
    chatDiv.classList.add("chats");
    chatDiv.classList.add("left");
    chatDiv.textContent= chatObj.username +" : " + chatObj.chat;
    chatWindow.append(chatDiv);
})

socket.on("online-list" , function (userList) {
    for(let i=0 ; i<userList.length ; i++){

        if(userList[i].id != socket.id){
            let userDiv=document.createElement("div");
            userDiv.classList.add("user");
            userDiv.setAttribute("id" , userList[i].id);

            userDiv.innerHTML=`<div class="user-image">
            <img src="user-prf.jpg"  alt="">
            </div>
            <div class="user-name">${userList[i].username}</div>`
            onlineList.append(userDiv);
        }
    }
})

function deleteFromOnlineList(id){
    document.querySelector(`#${id}`).remove();
}

function addInOnlineList(userObj) {
    let userDiv=document.createElement("div");
    userDiv.classList.add("user");
    userDiv.setAttribute("id" , userObj.id);
    userDiv.innerHTML=`<div class="user-image">
    <img src="user-prf.jpg" alt="">
    </div>
    <div class="user-name">${userObj.username}</div>`
    onlineList.append(userDiv);
}