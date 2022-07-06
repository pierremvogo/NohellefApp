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
import t1 from '../../../assets/images/dashboard/t1.png';
import profilepic from '../../../assets/images/im5.png';
import chat1 from '../../../assets/images/dashboard/chat1.png';
import smile2 from '../../../assets/images/dashboard/smile2.png';
import choisir from '../../../assets/images/dashboard/choisir.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import im5 from '../../../assets/images/im5.png';
import Pagination from './pagination.jsx';


const ChooseTutorContent = () => {
	const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(3);

  const [currentPage1, setCurrentPage1] = useState(1);
  const [postPerPage1, setPostPerPage1] = useState(1);
  const [date, setDate] = useState();

	useEffect(()=>{
		setPosts(data,setPosts1(data1));
	},[])

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
    {
      id: 1,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
      tutorComment: "Travail en baisse doit faire attention"
    },
    {
      id: 2,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
      tutorComment: "Travail en baisse doit faire attention"
    },
    {
      id: 3,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
      tutorComment: "Travail en baisse doit faire attention"
    },
    {
      id: 4,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
      tutorComment: "Travail en baisse doit faire attention"
    },
    {
      id: 5,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
      tutorComment: "Travail en baisse doit faire attention"
    },
    {
      id: 6,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
      tutorComment: "Travail en baisse doit faire attention"
    },
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  const indexOfLastPost1 = currentPage1 * postPerPage1;
  const indexOfFirstPost1 = indexOfLastPost1 - postPerPage1;
  const currentPosts1 = posts1.slice(indexOfFirstPost1,indexOfLastPost1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
   const paginate1 = (pageNumber) => setCurrentPage1(pageNumber);
	return(
			<div className="container">



			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                            <div style={{display:'inline-block',color:'blue',margin:'2%'}}>
                                Observation des tuteurs
                            </div>
                           
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>

                    </GridContainer>
                    
                        {currentPosts.map((value,index)=>{
                          return(
                          <GridContainer >
                            <GridItem xs={12} sm={12} md={3}>
                              <img src={im5} width='45%' style={{margin:'2%'}} />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={9}>
                            <div style={{margin:'5% 0% 0% 0%'}}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                   <strong>{value.id}{value.tutorName}</strong> <i>il y'a 15 jours</i>
                                </GridItem>
                              </GridContainer>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                <div style={{fontSize:'1.2vw'}}>
                                     <strong>Spécialité:</strong> {value.tutorSpeciality}
                                </div>
                              </GridItem>
                              </GridContainer>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                <div style={{fontSize:'1vw'}}>
                                    <strong>Observation:</strong>  {value.tutorComment}
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
                          totalPosts={posts.length} 
                          paginate={paginate}
                        />
                      </GridItem>
                    </GridContainer>
                    
                    </div>
		)
}
export default ChooseTutorContent;



