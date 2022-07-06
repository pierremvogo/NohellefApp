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
import profilepic from '../../../assets/images/im5.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import Loader from 'react-loader-spinner';
import supportService from '../../services/support.service';
import {connect, useSelector} from 'react-redux';



const AdminContent = ({user}) => {
  const [posts, setPosts] = useState([]);
  const [loading, serLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(1);
  const [displayResponse, setDisplayResponse] = useState("none");
  const [registerResponse, setRegisterResponse] = useState([]);
  const [showModalLoading, setShowModalLoading] = useState(false);
  const [displayLoading, setDisplayLoading] = useState("flex");

  useEffect(()=>{
    setPosts(data);
    handleAddResponse();
  },[])

    let data = [
      {id:1,message: "Half the challenge of going for a job interview is not knowing what to expect."},
      {id:2,message: "Half the challenge of going for a job interview is not knowing what to expect."},
      {id:3,message: "Half the challenge of going for a job interview is not knowing what to expect."},
      {id:4,message: "Half the challenge of going for a job interview is not knowing what to expect."},
      {id:5,message: "Half the challenge of going for a job interview is not knowing what to expect."},
    ];
    const handleAddResponse = () => {
      for(var i=0; i<data.length;i++){
        data[i].response = "";
      }
      console.log(data);
      
    }
  const handleResponse = () => {
    console.log(registerResponse);
  }
  const onChangeResponse = (e) =>{
    for(var i=0; i<data.length; i++){
      if(e.target.name===`response${e.target.id}`){
        data[e.target.id].response = e.target.value;
    }
    }
    
    console.log(registerResponse);
  }

  const onSubmit = (id,content) => {
    let supportPayload = 
      {
        content: content,
        subject: "answer",
        senderId: user.currentUser.id,
        receiverId: id,
      }
    handleLoading(true);
    console.log(supportPayload);
    supportService.createNewSupportMessage(supportPayload)
    .then((response)=>{
      console.log("Successful register support")
      console.log(response.data);
      handleLoading(false);
    })
    .catch((error)=>{
      console.log("Error register support")
      console.log(error);
      handleLoading(false);
    })
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
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = registerResponse.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(

      <div className="container" style={{backgroundColor:'#eeeeee'}}>
       {showModalLoading? <ModalLoading />: ''}
       <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>

                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                                Questions Techniques
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
                        <div style={{ overflowY: "scroll",
                                      overflowX: "hidden",
                                      height:"400px",
                                      
                        }}>
                          {Object.keys(data).map((input,index)=> {

                      return(
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                          <GridContainer>
                            <GridItem xs={10} sm={10} md={10}>
                              <div style={{margin:'2%',
                                textAlign:'justify',
                                width:'97%',
                                backgroundColor:'white'}}>
                                {data[input].message}
                              </div>
                            </GridItem>
                          </GridContainer>

                          <GridContainer>

                            <GridItem xs={10} sm={10} md={10}>
                                <textarea
                                   type="text"
                                   id={index}
                                   name={`response${index}`}
                                   placeholder="Votre Réponse"
                                   onChange={onChangeResponse}
                                   value={data[input].response}   

                                   style={{
                                            width:'100%',
                                            }}>
                                </textarea>
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                                <div style={{
                                          backgroundColor: '#f8db52',
                                          borderRadius: '10px',
                                          borderBottom: '2px solid #002495',
                                          borderRight:  '2px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '40px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'3px'
                                          }} 
                                        onClick={()=>onSubmit(data[input].id,data[input].response)}>
     
                                <span className="text" style={{fontSize:'100%'}}>Envoyer</span>
                              </div>
                            </GridItem>
                          </GridContainer>
                          
                      </GridItem>
                    </GridContainer>
                        )
                    })}
                    
                        </div>
                      </GridItem>
                    </GridContainer>
             
                    
                    
                    
                    </div>
    )
}
const mapStateToProps=(state)=>{
  return{
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(AdminContent);


