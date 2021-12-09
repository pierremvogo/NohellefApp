import React, { useEffect, useState, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import pepper from '../../../assets/images/dashboard/pepper.png';
import './chat.styles.css';



function Chat({socket,studentId,tutorId,username,isRole,room,messageListd}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [todoList,setTodoList] = useState({name: '', contentRaw: '' });
  const [fileDoc,setFileDoc] = useState(null); 
 

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        fileContent: todoList.contentRaw,
        userId: isRole=='tutor'?studentId:isRole=='student'?tutorId:'',
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log(messageData);
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      setTodoList({name:'',contentRaw:''});
    }
  };

  const onChangeUploadFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        if(file && file.type.substr(0, 5) === "image"){
              console.log('myimagefile',file); 
              reader.readAsDataURL(file)
              reader.onloadend = () =>{
                setCurrentMessage(file.name)
                setTodoList({name: file.name,contentRaw: reader.result});
                console.log("TODOLIST---",todoList)
              }


        }else if(file &&  file.type === "application/pdf"){
               console.log('mypdffile',file); 
               reader.readAsDataURL(file) 
               reader.onloadend = () =>{
                setTodoList({name: file.name,contentRaw: reader.result});
                console.log("TODOLIST---",todoList)
              }
        }else if( file && file.type === "application/msword" || 
            file && file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
                console.log(file); 
                reader.readAsDataURL(file)
                reader.onloadend = () =>{
                setTodoList({name: file.name,contentRaw: reader.result});
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
      socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      console.log("RECEIVE MESSAGE",data);
    });
  }, [socket]);

  return (
    
  <div className="chat-window">
      <div className="chat-header">
        <p></p>
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
                    <p>{messageContent.fileContent == ""? messageContent.message : <img src={messageContent.fileContent} width='100%'/>}</p>
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
          type="text"
          value={currentMessage}
          placeholder="Votre message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />

        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>

      
);
}

export default Chat;