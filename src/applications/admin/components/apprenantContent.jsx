import react from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
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
import chat2 from '../../../assets/images/dashboard/chat2.png';
import edit from '../../../assets/images/dashboard/edit.png';
import affect from '../../../assets/images/dashboard/affect.png';
import {Table} from 'react-bootstrap';
import './admin.css';
import EditTutor from './editTutor.jsx';
import AffectTutor from './affectTutor.jsx';

const ApprenantContent = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tutorName, setTutorName] = useState("");

  useEffect(()=>{
    setPosts(data);
  },[])

  const handleChange = (checked) => {
    setChecked(checked)
  }

  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
  }

   const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
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
                <div style={{display:'inline-block', margin:'3%', fontSize:'100%',width:'130%'}}>
                    <span className='close' onClick={()=>closeModal()}>&times;</span>
                    {isEdit?<EditTutor />:<AffectTutor tutorName={tutorName} />}
                </div>
                
            </div>
          
      </div>
    )
  };
  const CheckBox =()=> {
    return(
        <input type='checkbox' />
      )
  };
  function closeModal(){
    setDisplay("none",setShowEditModal(false));
  }

  const openModal=(type,tutorInfo)=> {
    if(type=="edit"){
      setIsEdit(true); 
    }else{
      setIsEdit(false,setTutorName(tutorInfo));
    }
    setDisplay("flex",setShowEditModal(true));
    }


    let data = [
    {
      id: 1,
      tutorProfile: im5,
      tutorName: "pirate",
      tutorSurname:"mvogo",
      tutorSpeciality:"Science de l'ingénieur",
      tutorModeConnect:"Email",
      tutorAffect: affect,
      tutorChat: chat2,
      tutorEdit: edit,

    },
    {
      id: 2,
      tutorProfile: im5,
      tutorName: "pirate",
      tutorSurname:"mvogo",
      tutorSpeciality:"Science de l'ingénieur",
      tutorModeConnect:"Email",
      tutorAffect: affect,
      tutorChat: chat2,
      tutorEdit: edit,
    },
    {
      id: 3,
     tutorProfile: im5,
      tutorName: "pirate",
      tutorSurname:"mvogo",
      tutorSpeciality:"Science de l'ingénieur",
      tutorModeConnect:"Email",
      tutorAffect: affect,
      tutorChat: chat2,
      tutorEdit: edit,
    },
    {
      id: 4,
      tutorProfile: im5,
      tutorName: "pirate",
      tutorSurname:"mvogo",
      tutorSpeciality:"Science de l'ingénieur",
      tutorModeConnect:"Email",
      tutorAffect: affect,
      tutorChat: chat2,
      tutorEdit: edit,
    },
    {
      id: 5,
      tutorProfile: im5,
      tutorName: "pirate",
      tutorSurname:"mvogo",
      tutorSpeciality:"Science de l'ingénieur",
      tutorModeConnect:"Email",
      tutorAffect: affect,
      tutorChat: chat2,
      tutorEdit: edit,
    },
    
    
   
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container" style={{margin:'5% 0% 0% 0%'}}>

      {showEditModal? <ModalContentEdit /> :'' } 
       <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>

                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Tuteurs
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
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
                            <div style={{width:'100%',fontSize:'1vw'}}>
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
                  <th>Profile</th>
                  <th>Nom</th>
                  <th>prenom</th>
                  <th>Spécialité</th>
                  <th>Mode de connexion</th>
                  <th>Affecter ce tuteur</th>
                  <th>lancer un Chat</th>
                  <th>Editer</th>
                </tr>
              </thead>
              <tbody>
              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                    <td>
                    <Avatar 
                      size="45"
                      round={true}
                      src={post.tutorProfile}
                      name='logo'
                      /></td>
                    <td>{post.tutorName}</td>
                    <td>{post.tutorSurname}</td>
                    <td>{post.tutorSpeciality}</td>
                    <td>{post.tutorModeConnect}</td>
                    <td style={{cursor:'pointer'}} onClick={()=>openModal("affect",post.tutorName)}><img src={post.tutorAffect} width='25%' style={{cursor:'pointer'}}/></td>
                    <td style={{cursor:'pointer'}}><img src={post.tutorChat} width='25%' style={{cursor:'pointer'}}/></td>
                    <td style={{cursor:'pointer'}}onClick={()=>openModal("edit")}><img src={post.tutorEdit} width='30%' style={{cursor:'pointer'}}/></td>
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
                          totalPosts={posts.length} 
                          paginate={paginate}
                        />
                      </GridItem>
                    </GridContainer>
                    </div>
    )
}
export default  ApprenantContent


