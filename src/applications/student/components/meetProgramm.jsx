import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Button from '../../../app/components/buttons/button';
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import GridItem from "../../../app/components/Grid/GridItem.js";
import smileauth from '../../../assets/images/dashboard/smileauth.png';
import logoImage from '../../../assets/images/im10.png';
import mpay from '../../../assets/images/dashboard/mpay.png';
import divid from '../../../assets/images/dashboard/divid.png';
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Footer from "../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';
import {Table} from 'react-bootstrap';
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import Pagination from './pagination.jsx';
import 'react-time-picker/dist/TimePicker.css';
import DatePicker from 'react-datepicker';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            shareMeetingProgramm,
            authCreateSuccess } from '../../redux/reducer/actions/auth';
import meetingService from '../../services/meeting.service';

const MeetProgramm = ({
						user,
				 		error,
                        meetingProgramm, 
                        registersForm,
                        onChildCloseModal,
                        createSuccessMessage, 
                        onchildOpenLoading}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [addProgrammForm, setAddProgrammForm] = useState(registersForm?registersForm:{
    												specialitie:"",
                                                    periodesNumbers:[null],
                                                    ownerId:"",
                                                    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(4);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [formError, setformError] = useState(null);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()
    const [inputDay, setInputDay] = useState("");



    useEffect(()=>{
        getMeetingByStudentId();
        console.log("data meeting in meetingprogramm")
        console.log(meetingProgramm);
    },[])

    const onChangeProgramm = (e) => {
        console.log("my name input------");
        console.log(e.target.name);
        setAddProgrammForm({...addProgrammForm, 
                                [e.target.name]: e.target.name==="periodesNumbers"?
                                Array.from(e.target.selectedOptions, item => parseInt(item.value)):
                                e.target.value
                        })
        setFormErrors(validateForm(addProgrammForm));
        console.log(addProgrammForm);
        console.log("close event form");
    }

const getMeetingByStudentId = () => {
    meetingService.getMeetingByTutorIdOrStudentId(user&&user.currentUser.id)
    .then((response)=>{
        console.log("meeting by Student");
        console.log(response.data.meetings);
        dispatch(shareMeetingProgramm(response.data.meetings));
    })
    .catch((error)=>{
        console.log("error meeting by Student");
        console.log(error);
    })
  }

    const validateForm = (values) => {
    const errorsValidation = {};
    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'day':
                if(!values[input]){
                    errorsValidation.day = "Le Jour est requis";

                }else{
                    setSubmited(true);
                }
                break;
            case 'specialitie':
                if(!values[input]){
                    errorsValidation.specialitie = "La Specialité est requise";

                }else{
                    setSubmited(true);
                }
                break;
            case 'periodesNumbers':
                for(var i of values[input]){
                    if(!i){
                        errorsValidation.periodesNumbers = "Période Obligatoire";
                    }else{
                        setSubmited(true);     
                   }
                } 
                break;
                default:
                    break;
    }
    
    });

       return errorsValidation;       
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

    const closeModal = (e) => {
        dispatch(authCreateSuccess(null));
        onChildCloseModal(e.target.name);
    }
    const handleLoading = (isShow) => {
      onchildOpenLoading(isShow);
  }

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = meetingProgramm&&meetingProgramm.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return(

        <div style={{margin:"2% 40% 0% 0%"}}>
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={12}>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12} style={{margin:"2%"}}>
                           
                           
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                           
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                
                                borderRadius:'25px 25px 25px 25px',
                                width:'200%',
                                height:'85%',
                                backgroundColor:'#ffce52',
                                margin:'5%',
                                padding:'10%'
                              }}>
                                  <GridContainer>
                                        <GridItem  xs={12} sm={12} md={8}  style={{textAlign:'left', marginBottom:"2%"}}>
                                           <span>Votre Programme de Web-Conférence</span>
                                        </GridItem>
                                      
                                      	<GridItem  xs={12} sm={12} md={4}  style={{textAlign:'right',cursor:'pointer'}}>
                                           <span  className='close' onClick={(e)=>closeModal(e)}>&times;</span>
                                      	</GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                  <GridItem xs={12} sm={12} md={12}>
                                    {createSuccessMessage&&
                                        (<div className="alert alert-success" style={{width:"100%",fontSize:'1em',textAlign:'center'}} role="alert">
                                                    {createSuccessMessage}
                                         </div>)
                                    }
                                  
                                  </GridItem>
                                </GridContainer>
        <GridContainer style={{width:'100%'}}> 
        <Table striped bordered hover variant="secondary" id="adminTable">
              <thead>
                <tr>
                  <th>Code Conference</th>
                  <th>Nom du Tuteur</th>
                  <th>Spécialité</th>
                  <th>Jours et Horaires</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts&&currentPosts.map((post,index)=>{
                console.log(post);
                return(
                  <tr key={index}>
                    
                    <td>{post.code}</td>
                    <td>{post.guests&&post.guests.map((post1,value1)=>{return(post1.firstName)})}</td>
                    <td>{post.speciality.name}</td>  
                    <td>{
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
                                                  <div style={{color:'red'}}><span style={{color:'black'}}>{ day }</span> : { periode }</div>
                                              )
                                          })
                                        }</td>
                  </tr>
                  )
              })}
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

					
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'2% 0% 5% 0%',
                                          textAlign:'center'}} onClick={onSubmit}>
                                      <div style={{
                                          backgroundColor: '#EDEDFD',
                                          borderRadius: '10px',
                                          borderBottom: '1px solid #002495',
                                          borderRight:  '1px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '45px',
                                          width: '50%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'1%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'black'}}>Demarrer</span>
                              </div>
                                    </div>
                                      
                                    </GridItem>
                                  </GridContainer>
         
                                  
                              </div>


                          </GridItem>
                        </GridContainer>
                        
                      </GridItem>


                    </GridContainer>
                    
			 </div>
		)
}
const mapStateToProps=(state)=>{
  return{
      error: state.authReducer.error,
      registersForm: state.authReducer.registersForm,
      createSuccessMessage: state.authReducer.createSuccessMessage,
      user: state.authReducer.user,
      meetTutor: state.authReducer.meetTutor,
      meetingProgramm: state.authReducer.meetingProgramm,  
  };
};
export default connect(mapStateToProps)(MeetProgramm);
