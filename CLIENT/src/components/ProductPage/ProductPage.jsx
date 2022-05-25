
import style from './ProductPage.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Footer } from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPerticularData } from '../../Redux/action';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";
import { addCartData } from '../../Redux/Cart/action';
import {useContext} from "react";
import { ProductContext } from '../../Context/ProductContext';

export const ProductPage = () => {

    const [ size1, setSize1 ] = useState("")
    const { contextUrl } = useContext(ProductContext)
    // console.log(contextUrl)
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    const { id } = useParams();
    const dispatch= useDispatch();
    const navigate = useNavigate();
    // const BaseUrl = 'https://zoomxx.herokuapp.com';
    const { perticulardata } = useSelector(store => store.shippingData)
    useEffect(()=>{
        // let url = `${BaseUrl}/photobook/${id}`
        let url = `${contextUrl}/${id}`
        // console.log(url)
        dispatch(fetchPerticularData(url))
    },[])
    // console.log(perticulardata)

 

   const cartArray = JSON.parse(localStorage.getItem('cartData')) || [];
    const handleCart = () => {
        const count = 1;
     

        if(size1.length === 0) {
            alert('Please Select Size')
        }else{
            Object.keys(perticulardata[0]).forEach(key => {
                if(key === "size"){
                    perticulardata[0][key] = size1
                }
                });
            

            // console.log(perticulardata)
            cartArray.push({...perticulardata[0], count: 1})
            localStorage.setItem('cartData', JSON.stringify(cartArray))
            alert("Product added successfully!")
            // dispatch(addCartData({...perticulardata[0]}))
        }


    }
    const handleRoute =() => {
        navigate('/cart')
    }

 
    return (
        <div className={style.main_product_controller}>
        <div className={style.prduct_container}>
                <div className={style.pageloader}>
                    
                    <Link to="/"><span style={{ color:"gray"}}>Home</span></Link> / <Link to="/photobook"><span style={{color:"black"}}>Product Page</span></Link>
                </div>
                {perticulardata.map((el, index) => {
                    
                    return (
                        <div className={style.product_holder} key={el._id}> 
                        <div className={style.product_image}>
                            <img src={el.image} className={style.product_img} alt="" />
                        </div>
                        <div className={style.product_details}>
                            <div className={style.product_about} >
                                <div ><h2>{el.name}</h2></div>
                                <div><p>{el.details}</p></div>
                            </div>
                            <div className={style.product_specification}>
                                <div>
                                     <p >Size</p>
                                </div>
                                <div>
                                {size1 ? "" : <div>
                                <Button variant="outlined" onClick = {() => { setSize1("F"); alert("Size selected successfully")}}>F</Button>&emsp;&emsp;
                                <Button variant="outlined" onClick = {() => { setSize1("S"); alert("Size selected successfully")}} >S</Button>
                                </div>
                                }    
                                
                                
                                </div>
                                <div >
                                    <h2>From Rs. <span style={{color:"orange"}}>{el.price}</span></h2>
                                    <h4>Use code SUMMER200 to avail discount on orders above Rs. {el.discount}</h4>
                                </div>
                                <div>
                                   <Button variant="contained" onClick={handleCart}>Add To Cart</Button>
                                  <Button variant="contained" onClick={handleRoute}  style={{marginTop:"20px", background:"maroon"}}>Go o cart</Button>
                                </div>
                                
                            </div>
    
                        </div>
                    </div>
                           
                    )
                })}
                 
                               
                
               
              </div>
              <div>
              <Footer />
              </div>
        </div>
    )
}