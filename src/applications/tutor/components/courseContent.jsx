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





const CourseContent = () => {
	const [posts1, setPosts1] = useState([]);
	const [currentPage1, setCurrentPage1] = useState(2);
	const [postPerPage1] = useState(4);
  
	useEffect(()=>{
		setPosts1(data);
	},[])

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
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 2,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 3,
     lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 4,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 5,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 6,
     lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    
    {
      id: 7,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    
    {
      id: 8,
     lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    
    {
      id: 9,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    
    {
      id: 10,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 11,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 12,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 13,
     lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 14,
     lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 15,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 16,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
      editer:edit
    },
    {
      id: 17,
      lundi: "Cours à 15 h",
      mardi: "Cours à 15 h",
      mercredi: "Cours à 15 h",
      jeudi:'Cours à 15 h',
      vendredi:'Cours à 15 h',
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
                    
                    <td>{post.id}{post.lundi}</td>
                    <td>{post.mardi}</td>
                    <td>{post.mercredi}</td>
                    <td>{post.jeudi}</td>
                    <td>{post.vendredi}</td>
                    <td><img src={post.editer} width='20%' /></td>  
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


