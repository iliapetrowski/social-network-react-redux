import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
  return (
    <div className={classes.item}>
        <img
             src='https://sun9-23.userapi.com/c850724/v850724370/bf757/bZMY1ykk36g.jpg'/>
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;