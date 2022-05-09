/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useRef, useState }from 'react'
import './Home.css'
import lottie from 'lottie-web';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";


const StyledHome = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


const Home = () => {
  const [theme, setTheme] = useState("dark");
  // eslint-disable-next-line no-unused-vars
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
 
    const container = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./g.json')
      })
    }, [])
  return (
    
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledHome>
      
    
        <div className='jj'>
<div className='ll'>
        <h1 style={{fontSize:50}} className="mm">Creative Designer</h1>
        <h1  style={{fontSize:50}} className="mm"> & Developer.</h1>
       
        <h2 className='mm' style={{fontWeight:300}}>Hi, I am Makarand, an Upcoming creative</h2>
        
        <h2 className='mm' style={{fontWeight:300}}>Designer and ReactJs Developer</h2>
        <br/>

<div className='cgs'>
<div className='cgs2'>
<a href='about' style={{textDecoration:'none'}}> <button  className="qaz"><h1 style={{fontSize:20, color:'white'}} >Know About Me !  </h1></button></a>

</div>
<br/>
<br/>
<div className='cgs1'>
<a href='projects' style={{textDecoration:'none'}}> <button  className="qaz"><h1 style={{fontSize:20, color:'white'}} >See my Works  </h1></button></a>

</div>
<br/>
<br/>
<div className='cgs1'>
<a href='contact' style={{textDecoration:'none'}}> <button  className="qaz"><h1 style={{fontSize:20, color:'white'}} >Say Hi !  </h1></button></a>

</div>



  </div>       
          
      </div>
        
        <div className='ll'>
        <div className="oim" ref={container}  ></div>
            </div>
    </div>
    </StyledHome>
  </ThemeProvider>
    </div>
   
  )
}

export default Home