import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import style from './Cart.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Footer } from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCartData, setDeleteCart, setUpdateCart} from '../../Redux/Cart/action';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  


  
export function Cart () {

    const navigate = useNavigate();
     const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')
    
    
   
  
    const dispatch= useDispatch();
    const { cart } = useSelector(store => store.cart)


    // const BaseUrl = 'https://zoomxx.herokuapp.com';
    // const { fetchdataObj } = useSelector((store) => store)
    useEffect(()=>{
        let cartData =  JSON.parse(localStorage.getItem('cartData'))  || []
        
        dispatch(fetchCartData(cartData))
    },[])

  
  function getTotal() {
    let temp = cart.map(function(item) {
        return parseInt(item.discount * item.count)
    })
    let sum = temp.reduce(function(prev, next) {
        return prev + next;
    }, 0)
    return sum;
  }
  

    return (
        <div>
        <div className={style.cart_container}>
            <div>
                <h2>Shopping Cart</h2>
                {/* <p><span>3</span> items in your cart</p> */}
            </div>
            <div className={style.cart_item_controller}>
                    <div>
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Image</StyledTableCell>
                            <StyledTableCell > Product Name</StyledTableCell>
                            <StyledTableCell align="right">Price </StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            
                        {cart.map((row, index) => {
                            
                            // sum += (row.discount * row.count);
                            return (
                            <StyledTableRow className={style.table_Row} key={row._id}>
                            <StyledTableCell component="th" scope="row" className={style.product_img_holder}>
                                <img className={style.product_image} src={row.image}  alt="" />
                            </StyledTableCell>
                            <StyledTableCell >
                                <h3>{row.name}</h3>
                                
                            </StyledTableCell>
                            <StyledTableCell sx={{marginTop: 2}} align="right">Rs. {row.discount * row.count}</StyledTableCell>
                            <StyledTableCell align="right">
                            <Box
                            sx={{
                                color: 'action.active',
                                display: 'flex',
                                flexDirection: 'column',
                                '& > *': {
                                marginBottom: 0,
                                },
                                '& .MuiBadge-root': {
                                marginRight: 4,
                                },
                            }}
                            >
                            <div>
                                
                                <ButtonGroup>
                                <h3 style={{marginTop: "10px", marginRight:"20px"}}>{row.count}</h3>
                                <Button
                                    aria-label="reduce"
                                    onClick={() => {dispatch(setUpdateCart([row._id, row.count-1]))}}
                                >
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Button
                                    aria-label="increase"
                                    onClick={() => {dispatch(setUpdateCart([row._id, row.count+1]))}}
                                >
                              
                                    <AddIcon fontSize="small" />
                                </Button>
                                </ButtonGroup>
                            </div>
                            
                            </Box>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Button variant="text" style={{borderRadius:"50%", width: "10px !imporatant", height:"35px !important"}} onClick={ () =>  dispatch(setDeleteCart(index))}><DeleteOutlinedIcon /></Button>
                            </StyledTableCell>
                            </StyledTableRow>
                            )
                                })} 
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </div>
            </div>
            <div className={style.action_controller}>
                <div className={style.action_div1}>
                <Link to="/" className={style.link_controller}>
                    <div>
                       <ArrowBackIcon style={{marginTop:"100px !important"}}/>
                    </div>&nbsp;
                    <div>
                      Continue Shoping
                    </div>
                </Link>
                </div>
                <div className={style.action_div1}></div>
                <div className={style.action_div1}>
                    <div>
                        <h1>Total  </h1>
                        <h3>Rs. <span>{
                         getTotal()
                    }
                        </span></h3>
                    </div><br></br>
                    <div>
                      <Link to="/checkout"><Button variant="contained" className={style.checkout_btn}>Checkout</Button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
           
        </div>
    )
}



