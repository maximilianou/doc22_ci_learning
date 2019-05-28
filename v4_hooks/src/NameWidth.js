import React, { useState, useEffect } from 'react';

const useSizes = ( ) => {
  const [w_w, setW_w] = useState( window.innerWidth );
  useEffect( () => {
    const handleWChange = () => setW_w( window.innerWidth );
    window.addEventListener( 'resize', handleWChange );
    return () => { window.removeEventListener( 'resize', handleWChange ); }; 
  } );  
  const [w_h, setW_h] = useState( window.innerHeight );
  useEffect( () => {
    const handleChange = () => setW_h( window.innerHeight );
    window.addEventListener( 'resize', handleChange );
    return () => { window.removeEventListener( 'resize', handleChange ); }; 
  } );  
  return { w_w, w_h };
};


const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue); 
  const handleChange = (e) => {
    setValue(e.target.value);
  }; 
  return { value, onChange: handleChange };
};


const NameWidth = () => {
  const name = useFormInput( "" ); 
  const sport = useFormInput( "" );
  
  const {w_w, w_h} = useSizes();

  return(
    <article>
     <hr/>
     <input className="name" {...name} placeholder="Max" /> 
     <div className="name">{name.value}</div>
     <hr/>
     <input className="sport" {...sport} placeholder="Basketball" /> 
     <div className="sport">{sport.value}</div>
     <hr/>
     <ul>
       <li className="w_width">Width:  {w_w}</li>
       <li className="w_height">Height: {w_h}</li>
     </ul>
    </article>
  ); 
};

export default NameWidth;
