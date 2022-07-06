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
                                Vos Programmes de Web-conference
                            </div>
                            
                        </GridItem>
                        
                    </GridContainer>
             
                      {currentPosts&&currentPosts.map((post,index) => {
                      return(
                          <>

                          <GridContainer key={index}>
                             <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                              
                              backgroundColor: '#4b9960',
                              borderRadius: '15px',
                              borderBottom: '3px solid #9aa7b2',
                              borderRight:  '3px solid #9aa7b2',
                              height: '120px',
                              marginTop:'2%',
                              width: '95%',
                              padding:"1%"
                              

                              }}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <GridContainer>
                                      <GridItem xs={5} sm={5} md={5}>
                                       <div>
                                          <div style={{color:'white',fontSize:'100%',fontFamily:"Tahoma"}}><strong><i>Code Web-conference: </i></strong>  {post.code}</div>
                                          <div style={{color:'white',fontSize:'100%'}}><strong><i>Spécialités: </i></strong> {post.speciality.name}</div>
                                          <div style={{color:'white',fontSize:'100%'}}><strong><i>Nom Etudiant: </i></strong> {post.owner.firstName}</div>
                                        </div>
                                    </GridItem>
                                    <GridItem xs={7} sm={7} md={7} style={{fontSize:'80%'}}>
                                        {
                                          post.horaires.map((post1,index1)=>{
                                                let day, periode;
                                                  if(post1.day === "0"){
                                                      day = "Lundi";
                                                      periode = post1.periodes.map((post2,index2)=>{
                                                        return(
                                                            <span>
                                                            {
                                                              
                                                              post2.fromHour+"h00-"+post2.toHour+"h00, "
                                                            
                                                             }
                                                            </span>
                                                          )
                                                      })
                                                  }else if(post1.day === "1"){
                                                      day = "Mardi";
                                                      periode = post1.periodes.map((post2,index2)=>{
                                                        return(
                                                            <span>
                                                            {
                                                              post2.fromHour+"h00-"+post2.toHour+"h00, "
                                                            
                                                             }
                                                            </span>
                                                          )
                                                      })
                                                  }else if(post1.day === "2"){
                                                      day = "Mercredi";
                                                      periode = post1.periodes.map((post2,index2)=>{
                                                        return(
                                                            <span>
                                                            {
                                                              post2.fromHour+"h00-"+post2.toHour+"h00, "
                                                            
                                                             }
                                                            </span>
                                                          )
                                                      })
                                                  }else if(post1.day === "3"){
                                                      day = "Jeudi";
                                                      periode = post1.periodes.map((post2,index2)=>{
                                                        return(
                                                            <span>
                                                            {
                                                              post2.fromHour+"h00-"+post2.toHour+"h00, "
                                                            
                                                             }
                                                            </span>
                                                          )
                                                      })
                                                  }else if(post1.day === "4"){
                                                      day = "Vendredi";
                                                      periode = post1.periodes.map((post2,index2)=>{
                                                        return(
                                                            <span>
                                                            {
                                                              post2.fromHour+"h00-"+post2.toHour+"h00, "
                                                            
                                                             }
                                                            </span>
                                                          )
                                                      })
                                                  }else if(post1.day === "5"){
                                                     day = "Samedi";
                                                     periode = post1.periodes.map((post2,index2)=>{
                                                        return(
                                                            <span>
                                                            {
                                                              post2.fromHour+"h00-"+post2.toHour+"h00, "
                                                            
                                                             }
                                                            </span>
                                                          )
                                                      })
                                                  }else if(post1.day === "6"){
                                                      day = "Dimanche";
                                                      periode = post1.periodes.map((post2,index2)=>{
                                                        return(
                                                            <span>
                                                            {
                                                              post2.fromHour+"h00-"+post2.toHour+"h00, "
                                                            
                                                             }
                                                            </span>
                                                          )
                                                      })
                                                }
                                            return(
                                                  <div style={{color:'white'}}><span style={{color:'black'}}>{ day }</span> : { periode }</div>
                                              )
                                          })
                                        }
                                    </GridItem>
                                  </GridContainer>
                                </GridItem>
                                
                              </GridContainer>

                              </div>
                            </GridItem>
                          </GridContainer>
                          </>
                        )
                    })}
         
          <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                  <Pagination 
                      postsPerPage={postPerPage} 
                      totalPosts={meetingProgramm&&meetingProgramm.length} 
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
      meetingProgramm: state.authReducer.meetingProgramm, 
      user: state.authReducer.user,     
  };
};
export default connect(mapStateToProps)(ConferenceContent);


