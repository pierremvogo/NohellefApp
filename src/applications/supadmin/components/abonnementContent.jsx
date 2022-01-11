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
import im5 from '../../../assets/images/im5.png';
import setting from '../../../assets/images/admin/setting.png';
import eye from '../../../assets/icons/eye.png';
import AddTutor from './addTutor.jsx';
import download from '../../../assets/icons/download.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import Switch from "react-switch";
import './admin.css';
import {Table} from 'react-bootstrap';
import chat from '../../../assets/images/dashboard/chat2.png';
import {NotificationManager,NotificationContainer} from 'react-notifications';
import io from 'socket.io-client';
import Chat from "../../../app/components/chat/chat.jsx"


const socket = io.connect("http://localhost:3001");
const AbonnementContent = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);
  const [checked, setChecked] = useState(false);
   const [username, setUsername] = useState("Alain");
    const [showChatModal, setShowChatModal] = useState(false);
    const [displayAsk, setDisplayAsk] = useState("none");
    const [remoteUsername, setRemoteUsername] = useState("Mme Ngono");
    const [remoteImage, setRemoteImage] = useState(im5);
    const [countBadge, setCountBadge] = useState(1);
    const [showBadge, setShowBadge] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [parentId, setParentId] = useState("parent");
    const [supAdminId, setSupAdminId] = useState("supadmin");
    const [room, setRoom] = useState(parentId+supAdminId);
     const [statusConnection,setStatusConnection] = useState(false);

  useEffect(()=>{
    socket.on('id', (status)=>{
            setStatusConnection(status);
            console.log("MYid",status);
        })
     setPosts(data);
     return function cleanup () {
            return;
        }
  },[])

  const handleChange = (checked) => {
    setChecked(checked)
  }

  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
  }

  

   const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "4000px",
            justifyContent: "center",
            display: display,
            alignItems: "center",
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
                <div style={{display:'inline-block', margin:'3%', fontSize:'1.5vw'}}>
                    
                </div><span className='close' onClick={()=>closeModal()}>&times;</span>
                <AddTutor /> 
            </div>
          
      </div>
    )
  };
  const handleCallback = (childData) =>{
           
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
              
              <GridContainer>
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
              </GridContainer>
          </GridItem>
      </GridContainer>
      </div>
    )
  };
  const CheckBox =()=> {
    return(
        <input type='checkbox' />
      )
  };
  function closeModal(){
      setShowChatModal(false,setDisplayAsk("none"));
    }
    

  const openModal=(nameUser)=> {
      setDisplayAsk("flex",setRemoteUsername(nameUser),setShowChatModal(true));
    }

    let data = [
    {
      id: 1,
      userProfile: im5,
      userName:"pirate",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635',
      userChat: chat
    },
    {
      id: 2,
      userProfile: im5,
      userName:"Jean",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635',
      userChat: chat
    },
    {
      id: 3,
      userProfile: im5,
      userName:"Pierre",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635',
      userChat: chat
    },
    {
      id: 4,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"Andre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635',
      userChat: chat
    },
    {
      id: 5,
      userProfile: im5,
      userName:"appolinaire",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635',
      userChat: chat
    },
    
    
   
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container" style={{margin:'5% 0% 0% 0%'}}>
      {showChatModal? <ModalChat />  : ''}
       <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>

                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Parents
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} style={{marginTop:'2%'}}>
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
                                          margin:'1% 0% 1% 80%',
                                          textAlign:'center'}}>
                                 
                                    </div>
                      </GridItem>
                    </GridContainer>

                    <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Ville</th>
                  <th>Adresse</th>
                  <th>Chat</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                    
                    <td><Avatar 
                                                size="45"
                                                round={true}
                                                src={post.userProfile}
                                                name='logo'
                                            /></td>
                    <td>{post.userName}</td>
                    <td>{post.userSurname}</td>
                    <td>{post.userEmail}</td>
                    <td>{post.userPhone}</td>
                    <td>{post.userCity}</td>
                    <td>{post.userAddress}</td> 
                    <td style={{cursor:'pointer'}} onClick={()=>openModal(post.userName)}><img src={post.userChat} width='45%'/></td>  
                  
                  </tr>
                  )
              })}
              </tbody>
          </Table>
          </GridContainer>

      
                    <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}>
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
export default  AbonnementContent


