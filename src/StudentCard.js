
import React from 'react';
import { Info } from './Info';

export const StudentCard = ({User:{firstName,profession,BIO,img}}) => {
 
  return (
    <div style={{border:'1px solid black',margin:'20px', position:'relative',display:'flex',justifyContent:'space-between',flexDirection:'column'}}> 
   <div>
    <h1 style={{color:'red'}}> {firstName}  </h1>
         <h3> {profession}   </h3>
            <h3> {BIO}   </h3>
            <img style={{width:'100px'}} src ={img}/>
  </div>
  <button onClick={()=>Info( firstName,profession,BIO)}> click </button> 

  </div> 
  )
};
