import React from 'react';
import './Sidebar.css';
import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import Brands from './Brands/Brands';

function Sidebar({handleChange}) {
  
  return (
    <>
     <section className='container sidebar'>
    
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        <Brands handleChange={handleChange} />
        
     </section>
    </>
  )
}

export default Sidebar
