import React,{useState,useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import { useHistory } from "react-router-dom";
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import { Dropdown } from 'react-bootstrap';
import t1 from '../../../assets/images/dashboard/t1.png';
import profilepic from '../../../assets/images/im5.png';
import chat1 from '../../../assets/images/dashboard/chat1.png';
import chat2 from '../../../assets/images/dashboard/chat2.png';
import smile2 from '../../../assets/images/dashboard/smile2.png';
import choisir from '../../../assets/images/dashboard/choisir.png';
import conchat from '../../../assets/images/dashboard/conchat.png';
import prog from '../../../assets/images/dashboard/prog.png';
import meet from '../../../assets/images/dashboard/meet.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import './account.css';
import ProgramConference from './programConference.jsx';
import MeetProgramm from './meetProgramm.jsx';
import Pagination from './pagination.jsx';
import PaginateMyTutor from './paginateMyTutor.jsx';
import Chat from "../../../app/components/chat/chat.jsx";
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import userService from '../../services/user.service';
import Choose from "../../../app/components/chooseTutor/choose.jsx";
import meetingService from '../../services/meeting.service';
import Loader from 'react-loader-spinner';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            shareTutorForStudent,
            shareTutorUser,
            shareMeetTutor,
            shareMeetingProgramm } from '../../redux/reducer/actions/auth';



const ChooseTutorContent = ({user, userTutor,tutorForStudent, onChildOpenModal}) => {
	const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(3);
  const [displayAsk, setDisplayAsk] = useState("none");
  const [showChatModal, setShowChatModal] = useState(false);
  const [isShowChat, setIsShowChat] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const [currentPage1, setCurrentPage1] = useState(1);
  const [postPerPage1, setPostPerPage1] = useState(1);
  const [date, setDate] = useState();
  const [showJoin, setShowJoin] = useState(false);
  const [displayLoading, setDisplayLoading] = useState("flex");
  const [showModalLoading, setShowModalLoading] = useState(false);
  const [showModalChooseTutor, setShowModalChooseTutor] = useState(false);
  const [showModalConf, setShowModalConf] = useState(false);
  const [dataMeeting, setDataMeeting] = useState([]);
  const [dataTutor, setDataTutor] = useState({});
  const [idMeet, setIdMeet] = useState([]);
  const [showModalMeet, setShowModalMeet] = useState(false);
  const [meetForTutor, setMeetForTutor] = useState([]);
  const [filterForm, setFilterForm] = useState({
                                                  codeSpecialities: "",
                                                  codeDays: "",
                                                  codeHoraires: "",
                                                })

  const dispatch = useDispatch();

  const history = useHistory();

	useEffect(()=>{
     getTutors();
	},[]);

  const openModal = (e) => {
    onChildOpenModal(e.target.name)
  }

  const onChangeFilterForm = (e) => {
    setFilterForm({...filterForm, 
                                [e.target.name]: e.target.value
                      });
    console.log("Filter form");
    console.log(filterForm);
  }

  const applyFilter = () => {
    getTutorByFilter(filterForm.codeSpecialities,filterForm.codeHoraires,filterForm.codeDays);
  }


  const getTutors = () => {
    getTutorsChoosed();
    userService.filterTutors({})
        .then((response)=> {
            console.log("Response for get All Tutor user");
            console.log(response.data);
            dispatch(shareTutorUser(response.data.users));
        })
        .catch((error)=> {
            console.log("Error Response for get all Tutor user");
            console.log(error);
            dispatch(shareTutorUser(null));
        })
  }

  const getTutorsChoosed = () => {
     userService.filterTutors({studentsIds: [user.currentUser.id]})
        .then((response)=> {
            console.log("Response for get Tutor choose by student ");
            console.log(response.data.users);
            dispatch(shareTutorForStudent(response.data.users));

        })
        .catch((error)=> {
            console.log("Error Response for get Tutor choose by student");
            console.log(error);
            dispatch(shareTutorForStudent(null));
        })
  }
  


  

  const getTutorByFilter = (f1,f2,f3) => {
  const filterPayload = {
                             specialities: [f1],
                             periodes: [f2],
                             days: [f3]
                        }
    userService.filterTutors(filterPayload)
        .then((response)=> {
            dispatch(shareTutorUser(response.data.users));
        })
        .catch((error)=> {
            dispatch(shareTutorUser(null));
        })
 }

const onChangeHour = (hours) =>{
}

const ModalChooseTutor  = () => {
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
       <Choose onChildCloseModal={closeChooseModal} />  
         
      </div>
    )
  };
   const closeChooseModal = () => {
      dispatch(authCreateSuccess(null));
      dispatch(authRegisterFailed(null));
      getTutors();
      setDisplayAsk("none", setShowModalChooseTutor(false));
  }
  const openModalChooseTutor= () => {
        setDisplayAsk("flex", 
            setShowModalChooseTutor(true), 
            setShowModalConf(false),
            setShowModalMeet(false),);
    }



 const openModalConf= (tutor) => {
        setDataTutor(tutor);
        setDisplayAsk("flex", 
            setShowModalChooseTutor(false), 
            setShowModalConf(true),
            setShowModalMeet(false));
    }

  const ModalProgramConf  = () => {
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
       <ProgramConference onChildCloseModal={closeConfModal}
                          tutorData={dataTutor}
                          onchildOpenLoading={handleLoading} />  
         
      </div>
    )
  };
   const closeConfModal = () => {
      getTutors();
      dispatch(authCreateSuccess(null));
      dispatch(authRegisterFailed(null));
      setDisplayAsk("none", 
            setShowModalConf(false),
            setShowModalChooseTutor(false), 
            setShowModalMeet(false));
  }


  const openModalMeet= (tutor) => {
        setDisplayAsk("flex", 
            setShowModalChooseTutor(false), 
            setShowModalConf(false),
            setShowModalMeet(true));   
    }

  const ModalMeet  = () => {
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
       <MeetProgramm      onChildCloseModal={closeConfModal}
                          onchildOpenLoading={handleLoading} />  
         
      </div>
    )
  };
   const closeModalMeet = () => {
      dispatch(authCreateSuccess(null));
      dispatch(authRegisterFailed(null));
      setDisplayAsk("none", setShowModalMeet(false));
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

  const onChangeSearch = (record) => {
      let filter;
          filter = record.target.value.toUpperCase();
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


const handleChooseTutor = (tutorId) => {
        handleLoading(true);
        userService.assignTutorToStudent(user&&user.currentUser.id, tutorId)
        .then((response)=>{
          handleLoading(false);
          console.log("Tutor Choosed Successfully");
          dispatch(authRegisterFailed(null));
          dispatch(authCreateSuccess("Tutor has been selected Successfully"));
          openModalChooseTutor();
          console.log(response.data);
        })
        .catch((error)=>{
          console.log("Error selected tutor");
          handleLoading(false);
          if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                   openModalChooseTutor();
                }else{
                    dispatch(authRegisterFailed(error.response));
                    openModalChooseTutor();
                    console.log(error.response);
                
                }
          console.log(error);
        })
    }

    

  
  let data1 = [
  
  ];

    let data = [
    
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userTutor&&userTutor.slice(indexOfFirstPost,indexOfLastPost);


  const indexOfLastPost1 = currentPage1 * postPerPage1;
  const indexOfFirstPost1 = indexOfLastPost1 - postPerPage1;
  const currentPosts1 = tutorForStudent&&tutorForStudent.slice(indexOfFirstPost1,indexOfLastPost1);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginate1 = (pageNumber) => setCurrentPage1(pageNumber);

 


	return(
			<div>
       {showModalChooseTutor? <ModalChooseTutor /> : ''}
       {showModalLoading? <ModalLoading />: ''}
       {showModalConf? <ModalProgramConf  />: ''}
       {showModalMeet? <ModalMeet  />: ''}
			 <GridContainer style={{fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                            <div style={{display:'inline-block',color:'red',margin:'2%'}}>
                                Vos Tuteurs
                            </div>
                            <Avatar 
                                size="40"
                                round={true}
                                src={t1}
                                name='logo'
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                    </GridContainer>
                 {currentPosts1&&currentPosts1.map((post,index)=> {
                    console.log(post);
                    return(
                        <>
                      <GridContainer key={index}>
                            <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                              backgroundColor: '#273941',
                              borderRadius: '15px',
                              borderBottom: '3px solid #9aa7b2',
                              borderRight:  '3px solid #9aa7b2',
                              height: '70px',
                              width: '95%',

                              }}>
                              <GridContainer>
                                
                                <GridItem xs={9} sm={9} md={9}>
                                        <div style={{margin:'2% 0% 0% 2%'}}>
                                          <div style={{color:'white',fontSize:'100%',fontFamily:"Tahoma"}}><strong><i>Nom:</i></strong>  {post&&post.firstName}</div>
                                          <div style={{color:'white',fontSize:'100%'}}><strong><i>Spécialités:</i></strong> {post&&post.specialities.map((value,index) =>{return(<span key={index}>{value.name.toLowerCase()+", "}</span>)})}</div>
                                        </div>
                                </GridItem>

                                <GridItem xs={3} sm={3} md={3} style={{textAlign:'right'}}>
                                    <div style={{margin:'2% 0% 0% 2%'}}>
                                    {post&&post.horaires&&post.horaires.length != 0? 
                                      <img style={{cursor: 'pointer'}} src={prog} onClick={()=>openModalConf(post)} width='30%'/>
                                     : ""} 
                                    </div>
                                </GridItem>


                              </GridContainer>

                              </div>
                            </GridItem>

                      </GridContainer>
                      </>
                    )
                      })}
                   <GridContainer>
                      <GridItem xs={9} sm={9} md={9}>
                        <PaginateMyTutor 
                          postsPerPage={postPerPage1} 
                          totalPosts={tutorForStudent&&tutorForStudent.length} 
                          paginate={paginate1}
                        />
                      </GridItem>
                      <GridItem xs={3} sm={3} md={3}>
                        <img style={{cursor: 'pointer'}} src={meet} onClick={openModalMeet} width='25%'/>
                      </GridItem>
                    </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <div style={{border:'2px solid #002495',width:'100%'}}></div>
                      <div style={{color:'#002495'}}>Avez-vous besoin d'un autre tuteur?</div>
                    </GridItem>
                  </GridContainer>

                   <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={3} sm={3} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'red',margin:'2%'}}>
                                Rechercher un tuteur
                            </div>
                            <Avatar 
                                size="40"
                                round={true}
                                src={smile2}
                                name='logo'
                            />
                        </GridItem>
                        

                       {/* <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{fontSize:'100%'}}>
                                 <input
                                    style={{width:"100%",height:"44px"}}
                                    name="search"
                                    type="text"
                                    placeholder="Search By Name"
                                    disabled={userTutor?false:true}
                                    onChange={onChangeSearch}
                                  />
                            </div>
                        </GridItem>*/}

                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{fontSize:'100%'}}>
                                <select 
                                  name="codeDays" 
                                  onChange={onChangeFilterForm}
                                  id="pet-select">
                                    <option value="">Jour Disponible</option>
                                    <option value="">  </option>
                                    <option value="0">Lundi</option>
                                    <option value="1">Mardi</option>
                                    <option value="2">Mercredi</option>
                                    <option value="3">Jeudi</option>
                                    <option value="4">Vendredi</option>
                                    <option value="5">Samedi</option>
                                    <option value="6">Dimanche</option>
                                </select>
                            </div>
                        </GridItem>

                         <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{fontSize:'100%'}}>
                                <select 
                                  name="codeHoraires" 
                                  id="horaire"
                                  onChange={onChangeFilterForm}
                                  >
                                    <option value="">Heure Disponible</option>
                                    <option value="">       </option>
                                    <option value="1">07h00-08h00</option>
                                    <option value="2">08h00-09h00</option>
                                    <option value="3">09h00-10h00</option>
                                    <option value="4">10h00-11h00</option>
                                    <option value="5">11h00-12h00</option>
                                    <option value="6">12h00-13h00</option>
                                    <option value="7">13h00-14h00</option>
                                    <option value="8">14h00-15h00</option>
                                    <option value="9">15h00-16h00</option>
                                    <option value="10">16h00-17h00</option>
                                    <option value="11">17h00-18h00</option>
                                    <option value="12">18h00-19h00</option>
                                    <option value="13">19h00-20h00</option>
                                    <option value="14">20h00-21h00</option>
                                    <option value="15">21h00-22h00</option>
                                    <option value="16">22h00-23h00</option>
                                    <option value="17">23h00-24h00</option>
                                </select>
                            </div>
                        </GridItem>
                        
                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{fontSize:'100%'}}>
                                <select 
                                  name="codeSpecialities" 
                                  onChange={onChangeFilterForm}
                                  id="pet-select">
                                    <option value="">Spécialité</option>
                                     <option value="">     </option>
                                    <option value="fr">Français</option>
                                    <option value="eng">Anglais</option>
                                    <option value="maths">Mathématiques</option>
                                    <option value="phy">Physiques</option>
                                    <option value="info">Informatique</option>
                                    <option value="ing">Science de l'ingénieur</option>
                                </select>
                            </div>
                        </GridItem>

                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{cursor:'pointer',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '5px',
                                          borderBottom: '1px solid #002495',
                                          borderRight:  '1px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '45px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }} onClick={applyFilter}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Appliquez</span>
                              </div>
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
                              height: '65px',
                              marginTop:'2%',
                              width: '95%',
                              

                              }}>
                              <GridContainer>
                                <GridItem xs={8} sm={8} md={8}>
                                    <GridContainer>
                                      <GridItem xs={12} sm={12} md={12} style={{margin:'1% 0% 0% 2%'}}>
                                       <div>
                                          <div style={{color:'white',fontSize:'100%',fontFamily:"Tahoma"}}><strong><i>Nom:</i></strong>  {post.firstName}</div>
                                          <div style={{color:'white',fontSize:'100%'}}><strong><i>Spécialités:</i></strong> {post.specialities.map((value,index) =>{return(<span key={index}>{value.name.toLowerCase()+", "}</span>)})}</div>
                                        </div>
                                    </GridItem>
                                  </GridContainer>
                                </GridItem>
                                <GridItem xs={4} sm={4} md={4} style={{textAlign:'center'}}>
                                 
                                  <div onClick={()=>handleChooseTutor(post.id)} style={{margin:'2% 0% 0% 2%',cursor: 'pointer'}}>
                                        <img style={{cursor: 'pointer'}} src={choisir} width='70%'/>
                                  </div>
                                  
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
      user: state.authReducer.user,  
      tutorForStudent: state.authReducer.tutorForStudent,
  };
};
export default connect(mapStateToProps)(ChooseTutorContent);



