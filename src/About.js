/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState,useRef} from 'react'
import './About.css'
import img1 from './Images/mak.jpeg'
import Aos from "aos"
import "aos/dist/aos.css"
import img3 from './Images/css.png'
import img4 from './Images/fire.png'
import img5 from './Images/gcloudd.png'
import img6 from './Images/rz.svg'
import img28 from './Images/html.png'
import img2 from './Images/js.svg'
import img7 from './Images/k.jpg'
import img8 from './Images/bl.jpg'
import img9 from './Images/wh.png'
import lottie from 'lottie-web';

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";
import img10 from './Images/ggl.png'


const StyledHome = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const About = () => {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);
  const container = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./p.json')
      })
    }, [])
  return (

    <div >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledHome>
      
      <div className='xds'>
        <div className='xds1'>
        <h1 style={{fontSize:50,fontWeight:400}} className="mmn">I am a passionate</h1>
        <h1 style={{fontSize:50,}}className="mmn" ><b>Front-End Developer</b></h1>
        <h1 style={{fontSize:50,}} className="mmn">and a <b>Data Structures Lover </b></h1>
        <h1 style={{fontSize:50,fontWeight:400}} className="mmn">hoping to build more skills</h1>

        </div>
        <div className='xds1'>
        <div className="oim1" ref={container}  ></div>
        </div>
      </div>
    
        

        <br/>
        <br/>
        <br/>
       
        <br/>
        <br/>
        <br/>
        <br/>

        
      
        <div className='kl'>
<div className='lm'data-aos="zoom-out">
<h1 style={{fontSize:40,fontWeight:400}} className='zz'><b>How I Work..</b></h1>

</div>
<div className='lm'data-aos="zoom-out">
<h2 className='pqq' style={{fontWeight:500}}>As of today, i don't have a work experience in a </h2>
<h2 className='pqq' style={{fontWeight:500}}>reputed company. I have worked for my friends in </h2>
<h2 className='pqq' style={{fontWeight:500}}>making websites and apps for JEE Exams. Hope i </h2>
<h2 className='pqq' style={{fontWeight:500}}>will find a Stable and a well-paying job one day. </h2>



         

</div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='oitt'data-aos="zoom-in">
<h1 style={{fontSize:40,fontWeight:400}} className='zp'><b>Skills I have...</b></h1>

                    <br/>
                    <br/>
                    <br/>
<div class="pit" >
                   
        <img src={img28}class="ttt"  ></img>
        <img src={img3} class="ttt" ></img>
       
       
    </div>
    <br/>
                    <br/>
                    <br/>
    <div className='pit'>
    <img src={img6} class="ttt" style={{height:35}}></img>
        <img src={img5} class="ttt"  ></img>
      
    </div>
    <br/>
                    <br/>
                    <br/>
    <div className='pit'>
    <img src={img4} class="ttt" ></img>
        <img src={img2} class="ttt" ></img>
      
    </div>



</div>
<br/>
        <br/>
        <br/>
        <div className='pl'>
          <div className='lmv' data-aos="fade-out">
         <a href='https://play.google.com/store/apps/details?id=com.jeecounselling'><img src={img10} className="bi"></img></a>
          </div>
          
          <div className='lmv'data-aos="fade-out">
          <a href='https://drive.google.com/file/d/1TQSFk6RkhhGKKL3NlUikzAvxYqEb_gBq/view?usp=sharing'><button style={{color:'white',borderRadius:30}}className="hiz"><h2>View Resume</h2></button>
  </a>
  <br/>
  <br/>
         
          </div>

        </div>
        </StyledHome>
  </ThemeProvider>
  <br/>
        <br/>
        <br/>
        
<div style={{background:`url(${img7})`,paddingTop:10}} data-aos="fade-in" >
<h1 style={{fontSize:50,textAlign:'center'}} className="nn" >Choose a job you love and you will never have to work a day in your life.</h1>
 <h1 className='ww'>- Confecius</h1>       
        <br/>
        <br/>
        <br/>
        <br/>
        


</div>


<br/>
<br/>
<footer style={{background:`url(${img8})`}}>
  <br/>
  <br/>
  <br/>
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
   
    <StyledHome>
      
 
  <h1 style={{fontSize:50,fontWeight:'1000',color:'whitesmoke'}} className="bc">Let's Work Together.</h1>
  
  <h2 style={{fontWeight:'500',color:'whitesmoke',paddingRight:100}} className="bc">Let's Work Together to build something great!!</h2>
 <br/>
 <br/>
 <a href='contact' style={{textDecoration:'none'}}> <h1 style={{fontSize:30,color:'whitesmoke'}} className="bc">SAY HELLO <img src={img9 } style={{height:25}}></img>  </h1></a>
    <div className='hjj'>
      <div className='qx'>
      <a href='https://www.linkedin.com/in/makarand-rao-451aa6200/' style={{textDecoration:'none'}}><h2 className='ww' style={{color:'white'}}>LinkedIn /</h2>  </a>
      </div>
      <div className='qx'>
      <a href='https://www.instagram.com/rockrockymakarand/'style={{textDecoration:'none'}}><h2 className='ww'style={{color:'white'}}>Instagram /</h2>  </a>
      </div>
      <div className='qx'>
      <a href='https://github.com/rockmakarand'style={{textDecoration:'none'}}><h2 className='ww'style={{color:'white'}}>Github </h2>  </a>
      </div>
      </div> 
      <a href='mailto:makarandrao0@gmail.com'style={{textDecoration:'none'}}><h2 className='ww'style={{color:'white'}}>makarandrao0@gmail.com </h2></a>  
<br/>
<br/>

</StyledHome>
  </ThemeProvider>
  </footer>


        

    </div>
  )
}

export default About