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
import tu1 from '../../../assets/images/dashboard/prog.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import './account.css';
import Pagination from './pagination.jsx';
import Chat from "../../../app/components/chat/chat.jsx";
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import userService from '../../services/user.service';
import Choose from "../../../app/components/chooseTutor/choose.jsx";
import Loader from 'react-loader-spinner';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            shareTutorUser } from '../../redux/reducer/actions/auth';



const ChooseTutorContent = ({user, userTutor, onChildOpenModal}) => {
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

  const dispatch = useDispatch();

  const history = useHistory();

	useEffect(()=>{
    getTutors();
		setPosts(data,setPosts1(data1));
	},[])

  const openModal = (e) => {
    onChildOpenModal(e.target.name)
  }
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


const handleChooseTutor = (specility) => {
  console.log("my tab code");
  console.log(specility);
  const filterPayload = {
                            specialities: specility,
                            studentsIds: [user&&user.currentUser.id]
                          }
        handleLoading(true);
        userService.filterTutors(filterPayload)
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

    const openModalChooseTutor= () => {
        setDisplayAsk("flex", setShowModalChooseTutor(true));
    }



  let data1 = [
      {
      id: 1,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 2,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 3,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 4,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 5,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
   

  ];

    let data = [
    
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userTutor&&userTutor.slice(indexOfFirstPost,indexOfLastPost);


  const indexOfLastPost1 = currentPage1 * postPerPage1;
  const indexOfFirstPost1 = indexOfLastPost1 - postPerPage1;
  const currentPosts1 = posts1.slice(indexOfFirstPost1,indexOfLastPost1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginate1 = (pageNumber) => setCurrentPage1(pageNumber);

 


	return(
			<div>
       {showModalChooseTutor? <ModalChooseTutor /> : ''}
       {showModalLoading? <ModalLoading />: ''}
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
                 {currentPosts1.map((value,index)=> {
                  return(
                      <GridContainer key={value.id}>
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
                                
                                <GridItem xs={6} sm={6} md={6}>
                                       <div style={{margin:'2% 0% 0% 2%'}}>
                                          <div style={{color:'white',fontSize:'90%',fontFamily:"Tahoma"}}><strong><i>Nom :</i></strong> {value.tutorName}</div>
                                          <div style={{color:'white',fontSize:'90%'}}><strong><i>Spécialités :</i></strong> {value.tutorSpeciality}</div>
                                        </div>
                                </GridItem>

                                <GridItem xs={6} sm={6} md={6} style={{textAlign:'right'}}>
                                    <div style={{margin:'2% 0% 0% 2%',cursor: 'pointer'}}>
                                      <img src={tu1} onClick={()=>history.push('/room/chat')} width='10%'/>
                                    </div>
                                </GridItem>


                              </GridContainer>

                              </div>
                            </GridItem>

                      </GridContainer>
                    )
                      })}
                   <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <Pagination 
                          postsPerPage={postPerPage1} 
                          totalPosts={posts1.length} 
                          paginate={paginate1}
                        />
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
                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                           <div style={{width:'100%',fontSize:'100%'}}>
                               <input type='date' onChange={e=>setDate(e.target.value)} style={{
                                width:'100%',
                                height:'45px'
                               }}/>
                            </div>
                        </GridItem>
                         <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{fontSize:'100%'}}>
                                <select name="pets" id="pet-select">
                                    <option value="">Plage horaire</option>
                                    <option value="dog">07h00-08h00</option>
                                    <option value="cat">08h00 - 09h00</option>
                                    <option value="hamster">09h00 - 10h00</option>
                                    <option value="parrot">10h00 - 11h00</option>
                                    <option value="spider">11h00 - 12h00</option>
                                    <option value="goldfish">12h00 - 13h00</option>
                                    <option value="goldfish">13h00 - 14h00</option>
                                    <option value="goldfish">14h00 - 15h00</option>
                                    <option value="goldfish">15h00 - 16h00</option>
                                    <option value="goldfish">16h00 - 17h00</option>
                                    <option value="goldfish">17h00 - 18h00</option>
                                </select>
                            </div>
                        </GridItem>
                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>

                             <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Nom du tuteur"
                                    value="Doe"
                                    data={data}
                                    callback={(record) => console.log(record)}
                                  />
                            </div>

                           
                        </GridItem>
                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{fontSize:'100%'}}>
                                <select name="pets" id="pet-select">
                                    <option value="">Spécialité</option>
                                    <option value="dog">Français</option>
                                    <option value="cat">Anglais</option>
                                    <option value="hamster">Mathématiques</option>
                                    <option value="parrot">Physiques</option>
                                    <option value="spider">Informatique</option>
                                    <option value="goldfish">Science de l'ingénieur</option>
                                </select>
                            </div>
                        </GridItem>
                       
                    </GridContainer>

                    {currentPosts&&currentPosts.map((post,index) => {
                      return(
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
                              cursor: 'pointer'

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
                                 
                                  <div onClick={()=>handleChooseTutor(post.specialities.map((value,index) =>{return(value.code)}))} style={{margin:'2% 0% 0% 2%',cursor: 'pointer'}}>
                                        <img src={choisir} width='70%'/>
                                  </div>
                                  
                                </GridItem>
                              </GridContainer>

                              </div>
                            </GridItem>
                          </GridContainer>
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
  };
};
export default connect(mapStateToProps)(ChooseTutorContent);



