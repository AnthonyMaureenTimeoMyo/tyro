import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ls from '../utils/localStorage';

//Login Component should have two buttons:

//Create Account

//Login


console.log('local storage', localStorage);
const storage = ls(window.localStorage);


// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = (init) => {
    const [value, setValue] = useState(init);
    const onChange = (e) => {
      setValue(e.target.value);
    };
    // return the value with the onChange function instead of setValue function
    return [value, onChange];
  };


  const Login = (props) => {
    const [username, usernameOnChange] = useInput('');
    const [password, passwordOnChange] = useInput('');
    const [usernameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
  
    const loginUser = () => {
      // check if name is empty
      if (username === '') {
        setUserNameError('required');
      } else if (password === '') {
        setPasswordError('required');
      } else {
        const reqBody = {
          username,
          password,
        };
        //Confirm the route for login w/ team.
        fetch('/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/JSON',
          },
          body: JSON.stringify(reqBody),
        })
          .then((resp) => resp.json())
          // .then((data) => {
          //   //console.log(321321, data);
          // })
          .then((data) => {
            console.log('data from login is: ', data);
            props.authenticate(data.user);

          })
          .catch((err) => console.log('Login fetch /auth/login: ERROR: ', err));
      }
    };
  
    // useEffect to clear nameError when `name` is changed
    useEffect(() => {
      setUserNameError(null);
    }, [username]);
  
    useEffect(() => {
      setPasswordError(null);
    }, [password]);
  
    return (
        <div className="Login">

            <div className="createCharFields">
              <label htmlFor="username">Username: </label>
              <input
                name="username"
                value={username}
                onChange={usernameOnChange}
              />
              {usernameError ? (
                <span className="errorMsg">{usernameError}</span>
              ) : null}
            </div>
            <div className="createCharFields">
              <label htmlFor="password">Password: </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={passwordOnChange}
              />
              {passwordError ? (
                <span className="errorMsg">{passwordError}</span>
              ) : null}
            </div>
            <div className="signup">
              <Link to="/signup" className="link">
                <button type="button" className="btnMain">
                  Sign Up
                </button>
              </Link>
              <button type="button" className="btnMain" onClick={loginUser}>
                Login
              </button>
            </div>
        </div>
    );
  };



