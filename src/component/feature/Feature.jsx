import React, {useState, useEffect} from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const Feature = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/1065062267999223899/1074853133232132187/menu2.png",
    "https://cdn.discordapp.com/attachments/1065062267999223899/1074853132842041355/menu1.png",
    "https://cdn.discordapp.com/attachments/1065062267999223899/1074853132313579561/menu0.png",
    "https://cdn.discordapp.com/attachments/1065062267999223899/1074853132003180544/menu4.png",
    "https://cdn.discordapp.com/attachments/1065062267999223899/1074853131520839740/menu3.png"
  ]
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%'
  }
  const slideImages = [
    {
      url: 'path/to/../../../image1.png'
    },
    {
      url: 'path/to/../../../image2.png'
    },
    {
      url: 'path/to/../../../image3.png'
    },
    {
      url: 'path/to/../../../image4.png'
    },
    {
      url: 'path/to/../../../image5.png'
    }
    
  ]
  

  return (
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className='slide-box' key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
        <div className='slide-outside'>
          <div className='slide-name'>מורדוך</div>
          <div className='slide-slogen'>
            <div>MEAT</div>
            <div>AND</div>
            <div>TOAST</div>
          </div>
        </div>
        <div className='global-shadow-bottom'>
            
        </div>
        <div className='global-shadow-top'>
          
        </div>
      </div>
  )
}

export default Feature  