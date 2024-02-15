import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function ProfilePage() {
  const userCtx = useContext(UserContext);
  // const handleUpdate = async (e) => {
  //     e.preventDefault
  // }
  return (
    <div>
      <h3> Profile Page</h3>
      <Navbar />
      <>
        <button type="delete"> Delete Account? </button>
      </>

      <div>
      <br/>
      <br/>
      
        <h6> Name: {userCtx.user.name}</h6>
        <h6> Email: {userCtx.user.email}</h6>
        <h6> Height: {userCtx.user.height} cm</h6>
        <h6> Weight:{userCtx.user.weight} lb </h6>{" "} 
        <button> Update Weight?</button>
        <button> Update Information?</button>

      </div>

    <br/>
    <br/>
    </div>
  );
}

export default ProfilePage;
