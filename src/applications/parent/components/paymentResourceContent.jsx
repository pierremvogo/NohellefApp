import react from 'react';
import {connect,useDispatch} from 'react-redux';
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
import aj1 from '../../../assets/images/dashboard/aj1.png';
import EditPayment from './editPayment.jsx';
import DeletePayment from './askForDelete.jsx';
import trash from '../../../assets/images/dashboard/trash.png';
import edit from '../../../assets/images/dashboard/edit.png';
import masterc from '../../../assets/images/dashboard/masterc.png';
import visa from '../../../assets/images/dashboard/visa.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import {Table} from 'react-bootstrap';
import Pagination from './pagination.jsx';
import Loader from 'react-loader-spinner';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authTutorCreateSuccess,
            sharePaymentRessource } from '../../redux/reducer/actions/auth';
import userService from '../../services/user.service';



const PaymentResourseContent = ({user,paymentRessource}) => {
  const [posts, setPosts] = useState([]);
  const [loading, serLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);
  const [paymentData,setPaymentData] = useState([]);
   const [showModalLoading, setShowModalLoading] = useState(false);
   const [showModalDelete, setShowModalDelete] = useState(false);
   const [displayAsk, setDisplayAsk] = useState("flex");
   const [payId,setPayId] = useState("");
   const dispatch= useDispatch();
   const [isUpdatePayment, setIsUpdatePayment] = useState(false);
   const [idUpdate, setIdUpdate] = useState("");


  const ModalContentEdit  = () => {
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
      
                   
        <EditPayment onChildCloseModal={closeModal} 
                     onchildOpenLoading={handleLoading}
                     onChildGetPayment={handleGetPaymentRessource} 
                     isUpdate={isUpdatePayment}
                     idUp={idUpdate}
                     /> 
          
                
        
          
      </div>
    )
  };
  const handleUpdate = (isUpdate,id) => {
    setIsUpdatePayment(isUpdate);
    setIdUpdate(id);
  }

  const ModalDeletePaymentCard  = () => {
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
                    
        <DeletePayment onChildCloseModal={closeModal} 
                       onchildOpenLoading={handleLoading}
                       idPayment={payId} /> 
            
      </div>
    )
  };


  const handleLoading = (isShow) => {
    setShowModalLoading(isShow);
  }
  const ModalLoading = () => {
    
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "10000%",
            display: displayAsk,
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
                    position: "fixed",
                    top: "40%",
                    left: "48%"
                }}
                >
               
                    <Loader type="Oval" color="#2BAD60" height="100" width="70" />
                
            </div>
          
      </div>
    )
  };

 function closeModal(){
    handleGetPaymentRessource();
    handleUpdate(false,"");
    const paymentCards = JSON.parse(localStorage.getItem('paymentCards'));
    setDisplay("none",setShowEditModal(false),setShowModalDelete(false));
  }

  const openModal=(isUpdate,dataPayment)=> {
    setDisplay("flex",setShowEditModal(true));
    if(isUpdate=="yess"){
      handleUpdate(true,dataPayment.id);
      dispatch(authSetRegisterForm({
          numCardNumber:dataPayment.bankCardNumber,
          cardExpireMonth:dataPayment.bankCardExpirationDate.substring(5),
          cardExpireYear:dataPayment.bankCardExpirationDate.substring(0,4),
          cardCode:dataPayment.bankCardCode,
      }));
      //setPaymentData(dataPayment);
    }else{
      setPaymentData([])}
    }
    const openModalDelete = (id) => {
      setPayId(id);
      setDisplay("flex",
        setShowEditModal(false),
        setShowModalDelete(true));
    }

  useEffect(()=>{
    handleGetPaymentRessource();
  },[])

  const paymentCards = JSON.parse(localStorage.getItem('paymentCards'));

  const handleGetPaymentRessource = () => {
        userService.getPaymentCardById(user&&user.currentUser.id)
        .then((response)=>{
          dispatch(sharePaymentRessource(response.data.cards));
          localStorage.setItem('paymentCards', JSON.stringify(response.data.cards));
          console.log("Get Payment Ressource");
          console.log(response.data.cards);
        })
        .catch((error)=>{
            console.log(error);
            dispatch(sharePaymentRessource(null));
        })
  }
  

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts&&posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container">
      {showEditModal? <ModalContentEdit /> :'' } 
      {showModalLoading? <ModalLoading />: ''}
      {showModalDelete? <ModalDeletePaymentCard />: ''}
       <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#002495',margin:'6%'}}>
                                Mes Cartes de paiements
                            </div>
                           
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                        
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                         <div style={{cursor:'pointer',
                                          marginTop:'10%',
                                          marginBottom:'5%',
                                          marginLeft:'10%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '25px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '50px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }} onClick={()=>openModal()}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Ajouter</span>
                              </div>
                                    </div>
                            
                        </GridItem>
                    </GridContainer>

                        <GridContainer style={{backgroundColor:'#eeeeee',width:'95%',textAlign:'center'}}> 
                            <Table striped bordered hover variant="secondary">
                                  <thead>
                                    <tr>
                                       <th>Numéro de Carte</th>
                                       <th>expiration(MM)</th>
                                       <th>expiration(YY)</th>
                                       <th>Code</th>
                                       <th>Editer</th>
                                       <th>Supprimer</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                  {paymentRessource&&paymentRessource.map((post,index)=>{
                                    return(
                                      <tr key={index}>
                                        <td>{post.bankCardNumber}</td>           
                                        <td>{post.bankCardExpirationDate.substring(5)}</td>
                                        <td>{post.bankCardExpirationDate.substring(0,4)}</td>
                                        <td>{post.bankCardCode}</td>
                                        <td>
                                          <img 
                                              onClick={()=>openModal("yess",post)} 
                                              src={edit} 
                                              width='30%' 
                                              style={{cursor:'pointer'}}
                                          />
                                        </td>
                                        <td>
                                          <img 
                                              onClick={()=>openModalDelete(post.id)}
                                              src={trash} 
                                              width='10%' 
                                              style={{cursor:'pointer'}}
                                           />
                                        </td>
                                      
                                      </tr>
                                      )
                                  })}
                                  </tbody>
                                </Table>
                              </GridContainer>


                    <GridContainer style={{backgroundColor:'#eeeeee',margin:'15%',width:'95%'}}>
                      <GridItem xs={12} sm={12} md={12}>
                        <Pagination 
                          postsPerPage={postPerPage} 
                          totalPosts={posts&&posts.length} 
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
      loading: state.authReducer.loading,
      tutorCreateMessage: state.authReducer.tutorCreateMessage,
      isShowMessage: state.authReducer.isShowMessage,
      registersForm: state.authReducer.registersForm,
      user: state.authReducer.user,
      paymentRessource: state.authReducer.paymentRessource,
  };
};
export default connect(mapStateToProps)(PaymentResourseContent);


