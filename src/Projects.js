/* eslint-disable jsx-a11y/alt-text */

import './Projects.css'
import React,{useEffect,useState} from 'react'
import './About.css'
import 'react-icons'


import Aos from "aos"
import "aos/dist/aos.css"
import img3 from './Images/ggl.png'

import img7 from './Images/e.png'
import img8 from './Images/f.png'

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";

import img23 from './Images/p1.jpeg'
import img24 from './Images/p2.jpeg'


const StyledHome = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Projects = () => {
  const [theme, setTheme] = useState("dark");
  // eslint-disable-next-line no-unused-vars
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);
  return (
    <div>
       <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledHome>
<br/>
<br/>
<br/>
<br/>

    <h1 style={{fontSize:50,color:'#A393BF',textAlign:'center'}} ><b>Projects and Recent work experience</b></h1>
    <br/>
    <br/>
<br/>

<div class="bits">
        <div class="uts">
        <h1 style={{marginLeft:30,fontFamily:'sans-serif',color:'darkmagenta'}}><b>JEE Counselling App which I Made:</b></h1>
        <br/>
    <br/>
    <h2 style={{marginLeft:30,fontFamily:'sans-serif',color:'' ,paddingRight:10}}>I had made a JEE Counselling App with react native and bootstrap which has been a boon to Many <b>ASPIRANTS</b> 
     who are going to join top engineering institutes like the IITs, NITs, IIITs and Other GFTIs. We, the students of NIT Trichy have been advicing upcoming
    Aspirants.
</h2>
<br/>
<br/>
<a href='https://play.google.com/store/apps/details?id=com.jeecounselling'><img src={img3}className='re'></img></a>


        </div>
        <div class="uts">
        <img src={img23}class="oi"></img>
       
        </div>
        <div class="uts">
        <img src={img24}class="oi"></img>
       
        </div>

    </div>
  
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="bits">
        <div class="uts">
        <h1 style={{marginLeft:30,fontFamily:'sans-serif',color:'darkmagenta'}}><b>JEE Notes Web Version Using React and Next js:</b></h1>
        <br/>
    <br/>
    <h2 style={{marginLeft:30,fontFamily:'sans-serif',color:'',paddingRight:10}}>I had made a JEE Counselling App with react native and bootstrap which has been a boon to Many <b>ASPIRANTS</b> 
     who are going to join top engineering institutes like the IITs, NITs, IIITs and Other GFTIs. We, the students of NIT Trichy have been advicing upcoming
    Aspirants.
</h2>
<br/>
<br/>
<div className='vee'>
  <div className='ve'>
  <a href='https://jeenotesbynittstudents.netlify.app/
'><button style={{color:'white',marginLeft:30,borderRadius:30}}className="hizz"><h2>ReactJs Website</h2></button></a>
<br/>
<br/>
<br/>
<br/>

    </div>
    <div className='ve'>
    <a href='https://jeenotesnext.vercel.app/
'><button style={{color:'white',marginLeft:30,borderRadius:30}}className="hizz"><h2>NextJs Website</h2></button></a>
<br/>
<br/>
</div>
  
  
  </div>
  <br/>
<br/>
        </div>
        <div className='utss'>
        <div class="uts">
        <img src={img7}class="oik"></img>
       
        </div>
        <div class="uts">
        <img src={img8}class="oik"></img>
       
        </div>
        </div>

    </div>
  <br/>
    <br/>

      </StyledHome>
      </ThemeProvider>

    </div>
  )
}

export default Projects