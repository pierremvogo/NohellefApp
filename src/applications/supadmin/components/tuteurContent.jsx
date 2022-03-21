import react from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import {connect, useSelector, useDispatch} from 'react-redux';
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
//import io from 'socket.io-client';
import Chat from "../../../app/components/chat/chat.jsx"
import AffectRight from './affectRight.jsx';
import Loader from 'react-loader-spinner';
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            shareTutorUser } from '../../redux/reducer/actions/auth';

//const socket = io.connect("http://localhost:3001");
const TuteurContent = ({userTutor}) => {
	const [posts, setPosts] = useState(userTutor);
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
    const [adminId, setAdminId] = useState("admin");
    const [supAdminId, setSupAdminId] = useState("supadmin");
    const [room, setRoom] = useState(adminId+supAdminId);
    const [statusConnection,setStatusConnection] = useState(false);
    const [isAdd,setIsAdd] = useState(false);
    const [adminName, setAdminName] = useState('');
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const dispatch = useDispatch();


	useEffect(()=>{
    getTutors();
    console.log("My user Tutor from API");
    return function cleanup () {
            return;
        }
	},[])
  const getTutors = () => {
    const filterPayload = {
                      types: [
                        "2",
                      ]
                    }
    adminService.listAndFiltersUsers(filterPayload)
        .then((response)=> {
            console.log("Response for get Tutor user");
            console.log(response.data.users);
            dispatch(shareTutorUser(response.data.users));
        })
        .catch((error)=> {
            console.log("Error Response for get Tutor user");
            console.log(error);
            dispatch(shareTutorUser(null));
        })
}

	const handleChange = (checked) => {
		setChecked(checked)
	}
  const handleLockAccount = (id) => {
        authService.lockAccount(id)
        .then((response)=>{
          console.log("Account Lock successfull");
          console.log(response);
        })
        .catch((error)=>{
          console.log("Error lock account");
          console.log(error);
        })
    }

    const handleUnLockAccount = (id) => {
        authService.unLockAccount(id)
        .then((response)=>{
          console.log("Account UnLock successfull");
          console.log(response);
        })
        .catch((error)=>{
          console.log("Error Unlock account");
          console.log(error);
        })
    }

   const onChangeCheckbox = (e) => {
        if(e.target.checked){
          console.log("IS check");
          console.log(e.target.checked);
          console.log(e.target.value);
          handleLockAccount(e.target.value);
        }else{
          console.log("IS Not check");
          console.log(e.target.checked);
          console.log(e.target.value);
          handleUnLockAccount(e.target.value);
        }
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

    const ModalLoading = () => {
    
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            display: displayLoading,
            zIndex: "900000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
            <div
                style={{
                    width: "10%",
                    height: "30%",
                    zIndex: "300000",
                    display: "flex",
                    position: "absolute",
                    top: "30%",
                    left: "48%"
                }}
                >
                <Loader type="Oval" color="#2BAD60" height="100" width="70" />
            </div>
          
      </div>
    )
  };
  const handleLoading = (isShow) => {
    setShowModalLoading(isShow);
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
           
                    
        {isAdd?
          <AddTutor 
            onChildCloseModal={closeModal} 
            onchildOpenLoading={handleLoading}
            onChildGetTutorUser={getTutors} 
          />:
          <AffectRight 
            onChildCloseModal={closeModal} 
            adminName={adminName}
          />}  
         
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
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
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
    
  ];

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userTutor&&userTutor.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container" style={{margin:'5% 0% 0% 0%'}}>
       {showModalLoading? <ModalLoading />: ''}
			 {showEditModal? <ModalContentEdit /> :'' } 
       {showChatModal? <ModalChat  />  : ''}
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>

                        <GridItem xs={12} sm={12} md={3}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Tuteurs
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
                  <th>Number</th>
                  <th>Activer / Desactiver</th>
                  <th>Affecter un droit</th>
                  <th>Chat</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts&&currentPosts.map((post,index)=>{
                return(
                  <tr key={index}>
                    
                    <td><Avatar 
                            size="45"
                            round={true}
                            src={im5}
                            name='logo'
                          /></td>
                    <td>{post.firstName}</td>
                    <td>{post.email}</td>
                    <td>{post.phoneNumber}</td>
                    <td><input 
                            type='checkbox' 
                            name="confirm_age"
                            id="confirm_age"
                            value={post.id}
                            onChange={onChangeCheckbox}
                          /></td>
                    <td onClick={()=>{openModal('affect',post.firstName)}}><img style={{cursor:'pointer'}} src={affect} width='20%'/></td>  
                    <td onClick={()=>console.log("tr")}><img style={{cursor:'pointer'}} src={chat} width='50%'/></td>
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
	                    		totalPosts={userTutor&&userTutor.length} 
	                    		paginate={paginate}
                    		/>
                    	</GridItem>
                    </GridContainer>
                    </div>
		)
}
const mapStateToProps=(state)=>{
  return{
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      userTutor: state.authReducer.userTutor,   
  };
};
export default connect(mapStateToProps)(TuteurContent)


