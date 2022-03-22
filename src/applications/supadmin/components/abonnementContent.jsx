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
import Loader from 'react-loader-spinner';
//import io from 'socket.io-client';
import Chat from "../../../app/components/chat/chat.jsx"
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import LockUnlockAccount from "../../../app/components/lockUnlock/lockUnlockAccount.jsx"
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authCreateSuccess,
            authSetRegisterForm,
            shareParentUser } from '../../redux/reducer/actions/auth';


//const socket = io.connect("http://localhost:3001");
const AbonnementContent = ({userParent}) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
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
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [showModalLockUnLock, setShowModalLockUnLock] = useState(false);

    const dispatch = useDispatch();

  useEffect(()=>{
     getParents();
     console.log("My user Parent from API");
     console.log(userParent);
     return function cleanup () {
            return;
        }
  },[])

  const getParents = () => {
    const filterPayload = {
                      types: [
                        "1",
                      ]
                    }
    adminService.listAndFiltersUsers(filterPayload)
        .then((response)=> {
            console.log("Response for get Parent user");
            console.log(response.data.users);
            dispatch(shareParentUser(response.data.users));
        })
        .catch((error)=> {
            console.log("Error Response for get Parent user");
            console.log(error);
            dispatch(shareParentUser(null));
        })
}

  const handleChange = (checked) => {
    setChecked(checked)
  }

  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
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

  const onChangeSearch = (record) => {
    let filter, table, tr, td, tdId, i, txtValue;
    filter = record.toLowerCase();
    table = document.getElementById("parentTable");
    tr = table.getElementsByTagName("tr");
    for (i=0; i<tr.length; i++){
      td = tr[i].getElementsByTagName("td")[1];
      if(td) {
        txtValue = td.textContent
        if(txtValue.toLowerCase().indexOf(filter) > -1){
          tr[i].style.display = "";
        }else{
          tr[i].style.display = "none";
        }
      }
    }
  }

  const closeLockUnlockModal = () => {
      dispatch(authCreateSuccess(null));
      dispatch(authRegisterFailed(null));
      getParents();
      setDisplayAsk("none", setShowModalLockUnLock(false));
  }

  const openModalLockUnlock = () => {
    setDisplayAsk("flex", setShowModalLockUnLock(true));
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
  function closeModal(){
      setShowChatModal(false,setDisplayAsk("none"));
    }
    

  const openModal=(nameUser)=> {
      setDisplayAsk("flex",setRemoteUsername(nameUser),setShowChatModal(true));
    }

    let data = [
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userParent&&userParent.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container" style={{margin:'5% 0% 0% 0%'}}>
      {showChatModal? <ModalChat />  : ''}
       {showModalLoading? <ModalLoading />: ''}
       {showModalLockUnLock? <ModalLockUnlock /> : ''}
       <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>

                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Parents
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} style={{marginTop:'2%'}}>
                           <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Search By Parent Name"
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
        <Table striped bordered hover variant="secondary" id="parentTable">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Ville</th>
                  <th>Activer / Desactiver</th>
                  <th>Nb. Apprenants</th>
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
                    <td>{post.email}    {post.emailConfirmed?<span>&#10003;</span>:""}</td>
                    <td>{post.phoneNumber}</td>
                    <td>{post.city}</td>
                    <td><input 
                            style={{cursor:'pointer'}}
                            type='checkbox' 
                            id="confirm_age"
                            value={post.id}
                            checked={post.status===1}
                            onChange={onChangeCheckbox}
                          /></td> 
                    <td>{post.children&&post.children.length}</td> 
                    <td style={{cursor:'pointer'}} onClick={()=>openModal(post.firstName)}><img src={chat} width='45%'/></td>  
                  
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
                          totalPosts={userParent&&userParent.length} 
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
      userParent: state.authReducer.userParent,   
  };
};
export default  connect(mapStateToProps)(AbonnementContent)


