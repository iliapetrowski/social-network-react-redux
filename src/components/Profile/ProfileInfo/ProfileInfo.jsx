import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>

                <p>FULL NAME: <b>{props.profile.fullName}</b></p>
                <p> ВКонтакте: <b>{props.profile.contacts.vk}</b></p>
                <p>looking for a job: <b>{props.profile.lookingForAJobDescription}</b></p>

                <ProfileStatusWithHooks status={props.status}
                                             updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;