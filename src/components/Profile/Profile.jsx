import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         user={props.user}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;