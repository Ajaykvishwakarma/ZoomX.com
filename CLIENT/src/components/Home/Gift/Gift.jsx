import React from 'react';
import 'antd/dist/antd.css';
import style from './Gift.module.css';
import { Tabs } from 'antd';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const Gift = () => (
  <div className={style.gift_container}>
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Photo Books" key="1">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src="https://images.zoomin.com/webresources/banners/600e1f095141.jpg" alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Photobooks</h1>
                </div>
                <div>
                  <p>
                     Nothing is more rewarding than going over pictures from the past, reflecting on the fun times you’ve had. With Zoomin you can make a stylish photo book that is a perfect way for displaying the pictures you've taken—of your loved ones, pets, family holidays, travels, and the little life moments that make you smile. Our huge collection of designer themes, customized layout options & cute stickers will leave you spoilt for choice!
                  </p>
                </div>
                <div >
                 <Link to='/photobook'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Calendars" key="2">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src="https://images.zoomin.com/webresources/category_image_url/calendar.jpg" alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Calendars</h1>
                </div>
                <div>
                  <p>
                  Even your work desk needs some Tender, Love & Care right!? Add a cute little personalized picture calendar to brighten it up! Print your best moments on our designer themed calendars and a kick of nostalgia is guaranteed every time you glance at it. Pick your choice of size, themes & pictures and you’re all set!
                  </p>
                </div>
                <div >
                 <Link to='/calender'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Framed Prints" key="3">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src="https://images.zoomin.com/webresources/category_image_url/framed-prints.jpg" alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Framed Prints</h1>
                </div>
                <div>
                  <p>
                  Whether you want to create a single table stand Photo Frame, an artistic gallery wall or a creative display of Triptych Framed Prints – our range of 80+ Frames have all your wall decor needs covered. Try any of our gorgeous Framed Prints collections – Basic, Classic, Coloured or Premium – and we guarantee that you will be back for some more. The perfect gift for all ages and for all occasions, you can’t go wrong with our statement Framed Prints!
                  </p>
                </div>
                <div >
                 <Link to='/frameprint'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Storybooks" key="4">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src="https://images.zoomin.com/webresources/category_image_url/zooboo-home-category.jpg" alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Storybooks</h1>
                </div>
                <div>
                  <p>
                  Make reading fun for your child by personalizing their story books. With Zooboo storybooks you can add your child’s name on the cover page as well as throughout the story. Select their character (boy/girl) & make them the HERO of their book. Discover stories written by award-winning Indian authors & enjoy eye-catchy illustrations in each book. All books come with rounded edges for child safety.
                  </p>
                </div>
                <div >
                 <Link to='/storybook'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Photo Prints" key="5">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src="https://images.zoomin.com/webresources/category_image_url/photo-prints.jpg" alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Photo Prints</h1>
                </div>
                <div>
                  <p>
                  Our high quality Photo prints look great anywhere in your home and also make wonderful gifts. Customize them with your choice of size, colourful borders & stickers. Thick enough for a nice display yet still thin enough to fit into a beautiful picture frame. Or simply tape them on the wall using our wall-safe washi tapes – the choice is yours. Decorate as you please!
                  </p>
                </div>
                <div >
                 <Link to='/photoprint'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Display" key="6">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src="https://images.zoomin.com/webresources/category_image_url/display.jpg" alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Display</h1>
                </div>
                <div>
                  <p>
                  Whether you’re a creative head or not, you simply can’t miss out on our range of amazing display add-ons. Use our colourful, wall-safe washi tapes or our magnetic ropes to add a touch of style without leaving any pin marks. Go ahead and try your own DIY wall display with these handy decorations!
                  </p>
                </div>
                <div >
                 <Link to='/display'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
  </Tabs>
  </div>
);




