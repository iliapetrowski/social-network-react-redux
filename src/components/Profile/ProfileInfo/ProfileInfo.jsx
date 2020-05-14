import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import styles from "../../Users/Users.module.css";

const ProfileInfo = ({profile, status, updateStatus, user},...props) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small != null ? profile.photos.small : userPhoto}
                     className={styles.userPhoto}/>

                <p>FULL NAME: <b>{profile.fullName}</b></p>
                <p> ВКонтакте: <b>{profile.contacts.vk}</b></p>
                <p>looking for a job: <b>{profile.lookingForAJobDescription}</b></p>

                <ProfileStatusWithHooks status={status}
                                             updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;