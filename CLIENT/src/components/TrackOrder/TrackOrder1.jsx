import style from './TrackOrder.module.css';
import { Link } from '@mui/material';
export const TrackOrder1 = () => {

    return (
        <div className={style.status_container}>
             <div className={style.logo}>
             <Link to="/" ><h2>
                <span>Z</span>oom
                <span>X</span>.com
            </h2></Link>
            </div>
        </div>
    )
}