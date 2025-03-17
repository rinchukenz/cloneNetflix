import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.sort(function(a,b){return 0.5-Math.random()}))
    })
  }, [])
  return (
    <div id='mov' className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img className={props.isSmall ? 'smallposter' : 'poster'} src={`${obj.thumbnail || obj.Images}`} alt='poster'/>)}
      </div>
    </div>
  )
}

export default RowPost
