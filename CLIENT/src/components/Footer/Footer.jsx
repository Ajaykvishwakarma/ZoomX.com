import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import style from './Footer.module.css';
export const Footer = () => {

    return (
        <div>
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.footer_col}>
                            <h4>company</h4>
                            <ul className = {style.list}>
                                <li><Link className={style.links} href="#">about us</Link></li>
                                <li><Link className={style.links} href="#">our services</Link></li>
                                <li><Link className={style.links} href="#">privacy policy</Link></li>
                                <li><Link className={style.links} href="#">affiliate program</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_col}>
                            <h4>get help</h4>
                            <ul className = {style.list}>
                                <li><Link className={style.links} href="#">FAQ</Link></li>
                                <li><Link className={style.links} href="#">shipping</Link></li>
                                <li><Link className={style.links} href="#">returns</Link></li>
                                <li><Link className={style.links} href="#">order status</Link></li>
                                <li><Link className={style.links} href="#">payment options</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_col}>
                            <h4>online shop</h4>
                            <ul className = {style.list}>
                                <li><Link className={style.links} href="#">watch</Link></li>
                                <li><Link className={style.links} href="#">bag</Link></li>
                                <li><Link className={style.links} href="#">Frame</Link></li>
                                <li><Link className={style.links} href="#">Display</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_col}>
                            <h4>follow us</h4>
                            <div className={style.social_links}>
                                <Link className={style.links} href="#"><FacebookIcon className={style.social_media_icon}/></Link>
                                <Link className={style.links} href="#"><InstagramIcon className={style.social_media_icon}/></Link>
                                <Link className={style.links} href="#"><WhatsAppIcon className={style.social_media_icon}/></Link>
                                <Link className={style.links} href="#"><TwitterIcon className={style.social_media_icon}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.footer2}>
                        <div></div>
                        <div>
                            <div><p>© Copyright 2022 ZoomX. All rights reserved.</p></div>
                            <div><span>Privacy</span><span>Policy</span></div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

