import react from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import {useDispatch,connect} from 'react-redux';
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
import ChangePassword from '../../../app/components/ChangePassword/changePassword.jsx';
import ChangeEmail from '../../../app/components/ChangeEmail/changeEmail.jsx';
import { authUpdateSuccess, authUpdateFailed } from '../../redux/reducer/actions/auth';
import authService from '../../services/auth.service'; 
import userService from  '../../services/user.service'; 
import './account.css';
import Loader from 'react-loader-spinner';


const AccountContent = ({error,user,updatePayload}) => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage, setPostPerPage] = useState(4);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);
  const [showModalLoading, setShowModalLoading] = useState(false);
  const [displayLoading, setDisplayLoading] = useState("flex");
  const [submited, setSubmited] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isPass,setIsPass] = useState(false);
  const [updateStudent, setUpdateStudent] = useState(
           {
            firstName: user?user.currentUser.firstName:"",
            lastName:  user?user.currentUser.lastName:"",
            username:  user?user.currentUser.username:"",
            phoneNumber: user?user.currentUser.phoneNumber:"",
            city: user?user.currentUser.city:"",
            email: user?user.currentUser.email:"",
            }

            )

const [isBasic,setIsBasic] = useState(false);
const [isChat,setIsChat] = useState(false);
const [isWebConf,setIsWebConf] = useState(false);
const dispatch= useDispatch()

	useEffect(()=>{
		setPosts(data);
	},[])

   const validateForm = (values) => {
    const errorsValidation = {};
    const regexPhoneNumber = /^(\++237[\s.-]?)+\(?6[5-9]{1}[0-9]{1}[\s.-]?[0-9]{3}[\s.-]?([0-9]{3})\)?/;
   
    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'firstName':
                if(values[input].length < 4){
                    errorsValidation.firstName = "Le nom doit avoir au moins 4 lettres";
                }else{
                     setSubmited(true)
                }
                break;
            case 'lastName':
                if(values[input].length < 4){
                    errorsValidation.lastName = "Le Prénom doit avoir au moins 4 lettres";
                }else{
                     setSubmited(true)
                }
                break;
            
            case 'username':
                if(values[input].length < 4){
                    errorsValidation.username = "Nom d'utilisateur avec au moins 4 lettres";
                }else{
                     setSubmited(true)
                }
                break;
            case 'phoneNumber':
                if(values[input].length >= 13 || values[input].length >= 9 ){
                        if(!regexPhoneNumber.test(values[input])){
                            errorsValidation.phoneNumber = "Numéro de Téléphone invalide";
                        }else{
                             setSubmited(true)
                        }
                }
                else{
                   errorsValidation.phoneNumber = "Format de Numéro invalide"; 
                }
                break;
                default:
                    break;
    }
    
    });

       return errorsValidation;       
  }

    let data = [
    
  ];

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
                    
                    {
                      isPass?
                      <ChangePassword onChildCloseModal={closeModal} />:
                      <ChangeEmail onChildCloseModal={closeModal} /> 
                    } 
                   
                
          
          
      </div>
    )
  };
  const openModal = (type) => {
    dispatch(authUpdateFailed(null));
    if(type==="pass"){
      setIsPass(true);
      setDisplay("flex",setShowEditModal(true),setShowModalLoading(false));
    }else{
      setIsPass(false);
      setDisplay("flex",setShowEditModal(true),setShowModalLoading(false));
    }
    
  }
  function closeModal(){
    setDisplay("none",setShowEditModal(false));
  }
  const handleChangeUpdate = (e) => {
    setUpdateStudent({...updateStudent,  [e.target.name]: e.target.value } )
     setFormErrors(validateForm(updateStudent));
     dispatch(authUpdateFailed(null));
     console.log(updateStudent);
  }
  const ModalLoading = () => {
    
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "150%",
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
                    top: "20%",
                    left: "44%"
                }}
                >
                <Loader type="Oval" color="#2BAD60" height="100" width="70" />
            </div>
          
      </div>
    )
  };
  const handleLoading = (isShow) => {

    setShowModalLoading(isShow,setShowEditModal(false));
  }

  const onSubmit = (e) => {
    e.preventDefault();
     let updatePayload = 
          { 
            firstName: updateStudent.firstName,
            lastName:  updateStudent.lastName,
            username:  updateStudent.username,
            birthDay: user&&user.currentUser.birthDay,
            phoneNumber: updateStudent.phoneNumber,
            city: updateStudent.city,
            address: user&&user.currentUser.address,
          }
   setFormErrors(validateForm(updateStudent));
   if(Object.keys(formErrors).length === 0 && submited){
      handleLoading(true);
        userService.editUser(user&&user.currentUser.id,updatePayload)
        .then((response) => {
                handleLoading(false); 
                dispatch(authUpdateFailed(null));
                dispatch(authUpdateSuccess(response.data));      
            })
            .catch((error) => {
                handleLoading(false);
                console.log("Error Update");
                if(error.response === undefined){
                    dispatch(authUpdateFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authUpdateFailed(error.response));
                }
                
            });
   }else{
            dispatch(authUpdateFailed(null));
            handleLoading(false);
            return; 
        }
   



  }

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container" style={{backgroundColor:'#eeeeee'}}>
      {showEditModal? <ModalContentEdit /> :'' } 
      {showModalLoading? <ModalLoading />: ''}
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
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
                                      {updatePayload&&
                                          (<div className="alert alert-success" style={{width:"60%",fontSize:'1em',textAlign:'center'}} role="alert">
                                                      {updatePayload}
                                           </div>)
                                      }
                                       {error && (
                                            <div className="form-group">
                                                {error.data&&(<div className="alert alert-danger" style={{width:"50%",fontSize:'0.7em',margin:'0% 25% 0% 25%'}} role="alert">
                                                        {error.data.message}
                                                </div>)}
                                                {!error.data&&(<div className="alert alert-danger" style={{width:"50%",fontSize:'0.7em',margin:'0% 25% 0% 25%'}} role="alert">
                                                        {error}
                                                </div>)}
                                            </div>
                                        )}
                                      </GridItem>
                                  </GridContainer>
             
			              <GridContainer>
                    <GridItem xs={3} sm={3} md={3} style={{textAlign:'center'}}>
                          
                          
                      </GridItem>
                      <GridItem xs={3} sm={3} md={3} style={{textAlign:'center'}}>
                          <div style={{
                            float:'right',
                            marginBottom: '2%',
                            backgroundColor: '#8CB7F0',
                            borderRadius: '15px',
                            borderBottom: '2px solid #002495',
                            borderRight:  '2px solid #002495',
                            borderTop: '1px solid #002495',
                            borderLeft:  '1px solid #002495',
                            height: '50px',
                            width: '100%',
                            cursor: 'pointer',
                            textAlign:'center',
                            padding:'5% 10% 5% 10%'
                          }} onClick={onSubmit}>
                                
                                <span className="text" style={{fontSize:'100%'}}>Enregistrer</span>
                              </div>
                          
                      </GridItem>
			 			         
                      
                      <GridItem xs={3} sm={3} md={3} style={{textAlign:'center'}}>
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
                            width: '100%',
                            cursor: 'pointer',
                            textAlign:'center',
                            padding:'5% 10% 5% 10%'
                          }} onClick={()=>openModal()}>
                                
                                <span className="text" style={{fontSize:'100%'}}>Modifier Votre Email </span>
                              </div>
                          
                      </GridItem>
                      <GridItem xs={3} sm={3} md={3} style={{textAlign:'center', marginBottom:'3%'}}>
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
                            width: '100%',
                            cursor: 'pointer',
                            textAlign:'center',
                            padding:'5% 10% 5% 10%'
                          }} onClick={()=>openModal("pass")}>
                                
                                <span className="text" style={{fontSize:'100%'}}>Modifier Mot de passe</span>
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
                                   <>
                                    {Object.keys(updateStudent).map((input,index)=> {
                                      let id,label, type, name; 
                                        if(input==="firstName"){
                                          id="firstName"
                                          type="text"
                                          name="firstName"                                 
                                          label="Nom"
                                      }else if(input==='lastName'){
                                          id="lastName"
                                          type="text"
                                          name="lastName"                            
                                          label="Prénom"
                                      }else if(input==="username"){
                                          id="username"
                                          type="text"
                                          name="username"                             
                                          label="Nom d'utilisateur"
                                      }else if(input==="phoneNumber"){
                                          id="phoneNumber"
                                          type="text"
                                          name="phoneNumber"                            
                                          label="Téléphone"
                                      }else if(input==="city"){
                                          id="city"  
                                          type="text"
                                          name="city"                            
                                          label="Ville"
                                      }else if(input==='email'){
                                          id="email"
                                          type="text"
                                          name="email"                             
                                          label="Email"
                                      }
                                      return(
                                        
                                        <GridItem xs={6} sm={6} md={6} key={index}>
                                        {input!="birthDay"&&input!="bankCardNumber"&&input!="bankCardExpirationDate"&&input!="bankCardCode"?
                                          <div style={{margin:'3%'}}>
                                            <span style={{marginRight:'0%'}}>
                                            <strong>{ label }</strong>
                                            <input 
                                                disabled={input==="email"?true:false}
                                                className='input_content' 
                                                name={name}
                                                onChange={handleChangeUpdate}
                                                type={type} 
                                                placeholder={label} 
                                                value={updateStudent[input]}

                                                style={{
                                                  width:'100%',
                                                  borderBottom:`${
                                                        input==="lastName"&&formErrors.lastName?'2px solid #C84941':
                                                        input==="firstName"&&formErrors.firstName?'2px solid #C84941':
                                                        input==="username"&&formErrors.username?'2px solid #C84941':
                                                        input==="phoneNumber"&&formErrors.phoneNumber?'2px solid #C84941':                                
                                                
                                                        '2px solid #002495'}`,
                                                }}
                                                />
                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="lastName"?formErrors.lastName:
                                                                         input==="firstName"?formErrors.firstName:
                                                                         input==="username"?formErrors.username:
                                                                         input==="phoneNumber"?formErrors.phoneNumber:
                                                                         
                                                                         
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                            </span>
                                          </div>:""}
                                       
                                     </GridItem>
                                            )
                                    })}
                                    </>
                                  
                                   </GridContainer>

                                </fieldset>
                            </GridItem>
                        </GridContainer>

                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <fieldset style={{border:'2px solid #4d6bf4',marginTop:'2%'}}>
                                  <legend style={{width:'45%'}}>Informations Abonnement</legend>
                                


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
const mapStateToProps=(state)=>{
  return{
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      user: state.authReducer.user,
      updatePayload: state.authReducer.updatePayload
  };
};
export default connect(mapStateToProps)(AccountContent);


