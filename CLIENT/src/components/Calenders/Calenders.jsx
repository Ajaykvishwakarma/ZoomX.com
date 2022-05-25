
import style from './Calenders.module.css';
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
export const Calenders = () => {

    const { handleChange1 } = useContext(ProductContext);

    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    // const [ data, setData ] = useState([])
    const dispatch = useDispatch()
    const { fetchdataObj, loading  } = useSelector((store) => store.shippingData)
    const BaseUrl = `https://zoomxx.herokuapp.com`

    useEffect(() => {
        let url = `${BaseUrl}/calenders`
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

    let contextUrl = 'https://zoomxx.herokuapp.com/calender'

    async function sortBtn(sort) {
        let url = `${BaseUrl}/calenders?q=sort&sort=${sort}`
        dispatch(fetchData(url))
        // http://localhost:7000/photobooks?q=sort&sort=1
        // http://localhost:3000/photobook?sort=price-high
    }
    // console.log(fetchdataObj)

    

    return (
        <div>
            <div className={style.photobook_container}>
                <div className={style.photo_image}>
                    <img src="https://images.zoomin.com/webresources/banners/32b180095945.jpg" alt='calender' className={style.photo_img} />
                </div>
                <div className={style.heading_div}>
                    <h1 className={style.heading}>Calendars</h1>
                </div>
                <div>
                <div className={style.pageloader}>
                    <div>
                        <Link to="/"><span style={{ color:"gray"}}>Home</span></Link> / <Link to="/calender"><span style={{color:"black"}}>Calendars</span></Link>
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

                {fetchdataObj?.calenders?.map((el, index) => {

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
                        <img src="https://images.zoomin.com/webresources/banners/a118f7101042.jpg" alt="1" style={contentStyle}/>
                        </div>
                        <div>
                        <img src="https://images.zoomin.com/webresources/banners/edf094101118.jpg" alt="2" style={contentStyle}/>
                        </div>
                        <div>
                        <img src="https://images.zoomin.com/webresources/banners/3b7848101027.jpg" alt="3" style={contentStyle}/>
                        </div>
                        
                    </Carousel>
                    </div>

                </div>
                <div className={style.instruction_div}>
                    <div>
                        <h2>About Calendars</h2>
                        <p>Stay organized in style or give a gift that lasts all year-round – our range of custom photo calendars includes a variety of designs perfect for wall or tabletop display. From classic, sleek to more fun-loving - you’ll be sure to find designer theme options to suit your style.
                         </p>
                    </div>
                    <div>
                        <h2>How to create</h2>
                        <p>
                        Wondering how to create an adorable photo calendar filled with your perfect moments? We’ve made it super easy and convenient for you! All you have to do is pick a theme that suits your style & upload your photos. You can edit your picture & replace it for each page. In the next screen you can select which month you want the calendar to start from & even swap pictures. Add your final creation to the cart and you’re done!
                        </p>
                    </div>

                </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}




// function SelectSmall () {
//   const [sort, setSort] = React.useState('');

//   const handleChange = (event) => {
//     setSort(event.target.value);
//   };

//   return (
//     <FormControl sx={{  minWidth: 120 }} size="small">
//       <InputLabel id="demo-select-small">Sort</InputLabel>
//       <Select
//         labelId="demo-select-small"
//         id="demo-select-small"
//         value={sort}
//         label="Sort"
//         onChange={handleChange}
//       >
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         <MenuItem value={1}>By Price</MenuItem>
//         <MenuItem value={2}>By Name</MenuItem>
        
//       </Select>
//     </FormControl>
//   );
// }