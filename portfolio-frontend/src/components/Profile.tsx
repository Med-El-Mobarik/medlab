import React from "react";
import "../assets/styles/Project.scss";
import "../assets/styles/Profile.scss"
import { useTranslation } from 'react-i18next';

function Profile() {
    const { t} = useTranslation();
  return (
    <div className="projects-container" id="profile">
      <h1>Profile</h1>
      <div className="profile-container">
        <div className="profile-photo">
          <img src="/images/profile.PNG" alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>Bio</h2>
          <p>{t('bio')}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
