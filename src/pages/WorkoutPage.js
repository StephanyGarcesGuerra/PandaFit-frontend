import Navbar from "../components/Navbar"
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";


// const Workouts = () => {
//     const [workouts, setWorkouts] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//           const res = await fetch(`http://localhost:4000/workouts/${:user_id}/user-workouts`);
//           const data = await res.json();
//           console.log(data);
//           setWorkouts(data);
//         };
//         console.log(workouts);
//         fetchData();
//       }, []);
// }
// axios.get(`http://localhost:4000/workouts/${:user_id}/user-workouts`).then((response => {
//     console.log(response)
// }).catch(error =>{
// console.log(error);
// });

function WorkoutPage (){
    const userCtx = useContext(UserContext)
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(`http://localhost:4000/workouts/${userCtx.user._id}/user-workouts`);
          const data = await res.json();
          console.log(data);
          setWorkouts(data);
        };
        console.log(workouts);
        fetchData();
      }, []);
   

    return(
        <div>
            
                <h3> Workouts Page</h3>
                <Navbar/>
                {workouts.map(workout=>(
                    <div> 
                        <h3>{workout.name} </h3>
                    </div>
                ))}
        </div>
    )
}

export default WorkoutPage;