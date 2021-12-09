import React, { useEffect,useState } from 'react'
import Avatar   from 'react-avatar';
import { useDispatch, connect } from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom'
//import { makeStyles } from "@material-ui/core/styles";
//import { Link, Redirect, useHistory } from 'react-router-dom';
import logoImage from '../../../assets/images/im10.png';
import im5 from '../../../assets/images/im5.png';
import './header.styles.css';
import Modals from '../modals/modal';
import Button from '../buttons/button';




const Header = ({error,onChildClickConnexion,onChildClickRegister,isDashboard,isHome})  =>{
   
    const clickHandlerConnexion=(e)=>{
            onChildClickConnexion(e.target.name);
    }

    const clickHandlerRegister=(e)=>{
            onChildClickRegister(e.target.name);
    }

    return(

       
         <nav className="navbar navbar-expand  bg-white sticky-top static-top" style={{height:'10%'}}>

                        <div style={{fontSize: 2+'em'}} className="sidebar-brand d-flex align-items-center justify-content-center">    
                            <div className="sidebar-brand-icon  mr-5" style={{
                                cursor:'pointer',
                                position:'fixed', 
                                margin:'5% 5% 0% 25%'}}>
                              
                              <Avatar 
                                    
                                    size="150"
                                    round={true}
                                    src={logoImage}
                                    name='Pirate'
                                /> 
                            </div>

                            <div className="sidebar-brand-icon"></div>        
                            <div className="sidebar-brand-text mx-3"><sup></sup></div>
                        </div>

                        <ul class="navbar-nav" style={{marginLeft:`${isDashboard? '35%' :'350px'}`, fontFamily:'sans-serif',fontSize:'15px'}}>
                            {isDashboard?<span className="nav-menu" onClick={()=>console.log('')}>Dashboard</span>  : ''}
                            <span className="nav-menu" onClick={()=>console.log('')}>Qui sommes nous?</span>  
                            <span className="nav-menu" onClick={()=>console.log('')}>Nos classes</span> 
                            {isDashboard?<span className="nav-menu" onClick={()=>console.log('')}>Nos Enseignants</span>  : ''}
                            {isDashboard?'':<span className="nav-menu" onClick={()=>console.log('')}>Nos matières</span>}
                            <span className="nav-menu" onClick={()=>console.log('')}>Nos offres</span>
                            {isDashboard?'': <span className="nav-menu" style={{
                                borderRadius:"5px 5px 5px 5px",
                                textAlign:'center',
                                backgroundColor:'#8399FF',
                                width:'15%',
                                padding:'2.5px'}} 
                                onClick={(e)=>clickHandlerConnexion(e)}>Connexion</span>}
                                
                            {isDashboard?'': <span className="nav-menu" style={{
                                borderRadius:"5px 5px 5px 5px",
                                textAlign:'center',
                                backgroundColor:'#C84941',
                                width:'15%',
                                padding:'2.5px'}} 
                                onClick={(e)=>clickHandlerRegister(e)}>Inscription</span>}    
                            
                             <Avatar 
                                size="40"
                                round={true}
                                src={im5}
                                name='Profile'
                             />

                        </ul>
                     
       
                
        </nav>


               
    )
}

export default Header;