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
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            shareHoraireUser } from '../../redux/reducer/actions/auth';





const CourseContent = ({user,horaireUser}) => {
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
    getHoraires();
		setPosts(data);
	},[])

  const getHoraires = () => {
  
    horaireService.getHoraireListByUser(user&&user.currentUser.id)
        .then((response)=> {
            console.log("Response for get Horaire user");
            console.log(response.data.horaires);
            dispatch(shareHoraireUser(response.data.horaires));
        })
        .catch((error)=> {
            console.log("Error Response for get Horaire user");
            console.log(error);
            dispatch(shareHoraireUser(null));
        })
}

   function closeModal(){
      getHoraires();
      setShowChatModal(false,
        setDisplayAsk("none"),
        setShowAddEvent(false),
        setShowModalDelete(false));
     
  }
  const handleChangeHour = (hour) => {
      console.log("My hour");
      console.log(hour);
  }
  function openModal(isUpdate,dataOccupation){
    if(isUpdate=="yess"){
      setOccupationData(dataOccupation)
    }else{

    }
    setShowChatModal(true, setDisplayAsk("flex")); 
  }

  const openAddEvent = (e) => {
     setShowChatModal(false, setDisplayAsk("flex"),setShowAddEvent(true)); 
  }

   const ModalDeleteCourse  = () => {
    return(
      <div className="" id='cont'
        style={{
            width: "100%",
            height:"100%",
            justifyContent: "center",
            display: display,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            top:"0px",
            left:"0px",
            }}
      >
                    
        <DeleteHoraire onChildCloseModal={closeModal} 
                       onchildOpenLoading={handleLoading}
                       idHoraire={horaireId} /> 
            
      </div>
    )
  };

  const openModalDelete = (id) => {
      setHoraireId(id);
      setDisplay("flex",
        setShowAddEvent(false),
        setShowModalDelete(true));
    }

  const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height:"100%",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            top:"0px",
            left:"0px",
            }}
      >
           
         <EditOccupation onchildOpenLoading={handleLoading} 
                         occupationData={occupationData} 
                         onChildCloseModal={closeModal} /> 
              
                
      
          
      </div>
    )
  };

  const ModalContentAddEvent  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height:"100%",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            top:"0px",
            left:"0px",
            }}
      >
           
         <AddEvent  onchildOpenLoading={handleLoading} occupationData={occupationData} onChildCloseModal={closeModal} /> 
              
                
      
          
      </div>
    )
  };

  const agenda = [
    {
      title: "Title",
      startDate: {day: 1, month: 2, year: 2020},
      endDate: {day: 5, month: 2, year: 2020},
    }
  ]

    let data = [
    
    
  ];
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
  
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = horaireUser&&horaireUser.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div>
      {showChatModal? <ModalContentEdit /> : ''}
      {showAddEvent? <ModalContentAddEvent /> : ''}
      {showModalLoading? <ModalLoading />: ''}
      {showModalDelete? <ModalDeleteCourse />: ''}
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={4} md={4} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'blue',margin:'2% 0% 15% 0%'}}>
                                Votre Agenda
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={4} md={4} style={{marginTop:'2%'}}>
                             <Clock format={'HH:mm:ss'} ticking={true} />
                        </GridItem>
              
                    
                      <GridItem xs={12} sm={4} md={4}>

                        <div style={{cursor:'pointer',
                                      textAlign:'center',
                                      margin:'0% 25% 0% 0%'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '10px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '50px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }} onClick={(e)=> openAddEvent(e)}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Nouveau Programme</span>
                              </div>
                                    </div>
                      </GridItem>
                   
                    </GridContainer>
             
			              <GridContainer style={{backgroundColor:'#eeeeee'}}>
			 		
			 					       <GridItem xs={12} sm={12} md={12}>


        <GridContainer style={{backgroundColor:'#eeeeee',width:'95%', fontSize:'75%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
            
                 <tr>
                  <th>Jours</th>
                  <th>Horaires Disponible</th>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts&&currentPosts.map((post,index)=>{
                  console.log("my current posts");
                  console.log(post);
                return(
                    <tr key={index}>
                    <td>{post.day === "0"?"Lundi":
                         post.day === "1"?"Mardi":
                         post.day === "2"?"Mercredi":
                         post.day === "3"?"Jeudi":
                         post.day === "4"?"Vendredi":
                         post.day === "5"?"Samedi":
                         post.day === "6"?"Dimanche":""}
                    </td>
                    <td>
                        {post.periodes.map((value,index) =>{return(<div key={index}>
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
                    <td style={{cursor:'pointer'}}>
                              <img onClick={()=>openModal("yess",post)} src={edit} width='10%' />
                              
                    </td>  
                    <td style={{cursor:'pointer'}}>
                              <img onClick={()=>openModalDelete(post.id)} src={trash} width='5%' />
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
                      totalPosts={horaireUser&&horaireUser.length} 
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
      horaireUser: state.authReducer.horaireUser, 
      user: state.authReducer.user,     
  };
};
export default connect(mapStateToProps)(CourseContent);


