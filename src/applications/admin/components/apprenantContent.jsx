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
import ip from '../../../assets/images/dashboard/ip.png';
import im5 from '../../../assets/images/im5.png';
import chat from '../../../assets/images/dashboard/chat2.png';
import {Table} from 'react-bootstrap';
import Select from 'react-select';
import './admin.css';
import {NotificationManager,NotificationContainer} from 'react-notifications';
//import io from 'socket.io-client';
import add from '../../../assets/images/dashboard/add.png';
import Chat from "../../../app/components/chat/chat.jsx"
import LockUnlockAccount from "../../../app/components/lockUnlock/lockUnlockAccount.jsx"
import Adress from './adress.jsx';
import Loader from 'react-loader-spinner';
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import userService from '../../services/user.service';
import PartialLogin from './partialLogin.jsx';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            shareTutorUser,
            shareTutorSpecialities } from '../../redux/reducer/actions/auth';

//const socket = io.connect("http://localhost:3001");
const TuteurContent = ({userTutor,userSpecialities}) => {
  const [posts, setPosts] = useState(userTutor);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);
  const [showModalPartial, setShowModalPartial] = useState(false);
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
    const [tutorNamed, setTutorNamed] = useState('');
    const [tutorIds, setTutorIds] = useState("");
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [showModalLockUnLock, setShowModalLockUnLock] = useState(false);
    const [tutorId, setTutorId] = useState("");
    const dispatch = useDispatch();


  useEffect(()=>{
    getTutors();
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
          console.log("Response for get tutor user");
            console.log(response.data.users);
            dispatch(shareTutorUser(response.data.users));
        })
        .catch((error)=> {
            dispatch(shareTutorUser(null));
        })
}

 const getTutorSpecialities = (id) => {
        userService.getTutorSpeciality(id)
        .then((response) => {
          console.log("Response for get tutor specialities");
          console.log(response.data.specialities);
          dispatch(shareTutorSpecialities(response.data.specialities));
        })
        .catch((error) => {
          dispatch(shareTutorSpecialities(null));
        })
 }



  const handleChange = (checked) => {
    setChecked(checked)
  }
  const ModalPartialLogin = () => {
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
            bottom:'0px',
            right:'0'
            }}
      >
                    <PartialLogin  
                            tutorId={tutorId}
                            onChildCloseModal={closeModal}
                            onChildLoading={handleLoading}/>
      </div>
    )
  };
  const handleLockAccount = (id) => {
        handleLoading(true);
        authService.lockAccount(id)
        .then((response)=>{
          handleLoading(false);
          dispatch(authRegisterFailed(null));
          dispatch(authCreateSuccess("Account Lock successfull"));
          openModalLockUnlock();
        })
        .catch((error)=>{
          handleLoading(false);
          if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                    openModalLockUnlock();
                }else{
                    dispatch(authRegisterFailed(error.response));
                    openModalLockUnlock();
                
                }
        })
    }

    const handleUnLockAccount = (id) => {
        handleLoading(true);
        authService.unLockAccount(id)
        .then((response)=>{
          handleLoading(false);
          dispatch(authRegisterFailed(null));
          dispatch(authCreateSuccess("Account UnLock successfull"));
          openModalLockUnlock();
        })
        .catch((error)=>{
          handleLoading(false);
          if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                    openModalLockUnlock();
                }else{
                    dispatch(authRegisterFailed(error.response));
                    openModalLockUnlock();
                }
        })
    }

   const onChangeCheckbox = (e) => {
        if(!e.target.checked){
          handleLockAccount(e.target.value);
        }else{
          handleUnLockAccount(e.target.value);
        }
    }

    function closeModal(){
        getTutors();
        setDisplay("none",setShowEditModal(false),setShowModalPartial(false));
    }


  const openModal=(isAffect,nameTutor,idTutor)=> {
     if(isAffect=="add"){
      setIsAdd(true);
    }else{
      setIsAdd(false,setTutorNamed(nameTutor),setTutorIds(idTutor));
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

  const ModalLockUnlock  = () => {
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
       <LockUnlockAccount onChildCloseModal={closeLockUnlockModal} />  
         
      </div>
    )
  };
  const openModalPartial = (id) => {
    console.log("ID for TUTOR");
    console.log(id)
    setTutorId(id);
    setShowModalPartial(true,setDisplayAsk("flex"));

  }

  const closeLockUnlockModal = () => {
      dispatch(authCreateSuccess(null));
      dispatch(authRegisterFailed(null));
      getTutors();
      setDisplayAsk("none", setShowModalLockUnLock(false));
  }

  const openModalLockUnlock = () => {
    setDisplayAsk("flex", setShowModalLockUnLock(true));
  }
  const onChangeSearch = (record) => {
    let filter, table, tr, td, i,input, txtValue;
     filter = record.toUpperCase();

    Object.keys(userTutor&&userTutor).map((value,index) => {
      if(userTutor[value].firstName.toUpperCase().indexOf(filter) > -1){
      if(index===0 || index===1 || index===2){
        paginate(1);
      }else{
        if((index%3) === 0){
          paginate((index/3) + 1);
        }else if(((index-1)%3) === 0){
          paginate(((index-1)/3) + 1);
        }else if(((index-2)%3) === 0){
          paginate(((index-2)/3) + 1);
        } 
      }
    }else{return;}
    })
   
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
          <Adress
            onChildCloseModal={closeModal} 
            onChildModalLoading={handleLoading}
            tutorName={tutorNamed}
            tutorId={tutorIds}
            onChildGetTutor={getTutors}
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
      var checkbox = document.getElementById('userC');
      if (id=1)
      {
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
       {showModalPartial? <ModalPartialLogin />: ''}
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
                                    placeholder="Search By Tutor Name"
                                    value="Doe"
                                    data={data}
                                    onChange={onChangeSearch}
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
                                          margin:'0% 0% 5% 0%',
                                          
                                          textAlign:'center'}}>
                                    
                                    </div>
                      </GridItem>
                    </GridContainer>

      <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary" id="tutorTable">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Nom</th>
                  <th>Adresse Mail</th>
                  <th>Spécialités</th>
                  <th>Nb.Apprenants</th>
                  <th>Mode de connexion</th>
                  <th>Modifier Mode de connexion</th>
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
                    <td>{post.email}    {post.emailConfirmed?<span>&#10003;</span>:""}</td>
                    <td>{userSpecialities&&userSpecialities[index].name}</td>
                    <td>{post.students.length != 0?post.students.length:<img onClick={()=>openModalPartial(post.id)} style={{cursor:'pointer'}} src={add} width='25px' />}</td> 
                    <td>{post.connectionMode}</td>
                    <td onClick={()=>{openModal('affect',post.firstName,post.id)}}><img style={{cursor:'pointer'}} src={ip} width='20%'/></td>  
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
      userSpecialities: state.authReducer.userSpecialities 
  };
};
export default connect(mapStateToProps)(TuteurContent)


