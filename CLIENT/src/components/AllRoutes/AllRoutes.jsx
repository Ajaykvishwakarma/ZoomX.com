import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../Home/Home';
import { Login } from '../Auth/Login/Login';
import { Register } from '../Auth/Register/Register';
import { PhotoBooks } from '../PhotoBooks/PhotoBooks';
import { ProductPage } from '../ProductPage/ProductPage';
import { Cart } from '../Cart/Cart';
import { Checkout } from '../Checkout/Checkout';
import { Calenders } from '../Calenders/Calenders';
import { CardStocks } from '../CardStock/CardStock';
import {  Displays } from '../Display/Display';
import { Stationarys } from '../Stationary/Stationary';
import { TrackOrders } from '../TrackOrder/TrackOrder';
import { NotFound } from "../Notfound/NotFound";

export const AllRoutes = () => {


    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/photobook' element={<PhotoBooks />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/calender' element={<Calenders />} />
            <Route path='/cardstock' element={<CardStocks />} />
            <Route path='/display' element={< Displays />} />
            <Route path='/stationary' element={<Stationarys />} />
            <Route path='/trackorder' element={<TrackOrders />} />
            <Route path='*' element={<NotFound />} />


        </Routes>
        </>
    )
}