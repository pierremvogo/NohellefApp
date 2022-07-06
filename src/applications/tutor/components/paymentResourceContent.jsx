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
import aj1 from '../../../assets/images/dashboard/aj1.png';
import EditPayment from './editPayment.jsx';
import trash from '../../../assets/images/dashboard/trash.png';
import edit from '../../../assets/images/dashboard/edit.png';
import masterc from '../../../assets/images/dashboard/masterc.png';
import visa from '../../../assets/images/dashboard/visa.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';

import Pagination from './pagination.jsx';


const PaymentResourseContent = () => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(3);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);

  const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "4000px",
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
           <div className="contain" id='myContain'>
                <div style={{display:'inline-block', margin:'3%', fontSize:'1.5vw'}}>
                    
                </div><span className='close' onClick={()=>closeModal()}>&times;</span>
                <EditPayment /> 
            </div>
          
      </div>
    )
  };

 function closeModal(){
    setDisplay("none",setShowEditModal(false));
  }

  const openModal=()=> {
    setDisplay("flex",setShowEditModal(true));
    }



	useEffect(()=>{
		setPosts(data);
	},[])

    let data = [
    {
      id: 1,
      cardNumber: "***_***_***_***-7785",
      cardImage: visa,
      cardType: "VISA",
      
    },
    {
      id: 2,
      cardNumber: "***_***_***_***-8497",
      cardImage: masterc,
      cardType: "MasterCard",
    },
    {
      id: 3,
      cardNumber: "***_***_***_***-8497",
      cardImage: visa,
      cardType: "VISA",
    }
    ,
    {
      id: 4,
      cardNumber: "***_***_***_***-8497",
      cardImage: masterc,
      cardType: "MasterCard",
    }
    ,
    {
      id: 5,
      cardNumber: "***_***_***_***-8497",
      cardImage: visa,
      cardType: "VISA",
    }
    ,
    {
      id: 6,
      cardNumber: "***_***_***_***-8497",
      cardImage: masterc,
      cardType: "MasterCard",
    }
    ,
    {
      id: 7,
      cardNumber: "***_***_***_***-8497",
      cardImage: masterc,
      cardType: "MasterCard",
    }
    ,
    {
      id: 8,
      cardNumber: "***_***_***_***-8497",
      cardImage: masterc,
      cardType: "MasterCard",
    }
    ,
    {
      id: 9,
      cardNumber: "***_***_***_***-8497",
      cardImage: masterc,
      cardType: "MasterCard",
    }
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container">
      {showEditModal? <ModalContentEdit /> :'' } 
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
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
                                
                                <span className="text" style={{fontSize:'1.2vw',color:'white'}}>Ajouter</span>
                              </div>
                                    </div>
                            
                        </GridItem>
                    </GridContainer>

                    <GridContainer style={{backgroundColor:'#eeeeee'}}>
                       <GridItem xs={12} sm={12} md={4}>
                         <p style={{textAlign:'center'}}><strong>Numéro de Carte</strong></p>
                       </GridItem>
                       <GridItem xs={12} sm={12} md={4}>
                         <p style={{textAlign:'center'}}><strong>Type</strong></p>
                       </GridItem>
                       <GridItem xs={12} sm={12} md={4}>
                         <p style={{textAlign:'center'}}><strong>Action</strong></p>
                       </GridItem>
                    </GridContainer>
      {currentPosts.map((post,index)=>{ 
              console.log("my post")
              console.log(post)
              return(
			 <GridContainer style={{backgroundColor:'#eeeeee',margin:'15%'}} key={post.id}>
			 					<GridItem xs={12} sm={12} md={4}>
                      <div style={{textAlign:'center',display:'inline-block'}}> 
                         <img src={post.cardImage} width='15%'/><span>{post.cardNumber}</span>
                       </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                        <div style={{textAlign:'center'}}> {post.cardType} </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <div style={{textAlign:'center'}}>
                         <div>
                               <img src={trash} width='15%' style={{marginRight:'5%',cursor:'pointer'}}/>
                               <img onClick={()=>openModal()} src={edit} width='10%' style={{marginRight:'5%', color:'red',cursor:'pointer'}}/>
                          </div>
                        
                      
                </div>
                </GridItem>
        </GridContainer>)
                    })}


                    <GridContainer style={{backgroundColor:'#eeeeee',margin:'15%'}}>
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
export default PaymentResourseContent;


