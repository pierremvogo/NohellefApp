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
import {NotificationManager,NotificationContainer} from 'react-notifications';
//import io from 'socket.io-client';
import Chat from "../../../app/components/chat/chat.jsx"
import adminService from '../../services/admin.service';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            shareStudentUser } from '../../redux/reducer/actions/auth';


//const socket = io.connect("http://localhost:3001");
const ApprenantContent = ({userStudent}) => {
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
    const [studentId, setStudentId] = useState("student");
    const [supAdminId, setSupAdminId] = useState("supadmin");
    const [room, setRoom] = useState(studentId+supAdminId);
    const [statusConnection,setStatusConnection] = useState(false);
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

  function closeModal(){
      setShowChatModal(false,setDisplayAsk("none")); 
  }

  const openModal=(nameUser)=> {
      setDisplayAsk("flex",setShowChatModal(true),setRemoteUsername(nameUser));
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
       <GridContainer style={{textAlign:'left',fontSize:'100%'}}>

                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Apprenants
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
                    <td>{post.email}</td>
                    <td>{post.phoneNumber}</td>
                    <td>{post.city}</td>
                    <td>{post.address}</td>  
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


