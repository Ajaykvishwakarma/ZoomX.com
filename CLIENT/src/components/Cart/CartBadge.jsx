import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect} from "react";
const axios = require("axios");

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Badges = () => {
  const [count , setCount] = useState(1)
  const [data1, setData1] = useState([])
   const BaseUrl = 'https://zoomxx.herokuapp.com';
 const getCount = () => {
     axios.get(`${BaseUrl}/carts`).then(res => {
      setData1(res.data)
    })
  }

 
  useEffect(() => {
    getCount()

   
  },[])
  useEffect(() => {
    setCount(data1.cart)
  },[])
  // console.log(count)
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}