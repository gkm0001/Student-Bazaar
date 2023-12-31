import React from 'react'
import { useEffect , useRef} from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.css"
import  mianimags  from './images/mian-imags.jpg'
import  book  from './images/book.jpg'
import  bottomLowerLeft  from './images/bottom-lower-left.png'
import  bottomLowerRight  from './images/bottom-lower-right.png'
import  calculator  from './images/calculato.jpg'
import telegram  from './images/telegram_icon.png'
import  watch  from './images/watch.jpg'
import whatsapp from  './images/WhatsApp_icon.png'

const App = () => {

     

    useEffect(() => {

         gsap.from(".shopAndSave h1"  , {
            y:30,
            opacity:0,
            delay:0.5,
            duration:0.9,
            stagger:0.4
      } )
      
       gsap.from(".left-writ-tex h3" , {
          y:30,
          opacity:0,
          delay:0.5,
          duration:0.9,
          stagger:0.4
      } )
      
      gsap.from(".studentEssentail h4" , {
          y:30,
          opacity:0,
          delay:0.5,
          duration:0.9,
          stagger:0.4
      })
    
      }, [])
}

export default function Home() {
  return (
    <>
     <div className="main">

<div className="hero">
    

    <div className="main-left">
        


        <div className="shopAndSave">
            <h1> Buy & Sell</h1>

        </div>
        <div className="left-writ-tex">
            <h3>Your go to destination for budget-friendly </h3>
        </div>
        <div className="studentEssentail">
            <h4>student Essential</h4>
        </div>
        <div className="btn">

            <NavLink href="#"><span data-attr="Buy"> Buy</span><span data-attr="Now">Now </span></NavLink>
        </div>

    </div>



    <div className="main-right">
        <div className="right-image">
            <img src={mianimags} alt=""/>


        </div>

    </div>

</div>

</div>


<div className="contact-button">

<div className="join-whatsapp-group">
    <button className="whatsapp-btn">
        <div className="wi35px"> <img id="WhatsApp_icon_35px" src={whatsapp} alt=""/> </div>
        <div className="wtext">
            <pre> JOIN WHATSAPP GROUP</pre>
        </div>
    </button>
</div>

<div className="join_telegram_channel">
    <button className="join-telegrma-btn">
        
            <div className="ti35px"> <img id="telegram_icon_45px" src = {telegram} alt=""/> </div>
            <div className="tText"><pre> JOIN TELEGRAM GROUP</pre></div>
        
    </button>
</div>

</div>

<div className="text-below-btn">
<h3>Affordable Quality , Right on Campus</h3>
</div>

<div className="grid-wrapper">
<div className="image-grid1">
    
    <img src={book} alt=""/>
</div>
<div className="image-grid2">
   
    <div className="image-grid21">
        <img src={calculator} alt=""/>
    </div>
    <div className="image-grid22">
        <img src={watch} alt=""/>
    </div>
</div>

</div>
{/* </div> */}

<div className="bottom-div">

<div className="left-bottom-div">
    <img src={bottomLowerLeft} alt=""/>
    <div className="text-lower">

        <h2>Sell What You Don't Need,
        </h2>
        <h2>Buy What You Do</h2>

    </div>
</div>

<div className="right-bottom-div">
    <img src= { bottomLowerRight } alt=""/>
    <div className="text-lower-right">
        <h2>Join the Green Revolution,</h2>
        <h2>One Purchase at a Time</h2>
    </div>
</div>

</div>

   </> 

  );
}

 
