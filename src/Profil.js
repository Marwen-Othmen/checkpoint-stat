import React from 'react';
import { StudentCard } from './StudentCard';



const Profil = ({Data, Info}) => {
  return <div style={{display:'flex',textAlign:"center", margin:'30px 10%', justifyContent:'space-between'}}>
      {Data.map(x=> <StudentCard User={x}  />) }
  </div>;
};

export default Profil;

