import React from 'react';



export const Profile = (props) => {
  let showProfile = () => {
  if(props.user) {
  return (
    <div>
    <h1>{props.user.name}</h1>
    <img src={props.user.avatar} alt="profile"/>
    </div>
  );
}else {
  return (
    <div>Hi</div>
    )}
  }
  return (
    showProfile()
  )}



export default Profile;
