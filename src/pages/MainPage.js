import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext, useRef, useState } from "react";

function MainPage() {
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;

  const emailInputref = useRef([]);
  const passwordInputRef = useRef([]);
  const heightInputRef = useRef([]);
  const weightInputRef = useRef ([]);
  const nameInputRef = useRef([]);
  const sexInputRef = useRef([]);
  const birthdayInputRef = useRef([]);

  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    // console.log(emailInputref.current.value);
    // console.log(passwordInputRef.current.value);

    if (emailInputref.current.value === "") {
      emailInputref.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    //* POST request to backend
    const res = await axios.post("http://localhost:4000/users/signin", {
      email: emailInputref.current.value,
      password: passwordInputRef.current.value,
    });
    console.log(res.data);
    setUser(res.data);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(emailInputref.current.value);
    // console.log(passwordInputRef.current.value);

    if (emailInputref.current.value === "") {
      emailInputref.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    //* POST request to backend
    const res = await axios.post("http://localhost:4000/users/new", {
      email: emailInputref.current.value,
      password: passwordInputRef.current.value,
      sex: sexInputRef.current.value,
      height: heightInputRef.current.value,
      weight: weightInputRef.current.value,
      birthday: birthdayInputRef.current.value,
    });
    console.log(res.data);
    setUser(res.data);
  };

  return (
    <main>

      {showSignUp ? (
        <div>
          <form
            onSubmit={handleSignIn}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3> Sign in </h3>

            <label htmlFor="email"> Email</label>
            <input
              ref={emailInputref}
              name="email"
              id="email"
              type="text"
              placeholder="email "
            />

            <label htmlFor="email"> Password </label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
              placeholder="password"
            />
            <br />
            <button type="submit"> Sign In </button>
          </form>

          <span>
            {" "}
            Don't have an account? {""}
            <button onClick={() => setShowSignUp(!showSignUp)}> Sign Up</button>
          </span>
        </div>
      ) : (
        <div>
          <form
            onSubmit={handleSignUp}
            style={{
              // display: "flex",
              // flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3> Ready to train? </h3>
            <label htmlFor="name">Name</label>
            <input name="name" ref={nameInputRef} type="text" placeholder="Name" />
            <br/>

            <label htmlFor="email"> Email</label>
            <input
              ref={emailInputref}
              name="email"
              id="email"
              type="text"
              placeholder="Email"
            />
            <br/>

            <label htmlFor="email"> Password </label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
              placeholder="password"
            />
            <br/>

            <label htmlFor="sex"> Sex </label>
         
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
                checked={true}
                ref={sexInputRef}
              />
              Male

              <input
                type="radio"
                name="sex"
                value="female"
                checked={true}
                ref={sexInputRef}              />
              Female
            </label>
             <br/>

            <label htmlFor="height">Height</label>
            <input name="height" ref={heightInputRef} type="number" placeholder="Height (cm)" />
            <br/>

            <label htmlFor="height">Weight</label>
            <input name="weight" ref={weightInputRef} type="number" placeholder="Weight (lb)" />
            <br/>

            <label htmlFor="birthday">Birthday</label>
            <input name="birthday"ref={birthdayInputRef}type="date" placeholder="birthday" />
            <br />

            <button type="submit"> Sign Up </button>
          </form>

          <br />
          <span>
            {" "}
            Already have an account? {""}
            <button onClick={() => setShowSignUp(!showSignUp)}> Sign in</button>
          </span>
        </div>
      )}
    </main>
  );
}

export default MainPage;
