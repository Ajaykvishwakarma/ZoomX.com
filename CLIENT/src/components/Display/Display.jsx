
import style from './Display.module.css';
import React from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
import { Footer } from '../Footer/Footer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/action';
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
export const Displays = () => {

    const { handleChange1 } = useContext(ProductContext);

    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    // const [ data, setData ] = useState([])
    const dispatch = useDispatch()
    const { fetchdataObj, loading  } = useSelector((store) => store.shippingData)
    const BaseUrl = `https://zoomxx.herokuapp.com`

    useEffect(() => {
        let url = `${BaseUrl}/displays`
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

    let contextUrl = 'https://zoomxx.herokuapp.com/display'

    async function sortBtn(sort) {
        let url = `${BaseUrl}/displays?q=sort&sort=${sort}`
        dispatch(fetchData(url))
        // http://localhost:7000/photobooks?q=sort&sort=1
        // http://localhost:3000/photobook?sort=price-high
    }
    // console.log(fetchdataObj)

    

    return (
        <div>
            <div className={style.photobook_container}>
                <div className={style.photo_image}>
                    <img src="https://images.zoomin.com/webresources/banners/ea7c37100007.jpg" alt='Display' className={style.photo_img} />
                </div>
                <div className={style.heading_div}>
                    <h1 className={style.heading}>Display</h1>
                </div>
                <div>
                <div className={style.pageloader}>
                    <div>
                        <Link to="/"><span style={{ color:"gray"}}>Home</span></Link> / <Link to="/display"><span style={{color:"black"}}>Display</span></Link>
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
                {fetchdataObj?.displays?.map((el, index) => {

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
                        <img src="https://images.zoomin.com/webresources/banners/ea46a4101145.jpg" alt="1" style={contentStyle}/>
                        </div>
                    </Carousel>
                    </div>

                </div>
                <div className={style.instruction_div}>
                    <div>
                        <h2>About Display</h2>
                        <p>Whether you’re a creative head or not, you simply can’t miss out on our range of amazing display add-ons. Use these colourful, wall-safe washi tapes or the magnetic ropes to add a touch of style without leaving any pin marks. Go ahead and try your own DIY wall display with these handy decorations!
                         </p>
                    </div>
                    <div>
                        <h2>How to create</h2>
                        <p>
                        • The rope & clips come in a set of 12 designer pine wood clips + a thick cotton string with loops on both ends • Our magnetic rope vertical & horizontal come with 8 super strong magnets & a high quality string • The 15mm wide x 10 metres long wall-safe washi tapes come in set of 3 bright and colourful patterns – or pick just one as well!
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