import {useState, useEffect} from "react";

function ProfilePage (){
    const [user,setUser] = useState({});
    const [isUserUpdated, setIsUserUpdated] = useState(false);
    const getProfileData = async()

    return(
        <div> 
            <div className="profile-image">
                {user.avatarUrl ?(
                    <img src={`http://localhost:4000 ${user.avatarUrl}`} alt={`${user.email} avatar`} />

                ) : (
                    <img src="no-profile" alt="no profile image" />
                )
            }

            </div>
            <h1> Profile </h1>
        </div>

    )
}

export default ProfilePage;