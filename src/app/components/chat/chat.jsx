import React,{useRef,useEffect,useState} from 'react';
import CustomTooltip from '../tooltip/tooltip';
import './chat.styles.scss';
import Avatar   from 'react-avatar';
import Button from '../buttons/button.jsx';
import { Document, Page, pdfjs, } from 'react-pdf';



/**
 * @description simple chat component.  
 * @param {string} userProfile
 * @param {string} userPseudo 
 * @param {string} userMessage
 */
 const url = 
 "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"
   
const Chat = ({
    userProfile,
    isConnected,
    userPseudo,
    courseName,
    chatDate,
    chatHour}) => {
        const userMembers = [
        {"name":"Idriss", "profile":{userProfile}, "isConnected": {isConnected}},
        {"name":"Alain", "profile":{userProfile}, "isConnected": false},
        {"name":"Saphir", "profile":{userProfile}, "isConnected": {isConnected}},
        {"name":"Manuk", "profile":{userProfile}, "isConnected": {isConnected}},
        {"name":"Eliakim", "profile":{userProfile}, "isConnected": false}];

        const today = new Date(),
        hour = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();

        const [pages, setPages] = useState(null);

        const [sendMessageForm,setSendMessageForm] = useState({messageContent: ''});
        const [incomingMessage,setIncomingMessage] = useState('');
        const [outgoingMessage,setOutgoingMessage] = useState('');
        const [isTextMessage,setIstextMessage] = useState(false);
        const [isFileUpload,setIsFileUpload] = useState(false);
        const [listMessageIncoming,setListMessageIncoming] = useState([{name: '', contentRaw: '' }]);

        const [isPDF,setIsPDF] = useState(false);
        const [isDoc,setIsDoc] = useState(false);
        const [isImage,setIsImage] = useState(false);
        const [isText,setIsText] = useState(false);
       
        const [fileDoc,setFileDoc] = useState(null); 
        
        const [previewDoc,setPreviewDoc] = useState('');
        let listIncomming;
        const [disableButton,setDesableButton] = useState(true);
       
        const [todoList,setTodoList] = useState([{name: '', contentRaw: '' }]);
        const [isTextSend,setIsTextSend] = useState('');
        const [isTextReceive,setIsTextReceive] = useState('');
        const [isSend,setIsSend] = useState(false);
        const [isReceive,setIsReceive] = useState(false);

        const messageRef = useRef(null);

        const scrollToBottom = () =>{
          if(messageRef && messageRef.current){
          messageRef.current.scrollIntoView({behavior: "smooth"});}
        }

        pdfjs.GlobalWorkerOptions.workerSrc = 
         `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);

        function onDocumentLoadSuccess({ numPages }) {
          setNumPages(numPages);
          setPageNumber(1);
        }

       

          useEffect(() => {
            if(todoList || listIncomming) {
               return(scrollToBottom); 
            }
        }, [todoList,listIncomming]);

        const keyPress = (e) => {
          if(e.key ==='Enter' && !e.shiftKey){
            e.preventDefault();
            onSubmit(e);

          }
        }
      
        useEffect(()=>{
          if(fileDoc){
            const reader = new FileReader();
            reader.onloadend = () =>{
              if(fileDoc.type.substr(0,5) ==='image'){
                setTodoList(todoList.concat({name: fileDoc.name,contentRaw: reader.result}));
                setListMessageIncoming(listMessageIncoming.concat({name: fileDoc.name,contentRaw: reader.result}));
              }else if(fileDoc.type==='application/pdf'){              
                setTodoList(todoList.concat({name: fileDoc.name,contentRaw: reader.result}));
                setListMessageIncoming(listMessageIncoming.concat({name: fileDoc.name,contentRaw: reader.result}));
              }else if(fileDoc.type === "application/msword" || 
              fileDoc.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
                setTodoList(todoList.concat({name: fileDoc.name,contentRaw: reader.result}));
                setListMessageIncoming(listMessageIncoming.concat({name: fileDoc.name,contentRaw: reader.result}));
              }
              else{setPreviewDoc(reader.result);}  
            }
            reader.readAsDataURL(fileDoc);
          }else{
            setPreviewDoc(null);  
          }
        },[fileDoc]);

        const onChangeUploadFile = (e) => {
              const file = e.target.files[0];

              if(file && file.type.substr(0, 5) === "image"){
                setFileDoc(file); 
             

              }else if(file &&  file.type === "application/pdf"){
                setFileDoc(file); 
              
               
              }else if( file && file.type === "application/msword" || 
              file && file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
                setFileDoc(file);
                setIsTextReceive('');
                setIsTextSend('');
                          
              }else{setFileDoc(null);}      
         }
        
    
        const onChangeSendMessage = (e) => {
            setSendMessageForm({...sendMessageForm,  [e.target.name]: e.target.value })
            setDesableButton(e.target.value === '');
        }
        
        const onSubmit = (e) => {
            e.preventDefault();   
            setIsTextSend('textsend');
            setIsTextReceive('textreceive');
            setIsImage(false,setIsDoc(false),setIsPDF(false),setIsText(true));
            const newListText = todoList.concat({name: '',contentRaw: sendMessageForm.messageContent});
            setTodoList(newListText);
            setListMessageIncoming(newListText);
            setOutgoingMessage(sendMessageForm.messageContent);
            sendMessageForm.messageContent = '';
            setDesableButton(sendMessageForm.messageContent === '');
        }

        const hiddenFileInput = useRef(null); 
        const handleClickFileInput = (event) => {
          event.preventDefault();
          hiddenFileInput.current.click()
        };
    return(
        <div class="container">
          <h3 class="text-center coursen">{courseName}</h3>
            <div class="messaging">
              <div class="inbox_msg">
                <div class="inbox_people">

                  <div class="headind_srch">

                    <div class="recent_heading">
                      <h4>Group Members</h4>
                    </div>
                    <div class="srch_bar">
                        <div class="stylish-input-group">
                            <input type="text" class="search-bar"  placeholder="Search" />
                            <span class="input-group-addon">
                            <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                            </span> </div>
                        </div>
                  </div>

                  <div class="inbox_chat">
                    <div class="chat_list active_chat">
                      <div class="chat_people">
                        <div class="img_active"> 
                                    <Avatar 
                                        size="90"
                                        round={true}
                                        src={userProfile}
                                        style={{border: isConnected? '3px solid green': '3px solid white'}}
                                    /> 
                        </div>
                        <div class="ib_active">
                          <h5>{userPseudo}</h5>
                          <span class="chat_date">{chatDate}</span>
                          
                        </div>
                      </div>
                    </div>

                   {userMembers.map((value,index)=>{
                       return(
                        <div class="chat_list" key={index}>
                        <div class="chat_people">
                          <div class="chat_img"> <Avatar 
                                          size="50"
                                          round={true}
                                          src={userProfile}
                                          style={{border: value.isConnected? '3px solid green': '3px solid white'}}
                                      /> </div>
                          <div class="chat_ib">
                            <h5>{value.name}<span class="chat_date"></span></h5>
                            <p>{chatDate} : {chatHour}</p>
                            
                          </div>
                        </div>
                      </div>)
                   })}
              
                  </div>
                </div>

                <div class="mesgs">
                  <div class="msg_history">
                  {Object.keys(todoList).map((value,index)=>{
                     if(value != 0){
                          console.log("MY TODO LIST VALUE");
                          listIncomming = todoList;
                          console.log(listIncomming);
                          let pdfFile = JSON.stringify(todoList[value].contentRaw).substr(6,15);
                          let imageFile = JSON.stringify(todoList[value].contentRaw).substr(6,5);
                          let docFile1 = JSON.stringify(todoList[value].contentRaw).substr(6,30);
                          let docFile2 = JSON.stringify(todoList[value].contentRaw).substr(6,18);
                          
                          console.log("my Doc File");
                          console.log(docFile1);
                          console.log(docFile2);
                          console.log(value.contentRaw);
                          return(
                     <div key={index} ref={messageRef}>

                        {todoList? <div  class="outgoing_msg">
                            <div class="sent_msg mr-5">
                                {
                                 imageFile==='image'?
                                 <div onClick={()=>console.log("dawnload Image")}>
                                 <img  src={todoList[value].contentRaw}/>
                                 <span>{todoList[value].name}</span>
                                 </div>:
                                 pdfFile==='application/pdf'?
                                 <div onClick={()=>console.log("download PDF file")} style={{height:'100px'}}>
                                   <span>{todoList[value].name}</span>
                                   <Document
                                  style={{cursor:'grab'}}
                                    file={todoList[value].contentRaw}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                  >
                                  <Page  pageNumber={pageNumber} />
                                  </Document>
                                  </div>
                                  :
                                  docFile1==='application/vnd.openxmlformats'||docFile2==='application/msword'?
                                 <div onClick={()=>console.log("download Doc File")} ref={messageRef} onClick={()=>console.log("Download")} 
                                   style={{backgroundColor:'#F8F9FC',fontSize:'1.2em'}}>
                                   <i style={{fontSize:'2em'}} className="fas fa-file-word  mr-2 text-primary"></i>{todoList[value].name}
                                 </div>:
                                  todoList[value].contentRaw
                                 }
                                <span class="time_out"> {hour}    |    Today</span> 
                            </div>
                          </div>: ''}  
                   
                        {listIncomming? 
                        <div class="incoming_msg">
                          <div class="incoming_msg_img"> 
                                        <Avatar 
                                            size="50"
                                            round={true}
                                            src={userProfile}             
                                        /> <h5 style={{textAlign:'center'}}>{userPseudo}</h5> </div>
                          
                          <div class="received_msg">
                            <div class="received_withd_msg ml-4">
                              { imageFile==='image'?
                              <div onClick={()=>console.log("download Image File")}>
                                <img  src={listIncomming[value].contentRaw}/>
                                <span>{listIncomming[value].name}</span>
                              </div>:
                                    pdfFile==='application/pdf'?
                                    <div onClick={()=>console.log("download PDF file")} style={{height:'100px'}}>
                                    <span>{listIncomming[value].name}</span>
                                      <Document
                                        style={{cursor:'grab'}}
                                        file={listIncomming[value].contentRaw}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                      >
                                      <Page  pageNumber={pageNumber} />
                                      </Document>
                                      <span>{listIncomming[value].name}</span>
                                      </div>:
                                      docFile1==='application/vnd.openxmlformats'||docFile2==='application/msword'?
                                    <div onClick={()=>console.log("Download Doc file")} 
                                      style={{backgroundColor:'#F8F9FC',fontSize:'1.2em',color:'black'}}>
                                      <i style={{fontSize:'2em'}} className="fas fa-file-word  mr-2 text-primary"></i>{listIncomming[value].name}
                                    </div>:
                                    listIncomming[value].contentRaw
                                    }
                              <span class="time_date ml-3"> {hour}    |    Today</span>
                            </div>
                          </div>
                        </div> :''}  
                  </div>)}})}
                  </div>
                 
                  <div class="type_msg" style={{marginTop:'10%'}}>
                    <div class="input_msg_write">
                    <form onSubmit={onSubmit}>
                      <div className="row">
                        <div className="col">
                            {(Object.keys(sendMessageForm).map((input,index)=>{
                                console.log("My input value ");
                                console.log(input);
                                console.log(typeof(input));
                                return(
                                <div key={index}>
                                    <textarea 
                                        style={{resize: 'none',whiteSpace:'pre-wrap'}}
                                        cols="30" rows="1" 
                                        type="text" 
                                        class="write_msg" 
                                        placeholder={"Type a message"}
                                        onChange={onChangeSendMessage} 
                                        name={input} 
                                        value={sendMessageForm[input]} 
                                        autoFocus={true} 
                                        onKeyDown={keyPress}      
                                    />
                                </div>)
                            }))}
                           
                        </div> 
                        <div className="col">
                         
                            {!disableButton?
                              <Button 
                                rounded ={true}
                                type="submit">
                                <i className="fa fa-paper-plane mr-3 fa-1x"></i>
                            </Button>
                             : ''}
                        </div>
                      </div>
                      
                      <input 
                          type="file" 
                          accept="image/*, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, audio/*"
                          ref={hiddenFileInput} 
                          style={{display:'none'}}
                          onChange={onChangeUploadFile}/>

                      <span class="msg_send_btn">
                        <i  onClick={handleClickFileInput}
                            class="msg_send_btn"
                            className="fa fa-paperclip attachment fa-1x text-primary mr-5"
                            data-tip="Send Files"
                            data-for="document">
                        </i>
                        <CustomTooltip idTooltip={"document"} placeTooltip={"top"}/> 
                      </span>
                    </form>
                    </div>
                   
                  </div>

                </div>


              </div>              
            </div>
        </div>
        
    )
}
export default Chat;