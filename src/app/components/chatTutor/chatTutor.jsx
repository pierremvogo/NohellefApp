import React, { useEffect, useState, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import pepper from '../../../assets/images/dashboard/pepper.png';
import pdf from '../../../assets/images/dashboard/pdf.png';
import word from '../../../assets/images/dashboard/word.png';
import './chatTutor.styles.css';
import Viewer from 'react-viewer';
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Avatar   from 'react-avatar';
import im5 from '../../../assets/images/im5.png';



function Chat({role,socket,messageListd,me,username,room,callBackParent,remoteImage,remoteUsername,isConnected}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [todoList,setTodoList] = useState({name: '', contentRaw: '', type: '' });
  const [fileDoc,setFileDoc] = useState(null); 
  const [connexionStatus,setConnexionStatus] = useState(isConnected);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id:me,
        role: role,
        room: room,
        remoteUsername:remoteUsername,
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
      };
      console.log("dataList------------->>>>>", messageData);
      await socket.emit("send_message", messageData);
      setMessageList((list)=> [...list,messageData]);
      setCurrentMessage("");
      setTodoList({name:'',contentRaw:'',type:''});
    }
  };
  useEffect(()=>{
    console.log("messageListDD---------------->>", messageList);
    console.log("messageListDD", messageListd);
    for(data of messageListd ){
      if(data.message !== ""){
        setMessageList((list)=> [...list,data]);
      }
    }
  },[])

  const handleDownload = () => {
      console.log("download");
  }

   let data = [
    {
      id: 1,
      profile: im5,
      statusConnexion: "onlinetut",
      name: "Mvogo Pierre",
      nbMessage: 2,
      message: {
        id:"125gr8jgu1259dsd1se5d",
        role: "student",
        room: "tutorstudent",
        remoteUsername:"mme ngono",
        author: "Mvogo Pierre",
        message: "bonjour",
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
  }
    },
    {
      id: 2,
      profile: im5,
      statusConnexion: "offlinetut",
      name: "Alain robert",
      nbMessage: 3,
      message: {
        id:"125gr8jgu1259dsd1se5d",
        role: "student",
        room: "tutorstudent",
        remoteUsername:"mme ngono",
        author: "Alain robert",
        message: "bonjour",
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
  }
    },
    {
      id: 3,
      profile: im5,
      statusConnexion: "onlinetut",
      name: "Simpliste eva",
      nbMessage: 5,
      message:{
        id:"125gr8jgu1259dsd1se5d",
        role: "student",
        room: "tutorstudent",
        remoteUsername:"mme ngono",
        author: "Simpliste eva",
        message: "bonjour",
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
  }
    },
    {
      id: 4,
      profile: im5,
      statusConnexion: "offlinetut",
      name: "Jule doret",
      nbMessage: 2,
      message: {
        id:"125gr8jgu1259dsd1se5d",
        role: "student",
        room: "tutorstudent",
        remoteUsername:"mme ngono",
        author: "Jule doret",
        message: "bonjour",
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
  }
    },
    {
      id: 5,
      profile: im5,
      statusConnexion: "onlinetut",
      name: "Alain foka",
      nbMessage: 1,
      message: {
        id:"125gr8jgu1259dsd1se5d",
        role: "student",
        room: "tutorstudent",
        remoteUsername:"mme ngono",
        author: "Alain foka",
        message: "bonjour",
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
  }
    },
    {
      id: 6,
      profile: im5,
      statusConnexion: "offlinetut",
      name: "Rigobert paul",
      nbMessage: 1,
      message: {
        id:"125gr8jgu1259dsd1se5d",
        role: "student",
        room: "tutorstudent",
        remoteUsername:"mme ngono",
        author: "Rigobert paul",
        message: "bonjour",
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
  }
    },
    {
      id: 7,
      profile: im5,
      statusConnexion: "onlinetut",
      name: "Merlin alin",
      nbMessage: 1,
      message: {
        id:"125gr8jgu1259dsd1se5d",
        role: "student",
        room: "tutorstudent",
        remoteUsername:"mme ngono",
        author: "Merlin alin",
        message: "bonjour",
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
  }
    },
    {
      id: 8,
      profile: im5,
      statusConnexion: "onlinetut",
      name: "Isidore pirate",
      nbMessage: 1,
      message: {
        id:"125gr8jgu1259dsd1se5d",
        role: "student",
        room: "tutorstudent",
        remoteUsername:"mme ngono",
        author: "Isidore pirate",
        message: "bonjour",
        fileContent: todoList.contentRaw,
        fileName: todoList.name,
        fileType: todoList.type,
        status: connexionStatus,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
  }
    },
  ];

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

 
  return (
    <GridContainer>
      <GridItem xs={4} sm={4} md={6} style={{overflowY:'scroll',height:'380px'}}>
      {data.map((value,index)=>{
          return(
              <GridContainer key={value.id} style={{cursor:'pointer'}} 
                             onClick={()=>setMessageList((list)=>[...list,value.message])}>
          <GridItem xs={4} sm={4} md={3} >
            <div style={{position:'relative',margin:'0% 0% 0% 15%'}}>
                 <Avatar 
                    size="50"
                    round={true}
                    src={value.profile}
                    name='logo'
                  />
                <div className={value.statusConnexion}></div>
            </div>
          </GridItem>
          <GridItem xs={4} sm={4} md={6} >
            <div style={{margin:'10% 0% 0% 0%'}}>{value.name}</div>
          </GridItem>
          <GridItem xs={4} sm={4} md={3}>
            <div className="icon-message__badge"><strong>{value.nbMessage}</strong></div>
          </GridItem>
        </GridContainer>
            )
      })}
        
       
      </GridItem>
      <GridItem xs={8} sm={8} md={6}>
        <div className="chat-window">
         

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
      </GridItem>
    </GridContainer>
    
  

      
);
}

export default Chat;