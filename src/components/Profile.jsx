import React from "react";
import './../App.css';

const Profile = () => {
    return (
        <div className='content'>
            <img className='bg_image' src="https://cdn.pixabay.com/photo/2021/05/05/07/45/mountains-6230487_1280.jpg"></img>
            <div>
                <img src='' alt='avatar'></img>
                <div>
                    <p>name</p>
                    <p>description</p>  
                </div>
            </div> 
            <div>
                <p>My posts</p>
                <div>
                    <p>New post</p>
                    <button></button>
                </div>
            </div> 
            <div>
                <div>post1</div>
                <div>post2</div>
            </div>
      </div>
    )
}

export default Profile;