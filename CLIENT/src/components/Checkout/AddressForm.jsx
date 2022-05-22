import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
const axios = require("axios")
export default function AddressForm() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [address1, setAddress1 ] = useState("")
  const [address2, setAddress2 ] = useState("")
  const [ city, setCity ] = useState("")
  const [ state, setState ] = useState("")
  const [ postal, setPostal ] = useState("")
  const [ country, setCountry ] = useState("")


  const BaseUrl = 'https://zoomxx.herokuapp.com/address'

  // console.log(name, cardnumber, expiry, cvv)
  const handleSubmit = () =>  {
    axios.post(`${BaseUrl}`,{
      firstName : firstname,
      lastName : lastname,
      address1:address1,
      address2: address2,
      city: city,
      state : state,
      postalCode :postal ,
      country : country,
    }).then((res) => {
      console.log(res)
      alert("Recorded SuccessFull!")
    })
  }

  return (
    <div>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            onChange={(e) => {
              
              setFirstname(e.target.value)
            }}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={(e) => {
              
              setLastname(e.target.value)
            }}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            onChange={(e) => {
              
              setAddress1(e.target.value)
            }}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            onChange={(e) => {
              
              setAddress2(e.target.value)
            }}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={(e) => {
              
              setCity(e.target.value)
            }}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            onChange={(e) => {
              
              setState(e.target.value)
            }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            onChange={(e) => {
              
              setPostal(e.target.value)
            }}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            onChange={(e) => {
              
              setCountry(e.target.value)
            }}
            fullWidth
            autoComplete="shipping country"
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