import { Slider } from '../Slider/Slider';
import { Footer } from '../Footer/Footer';
import { Seller } from './Seller/Seller';
import { Comments } from './Comment/Comment';
import { Gift } from './Gift/Gift';
import style from './Home.module.css';

export const Home = () => {

   
    return (
        <>
        <div>
            <Slider />
            <div className = {style.home_container}>
                <Seller />
                <Gift />
                <Comments />
               </div>
            <Footer />
        </div>
        </>
        )
 
}