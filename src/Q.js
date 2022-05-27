import React from 'react'
import './Q.css'
import 'react-icons'
import img1 from './Images/g1.png'
import img2 from './Images/g2.png'
import img3 from './Images/g4.png'
const Q = () => {
    return (
        <div>
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"></link>
           <br/>
    
    <h1 style={{textAlign:'center'}}>Check Out My Blog Posts</h1>
    <br/>
    <br/>
    <div className='cont'>
    
        <div className='contj' >
    <a href='https://www.codavilla.com/posts/how-to-make-google-website-using-react-js-&-styled-components-beginner-tutorial'>
    
        <img src={img1} className="nqa"></img>
        </a>
        
        <br/>
        <h2 className='uuy'>How to make Google Website Using React Js and styled-Components</h2>
       
        
      </div>
      
      <br/>
      <br/>
      <div className='contj'>
        <img src={img2} className="nqa"></img>
        <br/>
        <h2 className='uuy'>How to make React Website Using  styled-Components-Begineer tutorial webbull stock</h2>
    
    
      </div>
      <br/>
      <br/>
      <div className='contj'>
        <img src={img3} className="nqa"></img>
        <br/>
        <h2 className='uuy'>How to make Google Website Using React Js and styled-Components</h2>
    
   
      </div>
    </div>
    <a href='p' style={{textDecoration:'none'}}> <button  className="qaz2"><h1 style={{fontSize:20, color:'white'}} >Go to Previous  </h1></button></a>
    <a href='q' style={{textDecoration:'none'}}> <button  className="qaz3"><h1 style={{fontSize:20, color:'white'}} >See More Posts  </h1></button></a>

      </div>
      )
    }

export default Q