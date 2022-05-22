import React from 'react';
import 'antd/dist/antd.css';
import style from './Slider.module.css'
import { Carousel } from 'antd';


const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
  };
export const Slider = () => 
{

return (
    <div>
  <Carousel autoplay style={{color:"red"}}>
    <div className={style.slider_container}>
      <img src="https://images.zoomin.com/webresources/banners/b9ea95100410.jpg?tr=w-1400,e-sharpen" alt="1" style={contentStyle}/>
    </div>
    <div>
     <img src="https://images.zoomin.com/webresources/banners/697706060230.png?tr=w-1400,e-sharpen" alt="2" style={contentStyle}/>
    </div>
    <div>
     <img src="https://images.zoomin.com/webresources/banners/4c8695101317.jpg?tr=w-1400,e-sharpen" alt="3" style={contentStyle}/>
    </div>
    <div>
     <img src="https://images.zoomin.com/webresources/banners/463c3b101557.jpg?tr=w-1400,e-sharpen" alt="4" style={contentStyle}/>
    </div>
  </Carousel>
  </div>
    )
}