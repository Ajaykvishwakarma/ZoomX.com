
import style from './TrackOrder.module.css';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const  TrackOrders = () => {

    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')


    return (
        <>
         <div className={style.track_controller}>
            <div className={style.logo}>
            <h2>
                <span>Z</span>oom
                <span>X</span>.com
            </h2>
            </div>
            <div className={style.track_box}>
                
                    <div>
                        <h2>Track Your Order</h2>
                        
                    </div>
                    <div>
                      <p>
                         Knowing your order status has never been this easy! Just enter your Zoomx order ID to fetch your tracking details immediately. Check Status now!
                      </p>
                      <Link to="/" ><Button className={style.status_btn} variant="contained">Check Status</Button></Link>
                    </div>
                

            </div>

        </div> 
 </>  
)
}