import React, { useEffect,useState } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import Avatar   from 'react-avatar';
import {Redirect, useHistory} from 'react-router-dom'
//import { makeStyles } from "@material-ui/core/styles";
//import { Link, Redirect, useHistory } from 'react-router-dom';
import logoImage from '../../../assets/images/im10.png';
import hamburg from '../../../assets/header/hamburg.png';
import im5 from '../../../assets/images/im5.png';
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import './header.styles.css';
import Modals from '../modals/modal';
import Button from '../buttons/button';





const Header = ({
                user,
                onChildClickConnexion,
                onChildClickRegister,
                isDashboard,
                isHome})  =>{

    useEffect(()=>{
        console.log("Width window");
        console.log(window.screen.width);
    },[])
   
    const clickHandlerConnexion=(e)=>{
            onChildClickConnexion(e.target.name);
    }
    const history = useHistory();

   const disconnectUser = () => {
    localStorage.removeItem("user");
    window.location.reload();
    return false;
   }

   const gotoDashboard = (e) => {
    if(user&&user.accessToken){
        history.push(user.redirect);
    }else{
        clickHandlerConnexion(e);
    }
   }

    const clickHandlerRegister=(e)=>{
            onChildClickRegister(e.target.name);
    }

    function changeStyle1(id) {
        let element = document.getElementById(id);
        if(id=="dash1"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.padding = "1px";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash2"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.padding = "1px";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash3"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.padding = "1px";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash2'),
                document.getElementById('dash4'),
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash4"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.padding = "1px";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash2'),
                document.getElementById('dash3'),
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }

    }

    return(
        <div className="sticky-top static-top">
    

                        <GridContainer>
                        <GridItem xs={3} sm={3} md={3} style={{backgroundColor:'#FFFFFF'}}>
                        <div style={{fontSize: 2+'em'}} className="sidebar-brand d-flex align-items-center justify-content-center">    
                            
                            <div className="sidebar-brand-icon  mr-5" style={{
                                cursor:'pointer',
                                position:'fixed', 
                                margin:'12% 5% 0% 5%'}}>
                              
                              <Avatar 
                                    
                                    size="150"
                                    round={true}
                                    src={logoImage}
                                    name=''
                                /> 
                            </div>

                            <div className="sidebar-brand-icon"></div>        
                            <div className="sidebar-brand-text mx-3"><sup></sup></div>
                        </div>
                        </GridItem>


                       {window.screen.width >= 1157? <GridItem xs={9} sm={9} md={9} style={{backgroundColor:'#FFFFFF',height:'10%'}}>
                        <ul className="displayNavItem" style={{marginLeft:`${isDashboard? '35%' :'0%'}`, fontFamily:'sans-serif'}}>
                            {isDashboard?
                            <span className="nav-menu" onClick={()=>console.log('')}>Dashboard</span>  : ''}

                            <span id="dash1" className="nav-menu" onClick={()=>changeStyle1('dash1')}>Qui sommes nous?</span> 

                            <span id="dash2" className="nav-menu" onClick={()=>changeStyle1('dash2')}>Nos classes</span> 

                            {isDashboard?'':<span id="dash3" className="nav-menu" onClick={()=>changeStyle1('dash3')}>Nos Enseignants</span>}
                            {!isDashboard?'':<span  className="nav-menu" onClick={()=>console.log('')}>Nos matières</span>}
                            <span id="dash4" className="nav-menu" onClick={()=>changeStyle1('dash4')}>Nos offres</span>
                            
                            {isDashboard?'': !user?(<span className="nav-menu" style={{
                                borderRadius:"5px 5px 5px 5px",
                                textAlign:'center',
                                backgroundColor:'#8399FF',
                                width:'15%',
                                padding:'2.5px'}} 
                                onClick={(e)=>clickHandlerConnexion(e)}>Connexion</span>):
                            (<span className="nav-menu" style={{
                                borderRadius:"5px 5px 5px 5px",
                                textAlign:'center',
                                backgroundColor:'#8399FF',
                                width:'15%',
                                padding:'2.5px'}} 
                                onClick={()=>disconnectUser()}>Deconnexion</span>) 

                            }

                                
                            {isDashboard?'': <span className="nav-menu" style={{
                                borderRadius:"5px 5px 5px 5px",
                                textAlign:'center',
                                backgroundColor:'#C84941',
                                width:'15%',
                                padding:'2.5px'}} 
                                onClick={(e)=>clickHandlerRegister(e)}>Inscription</span>}    
                            
                             <span style={{cursor:"pointer",marginLeft:"5%"}} onClick={(e)=>gotoDashboard(e)}>
                             <Avatar 
                                size="40"
                                round={true}
                                src={im5}
                                name='Mon Compte'
                             /></span>

                        </ul>
                        </GridItem>:""}

                        </GridContainer>
                     
       
                
        </div>





               
    )
}

const mapStateToProps=(state)=>{
  return{
      user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(Header);