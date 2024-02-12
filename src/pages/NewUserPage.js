import NewUserGoal from "../components/NewUserGoal";
import WorkoutGoal from "../components/WorkoutGoal";

function NewUserPage (){

    return(
        <div>
            
                <h3> Let's get to know your goals</h3>
        <NewUserGoal />
        <WorkoutGoal />
              
        
        </div>
    )
}

export default NewUserPage;