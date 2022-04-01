import react from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import {connect, useSelector, useDispatch} from 'react-redux';
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
import add from '../../../assets/images/dashboard/add.png';
import {NotificationManager,NotificationContainer} from 'react-notifications';
//import io from 'socket.io-client';
import Chat from "../../../app/components/chat/chat.jsx"
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import Loader from 'react-loader-spinner';
import PartialLogin from './partialLogin.jsx';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authCreateSuccess,
            authSetRegisterForm,
            shareStudentUser } from '../../redux/reducer/actions/auth';
import LockUnlockAccount from "../../../app/components/lockUnlock/lockUnlockAccount.jsx"


//const socket = io.connect("http://localhost:3001");
const ApprenantContent = ({userStudent}) => {
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
    const [supAdminId, setSupAdminId] = useState("supadmin");
    const [statusConnection,setStatusConnection] = useState(false);
    const [studentId, setStudentId] = useState("");
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [showModalPartial, setShowModalPartial] = useState(false);
    const [showModalLockUnLock, setShowModalLockUnLock] = useState(false);
    const dispatch =  useDispatch();

  useEffect(()=>{
    getStudents();
    console.log("My user Student from API");
    console.log(userStudent);

    return function cleanup () {
            return;
        }
  },[])
  const getStudents = () => {
    const filterPayload = {
                      types: [
                        "0",
                      ]
                    }
    adminService.listAndFiltersUsers(filterPayload)
        .then((response)=> {
            console.log("Response for get student user");
            console.log(response.data.users);
            dispatch(shareStudentUser(response.data.users));
        })
        .catch((error)=> {
            console.log("Error Response for get Student  user");
            console.log(error);
            dispatch(shareStudentUser(null));
        })
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
                            studentId={studentId}
                            onChildCloseModal={closeModal}
                            onChildLoading={handleLoading}/>
      </div>
    )
  };
   const ModalLoading = () => {
    
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "10000%",
            display: displayAsk,
            zIndex: "900000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            right:"0px",
            bottom:"0px",
            }}
      >
            <div
                style={{
                    width: "10%",
                    height: "30%",
                    zIndex: "300000",
                    display: "flex",
                    position: "fixed",
                    top: "35%",
                    left: "44%"
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

  function closeModal(){
      getStudents();
      setShowChatModal(false,setDisplayAsk("none"),setShowModalPartial(false)); 
  }

  const openModal=(nameUser)=> {
      setDisplayAsk("flex",setShowChatModal(true),setRemoteUsername(nameUser));
    }
     const handleLockAccount = (id) => {
        handleLoading(true);
        authService.lockAccount(id)
        .then((response)=>{
          handleLoading(false);
          console.log("Account Lock successfull");
          dispatch(authRegisterFailed(null));
          dispatch(authCreateSuccess("Account Lock successfull"));
          openModalLockUnlock();
          console.log(response);
        })
        .catch((error)=>{
          console.log("Error lock account");
          handleLoading(false);
          if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                    openModalLockUnlock();
                }else{
                    dispatch(authRegisterFailed(error.response));
                    openModalLockUnlock();
                    console.log(error.response);
                
                }
          console.log(error);
        })
    }

    const handleUnLockAccount = (id) => {
        handleLoading(true);
        authService.unLockAccount(id)
        .then((response)=>{
          handleLoading(false);
          console.log("Account UnLock successfull");
          dispatch(authRegisterFailed(null));
          dispatch(authCreateSuccess("Account UnLock successfull"));
          openModalLockUnlock();
          console.log(response);
        })
        .catch((error)=>{
          handleLoading(false);
          console.log("Error Unlock account");
          if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                    openModalLockUnlock();
                }else{
                    dispatch(authRegisterFailed(error.response));
                    openModalLockUnlock();
                    console.log(error.response);
                
                }
          console.log(error);
        })
    }

   const onChangeCheckbox = (e) => {
        if(!e.target.checked){
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

  const closeLockUnlockModal = () => {
      dispatch(authCreateSuccess(null));
      dispatch(authRegisterFailed(null));
      getStudents();
      setDisplayAsk("none", setShowModalLockUnLock(false));
  }

  const openModalLockUnlock = () => {
    setDisplayAsk("flex", setShowModalLockUnLock(true));
  }
    
  const openModalPartial = (id) => {
    console.log(id)
    setStudentId(id);
    setShowModalPartial(true,setDisplayAsk("flex"));

  }
  const onChangeSearch = (record) => {
    let filter, table, tr, td, i,input, txtValue;
     filter = record.toUpperCase();

    Object.keys(userStudent&&userStudent).map((value,index) => {
      console.log(userStudent[value].firstName);
      console.log(filter);
      console.log(index);
      if(userStudent[value].firstName.toUpperCase().indexOf(filter) > -1){
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

  const handleChange = (checked) => {
    setChecked(checked)
  }

  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
  }

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

  

  const CheckBox =()=> {
    return(
        <input type='checkbox' />
      )
  };
  

    let data = [
    
   
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userStudent&&userStudent.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container" style={{margin:'5% 0% 0% 0%'}}>
      {showChatModal? <ModalChat />  : ''}
      {showModalLoading? <ModalLoading />: ''}
      {showModalPartial? <ModalPartialLogin />: ''}
      {showModalLockUnLock? <ModalLockUnlock /> : ''}
       <GridContainer style={{textAlign:'left',fontSize:'100%'}}>

                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Apprenants
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} style={{marginTop:'2%'}}>
                           <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Search By Student Name"
                                    disabled={userStudent?false:true} 
                                    value="Doe"
                                    data={data}
                                    onChange={onChangeSearch}
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
        <Table striped bordered hover variant="secondary" id="studentTable">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Niveau</th>
                  <th>Parent</th>
                  <th>Activer / Desactiver</th>
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
                    <td>{post.lastName}</td>
                    <td>{post.email}      {post.emailConfirmed?<span>&#10003;</span>:""}</td>
                    <td>{post.level&&post.level.label}</td>
                    <td>{post.parent?post.parent.email:<img onClick={()=>openModalPartial(post.id)} style={{cursor:'pointer'}} src={add} width='25px' />}</td>
                    <td><input 
                            style={{cursor:'pointer'}}
                            type='checkbox' 
                            id="confirm_age"
                            value={post.id}
                            checked={post.status===1}
                            onChange={onChangeCheckbox}
                          /></td>  
                    <td onClick={()=>{openModal(post.firstName)}}><img style={{cursor:'pointer'}} src={chat} width='45%' /></td>
                  </tr>
                  )
              })}
              </tbody>
          </Table>
          </GridContainer>

      
                    <GridContainer style={{backgroundColor:'#eeeeee',width:'95%', overFlowY:"scroll"}}>
                      <GridItem xs={12} sm={12} md={12}>
                        <Pagination 
                          postsPerPage={postPerPage} 
                          totalPosts={userStudent&&userStudent.length} 
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
      userStudent: state.authReducer.userStudent,   
  };
};
export default  connect(mapStateToProps)(ApprenantContent)


