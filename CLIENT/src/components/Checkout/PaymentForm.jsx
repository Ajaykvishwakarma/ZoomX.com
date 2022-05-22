import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
const axios = require("axios")
export default function PaymentForm () {

  const [ name, setName ] = useState("");
  const [ cardnumber, setCardnumber ] = useState(0)
  const [ expiry, setExpiry ] = useState("")
  const [ cvv, setCvv ] = useState(0)

  const BaseUrl = 'https://zoomxx.herokuapp.com/payment'

  // console.log(name, cardnumber, expiry, cvv)
  const handleSubmit = () =>  {
    axios.post(`${BaseUrl}`,{
      name: name,
      cardNo : cardnumber,
      exDate:expiry,
      cvv: cvv
    }).then((res) => {
      console.log(res)
      alert("payment SuccessFull!")
    })
  }

//   axios.post("https://reqres.in/api/login", {
//     email: email,
//     password: password
//   })
//   .then((response) => {
//     console.log(response);
//   });
// });

  return (
    <div>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            onChange={(e) => {
              
                setName(e.target.value)
              }}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
       
            onChange={(e) => {
              
                  setCardnumber(e.target.value)
                  if (cardnumber.length > 15) {
                      alert("Number Exceeded!")
                  }
              
          }}
          variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            onChange={(e) => {
              
              setExpiry(e.target.value)
            }}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            onChange={(e) => {
              
              setCvv(e.target.value)
              if (cvv.length > 2) {
                  alert("Number Exceeded!")
              }
          
              }}
            variant="standard"
          />
        </Grid>

        
      </Grid>
      
    </React.Fragment>
    <div style={{marginTop:"20px"}}>

    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
    </div>
  );
}