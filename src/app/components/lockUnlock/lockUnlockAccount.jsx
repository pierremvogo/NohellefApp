import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Button from '../../../app/components/buttons/button';
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import GridItem from "../../../app/components/Grid/GridItem.js";
import logoImage from '../../../assets/images/im10.png';
import GridContainer from "../../../app/components/Grid/GridContainer.js";

const LockUnlockAccount = ({error,
                            createSuccessMessage,
                            onChildCloseModal,

                       
                        }) => {


    const closeModal = (e) => {
        onChildCloseModal(e.target.name);
    }

    
    return(

        <div style={{
                        backgroundColor:'#ffce52',
                        borderRadius:'25px 25px 25px 25px',
                        width:"20%"
                        }}>
                    <GridContainer>

                     <GridItem xs={12} sm={12} md={12}>

                        <GridContainer>
                                  <GridItem xs={12} sm={12} md={12}>
                                    {createSuccessMessage&&
                                        (<div className="alert alert-success" style={{width:"100%",fontSize:'1em',textAlign:'center'}} role="alert">
                                                    {createSuccessMessage}
                                         </div>)
                                    }
                                  
                                  </GridItem>
                       </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                border:'1px solid #ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'100%',
                                height:'100%',
                                backgroundColor:'#ffce52',
                                margin:'0%',
                                padding:'2%'
                              }}>
                              <GridContainer>
                                      <GridItem xs={12} sm={12} md={12}>
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
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'10% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div onClick={(e)=>closeModal(e)} style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '15px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '55px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Ok</span>
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
      createSuccessMessage: state.authReducer.createSuccessMessage,
  };
};
export default connect(mapStateToProps)(LockUnlockAccount);
