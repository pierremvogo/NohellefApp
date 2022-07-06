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
import AffectRight from './affectRight.jsx';
import Chat from "../../../app/components/chat/chat.jsx"
import Adress from './adress.jsx';
import userService from  '../../services/user.service'; 
import Loader from 'react-loader-spinner';
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import LockUnlockAccount from "../../../app/components/lockUnlock/lockUnlockAccount.jsx"
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authCreateSuccess,
            authSetRegisterForm,
            shareAdminUser } from '../../redux/reducer/actions/auth';



//const socket = io.connect("http://localhost:3001");
const AdminContent = ({userAdmin}) => {
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
    const [adminData,setAdminData] = useState({});
    const [isAdress, setIsAdress] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [showModalLockUnLock, setShowModalLockUnLock] = useState(false);
    const [currentPageAssociate, setCurrentPageAssociate] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
       getAdmins();
       console.log("My user Admin from API");
       console.log(userAdmin);
        return function cleanup () {
            return;
        }
      
    },[])

    const getAdmins = () => {
      const filterPayload = {
                        types: [
                          "3",
                        ]
                      }
      adminService.listAndFiltersUsers(filterPayload)
          .then((response)=> {
              console.log("Response for get Amin user");
              console.log(response.data.users);
              dispatch(shareAdminUser(response.data.users));
          })
          .catch((error)=> {
              console.log("Error Response for get Admin user");
              console.log(error);
              dispatch(shareAdminUser(null));
        })
    }

  function closeModal(){
      getAdmins();
      setDisplayAsk("none",setShowEditModal(false));
  }
  let data = [
    
   
  ];

  const onChangeSearch = (record) => {
    let filter, table, tr, td, i,input, txtValue;
     filter = record.toUpperCase();

    Object.keys(userAdmin&&userAdmin).map((value,index) => {
      console.log(userAdmin[value].firstName);
      console.log(filter);
      console.log(index);
      if(userAdmin[value].firstName.toUpperCase().indexOf(filter) > -1){
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
  
    
  

  const openModal=(isAdress,adminData)  => {
     if(isAdress=="adress"){
        setIsAdress(true,  setAdminData(adminData))
     }else{
      setIsAdress(false, setAdminData(adminData));
     }
    setShowEditModal(true,setDisplayAsk("flex"));
   
}
    const handleCallback = (childData) =>{
           
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
        adminService.lockAccount(id)
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
        adminService.unLockAccount(id)
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
    const setPageCurrent = (currentP) => {
      setCurrentPage(currentP);
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
      getAdmins();
      setDisplayAsk("none", setShowModalLockUnLock(false));
  }

  const openModalLockUnlock = () => {
    setDisplayAsk("flex", setShowModalLockUnLock(true));
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
           
        {isAdress?
          <AffectRight 
            adminData={adminData} 
            onchildOpenLoading={handleLoading}
            onChildCloseModal={closeModal}/>:
          <AddAdmin 
              onChildCloseModal={closeModal} 
              onchildOpenLoading={handleLoading}
              onChildGetAdminUser={getAdmins} /> }
               
               
            
          
      </div>
    )
  };
 
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userAdmin&&userAdmin.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container" style={{margin:'0% 0% 0% 0%'}}>
      {showModalLoading? <ModalLoading />: ''}
      {showEditModal? <ModalContentEdit /> :'' }
      {showChatModal? <ModalChat />  : ''}
      {showModalLockUnLock? <ModalLockUnlock /> : ''}
       <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'5%'}}>
                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                                Tous les Administarteurs
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} style={{marginTop:'5%'}}>
                            <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Search By Student Name"
                                    disabled={userAdmin?false:true} 
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
        <Table striped bordered hover variant="secondary" id="adminTable">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Nom</th>
                  <th>Adresse Mail</th>
                  <th>Permissions</th>
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
                    <td>{post.email}      {post.emailConfirmed?<span>&#10003;</span>:""}</td>
                    <td>{post.permissions&&post.permissions.map((value,index)=>{
                      return(
                              <span>{value === '0'?"MANAGE_ADMIN":
                                     value === '1'?"MANAGE_TUTOR":
                                     value === '2'?"MANAGE_PARENT":
                                     value === '3'?"MANAGE_ABONNEMENTS":
                                     value === '4'?"MANAGE_PUB":
                                     value === '5'?"LOGIN_IN_TUTOR_ACCOUNT":""},  </span>
                        )
                    })}</td>
                    <td><input 
                            style={{cursor:'pointer'}}
                            type='checkbox' 
                            id="confirm_age"
                            value={post.id}
                            checked={post.status===1}
                            onChange={onChangeCheckbox}
                          /></td>
                    <td onClick={()=>{openModal('adress',post)}}><img style={{cursor:'pointer'}} src={affect} width='15%'/></td>  
                    <td onClick={()=>{console.log("chat")}}><img style={{cursor:'pointer'}} src={chat} width='60%'/></td>
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
                          totalPosts={userAdmin&&userAdmin.length} 
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
      userAdmin: state.authReducer.userAdmin,   
  };
};
export default connect(mapStateToProps)(AdminContent);


