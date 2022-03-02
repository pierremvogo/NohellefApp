import react from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import {useDispatch} from 'react-redux';
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
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
import checkok from '../../../assets/images/dashboard/checkok.png';
import checknone from '../../../assets/images/dashboard/checknone.png';
import './account.css';
import ChangePassword from './changePassword.jsx';
import { authChangeSuccess} from '../../redux/reducer/actions/auth';


const AccountContent = ({user}) => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage, setPostPerPage] = useState(4);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);
  const dispatch= useDispatch()
	useEffect(()=>{
		setPosts(data);
	},[])

    let data = [
    {
      id: 1,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 2,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 3,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 4,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 5,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 6,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    
    {
      id: 7,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    
    {
      id: 8,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    
    {
      id: 9,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    
    {
      id: 10,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 11,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 12,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 13,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 14,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 15,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 16,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 17,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
  ];
 const [isBasic,setIsBasic] = useState(false);
 const [isChat,setIsChat] = useState(false);
 const [isWebConf,setIsWebConf] = useState(false);
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            top:"0px",
            left:"0px",
            }}
      >
                    
                    <ChangePassword onChildCloseModal={closeModal} /> 
                
          
          
      </div>
    )
  };
  const handleChange = (e) => {
    console.log(e.target.name);
  }
  const openModal = () => {
    setDisplay("flex",setShowEditModal(true));
  }
  function closeModal(){
    dispatch(authChangeSuccess(null));
    setDisplay("none",setShowEditModal(false));
  }
	return(
			<div className="container" style={{backgroundColor:'#eeeeee'}}>
      {showEditModal? <ModalContentEdit /> :'' } 
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                                Mon compte
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                    </GridContainer>
             
			              <GridContainer>
			 			           <GridItem xs={12} sm={12} md={12}>
                          <div style={{
                            float:'right',
                            marginBottom: '2%',
                            backgroundColor: '#f8db52',
                            borderRadius: '15px',
                            borderBottom: '2px solid #002495',
                            borderRight:  '2px solid #002495',
                            borderTop: '1px solid #002495',
                            borderLeft:  '1px solid #002495',
                            height: '50px',
                            width: '20%',
                            cursor: 'pointer',
                            textAlign:'center',
                            paddingTop:'1.2%'
                          }} onClick={()=>openModal()}>
                                
                                <span className="text" style={{fontSize:'1.1vw'}}>Modifier Votre Mot de passe</span>
                              </div>
                          
                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                    	<GridItem xs={12} sm={12} md={4}>
                    		<div style={{margin:'2%',textAlign:'center'}}>
                            <Avatar 
                              size="150"
                              round={true}
                              src={profilepic}
                              name='logo'
                          /><div>Modifier la photo</div>
                          </div>
                    	</GridItem>

                      <GridItem xs={12} sm={12} md={8}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <fieldset style={{border:'2px solid #4d6bf4'}}>
                                  <legend style={{width:'45%'}}>Informations Personnelle</legend>
                                   <GridContainer>
                                     <GridItem xs={12} sm={12} md={12}>
                                      <div style={{margin:'3%'}}>
                                        <span style={{marginRight:'0%'}}><strong>
                                        Nom :</strong>
                                        <input 
                                            className='input_content' 
                                            onChange={handleChange}
                                            type='text' 
                                            placeholder="Entrer votre Nom" 
                                            value={user&&user.currentUser.lastName}

                                            style={{width:'30%'}}
                                            />
                                        </span>
                                       <span><strong>Prenom :</strong>
                                       <input 
                                           className='input_content' 
                                           type='text' 
                                           onChange={handleChange}
                                           placeholder="Enter Votre prénom" 
                                           value={user&&user.currentUser.firstName}

                                           
                                       />
                                       </span>
                                      </div>
                                       
                                     </GridItem>
                                   </GridContainer>

                                   <GridContainer>
                                     <GridItem xs={12} sm={12} md={12}>
                                     <div style={{margin:'3%'}}>
                                         <span style={{marginRight:'5%'}}><strong>
                                         Email :</strong>
                                         <input 
                                           className='input_content' 
                                           type='email'
                                           onChange={handleChange}
                                           placeholder="Entrer votre adresse email" 
                                           value={user&&user.currentUser.email}

                                        />
                                        </span>
                                       <span><strong>Tel :</strong>
                                       <input 
                                         className='input_content' 
                                         type='text' 
                                         onChange={handleChange}
                                         placeholder="Entrer votre Numéro" 
                                         value={user&&user.currentUser.phoneNumber}

                                       />

                                       </span>
                                      </div>
                                      
                                     </GridItem>
                                   </GridContainer>

                                   <GridContainer>
                                     
                                     <GridItem xs={12} sm={12} md={12}>
                                     <div style={{margin:'3%'}}>
                                        <span><strong></strong>{user&&user.currentUser.level}</span>
                                      </div>
                                       
                                     </GridItem>
                                   </GridContainer>
                                </fieldset>
                            </GridItem>
                        </GridContainer>

                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <fieldset style={{border:'2px solid #4d6bf4',marginTop:'2%'}}>
                                  <legend style={{width:'43%'}}>Informations Abonnement</legend>
                           <div style={{
                                    backgroundColor:'#9aa7b2',
                                    margin:'3%',
                                    width:'90%',
                                    height:'140px',
                                    border:'1px solid #9aa7b2'}}>

                                   <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                  <div style={{
                                    width:'90%',
                                    backgroundColor:'#9AA7B2',
                                    height:'100px',
                                    margin:'0% 10% 2% 5%',
                                    fontSize:'100%',
                                    padding:'5% 5% 0% 0%'
                                  }}>
                                    <ul>
                                      <li>Accès aux cours<span style={{float:'right'}}>

                                      {isBasic?<img src={checkok} width='20px'/>:
                                               <img src={checknone} width='20px'/>}</span></li>
                                      <li>Accès aux vidéos<span style={{float:'right'}}>

                                      {isBasic?<img src={checkok} width='20px'/>:
                                               <img src={checknone} width='20px'/>}</span></li>
                                      <li>Accès aux chat<span style={{float:'right'}}>

                                      {isChat?<img src={checkok} width='20px'/>:
                                             <img src={checknone} width='20px'/>}</span></li>
                                      <li>Web-Conférence<span style={{float:'right'}}>

                                      {isWebConf?<img src={checkok} width='20px'/>:
                                                 <img src={checknone} width='20px'/>}</span></li>
                                    </ul>
                                  </div>
                                </GridItem>
                              </GridContainer>
                                    
                                  </div>
                                </fieldset>
                            </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridContainer>
                    </div>
		)
}
export default AccountContent;


