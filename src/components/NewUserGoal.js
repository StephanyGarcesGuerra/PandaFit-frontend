function NewUserGoal (){

    return(
        <div>
            <form>
           <h5> I want to: </h5>
           <label>
            <input
                type="radio"
                name="react-tips"
                value="option1"
                checked={false}
                className="form-check-input"
            />
                 Maintain weight
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
                 Build muscle only
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
                 Build muscle and lose fat
                </label>
                

              
            </form>
        </div>
    )
}

export default NewUserGoal;