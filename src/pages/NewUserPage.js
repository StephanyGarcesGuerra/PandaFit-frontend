import NewUserGoal from "../components/NewUserGoal";

function NewUserPage ({user, setUser}){

    return(
        <div>
            
                <h3> Let's get to know your goals</h3>
        <NewUserGoal user={user} setUser={setUser} />
        
        
              
        
        </div>
    )
}

export default NewUserPage;