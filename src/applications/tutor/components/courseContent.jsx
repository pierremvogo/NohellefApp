import react, {useRef} from 'react';
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
import eye from '../../../assets/icons/eye.png';
import download from '../../../assets/icons/download.png';
import edit from '../../../assets/images/dashboard/edit.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import AgendaCalender from 'react-agenda-calendar'
import styles from 'react-agenda-calendar/dist/index.css'
import Agenda from './agenda';
import {Table} from 'react-bootstrap';
import EditOccupation from './editOccupation.jsx';





const CourseContent = () => {
	const [posts1, setPosts1] = useState([]);
	const [currentPage1, setCurrentPage1] = useState(2);
	const [postPerPage1] = useState(4);
  const [showChatModal, setShowChatModal] = useState(false);
  const [displayAsk, setDisplayAsk] = useState("none");
  const [occupationData, setOccupationData] = useState([]);

	useEffect(()=>{
		setPosts1(data);
	},[])

   function closeModal(){
      setShowChatModal(false,setDisplayAsk("none"));
     
  }
  function openModal(isUpdate,dataOccupation){
    if(isUpdate=="yess"){
      setOccupationData(dataOccupation)
    }
    setShowChatModal(true, setDisplayAsk("flex")); 
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
           <div className="contain" id='myContain'>
                <div style={{display:'inline-block', margin:'3%', fontSize:'100%', width:'120%'}}>
                    <span className='close' onClick={()=>closeModal()}>&times;</span>
                    <EditOccupation occupationData={occupationData} /> 
                </div>
                
            </div>
          
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
    {
      id: 1,
      heure:'7h00-8h00',
      lundi: "VisioConférence",
      mardi: "Cours",
      mercredi: " ",
      jeudi:'Cours ',
      vendredi:'',
      editer:edit
    },
    {
      id: 2,
      heure:'8h00-9h00',
      lundi: "",
      mardi: "Cours",
      mercredi: "Conference",
      jeudi:'',
      vendredi:'',
      editer:edit
    },
    {
      id: 3,
      heure:'9h00-10h00',
      lundi: "VisioConférence",
      mardi: "Cours",
      mercredi: "",
      jeudi:'',
      vendredi:'Cours',
      editer:edit
    },
    {
      id: 4,
      heure:'10h00-11h00',
      lundi: "VisioConférence",
      mardi: "Cours",
      mercredi: "",
      jeudi:'',
      vendredi:'Cours',
      editer:edit
    },
    {
      id: 5,
      heure:'11h00-12h00',
      lundi: "",
      mardi: "Cours",
      mercredi: "Conference",
      jeudi:'',
      vendredi:'',
      editer:edit
    },
    {
      id: 6,
      heure:'12h00-13h00',
      lundi: "",
      mardi: "",
      mercredi: "",
      jeudi:'Cours ',
      vendredi:'Cours',
      editer:edit
    },
    {
      id: 6,
      heure:'13h00-14h00',
      lundi: "",
      mardi: "Cours",
      mercredi: "Conference",
      jeudi:'',
      vendredi:'',
      editer:edit
    },
    {
      id: 6,
      heure:'14h00-15h00',
      lundi: "VisioConférence",
      mardi: "Cours",
      mercredi: "Conference",
      jeudi:'',
      vendredi:'',
      editer:edit
    },
    {
      id: 6,
      heure:'15h00-16h00',
      lundi: "VisioConférence",
      mardi: "",
      mercredi: "",
      jeudi:'',
      vendredi:'Cours',
      editer:edit
    },
    {
      id: 6,
      heure:'16h00-17h00',
      lundi: "VisioConférence",
      mardi: "Cours",
      mercredi: "Conference",
      jeudi:'',
      vendredi:'Cours',
      editer:edit
    },
    {
      id: 6,
      heure:'17h00-18h00',
      lundi: "",
      mardi: "",
      mercredi: "Conference",
      jeudi:'Cours',
      vendredi:'Cours',
      editer:edit
    },
    
  ];
  
  // Get current posts
  const indexOfLastPost = currentPage1 * postPerPage1;
  const indexOfFirstPost = indexOfLastPost - postPerPage1;
  const currentPosts1 = posts1.slice(indexOfFirstPost,indexOfLastPost);
  const paginate1 = (pageNumber) => setCurrentPage1(pageNumber);
	return(
			<div>
      {showChatModal? <ModalContentEdit /> : ''}

			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'blue',margin:'2% 0% 15% 0%'}}>
                                Votre Agenda
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                         
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                    </GridContainer>
             
			              <GridContainer style={{backgroundColor:'#eeeeee'}}>
			 		
			 					       <GridItem xs={12} sm={12} md={12}>


        <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                 <strong> 19 décembre 2021 - 24 décembre 2021</strong>
                </tr>
                 <tr>
                  <th>Heures</th>
                  <th>Lundi</th>
                  <th>Mardi</th>
                  <th>Mercredi</th>
                  <th>Jeudi</th>
                  <th>Vendredi</th>
                  <th>Editer</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts1.map((post,index)=>{
                return(
                  <tr key={posts1.id}>
                    <td>{post.heure}</td>
                    <td>{post.lundi}</td>
                    <td>{post.mardi}</td>
                    <td>{post.mercredi}</td>
                    <td>{post.jeudi}</td>
                    <td>{post.vendredi}</td>
                    <td style={{cursor:'pointer'}} onClick={()=>openModal("yess",post)}><img src={post.editer} width='20%' /></td>  
                  </tr>
                  )
              })}
              </tbody>
            </Table>
          </GridContainer>
          <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                  <Pagination 
                      postsPerPage={postPerPage1} 
                      totalPosts={posts1.length} 
                      paginate={paginate1}
                  />
              </GridItem>
          </GridContainer>
                        </GridItem>
			 				
                    </GridContainer>
                    
        </div>
		)
}
export default CourseContent


