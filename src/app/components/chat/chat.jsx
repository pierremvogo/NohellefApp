import React, { useEffect, useState, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import pepper from '../../../assets/images/dashboard/pepper.png';
import pdf from '../../../assets/images/dashboard/pdf.png';
import word from '../../../assets/images/dashboard/word.png';
import './chat.styles.css';
import Viewer from 'react-viewer';
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Avatar   from 'react-avatar';



function Chat({role,socket,me,username,room,callBackParent,remoteImage,remoteUsername,isConnected}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [todoList,setTodoList] = useState({name: '', contentRaw: '', type: '' });
  const [fileDoc,setFileDoc] = useState(null); 
  const [connexionStatus,setConnexionStatus] = useState(isConnected);


 


  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id:me,
        role:role,
        remoteUsername:remoteUsername,
        room:room,
        author:username,
        message:currentMessage,
        fileContent:todoList.contentRaw,
        fileName:todoList.name,
        fileType:todoList.type,
        status:connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list)=> [...list,messageData]);
      setCurrentMessage("");
      setTodoList({name:'',contentRaw:'',type:''});
    }
  };

  const handleDownload = () => {
      console.log("download");
  }

  const onChangeUploadFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        if(file && file.type.substr(0, 5) === "image"){
              console.log('myimagefile',file); 
              reader.readAsDataURL(file)
              reader.onloadend = () =>{
                setCurrentMessage(file.name)
                setTodoList({
                          name: file.name,
                          contentRaw: reader.result,
                          type: file.type.substr(0,5)});
                console.log("TODOLIST---",todoList)
              }


        }else if(file &&  file.type === "application/pdf"){
               console.log('mypdffile',file); 
               reader.readAsDataURL(file) 
               reader.onloadend = () =>{
                setCurrentMessage(file.name)
                setTodoList({
                            name: file.name,
                            contentRaw: reader.result,
                            type: file.type});
                console.log("TODOLIST---",todoList)
              }
        }else if( file && file.type === "application/msword" || 
            file && file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
                console.log(file); 
                reader.readAsDataURL(file)
                reader.onloadend = () =>{
                setCurrentMessage(file.name)
                setTodoList({
                          name: file.name,
                          contentRaw: reader.result,
                          type: file.type});
                console.log("TODOLIST---",todoList)
              }
        }else{setFileDoc(null)}      
      }

  const hiddenFileInput = useRef(null); 
  const handleClickFileInput = (event) => {
          event.preventDefault();
          hiddenFileInput.current.click()
      };

  useEffect(() => { 
      console.log("size messagelist",messageList.length);
      socket.on("receive_message", (data)=>{
        setMessageList((list)=> [...list, data]);
        console.log("MY-MESSAGELIST IN ON LISTENER",data);
      });  
      if(messageList.length == 1){ 
        setMessageList((list)=> [...list,{
        room: room,
        author: username,
        message: currentMessage,
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
        }]);
      }
  }, [socket]);

  return (
    
  <div className="chat-window">
      <div className="chat-header">
        <GridContainer>
                  <GridItem xs={4} sm={4} md={4}>
                      <Avatar style={{margin:'0% 0% 0% 50%'}}
                            size="30"
                            round={true}
                            src={remoteImage}
                            name='logo'
                        />
                  </GridItem>
                  <GridItem xs={4} sm={4} md={5}>
                      {remoteUsername}
                  </GridItem>
                  <GridItem xs={4} sm={4} md={3}>
                      <div className={connexionStatus?"online":"offline"}></div>
                  </GridItem>
              </GridContainer>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent,index) => {
            return (
              <div
                key={index}
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <div>{
                      messageContent.fileContent == ""? 
                      messageContent.message : 
                      messageContent.fileType==='image'? <span><img onClick={()=>handleDownload()} src={messageContent.fileContent} width='100%'/>{messageContent.fileName}</span>:
                      messageContent.fileType==='application/pdf'? 
                      <div style={{width:'100%',cursor:'pointer'}} onClick={()=>handleDownload()}><span style={{fontSize:'100%',marginRight:'10%'}}>{messageContent.fileName}</span><img src={pdf} width='30%'/></div>:
                      messageContent.fileType==='application/msword'||messageContent.fileType==='application/vnd.openxmlformats-officedocument.wordprocessingml.document'?
                      <div style={{width:'100%'}} onClick={()=>handleDownload()}><span style={{fontSize:'100%',marginRight:'10%'}}>{messageContent.fileName}</span><img src={word} width='30%'/></div>:''}
                      </div>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
      <input 
          type="file" 
          accept="image/*, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, audio/*"
          ref={hiddenFileInput} 
          style={{display:'none'}}
          onChange={onChangeUploadFile}
      />
        <button onClick={handleClickFileInput}><img src={pepper} width='110%'/></button>
        <input
          autoFocus={true}
          type="text"
          name="message"
          value={currentMessage}
          placeholder="Votre message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage(event);
          }}
        />

        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>

      
);
}

export default Chat;