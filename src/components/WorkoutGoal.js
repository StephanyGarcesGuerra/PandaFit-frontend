function WorkoutGoal (){

    return(
        <div>
            
               <h1> Workout Goals  </h1>
                <br/>
                <h3> What set up is most compatible with your lifestyle?</h3>
                <label>
            <input
                type="radio"
                name="react-tips"
                value="option1"
                checked={false}
                className="form-check-input"
            />
                 Strength train 3x a week 
                 <br/>
                 Split: upper body, lower body, full body
                </label>
                <br/>

                <label>
            <input
                type="radio"
                name="react-tips"
                value="option1"
                checked={false}
                className="form-check-input"
            />
                 Strength train 4x a week 
                 <br/>
                 Split: upper body, lower body, upper body, lower body
                </label>
     
              
        
        </div>
    )
}

export default WorkoutGoal;