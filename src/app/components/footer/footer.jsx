import React from 'react';
import './footer.styles.css';
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import faceb from '../../../assets/images/faceb.png';
import insta from '../../../assets/images/insta.png';
import tweet from '../../../assets/images/tweet.png';

const Footer = () => {
    return (
        <footer class="footer sticky-footer">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <GridContainer>
                            <GridItem xs={4} sm={4} md={4}>
                            <div style={{textAlign:'left'}}>
                               <h7>Lien rapide</h7>
                               
                                    <p>Nos matières</p>
                                    <p>Nos Niveaux</p>
                                    <p>Nos Enseignants</p> 
                               </div>
                              
                              
                            </GridItem>
                             <GridItem xs={4} sm={4} md={4}>
                               <div style={{textAlign:'left'}}>
                               <h7>Entreprise</h7>
                               
                                    <p>Support</p>
                                    <p>A propos de vous</p>
                                   
                               </div>
                            </GridItem>
                             <GridItem xs={4} sm={4} md={4}>
                               <div style={{textAlign:'fleft'}}>
                                   <h7>Réseaux sociaux</h7>
                                   <p>Facebook <img src={faceb} width='5%' style={{marginLeft:'2%'}} /></p>
                                   <p>Instagram <img src={insta} width='5%' style={{marginLeft:'2%'}} /></p>
                                   <p>Tweeter <img src={tweet} width='5%' style={{marginLeft:'5%'}} /></p>
                               </div>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div style={{border:'2px solid #545454',width:'100%'}}></div>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                               <div style={{textAlign:'left',fontSize:'10px'}}>
                                    Mention légales
                               </div>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <div style={{textAlign:'right',fontSize:'10px'}}>
                               Copyright &copy; Nohellef 2021
                               </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
        </footer>
    )
}
export default Footer;