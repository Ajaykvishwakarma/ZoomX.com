
import style from './CardStock.module.css';
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

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '80%',
    margin: 'auto',
  };
export const CardStocks = () => {

    const { handleChange1 } = useContext(ProductContext);

    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    // const [ data, setData ] = useState([])
    const dispatch = useDispatch()
    const { fetchdataObj, loading  } = useSelector((store) => store)
    const BaseUrl = `https://zoomxx.herokuapp.com`

    useEffect(() => {
        let url = `${BaseUrl}/cardstocks`
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

    let contextUrl = 'https://zoomxx.herokuapp.com/cardstock'

    async function sortBtn(sort) {
        let url = `${BaseUrl}/cardstocks?q=sort&sort=${sort}`
        dispatch(fetchData(url))
        // http://localhost:7000/photobooks?q=sort&sort=1
        // http://localhost:3000/photobook?sort=price-high
    }
    // console.log(fetchdataObj)



    return (
        <div>
            <div className={style.photobook_container}>
                <div className={style.photo_image}>
                    <img src="https://images.zoomin.com/webresources/banners/62f01a095915.jpg" alt='Card' className={style.photo_img} />
                </div>
                <div className={style.heading_div}>
                    <h1 className={style.heading}>Card Stock </h1>
                </div>
                <div>
                <div className={style.pageloader}>
                    <div>
                        <Link to="/"><span style={{ color:"gray"}}>Home</span></Link> / <Link to="/cardstock"><span style={{color:"black"}}>Cardstock</span></Link>
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
                {fetchdataObj?.cardstocks?.map((el, index) => {

                    return( <Link to={`/product/${el._id}`} key={el._id}> 
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
                        <img src="https://images.zoomin.com/webresources/banners/d0c4bd100734.jpg" alt="1" style={contentStyle}/>
                        </div>
                        <div>
                        <img src="https://images.zoomin.com/webresources/banners/d6ff35100847.jpg" alt="2" style={contentStyle}/>
                        </div>
                        <div>
                        <img src="https://images.zoomin.com/webresources/banners/77374c100901.jpg" alt="3" style={contentStyle}/>
                        </div>
                        
                    </Carousel>
                    </div>

                </div>
                <div className={style.instruction_div}>
                    <div>
                        <h2>About Our Personalised Card Stock </h2>
                        <p>Why print just one when you can print 24! Yes all our Card Stock Prints come in a set of 24 prints with an option to add colourful & patterned borders to each of them. Make photo printing a habit and bring photos off your device with our premium quality prints. From Square Photo Prints to Polaroids, these are the most cost-effective way to personalize any gift hamper!
                         </p>
                    </div>
                    <div>
                        <h2>How to create</h2>
                        <p>
                        Simply upload your photos with multiple source options including your computer, Google photos, Facebook or Instagram. Edit your images in the next screen, crop or adjust your images & give them a final review. Hit print & that’s all folks!
                        </p>
                    </div>

                </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}



