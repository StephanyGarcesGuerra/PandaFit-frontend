import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext, useRef, useState } from "react";

function MainPage() {
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;

  const emailInputref = useRef([]);
  const passwordInputRef = useRef([]);

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
    const res = await axios.post("https://localhost:4000/users/new", {
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
    const res = await axios.post("https://localhost:4000/users/new", {
      email: emailInputref.current.value,
      password: passwordInputRef.current.value,
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
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3> Ready to train? </h3>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Name" />

            <label htmlFor="email"> Email</label>
            <input
              ref={emailInputref}
              name="email"
              id="email"
              type="text"
              placeholder="Email"
            />

            <label htmlFor="email"> Password </label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
              placeholder="password"
            />
            <label htmlFor="sex"> Sex </label>
            <label>
              <input
                type="radio"
                name="react-tips"
                value="male"
                checked={false}
                className="form-check-input"
              />
              Male

              <input
                type="radio"
                name="react-tips"
                value="female"
                checked={false}
                className="form-check-input"
              />
              Female
            </label>

            <label htmlFor="height">Height</label>
            <input name="name" type="number" placeholder="Height (cm)" />

            <label htmlFor="height">Weight</label>
            <input name="weight" type="number" placeholder="Weight (lb)" />
            <label htmlFor="birthday">Birthday</label>
            <input name="birthday" type="date" placeholder="birthday" />
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
