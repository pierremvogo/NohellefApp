import react from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import React,{useState,useEffect} from 'react';
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import { Dropdown } from 'react-bootstrap';
import smile from '../../../assets/images/main/smile.png';
import profilepic from '../../../assets/images/im5.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import {Table} from 'react-bootstrap';
import affect from '../../../assets/images/dashboard/affect.png';
import im5 from '../../../assets/images/im5.png';
import chat from '../../../assets/images/dashboard/chat2.png';
import ipa from '../../../assets/images/dashboard/ip.png';
import AddAdmin from './addAdmin.jsx';
import {NotificationManager,NotificationContainer} from 'react-notifications';
//import io from 'socket.io-client';
import Chat from "../../../app/components/chat/chat.jsx"
import Adress from './adress.jsx';
import userService from  '../../services/user.service'; 



//const socket = io.connect("http://localhost:3001");
const AdminContent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, serLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);

  const [username, setUsername] = useState("Alain");
    const [showChatModal, setShowChatModal] = useState(false);
    const [displayAsk, setDisplayAsk] = useState("none");
    const [remoteUsername, setRemoteUsername] = useState("Mme Ngono");
    const [remoteImage, setRemoteImage] = useState(im5);
    const [countBadge, setCountBadge] = useState(1);
    const [showBadge, setShowBadge] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [tutorId, setTutorId] = useState("tutor");
    const [supAdminId, setSupAdminId] = useState("supadmin");
    const [room, setRoom] = useState(tutorId+supAdminId);
    const [statusConnection,setStatusConnection] = useState(false);
    const [tutorName,setTutorName] = useState("");
    const [isAdress, setIsAdress] = useState(false);

    useEffect(()=>{
        setPosts(data);
        return function cleanup () {
            return;
        }
      
    },[])

    

  function closeModal(){
   
      setDisplayAsk("none",setShowEditModal(false));
  }

  const openModal=(isAdress,nameTutor)=> {
     if(isAdress=="adress"){
        setIsAdress(true)
     }else{
      setIsAdress(false, setTutorName(nameTutor));
     }
    setShowEditModal(true,setDisplayAsk("flex"));
   
}
    const handleCallback = (childData) =>{
           
         }

    const getAdminUsers = () => {
    let user =  {
      "types": [
        null
      ],
      "disponibility": {},
      "specialities": [
        "string"
      ],
      "levels": [
        null
      ],
      "permissions": [
        null
      ],
      "parentIds": [
        "string"
      ],
      "status": [
        null
      ],
      "emailConfirmed": true
    }
      userService.listAndFiltersUsers()

    }

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
                        socket={socket} 
                        username={username} 
                        room={room}
                        callBackParent={handleCallback}
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
   let data = [
    {
      id: 1,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"85-c6-98-78-a3",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 2,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"85-c6-98-78-a3",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 3,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"85-c6-98-78-a3",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 4,
     userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"85-c6-98-78-a3",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 5,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"85-c6-98-78-a3",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 6,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    
    {
      id: 7,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    
    {
      id: 8,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    
    {
      id: 9,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    
    {
      id: 10,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 11,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
     adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 12,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 13,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
     adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 14,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 15,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 16,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
    {
      id: 17,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: ipa,
      adminChat: chat
    },
  ];
   const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: displayAsk,
            //alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
           <div className="contain" id='myContain'>
                <div style={{display:'inline-block', margin:'0% 30% 0% 30%', fontSize:'100%',width:'35%'}}>
                    <span className='close' onClick={()=>closeModal()}>&times;</span>
                     {isAdress?<Adress tutorName={tutorName}/>: <AddAdmin /> }
                </div>
               
            </div>
          
      </div>
    )
  };
 
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container" style={{backgroundColor:'#eeeeee'}}>
      {showEditModal? <ModalContentEdit /> :'' }
      {showChatModal? <ModalChat />  : ''}
       <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'5%'}}>
                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                                Tous les Administarteurs
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} style={{marginTop:'5%'}}>
                            <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Rechercher"
                                    value="Doe"
                                    data={data}
                                    callback={(record) => console.log(record)}
                                  />
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                    </GridContainer>
             
                    <GridContainer>
                       <GridItem xs={12} sm={12} md={12}>
                          <div style={{cursor:'pointer',
                                          margin:'1% 0% 1% 78%',
                                          
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '10px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '50px',
                                          width: '70%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }} onClick={()=> openModal()}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Ajouter</span>
                              </div>
                                    </div>
                          
                      </GridItem>
                    </GridContainer>

      <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Nom</th>
                  <th>Adresse Mail</th>
                  <th>Adresse de connexion</th>
                  <th>Activer / Desactiver</th>
                  <th>Définir l'adresse de connexion</th>
                  <th>Chat</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts.map((post,index)=>{
                return(
                  <tr key={index}>
                    
                    <td><Avatar 
                            size="45"
                            round={true}
                            src={post.userProfile}
                            name='logo'
                          /></td>
                    <td>{post.adminName}</td>
                    <td>{post.adminEmail}</td>
                    <td>{post.adminRights}</td>
                    <td>{post.adminActivate}</td>
                    <td onClick={()=>{openModal('adress',post.adminName)}}><img style={{cursor:'pointer'}} src={post.adminAffect} width='15%'/></td>  
                    <td onClick={()=>{openModal('chat',post.adminName)}}><img style={{cursor:'pointer'}} src={post.adminChat} width='60%'/></td>
                  </tr>
                  )
              })}
              </tbody>
          </Table>
          </GridContainer>
          <GridContainer >
                      <GridItem xs={12} sm={12} md={12}>
                        <Pagination 
                          postsPerPage={postPerPage} 
                          totalPosts={posts.length} 
                          paginate={paginate}
                        />
                      </GridItem>
                    </GridContainer>
                    </div>
    )
}
export default AdminContent;


