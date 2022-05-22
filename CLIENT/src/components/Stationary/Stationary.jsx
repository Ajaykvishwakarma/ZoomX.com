
import style from './Stationary.module.css';
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
export const Stationarys = () => {

    const { handleChange1 } = useContext(ProductContext);

    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    // const [ data, setData ] = useState([])
    const dispatch = useDispatch()
    const { fetchdataObj, loading  } = useSelector((store) => store)
    const BaseUrl = `https://zoomxx.herokuapp.com`

    useEffect(() => {
        let url = `${BaseUrl}/stationarys`
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

    let contextUrl = 'https://zoomxx.herokuapp.com/stationary'

    async function sortBtn(sort) {
        let url = `${BaseUrl}/stationarys?q=sort&sort=${sort}`
        dispatch(fetchData(url))
        // http://localhost:7000/photobooks?q=sort&sort=1
        // http://localhost:3000/photobook?sort=price-high
    }
    // console.log(fetchdataObj)

    

    return (
        <div>
            <div className={style.photobook_container}>
                <div className={style.photo_image}>
                    <img src="https://images.zoomin.com/webresources/banners/d60250100413.jpg" alt='stationary' className={style.photo_img} />
                </div>
                <div className={style.heading_div}>
                    <h1 className={style.heading}>Stationery</h1>
                </div>
                <div>
                <div className={style.pageloader}>
                    <div>
                        <Link to="/"><span style={{ color:"gray"}}>Home</span></Link> / <Link to="/stationary"><span style={{color:"black"}}>Stationery</span></Link>
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
                {fetchdataObj?.stationarys?.map((el, index) => {

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
                        <img src="https://images.zoomin.com/webresources/banners/dd65d9101606.jpg" alt="1" style={contentStyle}/>
                        </div>
                        <div>
                        <img src="https://images.zoomin.com/webresources/banners/65cf15101402.jpg" alt="2" style={contentStyle}/>
                        </div>
                        <div>
                        <img src="https://images.zoomin.com/webresources/banners/c0d1ae101731.jpg" alt="3" style={contentStyle}/>
                        </div>
                        
                    </Carousel>
                    </div>

                </div>
                <div className={style.instruction_div}>
                    <div>
                        <h2>About Stationery</h2>
                        <p>In the clutter & chaos of life, our personalized stationery will help YOU stand out. Customize your notebooks with your name (or any text!) and choose from aesthetic cover designs that suit your style. Don’t miss out on our handy planner to plan your day like a pro & focus on your most critical goals.
                         </p>
                    </div>
                    <div>
                        <h2>How to create</h2>
                        <p>
                        You may have got 99 problems but ordering beautiful stationery isn’t 1 of them! To create your customized notebooks, firstly select your preferred theme. You can add your name or any other text upto 14 characters + pick page style on the next screen – that’s it! March into the new year with our ‘Plenty Twenty Two Planner’. Add custom text on the front page upto 30 characters & add to cart!
                        </p>
                    </div>

                </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}



