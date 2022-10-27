import React from 'react';

interface ProfilePictureProps {
    src: string;
    size: string;
}

const ProfilePicture = ({src,size}:ProfilePictureProps) => {
    return (
        <div className="profile">
            <img src={src} alt="" className="profile_picture" style={{ width: size,height:size, borderRadius:"50%"}} />
        </div>
    );
}

export {ProfilePicture};