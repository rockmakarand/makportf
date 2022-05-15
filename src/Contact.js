/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import './Contact.css'
import img8 from './Images/v.jpg'
import img9 from './Images/wh.png'
import img1 from './Images/instaa.png'
import img2 from './Images/link.png'
import img3 from './Images/git.png'
import img4 from './Images/ge.svg'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";


const StyledHome = styled.div`
  color: ${(props) => props.theme.fontColor};
`;







const Contact = () => {
  const [theme, setTheme] = useState("dark");
  // eslint-disable-next-line no-unused-vars
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div>
       <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledHome>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 style={{fontSize:50}} className="ew" >Get In Touch..</h1>
      <br/>
      <h2 className='ew' style={{fontWeight:400}}>Do you fancy saying hi to me or you want to start a project with me...just send a message! </h2>
     <br/>
      <div className='trr'>
      <div className='fo'>
        <img src={img4} className='xz'></img>

        </div>
      
    
     <div className='formm'>
     <form action="https://formspree.io/f/mqknqyon" method="post" >
       <h2>Contact Form</h2>
     
      <br/>
      <br/>
      <input name="name" id="name" type="name" className='pz'style={{height:50,backgroundColor:'#CBEEF3'}} placeholder="Name"></input>
      <br/>
      <br/>
 
  <br/>
  <br/>
  <input name="Email" id="email" type="email"className='pz'style={{height:50,backgroundColor:'#CBEEF3'}}placeholder="Email"></input>
  <br/>
  <br/>

  <br/>
  <br/>
  <input name="message" id="mess" type="mess" style={{height:100,backgroundColor:'#CBEEF3'}}className='pz'placeholder="Message"></input>
  <br/>
  <br/>
  <button type="submit"style={{color:'white',borderRadius:30,}}className="hi"><h2>Send Message</h2></button>
  
   <br/>
   <br/>  
     
</form>
</div>

<br/>
<br/>

</div>
<br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
<br/>
  <br/>
  <footer style={{background:`url(${img8})`}}>
  <br/>
  <br/>
  <br/>
 
  <h1 style={{fontSize:50,fontWeight:'1000',color:'whitesmoke'}} className="bc">Let's Work Together.</h1>
  
  <h2 style={{fontWeight:'500',color:'whitesmoke',paddingRight:100}} className="bc">Let's Work Together to build something great!!</h2>
 <br/>
 <br/>
 <a href='contact' style={{textDecoration:'none'}}> <h1 style={{fontSize:30,color:'whitesmoke'}} className="bc">SAY HELLO <img src={img9 } style={{height:25}}></img>  </h1></a>
    <div className='hj'>
      <div className='qx'>
      <a href='https://www.linkedin.com/in/makarand-rao-451aa6200/' style={{textDecoration:'none'}}> <img src={img2 } style={{height:55}}></img> </a>
      </div>
      <div className='qx'>
      <a href='https://www.instagram.com/rockrockymakarand/'style={{textDecoration:'none'}}><img src={img1 } style={{height:55}}></img> </a>
      </div>
      <div className='qx'>
      <a href='https://github.com/rockmakarand'style={{textDecoration:'none'}}><img src={img3 } style={{height:55}}></img>  </a>
      </div>
      </div> 
      <br/>
      <br/>
      <a href='mailto:makarandrao0@gmail.com'style={{textDecoration:'none'}}><h2 className='ww'style={{color:'white'}}>makarandrao0@gmail.com </h2></a>  
<br/>
<br/>
</footer>
</StyledHome>
  </ThemeProvider>

     

    </div>
    
  )
}

export default Contact