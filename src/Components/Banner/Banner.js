import React, { useState } from 'react'
import axios from '../../axios'
import './Banner.css'
import { useEffect } from 'react'


function Banner() {
  
  const [movie,setMovie] = useState()
  useEffect(()=>{
    let index = Math.floor(Math.random()*16)
     
      axios.get('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON').then((response)=>{
        
        setMovie(response.data[index])
      })
  }, [])
  return (
   
      
   <div>
       <div style={{backgroundImage:`url(${movie ? movie.Images[Math.floor(Math.random()*4)] : ""})`}} 
      className='banner'>
        <div className="fade-up"></div>
        <div className='content'>
            <h1 className='title'>{movie ? movie.Title : ""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.Plot : ""}</h1>

        </div>
        <div className="fade-bottom"></div>
      
      </div>
   </div>
    
  )
}

export default Banner
