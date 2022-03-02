import React, {useContext, useState, useEffect } from 'react';
import { Switch, Route, Router, Redirect, useHistory, useLocation } from 'react-router-dom';
import './dashboard.css';
import {connect, useSelector,useDispatch} from 'react-redux';
import Avatar   from 'react-avatar';
import Button from '../../../../app/components/buttons/button';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Header from "../../../../app/components/header/header.jsx";
import { Dropdown } from 'react-bootstrap';
import logoImage from '../../../../assets/images/im10.png';
import smile from '../../../../assets/images/main/smile.png';
import ds from '../../../../assets/images/main/d2.png';
import d1 from '../../../../assets/images/dashboard/d1.png';
import d2 from '../../../../assets/images/dashboard/d2.png';
import d3 from '../../../../assets/images/dashboard/d3.png';
import d4 from '../../../../assets/images/dashboard/d4.png';
import d5 from '../../../../assets/images/dashboard/d5.png';
import d6 from '../../../../assets/images/dashboard/d6.png';
import d7 from '../../../../assets/images/dashboard/d7.png';
import d8 from '../../../../assets/images/dashboard/d8.png';
import p3 from '../../../../assets/images/dashboard/p3.png';
import Select from "@material-ui/core/Select";
import {Typography, AppBar} from "@material-ui/core";
import im5 from '../../../../assets/images/im5.png';
import ReactPaginate from 'react-paginate';
import GridItem from "../../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Card from "../../../../app/components/Card/Card.js";
import CardHeader from "../../../../app/components/Card/CardHeader.js";
import CardBody from "../../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../../app/components/Card/CardFooter.js";
import { FaRegSnowflake } from "react-icons";
import ReactSearchBox from "react-search-box";
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import dic from '../../../../assets/images/admin/dic.png';
import acc from '../../../../assets/images/admin/acc.png';
import CourseContent from '../../components/courseContent.jsx';
import ChooseTutorContent from '../../components/chooseTutorContent.jsx';
import ConferenceContent from '../../components/conferenceContent.jsx';
import ContactHelpContent from '../../components/contactHelpContent.jsx';
import HistoryContent from '../../components/historyContent.jsx';
import PaymentContent from '../../components/paymentContent.jsx';
import PaymentResourceContent from '../../components/paymentResourceContent.jsx';
import AccountContent from '../../components/accountContent.jsx';
import ProgressionContent from '../../components/progression.jsx';
import { Player, ControlBar } from 'video-react';
import badge from '../../../../assets/images/dashboard/badge.png';
import Chat from "../../../../app/components/chat/chat.jsx";
import ScrollToBottom from "react-scroll-to-bottom";
import {NotificationManager,NotificationContainer} from 'react-notifications';
/*import io from 'socket.io-client';
import { SocketContext } from '../../../../SocketContext.js';
import ShareSessionId from "../../../../app/components/ShareSessionId/ShareSessionId.jsx";*/
import MesTravaux from '../../components/mesTravaux.jsx';


//5271ff 
//ffce52 
 //const socket = io.connect("http://localhost:3001");
 const DashboardStudent = ({user}) => {

    const [isAccountContent, setIsAccountContent] = useState(false);
    const [isChooseTutor, setIsChooseTutorContent] = useState(false);
    const [isConferenceContent, setIsConferenceContent] = useState(false);
    const [isContactHelpContent, setIsContactHelpContent] = useState(false);
    const [isCourseContent, setIsCourseContent] = useState(true);
    const [isHistoryContent, setIsHistoryContent] = useState(false);
    const [isPaymentContent, setIsPaymentContent] = useState(false);
    const [isPaymentResourceContent, setIsPaymentResourceContent] = useState(false);
    const [isProgressionContent, setIsProgressionContent] = useState(false);
    const [username, setUsername] = useState("pirateBay");
    const [showChatModal, setShowChatModal] = useState(false);
    const [displayAsk, setDisplayAsk] = useState("none");
    const [showEditModal,setShowEditModal] = useState(false);
    const [remoteUsername, setRemoteUsername] = useState("Mme Ngono");
    const [remoteImage, setRemoteImage] = useState(im5);
    const [countBadge, setCountBadge] = useState(1);
    const [showBadge, setShowBadge] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [studentId, setStudentId] = useState("student");
    const [tutorId, setTutorId] = useState("tutor");
    const [room, setRoom] = useState(tutorId+studentId);
    const [statusConnection,setStatusConnection] = useState(false);
    const [me, setMe] = useState('');
    const [playVideor, setPlayVideor] = useState(false);
    const [courseLink, setCourseLink] = useState("");
    let dataList = [];

   const history = useHistory();
    /*const joinRoom = () => {
       const userData = {
            author : username,
            room : room
        };
        if(userData.author !== "" && userData.room !== ""){
           socket.emit("join_room", userData); 
        }
        
    }*/
    
      useEffect(()=>{
       /* socket.emit("username",username);
        socket.on('me', (id) => {
            setMe(id);
            setStatusConnection(true);
            console.log('My ID',id);
        }); 
        console.log('My ID outside',me);
        socket.on("disconnectMe", ()=>{
            setStatusConnection(false);
        });


        socket.on("notification", (data)=>{
            setShowChatModal(true,setDisplayAsk('flex'));
        });*/

        var element1 = document.getElementById("myDiv1");
        var element2 = document.getElementById("dash1");
        element2.style.borderRadius = "3px 3px 3px 3px";
        element2.style.width = "100%";
        element2.style.border = "2px solid #DD1B16";
        element1.style.backgroundColor = "#DD1B16";
        let tab1 = [
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ];
            for(var i of tab1){
                i.style.backgroundColor = ""
            }
        let tab2 = [
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
                document.getElementById('dash5')
                
            ]
            for(var i of tab2){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        return function cleanup () {
            return;
        }
    },[])

    const disconnectUser = () => {
        localStorage.removeItem("user");
        window.location.reload();
        return false;
   }


    function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')
    }
    const styles = {
                      root: {
                        width: "120px"
                      },
                      input: {
                        padding: "10px 14px"
                      }
                };

    const  createNotification = (type) => {
            return () => {
              switch (type) {
                case 'info':
                  NotificationManager.info(
                    <div>
                    <Avatar 
                        size="30"
                        round={true}
                        src={remoteImage}
                        name='logo'
                    />
                    <span style={{margin:'0% 0% 0% 5%'}}>{remoteUsername}</span>
                    </div>,

                    'Nouveau Message',3000,() =>{
                            openModal('badge');
                          });
                  break;
                case 'success':
                  NotificationManager.success('Success message', 'Title here');
                  break;
                case 'warning':
                  NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                  break;
                case 'error':
                  NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                  });
                  break;
              }
            };  
            };
             const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            top:"0px",
            left:"0px",
            }}
      >
           <div className="contain" id='myContain'>
                <div style={{display:'inline-block', margin:'3%', fontSize:'100%', width:'170%'}}>
                    <span className='close' onClick={()=>closeModal()}>&times;</span>
                    <MesTravaux  /> 
                </div>
                
            </div>
          
      </div>
    )
  };


  const ModalChat = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "30%",
            height: "80%",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            backgroundColor: "transparent",
            border:'none',
            top:"10%",
            left:"70%",
            }}
      >
      <GridContainer>
          <GridItem xs={12} sm={12} md={12} style={{
                                        backgroundColor:'#FFCE52',
                                        borderRadius:'20px',
                                        height:'105%',
                                         }}>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <span className='close' onClick={()=>closeModal()}>&times;</span>
                  </GridItem>
              </GridContainer>
              
              {/* <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <Chat 
                        role={'student'}
                        socket={socket} 
                        id={me}
                        username={username} 
                        room={room}
                        remoteImage={remoteImage}
                        remoteUsername={remoteUsername}
                        isConnected={statusConnection}
                     />
                  </GridItem>
              </GridContainer>*/}
          </GridItem>
      </GridContainer>
      </div>
    )
  };

  const handlerAccount = () => {
    setIsPaymentResourceContent(false,
            setIsCourseContent(false),
            setIsAccountContent(true),
            setIsHistoryContent(false),
            setIsPaymentContent(false),
            setIsConferenceContent(false),
            setIsChooseTutorContent(false),
            setIsContactHelpContent(false),
            setIsProgressionContent(false))
    let element = document.getElementById("myDiv8");
            element.style.backgroundColor = "#dd1b16";
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
  }

  const outPutClickHandlerVideo = (courselink) => {
    console.log("handle e target-------------------");
    setPlayVideor(true,setCourseLink(courselink));
    setIsPaymentResourceContent(false,
            setIsCourseContent(false),
            setIsAccountContent(false),
            setIsHistoryContent(false),
            setIsPaymentContent(false),
            setIsConferenceContent(true),
            setIsChooseTutorContent(false),
            setIsContactHelpContent(false),
            setIsProgressionContent(false))
        let element = document.getElementById("myDiv4");
            element.style.backgroundColor = "#dd1b16";
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
  }

    

    const outPutClickHandlerPay = (e) => {
        setIsPaymentResourceContent(true,
            setIsCourseContent(false),
            setIsAccountContent(false),
            setIsHistoryContent(false),
            setIsPaymentContent(false),
            setIsConferenceContent(false),
            setIsChooseTutorContent(false),
            setIsContactHelpContent(false),
            setIsProgressionContent(false))
        let element = document.getElementById("myDiv7");
            element.style.backgroundColor = "#dd1b16";
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }

    }

    const onChange = () =>{
        console.log("has change")

    }
    let items = [
    {
     
      title:"Algèbre linéaire",
     
    },
    {
    
      title:"Comment résoudre une équation du second degré?",
      
    },
    {
      
      title:"Algèbre linéaire",
     
    },
   
  ];

    let data = [
    {
      key: "math",
      value: "Mathematiques",
    },
    {
      key: "info",
      value: "Informatique",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
    function changeStyle(id){
        let element = document.getElementById(id);
        if(id=="myDiv1"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(true,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false),
                    setIsProgressionContent(false))
            let tab = [
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ];
            for(var i of tab){
                i.style.backgroundColor = ""
            }
            
        }
        else if(id=="myDiv2"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(true),
                    setIsContactHelpContent(false),
                    setIsProgressionContent(false))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv3"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(true),
                    setIsProgressionContent(false))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv4"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(true),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false),
                    setIsProgressionContent(false))
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv5"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false),
                    setIsProgressionContent(true))
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv6"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(true),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false),
                    setIsProgressionContent(false))
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv7"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(true),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false),
                    setIsProgressionContent(false))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv8'),
                document.getElementById('myDiv9')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv8"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(true),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false),
                    setIsProgressionContent(false))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv9')

            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }else if(id=="myDiv9"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(true),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false),
                    setIsProgressionContent(false))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8')

            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        
            
          
    }
        function closeModal(){
          setShowChatModal(false,setShowEditModal(false), setDisplayAsk("none"));
     
          }
        function openModal(type){
                //joinRoom();
                if(type=="submit"){
                    setShowChatModal(false,setShowEditModal(true), setDisplayAsk("flex")); 
                }else{
                    setShowChatModal(true,setShowEditModal(false), setDisplayAsk("flex")); 
                } 
              }

    function changeStyle1(id) {
        let element = document.getElementById(id);
        if(id=="dash1"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
                document.getElementById('dash5')
                
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash2"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
                document.getElementById('dash5')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash3"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash2'),
                document.getElementById('dash4'),
                document.getElementById('dash5')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash4"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash5')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash5"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        

    }
        return(
            <div style={{overflow:'hidden'}}>
            {showChatModal? <ModalChat />  : ''}
            {showEditModal? <ModalContentEdit /> :'' } 
            <GridContainer>
                <GridItem xs={3} sm={3} md={3}>
                    <ProSidebar style={{width:'100%'}}>
                      <SidebarContent style={{backgroundColor:'#eeeeee', padding:'5%'}}>
                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div className="side-header">
                                <Avatar 
                                        size="100"
                                        round={true}
                                        src={logoImage}
                                        name='logo'
                                    />

                              </div>

                            </GridItem>

                      </GridContainer>


                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div className="side-content siden1" id="myDiv1" onClick={()=>changeStyle('myDiv1')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d1}
                                        name='logo'
                                    />
                                </div>
                               <span className="text">Consulter les Cours et exercices</span>

                              </div>

                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div className="side-content" id="myDiv2" onClick={()=>changeStyle('myDiv2')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d2}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Choisir un tuteur</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv3" onClick={()=>changeStyle('myDiv3')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d3}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Contacter de l'aide</span>
                              </div>
                            </GridItem>
                                    
                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv4" onClick={()=>changeStyle('myDiv4')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d4}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">VideoTheque</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv5" onClick={()=>changeStyle('myDiv5')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={p3}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Votre Progression</span>
                              </div>
                            </GridItem>
                                    
                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv6" onClick={()=>changeStyle('myDiv6')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d5}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Payer un abonnement</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv7" onClick={()=>changeStyle('myDiv7')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d6}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Ajouter un moyen de paiement</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div className="side-content" id="myDiv8" onClick={()=>changeStyle('myDiv8')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d7}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Mon compte</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div className="side-content" id="myDiv9" onClick={()=>changeStyle('myDiv9')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d8}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Historiques</span>
                              </div>
                            </GridItem>

                      </GridContainer>
                        
                      </SidebarContent>
                      <SidebarFooter style={{backgroundColor:'#eeeeee'}}>
                      </SidebarFooter>
                </ProSidebar>;
                </GridItem>


                <GridItem xs={9} sm={9} md={9} style={{marginTop:'2%'}}>

                   <GridContainer>
                        <GridItem xs={2} sm={2} md={2}>
                            <div id="dash1" className='dash-navitem dashn1' onClick={()=>changeStyle1('dash1')}>Dashboard</div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                             <div id="dash2" className='dash-navitem' onClick={()=>changeStyle1('dash2')}>Qui sommes-nous?</div>
                        </GridItem>
                        <GridItem xs={2} sm={2} md={2}>
                             <div id="dash3" className='dash-navitem' onClick={()=>changeStyle1('dash3')}>Nos offres</div>
                        </GridItem>
                        <GridItem xs={2} sm={2} md={2}>
                             <div id="dash4" className='dash-navitem' onClick={()=>changeStyle1('dash4')}>Nos classes</div>
                        </GridItem>
                        <GridItem xs={2} sm={2} md={2}>
                             <div id="dash5" className='dash-navitem' onClick={()=>changeStyle1('dash5')}>Nos Enseignants</div>
                        </GridItem>
                         <GridItem xs={2} sm={2} md={2}>
                                        <Dropdown style={{top:'-15px'}}>
                                                    <Dropdown.Toggle
                                                    variant="secondary btn-sm"
                                                    style={{
                                                        width:'0%',

                                                        borderColor:'#fff',
                                                        backgroundColor:'#fff',
                                                        borderRadius:'20%'}}>
                                                    
                                                        <Avatar 
                                                            size="50"
                                                            round={true}
                                                            src={im5}
                                                            name='logo'
                                                        />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu style={{backgroundColor:'#F8D04E',borderRadius:'10%'}}>
                                                        <Dropdown.Item href="#">
                                                            <div onClick={()=>history.push("/")}>
                                                                <img src={dic} width='15%'/>
                                                                <u>Acceuil</u>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#" >
                                                            <div style={{marginBottom:'5%'}} onClick={handlerAccount}>
                                                                    <img src={acc} width='15%'/>
                                                                    <u>Mon compte</u>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#">
                                                            <div onClick={()=>disconnectUser()}>
                                                                <img src={dic} width='15%'/>
                                                                <u>Se déconnecter</u>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#">
                                                            <div style={{fontSize:'100%'}} onClick={()=>openModal('submit')}>
            
                                                                <u>Soumettre mes travaux</u>
                                                            </div>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                        </GridItem>
                       
                    </GridContainer>

                          {isCourseContent?<CourseContent onChildClickHandlerVideo={outPutClickHandlerVideo}/>:''}
                          {isAccountContent?<AccountContent user={user} />:''}
                          {isConferenceContent?<ConferenceContent playvideo={playVideor} courseLink={courseLink} />:''}
                          {isContactHelpContent?<ContactHelpContent />:''}
                          {isHistoryContent?<HistoryContent onChildClickHandlerVideo={outPutClickHandlerVideo} />:''}
                          {isPaymentContent?<PaymentContent onChildClickHandlerPay={outPutClickHandlerPay} />:''}
                          {isChooseTutor?<ChooseTutorContent onChildOpenModal={openModal} />:''}
                          {isPaymentResourceContent?<PaymentResourceContent />:''}
                          {isProgressionContent?<ProgressionContent />:''}


                </GridItem>


            </GridContainer>
                
            </div>
    
        )
}
const mapStateToProps=(state)=>{
  return{
    user: state.authReducer.user,
    redirect: state.authReducer.redirect,
    isRestricted: state.authReducer.isRestricted,
  };
};
export default connect(mapStateToProps)(DashboardStudent);