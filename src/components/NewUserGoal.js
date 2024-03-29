import { useState } from "react";
import axios from "axios";

function NewUserGoal({user, setUser}) {
  const [goals, setGoals] = useState("");
  const [lifestyle, setLifestyle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(goals, lifestyle);
    setUser(user => {
        return {
            ...user,
            newUser: false
        }
    })
    //*Make a request to backend to update the newUser to false
    await axios.put(`http://localhost:4000/users/${user._id}/update`,{newUser:false})
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5> I want to: </h5>
        <label>
          <input
            type="radio"
            name="goals"
            value="maintain"
            defaultChecked={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="form-check-input"
          />
          Maintain weight
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="goals"
            value="build"
            defaultChecked={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="form-check-input"
          />
          Build muscle only
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="goals"
            value="buildLose"
            defaultChecked={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="form-check-input"
          />
          Build muscle and lose fat
        </label>
        <br/>
        <br/>
        <br/>

        <h3> What set up is most compatible with your lifestyle?</h3>
        <label>
          <input
            type="radio"
            name="lifestyle"
            value="three"
            defaultChecked={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
            className="form-check-input"
          />
          Strength train 3x a week
          <br />
          Split: upper body, lower body, full body
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="lifestyle"
            value="four"
            defaultChecked={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
            className="form-check-input"
          />
          Strength train 4x a week
          <br />
          Split: upper body, lower body, upper body, lower body
        </label>
        <br />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default NewUserGoal;
