// src/Components/ProfileCard.jsx
import React from "react";
import "../ProfileCard.css";

const ProfileCard = ({ nodeData }) => {
  return (
    <div className="profile-card">
      <img src={nodeData.photo} alt={nodeData.name} className="profile-photo" />
      <div className="profile-details">
        <h3 className="profile-name">{nodeData.name}</h3>
        <p className="profile-role">{nodeData.role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
