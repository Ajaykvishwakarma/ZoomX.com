import React from 'react';
import  { createElement, useState } from 'react';
import 'antd/dist/antd.css';
import style from './Comment.module.css'
import { Carousel } from 'antd';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';


const contentStyle = {
    height: '200px',
    color: '#fff',
    
    textAlign: 'center',
    
    width: '100%'
  };
export const Comments = () => 
{
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like" >
      <span onClick={like} style={{fontSize:"20px"}}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike} style={{fontSize:"20px"}}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to" style={{fontSize:"20px"}}>Reply to</span>,
  ];

return (
    <div className={style.comment_controller}>
        <div className={style.comment_header}><h1>Our Customer's Love !</h1></div>
  <Carousel autoplay style={{color:"white"}}>
    <div className={style.slider_container} style={contentStyle}>
        <Comment 
            actions={actions}
            author={<a style={{fontSize:"20px", fontWeight:"bold"}}>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"  />}
            content={
            <p >
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
            </p>
            }
            datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span style={{fontSize:"15px", color:"darkblue"}}>{moment().fromNow()}</span>
            </Tooltip>
            }
        />
    </div>
 
    <div className={style.slider_container} style={contentStyle}>
        <Comment 
            actions={actions}
            author={<a style={{fontSize:"20px", fontWeight:"bold"}}>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
            </p>
            }
            datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span style={{fontSize:"15px", color:"darkblue"}}>{moment().fromNow()}</span>
            </Tooltip>
            }
        />
    </div>
    <div className={style.slider_container} style={contentStyle}>
    
    
        <Comment 
            actions={actions}
            author={<a style={{fontSize:"20px", fontWeight:"bold"}}>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
            </p>
            }
            datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span style={{fontSize:"15px", color:"darkblue"}}>{moment().fromNow()}</span>
            </Tooltip>
            }
        />
    </div>
  
    
    <div className={style.slider_container} style={contentStyle}>
        <Comment 
            actions={actions}
            author={<a style={{fontSize:"20px", fontWeight:"bold"}}>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
            </p>
            }
            datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span style={{fontSize:"15px", color:"darkblue"}}>{moment().fromNow()}</span>
            </Tooltip>
            }
        />
    </div>
  </Carousel>
  </div>
    )
}