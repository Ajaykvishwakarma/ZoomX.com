import style from './NotFound.module.css';
import { Link } from 'react-router-dom';
export const NotFound = () => {
    return  (
    <div className={style.notfound}>
      
      <Link to="/">
      <img className={style.notfoundImage} src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
      </Link>
    </div>
    )
  };
  