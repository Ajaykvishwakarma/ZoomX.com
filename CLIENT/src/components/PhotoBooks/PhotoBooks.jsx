
import style from './PhotoBooks.module.css';
import React from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
import { Footer } from '../Footer/Footer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setAuth } from '../../Redux/action';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';
import {useContext} from "react";
const axios = require('axios');

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '80%',
    margin: 'auto',
  };
export const PhotoBooks = () => {

    const { handleChange1 } = useContext(ProductContext);
    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    // const [ data, setData ] = useState([])
    const dispatch = useDispatch()
    const { fetchdataObj, loading  } = useSelector((store) => store.shippingData)
    const BaseUrl = `https://zoomxx.herokuapp.com`

    useEffect(() => {
        let url = `${BaseUrl}/photobooks`
        dispatch(fetchData(url))    
    // getData()

    },[])
    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
      setSort(event.target.value);
    };

    useEffect(() =>{
        sortBtn(sort)
    },[sort])

    async function sortBtn(sort) {
        let url = `${BaseUrl}/photobooks?q=sort&sort=${sort}`
        dispatch(fetchData(url))
        // http://localhost:7000/photobooks?q=sort&sort=1
        // http://localhost:3000/photobook?sort=price-high
    }
    let contextUrl = 'https://zoomxx.herokuapp.com/photobook'

    
   


    return (
        <div>
            <div className={style.photobook_container}>
                <div className={style.photo_image}>
                    <img src="https://images.zoomin.com/webresources/banners/600e1f095141.jpg" alt='PhotoBooks' className={style.photo_img} />
                </div>
                <div className={style.heading_div}>
                    <h1 className={style.heading}>Photobooks</h1>
                </div>
                <div>
                <div className={style.pageloader}>
                    <div>
                        <Link to="/"><span style={{ color:"gray"}}>Home</span></Link> / <Link to="/photobook"><span style={{color:"black"}}>PhotoBooks</span></Link>
                    </div> 
                    <div>
                    <FormControl sx={{  minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Sort</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={sort}
                        label="Sort"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Price, Low to high</MenuItem>
                        <MenuItem value={-1}>Price, High to low</MenuItem>
                        
                    </Select>
                    </FormControl>
                    </div>
                </div>
                <div className={style.products}>
                    {fetchdataObj?.photobooks?.map((el, index) => {

                        return( <Link to={`/product/${el._id}`} > 
                    <div className={style.product_item_container} key={el._id} onClick = {() => handleChange1(contextUrl)}>
                        <div className={style.product_image}>
                            <img src={el.image} alt='' />
                        </div>
                        <div>
                            <h3>{el.name}</h3>
                        </div>
                        <div><p>From Rs <span style={{textDecoration:"line-through"}}>{el.price}</span>{" "}<span style={{color:"green"}}>{el.discount}</span></p></div>
                        
                    </div>
                    </Link>
                        )
                    })}
                   
                </div>
                <div>
                    <div className={style.heading_div1}>
                        <h1>Customer Feedback</h1>
                    </div>
                    <div>
                    <Carousel autoplay style={{color:"red"}}>
                        <div className={style.slider_container}>
                        <img src="https://images.zoomin.com/webresources/banners/f96d41095238.jpg" alt="1" style={contentStyle}/>
                        </div>
                        <div>
                        <img src="https://images.zoomin.com/webresources/banners/1e6d0f095317.jpg" alt="2" style={contentStyle}/>
                        </div>
                        <div>
                        <img src="https://images.zoomin.com/webresources/banners/654b43095336.jpg" alt="3" style={contentStyle}/>
                        </div>
                        
                    </Carousel>
                    </div>

                </div>
                <div className={style.instruction_div}>
                    <div>
                        <h2>About Photobooks</h2>
                        <p>ZoomX’s Photobooks are a sleek & modern version of the old school ‘Photo albums’. Instead of printing your photos and THEN making an album/scrapbook our Photobooks allow you to directly upload your pictures, design the layout, add captions and print them into a beautiful book full of bright pictures.
                         </p>
                    </div>
                    <div>
                        <h2>How to create</h2>
                        <p>
                        Nervous about creating your Photobook online? There is absolutely no reason to be. We have taken utmost care to keep the process super simple for anyone to create photobooks with ease. All you have to do is select the theme of your choice & upload your pictures through our website or app. After that you can edit each page layout to add more pictures (except for the 5.5”x5.5” size), change the image orientation, edit the image, add text and cute little stickers – customization meets perfection! You can even sync your pictures directly through google photos, facebook or instgram. If you want to make multiple Photobooks with little or no changes then just save your creation before proceeding to checkout. You can easily duplicate and/or edit it in the creations tab.
                        </p>
                    </div>

                </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}




