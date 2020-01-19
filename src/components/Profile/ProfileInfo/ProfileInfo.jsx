import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div>
                <img className={classes.img}
                     src='https://sun9-23.userapi.com/c850724/v850724370/bf757/bZMY1ykk36g.jpg'/>
            </div>
            <div>
                <b>Anastazio. Artist, model, tattooer</b>
            </div>
        </div>
    )
}

export default ProfileInfo;