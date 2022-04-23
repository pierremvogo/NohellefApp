import React,{useState,useRef,useEffect} from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import {connect, useSelector, useDispatch} from 'react-redux';
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import { Dropdown } from 'react-bootstrap';
import smile from '../../../assets/images/main/smile.png';
import eye from '../../../assets/icons/eye.png';
import download from '../../../assets/icons/download.png';
import edit from '../../../assets/images/dashboard/edit.png';
import dispo from '../../../assets/images/disponibility.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Loader from 'react-loader-spinner';
import Pagination from './pagination.jsx';
import AgendaCalender from 'react-agenda-calendar'
import styles from 'react-agenda-calendar/dist/index.css'
import Agenda from './agenda';
import {Table} from 'react-bootstrap';
import EditOccupation from './editOccupation.jsx';
import AddEvent from './addEvent.jsx';
import Clock from 'react-live-clock';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import trash from '../../../assets/images/dashboard/trash.png';
import DeleteHoraire from './askForDelete.jsx';
import './account.css';
import DatePicker from 'react-datepicker';
import horaireService from '../../services/horaire.service';
import meetingService from '../../services/meeting.service';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            shareMeetingProgramm } from '../../redux/reducer/actions/auth';





const ConferenceContent = ({user,meetingProgramm}) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [showChatModal, setShowChatModal] = useState(false);
  const [displayAsk, setDisplayAsk] = useState("none");
  const [occupationData, setOccupationData] = useState([]);
  const [value, onChange] = useState('10:00');
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [showModalLoading, setShowModalLoading] = useState(false);
  const [displayLoading, setDisplayLoading] = useState("flex");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [horaireId, setHoraireId] = useState("");
  const [display, setDisplay] = useState("flex");
  
  const dispatch = useDispatch();



  useEffect(()=>{
    getMeetingByTutorId();
  },[])

  const getMeetingByTutorId = () => {
    meetingService.getMeetingByTutorIdOrStudentId(user&&user.currentUser.id)
    .then((response)=>{
        console.log("meeting by tutor");
        console.log(response.data);
        dispatch(shareMeetingProgramm(response.data.meetings));
    })
    .catch((error)=>{
        console.log("error meeting by tutor");
        console.log(error);
  })}
 
  
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = meetingProgramm&&meetingProgramm.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div>
       <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={12} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'blue',margin:'2% 0% 5% 0%'}}>
                                Votre Programme de Web-conference
                            </div>
                            
                        </GridItem>
                        
                    </GridContainer>
             
                    <GridContainer style={{backgroundColor:'#eeeeee'}}>
          
                       <GridItem xs={12} sm={12} md={12}>


        <GridContainer style={{backgroundColor:'#eeeeee',width:'95%', fontSize:'75%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
            
                 <tr>
                  <th>Lundi</th>
                  <th>Mardi</th>
                  <th>Mercredi</th>
                  <th>Jeudi</th>
                  <th>Vendredi</th>
                  <th>Samedi</th>
                  <th>Dimanche</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts&&currentPosts.map((post,index)=>{
                  console.log("my current posts");
                  console.log(post);
                return(
                    <tr key={index}>
                    <td>{post&&post.horaires.length != 0 ?post.horaires.map((value,index)=>{
                                    return(
                                        value.day==="0"? value.id : ""
                                      )
                      }):""}
                    </td>
                    <td>{post&&post.horaires.length != 0 ?post.horaires.map((value,index)=>{
                                    return(
                                        value.day==="1"? value.id : ""
                                      )
                      }):""}
                    </td>
                    <td>{post&&post.horaires.length != 0 ?post.horaires.map((value,index)=>{
                                    return(
                                        value.day==="2"? value.id : ""
                                      )
                      }):""}
                    </td>
                    <td>{post&&post.horaires.length != 0 ?post.horaires.map((value,index)=>{
                                    return(
                                        value.day==="3"? value.id : ""
                                      )
                      }):""}
                    </td>
                    <td>{post&&post.horaires.length != 0 ?post.horaires.map((value,index)=>{
                                    return(
                                        value.day==="4"? value.id : ""
                                      )
                      }):""}
                    </td>
                    <td>{post&&post.horaires.length != 0 ?post.horaires.map((value,index)=>{
                                    return(
                                        value.day==="5"? value.id : ""
                                      )
                      }):""}
                    </td>
                    <td>{post&&post.horaires.length != 0 ?post.horaires.map((value,index)=>{
                                    return(
                                        value.day==="6"? value.id : ""
                                      )
                      }):""}
                    </td>
                    <td>
                        {post.horaires.map((value,index) =>{return(<div key={index}>
                          {value.number === 1? "07h00-08h00":
                           value.number === 2? "08h00-09h00":
                           value.number === 3? "09h00-10h00":
                           value.number === 4? "10h00-11h00":
                           value.number === 5? "11h00-12h00":
                           value.number === 6? "12h00-13h00":
                           value.number === 7? "13h00-14h00":
                           value.number === 8? "14h00-15h00":
                           value.number === 9? "15h00-16h00":
                           value.number === 10? "16h00-17h00":
                           value.number === 11? "17h00-18h00":
                           value.number === 12? "18h00-19h00":
                           value.number === 13? "19h00-20h00":
                           value.number === 14? "20h00-21h00":
                           value.number === 15? "21h00-22h00":
                           value.number === 16? "22h00-23h00":
                           value.number === 17? "23h00-24h00":""}  <img src={dispo} width='10%' /></div>)})}
                    </td>
                   
                  </tr>
                )}
              )}
              </tbody>
            </Table>
          </GridContainer>
          <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                  <Pagination 
                      postsPerPage={postPerPage} 
                      totalPosts={meetingProgramm&&meetingProgramm.length} 
                      paginate={paginate}
                  />
              </GridItem>
          </GridContainer>
                        </GridItem>
              
                    </GridContainer>
                    
        </div>
    )
}
const mapStateToProps=(state)=>{
  return{
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      meetingProgramm: state.authReducer.meetingProgramm, 
      user: state.authReducer.user,     
  };
};
export default connect(mapStateToProps)(ConferenceContent);


