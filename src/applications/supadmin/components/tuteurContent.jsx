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

import setting from '../../../assets/images/admin/setting.png';
import eye from '../../../assets/icons/eye.png';
import AddTutor from './addTutor.jsx';
import download from '../../../assets/icons/download.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import Switch from "react-switch";
import edit from '../../../assets/images/dashboard/edit.png';
import affect from '../../../assets/images/dashboard/affect.png';
import im5 from '../../../assets/images/im5.png';
import chat from '../../../assets/images/dashboard/chat2.png';
import {Table} from 'react-bootstrap';
import Select from 'react-select';
import './admin.css';
import {NotificationManager,NotificationContainer} from 'react-notifications';
import io from 'socket.io-client';
import Chat from "../../../app/components/chat/chat.jsx"
import AddAdmin from './addAdmin.jsx';
import AffectRight from './affectRight.jsx';

const socket = io.connect("http://localhost:3001");
const TuteurContent = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(2);
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
    const [adminId, setAdminId] = useState("admin");
    const [supAdminId, setSupAdminId] = useState("supadmin");
    const [room, setRoom] = useState(adminId+supAdminId);
    const [statusConnection,setStatusConnection] = useState(false);
    const [isAdd,setIsAdd] = useState(false);
    const [adminName, setAdminName] = useState('');


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

  function closeModal(){
      setDisplay("none",setShowEditModal(false));
  }

  const openModal=(isAffect,nameAdmin)=> {
     if(isAffect=="add"){
      setIsAdd(true);
    }else{
      setIsAdd(false,setAdminName(nameAdmin));
    }
      setShowEditModal(true,setDisplayAsk("flex"));
    }

    const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: displayAsk,
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
                <div style={{display:'inline-block', margin:'3%', fontSize:'100%',width:'100%'}}>
                    <span className='close' onClick={()=>closeModal()}>&times;</span>
                    {isAdd?<AddAdmin />:<AffectRight adminName={adminName}/>}  
                </div>
               
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

	function menuToggle(){
		const toggleMenu = document.querySelector('.menu');
		toggleMenu.classList.toggle('active')
	}
  const options = [
    { value: 'francais', label: 'Français' },
    { value: 'anglais', label: 'Anglais' },
    { value: 'math', label: 'Mathématiques' },
    { value: 'physique', label: 'Physiques' },
    { value: 'info', label: 'Informatique' },
    { value: 'ingenieur', label: "Science de l'ingénieur" }
  ]

  
  function checkUser(id)
    {
      console.log("Id for usertable");
      console.log(id);
      var checkbox = document.getElementById('userC');
      if (id=1)
      {
       console.log(posts.userName);
      }
    };


    let data = [
    {
      id: 1,
      userProfile: im5,
      adminName:"Merlin",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 2,
      userProfile: im5,
      adminName:"Paul",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 3,
      userProfile: im5,
      adminName:"Emaus",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 4,
     userProfile: im5,
      adminName:"Albert",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 5,
      userProfile: im5,
      adminName:"copenhague",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 6,
      userProfile: im5,
      adminName:"Luis",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    
    {
      id: 7,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    
    {
      id: 8,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    
    {
      id: 9,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    
    {
      id: 10,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 11,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 12,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 13,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 14,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 15,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 16,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
    {
      id: 17,
      userProfile: im5,
      adminName:"mvogo",
      adminEmail:"mvogopierre129@gmail.com",
      adminRights:"Tous les droits",
      adminActivate: <input type='checkbox' />,
      adminAffect: affect,
      adminChat: chat
    },
  ];

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container" style={{margin:'5% 0% 0% 0%'}}>

			 {showEditModal? <ModalContentEdit /> :'' } 
       {showChatModal? <ModalChat  />  : ''}
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>

                        <GridItem xs={12} sm={12} md={3}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Administrateurs
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} style={{marginTop:'0%'}}>
                           <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Rechercher"
                                    value="Doe"
                                    data={data}
                                    callback={(record) => console.log(record)}
                                  />
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%',width:'25%'}}>
                             
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                            <div style={{width:'100%',fontSize:'100%'}}>
                                
                            </div>
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
                                        }} onClick={()=> openModal("add")}>
                                
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
                  <th>Droits</th>
                  <th>Activer / Desactiver</th>
                  <th>Affecter un droit</th>
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
                    <td>{post.adminName}</td>
                    <td>{post.adminEmail}</td>
                    <td>{post.adminRights}</td>
                    <td>{post.adminActivate}</td>
                    <td onClick={()=>{openModal('affect',post.adminName)}}><img style={{cursor:'pointer'}} src={post.adminAffect} width='20%'/></td>  
                    <td onClick={()=>console.log("tr")}><img style={{cursor:'pointer'}} src={post.adminChat} width='50%'/></td>
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
export default TuteurContent


