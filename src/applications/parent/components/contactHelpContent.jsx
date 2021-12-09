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
import aide1 from '../../../assets/images/dashboard/aide1.png';
import envoyer from '../../../assets/images/dashboard/envoyer.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import im5 from '../../../assets/images/im5.png';
import Pagination from './pagination.jsx';
import {Table} from 'react-bootstrap';


const ContactHelpContent = () => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(5);

	useEffect(()=>{
		setPosts(data);
	},[])

    let data = [
    {
      id: 1,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 2,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 3,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 4,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 5,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 6,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
  ];
  
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container">
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={6}>
                            <div style={{display:'inline-block',color:'#002495',margin:'5% 0% 0% 0%'}}>
                                Suivez la progression de votre enfant
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                        </GridItem>
                    </GridContainer>
             <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>Matière</th>
                  <th>Spécialité</th>
                   <th>Note Seq1</th>
                   <th>Note Seq2</th>
                   <th>Note Seq3</th>
                   <th>Note Seq4</th>
                   <th>Note Seq5</th>
                   <th>Note Seq6</th>
                </tr>
              </thead>
              <tbody>
              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                
                    <td>{post.id}{post.matiere}</td>
                    <td>{post.specialite}</td>
                    <td>{post.seq1}</td>
                    <td>{post.seq2}</td>
                    <td>{post.seq3}</td>
                    <td>{post.seq4}</td>
                    <td>{post.seq5}</td>
                    <td>{post.seq6}</td>
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
                          totalPosts={posts.length} 
                          paginate={paginate}
                        />
                    	</GridItem>
                    </GridContainer>
                    </div>
		)
}
export default ContactHelpContent;



